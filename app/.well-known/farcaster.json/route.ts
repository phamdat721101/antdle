function withValidProperties(properties: Record<string, undefined | string | string[]>) {
  return Object.fromEntries(
    Object.entries(properties).filter(([_, value]) => (Array.isArray(value) ? value.length > 0 : !!value))
  );
}

export async function GET() {
  const URL = process.env.NEXT_PUBLIC_URL || 'https://antdle.xyz';
  
  return Response.json({
    "accountAssociation": {
      "header": "eyJmaWQiOjkxNTIsInR5cGUiOiJjdXN0b2R5Iiwia2V5IjoiMHgwMmVmNzkwRGQ3OTkzQTM1ZkQ4NDdDMDUzRURkQUU5NDBEMDU1NTk2In0",
      "payload": "eyJkb21haW4iOiJhcHAuZXhhbXBsZS5jb20ifQ",
      "signature": "MHgxMGQwZGU4ZGYwZDUwZTdmMGIxN2YxMTU2NDI1MjRmZTY0MTUyZGU4ZGU1MWU0MThiYjU4ZjVmZmQxYjRjNDBiNGVlZTRhNDcwNmVmNjhlMzQ0ZGQ5MDBkYmQyMmNlMmVlZGY5ZGQ0N2JlNWRmNzMwYzUxNjE4OWVjZDJjY2Y0MDFj"
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
      "ogDescription": "Learn Bitcoin DeFi through simple lessons and fun challenges. Built as a Base Mini-App for seamless onchain experiences.",
      "ogImageUrl": `${URL}/antdle_btc.png`,
      "noindex": false
    }
  });
}