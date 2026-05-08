// Schlafnerds Google Places API — Reviews-Lookup für AggregateRating-Schemas.
// ISR-Cache: 24h. Fallback bei API-Fehler oder fehlender Env-Variable: last-known.

const PLACE_ID = "ChIJU_xNmvV9uEcRN3g7v_UiYr4";
const FALLBACK: GoogleReviews = { rating: 4.9, userRatingCount: 10 };

export interface GoogleReviews {
  rating: number;
  userRatingCount: number;
}

export async function getGoogleReviews(): Promise<GoogleReviews> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return FALLBACK;

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${PLACE_ID}?fields=rating,userRatingCount&key=${apiKey}`,
      { next: { revalidate: 86400 } },
    );
    if (!res.ok) return FALLBACK;
    const data = (await res.json()) as Partial<GoogleReviews>;
    return {
      rating: typeof data.rating === "number" ? data.rating : FALLBACK.rating,
      userRatingCount:
        typeof data.userRatingCount === "number"
          ? data.userRatingCount
          : FALLBACK.userRatingCount,
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
