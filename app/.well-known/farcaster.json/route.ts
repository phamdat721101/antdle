function withValidProperties(properties: Record<string, undefined | string | string[]>) {
  return Object.fromEntries(
    Object.entries(properties).filter(([_, value]) => (Array.isArray(value) ? value.length > 0 : !!value))
  );
}

export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL || 'https://antdle.xyz';
  
  return Response.json({
    "accountAssociation": {
        "header": "eyJmaWQiOjEyOTg0MjQsInR5cGUiOiJhdXRoIiwia2V5IjoiMHg2NjBFYjRGOGE2MEE3NDEyMjc4YTUwNTcyZDk2NDY2MmI0RWM4OEFhIn0",
        "payload": "eyJkb21haW4iOiJhbnRkbGUueHl6In0",
        "signature": "hELZmX9gMXaFR2qjWEPCUoKlntdrzXQpiX+zPA9o+54jnS0pCRDS4+gT3mCDX9h7CVynZzpGlTPNklaf93b0qxw="
    },
    "baseBuilder": {
      "allowedAddresses": ["0xb906d42529c106b5a32d2ab9a64e6c6b01d9d26c"]
    },
    "miniapp": {
      "version": "1",
      "name": "ANTDLE - Learn Bitcoin DeFi",
      "homeUrl": URL,
      "iconUrl": `${URL}/antdle_btc.png`,
      "splashImageUrl": `${URL}/antdle_btc.png`,
      "splashBackgroundColor": "#1a1a1a",
      "webhookUrl": `${URL}/api/webhook`,
      "subtitle": "Bitcoin DeFi Learning Platform",
      "description": "Learn Bitcoin DeFi through simple lessons and fun challenges. No confusing tech speak - just clear explanations anyone can understand.",
      "screenshotUrls": [
        `${URL}/antdle_btc.png`,
        `${URL}/antdle_btc.png`,
        `${URL}/antdle_btc.png`
      ],
      "primaryCategory": "education",
      "tags": ["education", "finance", "bitcoin", "defi", "learning"],
      "heroImageUrl": `${URL}/antdle_btc.png`,
      "tagline": "Master Bitcoin DeFi",
      "ogTitle": "ANTDLE - Learn Bitcoin DeFi",
      "ogDescription": "Learn Bitcoin DeFi through simple lessons and fun challenges",
      "ogImageUrl": `${URL}/antdle_btc.png`,
      "noindex": false
    }
  });
}