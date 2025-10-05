export interface Protocol {
  name: string
  type: string
  difficulty: string
  simpleDescription: string
  benefits: string[]
  apy: string
  status: string
  tvl?: string
  funding?: string
  learnMoreUrl: string
  pixelIcon: string
  latestNews: string
}

export interface LiveUpdate {
  type: string
  title: string
  description: string
  date?: string
  deadline?: string
  impact?: string
  prize?: string
  reward?: string
  status?: string
  location?: string
  link?: string
  pixelIcon: string
}

export interface PlayerStats {
  level: number
  xp: number
  xpToNext: number
  completedLessons: number
  achievements: number
  streak: number
  protocolsExplored: number
}

export interface Achievement {
  name: string
  description: string
  icon: string
  rarity: string
  xp: number
}

export interface PremiumPackage {
  name: string
  price: string
  simpleDescription: string
  features: string[]
  popular: boolean
  pixelIcon: string
  level: string
}

export interface MarketData {
  totalTVL: string
  activeFunding: string
  liveHackathons: number
  newProtocols: number
}

// Updated Bitcoin Layer 2 Protocol Data - December 2024
export const protocols: Protocol[] = [
  {
    name: "Arch Network",
    type: "Bitcoin-Native Apps",
    difficulty: "Advanced",
    simpleDescription: "First bridgeless Bitcoin smart contracts platform. Build apps directly on Bitcoin without moving your coins anywhere else.",
    benefits: ["No asset bridging needed", "4,000+ TPS capacity", "Direct Bitcoin execution", "Full Bitcoin security"],
    apy: "5-12% yearly returns",
    status: "Mainnet Launch 2024",
    tvl: "$50M+ raised",
    funding: "$20M Series A (Pantera Capital)",
    learnMoreUrl: "https://www.arch.network",
    pixelIcon: "🏗️",
    latestNews: "45K new X followers in launch campaign, 10M+ backend requests since launch"
  },
  {
    name: "Bob Network",
    type: "Bitcoin-Ethereum Bridge",
    difficulty: "Intermediate",
    simpleDescription: "Connects Bitcoin to 11 major blockchains through LayerZero integration. One-click Bitcoin transfers across all networks.",
    benefits: ["Works with 15,000+ dApps", "LayerZero integration", "1-click BTC transfers", "Multi-chain access"],
    apy: "6-12% yearly returns",
    status: "Live & Mainnet",
    tvl: "$2.3B in wBTC.OFT transfers",
    learnMoreUrl: "https://docs.gobob.xyz",
    pixelIcon: "🌉",
    latestNews: "Major LayerZero partnership enables Bitcoin access to 15,000 dApps"
  },
  {
    name: "CoreDAO",
    type: "Bitcoin Staking",
    difficulty: "Intermediate",
    simpleDescription: "Earn rewards by staking Bitcoin and CORE tokens together. New dual staking tiers launched with higher requirements.",
    benefits: ["Dual staking rewards", "Bitcoin + CORE tokens", "Multiple tier options", "LstBTC liquid token"],
    apy: "8-15% yearly returns",
    status: "Live & Mainnet",
    tvl: "$570M TVL (32.4% market share)",
    learnMoreUrl: "https://docs.coredao.org",
    pixelIcon: "⛏️",
    latestNews: "Dual staking tier ratios updated, LstBTC token announced for liquid staking"
  },
  {
    name: "Stacks",
    type: "Bitcoin Layer-2",
    difficulty: "Intermediate",
    simpleDescription: "Major Nakamoto upgrade completed October 29, 2024. Now features fast blocks and Bitcoin finality for smart contracts.",
    benefits: ["Bitcoin finality", "Fast block times", "sBTC coming soon", "Mature ecosystem"],
    apy: "4-9% yearly returns",
    status: "Nakamoto Upgrade Live",
    tvl: "$200M+ ecosystem",
    learnMoreUrl: "https://docs.stacks.co",
    pixelIcon: "📚",
    latestNews: "Nakamoto upgrade completed, sBTC launch planned for late 2024"
  },
  {
    name: "Babylon Labs",
    type: "Bitcoin Staking Protocol",
    difficulty: "Advanced",
    simpleDescription: "Massive $70M funding from Paradigm. Over 51,906 BTC staked ($4.2B value). BABY token launched on major exchanges.",
    benefits: ["Paradigm backing", "$4.2B Bitcoin staked", "BABY token live", "Multiple finality providers"],
    apy: "6-14% yearly returns",
    status: "Mainnet with Token",
    tvl: "$4.2B+ (51,906 BTC staked)",
    funding: "$70M Series A (Paradigm)",
    learnMoreUrl: "https://babylonlabs.io/learn",
    pixelIcon: "🔒",
    latestNews: "BABY token launched on Binance, inflation reduction proposal active"
  },
  {
    name: "GOAT Network",
    type: "Bitcoin ZK Rollup",
    difficulty: "Advanced",
    simpleDescription: "First Bitcoin ZK Rollup with $GOATED token launched September 27, 2024. Multi-exchange listings with 3M%+ trading volume spike.",
    benefits: ["ZK Rollup tech", "Multi-exchange listings", "Sustainable BTC yield", "Decentralized sequencers"],
    apy: "8-25% yearly returns",
    status: "Token Launched",
    tvl: "$95M+ ecosystem",
    learnMoreUrl: "https://www.goat.network",
    pixelIcon: "🐐",
    latestNews: "$GOATED token launched on 7 major exchanges including Binance, initial volatility"
  },
  {
    name: "Hemi Protocol",
    type: "Modular Bitcoin-Ethereum Bridge",
    difficulty: "Advanced",
    simpleDescription: "Raised $30M with Binance Labs backing. Mainnet launching 2025 with hVM technology connecting Bitcoin and Ethereum.",
    benefits: ["Binance Labs backing", "$30M funding", "hVM technology", "Bitcoin-Ethereum bridge"],
    apy: "5-11% yearly returns",
    status: "Mainnet 2025",
    tvl: "$30M raised",
    funding: "$30M (Binance Labs, YZi Labs)",
    learnMoreUrl: "https://docs.hemi.xyz",
    pixelIcon: "🌉",
    latestNews: "Binance Wallet Booster Campaign with 200M HEMI tokens, mainnet prep ongoing"
  },
  {
    name: "Lombard",
    type: "Bitcoin Liquid Staking",
    difficulty: "Beginner",
    simpleDescription: "Major EigenLayer partnership announced. LBTC token now available for Bitcoin restaking across Ethereum ecosystem.",
    benefits: ["EigenLayer integration", "LBTC liquid token", "Cross-chain DeFi", "Institutional backing"],
    apy: "7-13% yearly returns",
    status: "Live with Integrations",
    tvl: "$1.7B+ in LBTC",
    learnMoreUrl: "https://www.lombard.finance",
    pixelIcon: "💧",
    latestNews: "EigenLayer partnership enables Bitcoin restaking, LBTC expanding to 12 blockchains"
  }
]

