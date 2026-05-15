// Zentrale Calendly-URL mit UTM-Tracking für das n8n-Lead-Reporting.
// Jede Page/Component setzt einen eigenen `source`-String, der als utm_source
// im Calendly-Webhook landet und im Performance-Sheet aggregiert wird.

const BASE = "https://calendly.com/schlafnerds/45min?back=1";

export function calendlyUrl(source: string): string {
  return `${BASE}&utm_source=${encodeURIComponent(source)}`;
}
