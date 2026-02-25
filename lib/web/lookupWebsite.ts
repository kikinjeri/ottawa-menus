/*export interface WebsiteLookupResult {
  website: string | null;
  phone: string | null;
}

export async function lookupWebsiteFree(
  name: string,
  address?: string
): Promise<WebsiteLookupResult> {
  const query = [name, address].filter(Boolean).join(" ");
  const url = `https://duckduckgo.com/html/?q=${encodeURIComponent(query)}`;

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    const html = await res.text();

    const websiteMatch = html.match(/https:\/\/[^\s"']+/g);
    const website =
      websiteMatch?.find((w) => isLikelyWebsite(w)) ?? null;

    const phoneMatch = html.match(
      /(\+1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/
    );
    const phone = phoneMatch ? phoneMatch[0] : null;

    return { website, phone };
  } catch {
    return { website: null, phone: null };
  }
}

function isLikelyWebsite(url: string): boolean {
  if (!url.startsWith("https://")) return false;
  if (url.includes("duckduckgo.com")) return false;
  if (url.includes("google.com")) return false;
  if (url.includes("yelp.com")) return false;
  if (url.includes("tripadvisor")) return false;
  if (url.includes("facebook.com")) return false;
  return true;
}*/