export const liveUpdates: LiveUpdate[] = [
  {
    type: "major_news",
    title: "Babylon Labs Raises $70M from Paradigm",
    description: "Bitcoin staking protocol secures major funding, now has $4.2B in staked Bitcoin",
    date: "May 30, 2024",
    impact: "Major",
    link: "https://babylonlabs.io/news",
    pixelIcon: "🚀"
  },
  {
    type: "protocol_update",
    title: "Stacks Nakamoto Upgrade Goes Live",
    description: "October 29, 2024: Fast blocks and Bitcoin finality now active, sBTC coming soon",
    date: "October 29, 2024",
    impact: "Major",
    link: "https://stacks.org/nakamoto-is-here",
    pixelIcon: "⚡"
  },
  {
    type: "integration",
    title: "BOB Network Integrates with LayerZero",
    description: "Enables 1-click Bitcoin transfers across 11 major blockchains and 15,000 dApps",
    date: "September 29, 2024",
    impact: "High",
    link: "https://www.coindesk.com/business/2024/09/30/bitcoin-defi-project-bob-and-layerzero-enable-native-bitcoin-transfers-across-11-major-blockchains",
    pixelIcon: "🔗"
  },
  {
    type: "token_launch",
    title: "GOAT Network $GOATED Token Live",
    description: "Listed on 7 major exchanges including Binance, Gate.io, OKX with high volatility",
    date: "September 27, 2024",
    impact: "High",
    link: "https://www.goat.network",
    pixelIcon: "🪙"
  },
  {
    type: "hackathon",
    title: "Ready Layer 2 Bitcoin Builder Competition",
    description: "$17,000 prize pool for DeFi, Bitcoin + AI, and General Pitch tracks on Stacks",
    deadline: "March 2024",
    prize: "$17,000 total prizes",
    status: "Completed",
    link: "https://readyl2.devpost.com",
    pixelIcon: "🏆"
  },
  {
    type: "conference",
    title: "Encode London Conference & Hackathon",
    description: "BitVM2 Bridge presentations and Bitcoin Layer 2 technical sessions",
    date: "October 25-27, 2024",
    location: "London, UK",
    link: "https://luma.com/Encode-London-24",
    pixelIcon: "🎪"
  },
  {
    type: "hackathon",
    title: "Bitcoin 2024 Virtual Hackathon",
    description: "Lightning Network, Layer 2, and Propaganda tracks with developer prizes",
    deadline: "Active",
    prize: "Multiple prize pools",
    status: "Live",
    link: "https://b25.devpost.com",
    pixelIcon: "🎮"
  },
  {
    type: "major_news",
    title: "Arch Network Mainnet Launch Success",
    description: "45K new followers, 10M+ backend requests since mainnet launch announcement",
    date: "October 2024",
    impact: "Major",
    link: "https://www.arch.network",
    pixelIcon: "🎯"
  }
]

