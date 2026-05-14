// Schlafnerds Google Places API — Reviews-Lookup für AggregateRating-Schemas + UI.
// ISR-Cache: 24h. Fallback bei API-Fehler oder fehlender Env-Variable: last-known.

const PLACE_ID = "ChIJU_xNmvV9uEcRN3g7v_UiYr4";

const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    authorName: "Susanne Stockhorst",
    rating: 5,
    text: "Toller Laden. Man hat sich Zeit genommen und ich hatte nie das Gefühl, dass mir was aufgeschwatzt werden soll. Einfach gute Beratung.",
  },
  {
    authorName: "Oliver Erlemann",
    rating: 5,
    text: "Unschlagbares Preis/Leistungsverhältnis, eine wirklich tolle Beratung, bei der sich mal wirklich Zeit genommen wird und auf die persönlichen Bedürfnisse eingegangen wird.",
  },
  {
    authorName: "Gudrun Welling",
    rating: 5,
    text: "Tolle Beratung – wir haben uns einen neuen Topper und Kissen gekauft. Sehr kompetente Beratung und toller Service.",
  },
];

const FALLBACK: GoogleReviews = {
  rating: 4.9,
  userRatingCount: 10,
  reviews: FALLBACK_REVIEWS,
};

export interface GoogleReview {
  authorName: string;
  rating: number;
  text: string;
}

export interface GoogleReviews {
  rating: number;
  userRatingCount: number;
  reviews: GoogleReview[];
}

// Raw response types (subset of Places API New)
interface PlacesApiResponse {
  rating?: number;
  userRatingCount?: number;
  reviews?: {
    rating?: number;
    text?: { text?: string };
    originalText?: { text?: string };
    authorAttribution?: { displayName?: string };
  }[];
}

export async function getGoogleReviews(): Promise<GoogleReviews> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return FALLBACK;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=rating,userRatingCount,reviews&languageCode=de&key=${apiKey}`,
      { next: { revalidate: 86400 } },
    );
    if (!res.ok) return FALLBACK;
    const data = (await res.json()) as PlacesApiResponse;

    const rawReviews = data.reviews ?? [];
    const reviews: GoogleReview[] = rawReviews
      .map((r) => ({
        authorName: r.authorAttribution?.displayName ?? "",
        rating: typeof r.rating === "number" ? r.rating : 0,
        text: r.text?.text ?? r.originalText?.text ?? "",
      }))
      .filter((r) => r.authorName && r.text && r.rating >= 4);

    // Bevorzugt 5-Sterne-Reviews, sonst auch 4+ als Fallback
    const fiveStar = reviews.filter((r) => r.rating === 5);
    const selectedReviews = (fiveStar.length >= 3 ? fiveStar : reviews).slice(
      0,
      3,
    );

    return {
      rating: typeof data.rating === "number" ? data.rating : FALLBACK.rating,
      userRatingCount:
        typeof data.userRatingCount === "number"
          ? data.userRatingCount
          : FALLBACK.userRatingCount,
      reviews:
        selectedReviews.length > 0 ? selectedReviews : FALLBACK_REVIEWS,
    };
  } catch {
    return FALLBACK;
  }
}

export function aggregateRatingSchema(reviews: GoogleReviews) {
  return {
    "@type": "AggregateRating" as const,
    ratingValue: reviews.rating.toString(),
    reviewCount: reviews.userRatingCount.toString(),
    bestRating: "5",
    worstRating: "1",
  };
}

// Convenience: live AggregateRating als Schema-Property — direkt verwendbar in Service/Product/etc.
export async function getAggregateRating() {
  return aggregateRatingSchema(await getGoogleReviews());
}