export const playerStats: PlayerStats = {
  level: 5,
  xp: 320,
  xpToNext: 180,
  completedLessons: 15,
  achievements: 4,
  streak: 7,
  protocolsExplored: 8
}

export const achievements: Achievement[] = [
  {
    name: "Early Adopter",
    description: "Learned about Bitcoin Layer 2s before they became mainstream",
    icon: "🎮",
    rarity: "Common",
    xp: 10
  },
  {
    name: "Protocol Expert",
    description: "Mastered all 8 Bitcoin Layer 2 protocols and their mechanisms",
    icon: "🎯",
    rarity: "Uncommon",
    xp: 50
  },
  {
    name: "News Hunter",
    description: "Stayed current with all major Bitcoin DeFi developments",
    icon: "📰",
    rarity: "Rare",
    xp: 100
  },
  {
    name: "Community Leader",
    description: "Helped other users understand Bitcoin Layer 2 protocols",
    icon: "👑",
    rarity: "Epic",
    xp: 250
  }
]

export const premiumPackages: PremiumPackage[] = [
  {
    name: "Explorer",
    price: "$9/month",
    simpleDescription: "Stay updated with all the latest Bitcoin Layer 2 developments",
    features: ["Real-time protocol updates", "Hackathon alerts", "Basic market data", "Community access"],
    popular: false,
    pixelIcon: "🌱",
    level: "Level 1"
  },
  {
    name: "Builder",
    price: "$29/month",
    simpleDescription: "Best for developers building on Bitcoin Layer 2 protocols",
    features: ["Everything in Explorer", "Developer resources", "Technical documentation", "Priority support", "Protocol analytics"],
    popular: true,
    pixelIcon: "🔧",
    level: "Level 5"
  },
  {
    name: "Institution",
    price: "$99/month",
    simpleDescription: "For teams and organizations in the Bitcoin DeFi space",
    features: ["Everything in Builder", "Team collaboration", "Custom reporting", "Direct protocol contacts", "Investment insights"],
    popular: false,
    pixelIcon: "👑",
    level: "Level 10"
  }
]

export const marketData: MarketData = {
  totalTVL: "$7.5B+",
  activeFunding: "$187M",
  liveHackathons: 3,
  newProtocols: 2
}
