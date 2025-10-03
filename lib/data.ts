export interface Protocol {
  name: string
  type: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  simpleDescription: string
  benefits: string[]
  apy: string
  status: string
  learnMoreUrl: string
  pixelIcon: string
}

export interface LiveUpdate {
  type: "contest" | "reward" | "news" | "event"
  title: string
  description: string
  deadline?: string
  date?: string
  prize?: string
  reward?: string
  status?: string
  link?: string
  platform?: string
  impact?: string
  location?: string
  pixelIcon: string
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

export interface Achievement {
  name: string
  description: string
  icon: string
  rarity: string
  xp: number
}

export interface PlayerStats {
  level: number
  xp: number
  xpToNext: number
  completedLessons: number
  achievements: number
}

export const protocols: Protocol[] = [
  {
    name: "Arch Network",
    type: "Bitcoin Apps",
    difficulty: "Advanced",
    simpleDescription:
      "Lets you build apps directly on Bitcoin without moving your coins. Like having a smartphone that runs apps while keeping your money safe in the same place.",
    benefits: ["Keep your Bitcoin secure", "No need to transfer coins", "Fast transactions", "Build anything you want"],
    apy: "5-12% yearly returns",
    status: "Live & Working",
    learnMoreUrl: "https://www.arch.network",
    pixelIcon: "🏗️",
  },
  {
    name: "Bob Network",
    type: "Bitcoin Bridge",
    difficulty: "Intermediate",
    simpleDescription:
      "Connects Bitcoin to other crypto networks safely. Think of it like a secure bridge that lets your Bitcoin work with other coins and apps.",
    benefits: ["Works with Ethereum apps", "Extra security", "Easy to use tools", "Bitcoin stays safe"],
    apy: "6-12% yearly returns",
    status: "Live & Working",
    learnMoreUrl: "https://docs.gobob.xyz",
    pixelIcon: "🌉",
  },
  {
    name: "CoreDao",
    type: "Bitcoin Staking",
    difficulty: "Intermediate",
    simpleDescription:
      "Earn money by helping secure the network with your Bitcoin. Like earning interest at a bank, but you always control your coins.",
    benefits: ["Earn passive income", "Keep control of coins", "Help secure networks", "Get CORE rewards"],
    apy: "8-15% yearly returns",
    status: "Live & Working",
    learnMoreUrl: "https://docs.coredao.org",
    pixelIcon: "⛏️",
  },
  {
    name: "Stacks",
    type: "Bitcoin Smart Contracts",
    difficulty: "Intermediate",
    simpleDescription:
      "Adds smart contract abilities to Bitcoin. Like upgrading your regular bank account to have automatic payments and programmable money.",
    benefits: ["Smart contracts on Bitcoin", "Proven track record", "Bitcoin-level security", "Stack STX for rewards"],
    apy: "4-9% yearly returns",
    status: "Live & Working",
    learnMoreUrl: "https://docs.stacks.co",
    pixelIcon: "📚",
  },
  {
    name: "Babylon Labs",
    type: "Bitcoin Security Service",
    difficulty: "Advanced",
    simpleDescription:
      "Use your Bitcoin to help secure other networks and earn rewards. Like being a security guard for crypto networks and getting paid for it.",
    benefits: ["Earn from multiple networks", "Keep Bitcoin safe", "Help secure crypto", "Advanced protection"],
    apy: "6-14% yearly returns",
    status: "Live & Working",
    learnMoreUrl: "https://babylonlabs.io/learn",
    pixelIcon: "🔒",
  },
  {
    name: "GOAT Network",
    type: "Bitcoin Yield Generator",
    difficulty: "Advanced",
    simpleDescription:
      "The first system that generates sustainable income from Bitcoin itself. Like a Bitcoin savings account that actually grows your money.",
    benefits: ["High yield potential", "Sustainable returns", "Cutting-edge tech", "Native Bitcoin income"],
    apy: "8-25% yearly returns",
    status: "Testing Phase",
    learnMoreUrl: "https://www.goat.network",
    pixelIcon: "🐐",
  },
  {
    name: "Hemi Protocol",
    type: "Bitcoin-Ethereum Bridge",
    difficulty: "Advanced",
    simpleDescription:
      "Connects Bitcoin and Ethereum networks seamlessly. Like having one wallet that works perfectly with both Bitcoin and Ethereum at the same time.",
    benefits: ["Best of both networks", "Seamless connection", "Advanced security", "Future-ready tech"],
    apy: "5-11% yearly returns",
    status: "Testing Phase",
    learnMoreUrl: "https://docs.hemi.xyz",
    pixelIcon: "🌉",
  },
  {
    name: "Lombard",
    type: "Bitcoin Savings",
    difficulty: "Beginner",
    simpleDescription:
      "Stake your Bitcoin and get LBTC tokens you can use elsewhere while still earning. Like depositing money and getting a debit card to spend it while earning interest.",
    benefits: ["Easy to understand", "Get liquid tokens", "Use Bitcoin everywhere", "Safe and secure"],
    apy: "7-13% yearly returns",
    status: "Live & Working",
    learnMoreUrl: "https://www.lombard.finance",
    pixelIcon: "💧",
  },
]

export const liveUpdates: LiveUpdate[] = [
  {
    type: "contest",
    title: "Bitcoin Building Contest 2025",
    description: "Global contest with $20,000+ in Bitcoin prizes for building cool Bitcoin apps",
    deadline: "May 20, 2025",
    prize: "$12,500 in Bitcoin",
    status: "Join Now",
    link: "https://b25.devpost.com",
    pixelIcon: "🎯",
  },
  {
    type: "contest",
    title: "Denver Bitcoin Meetup 2025",
    description: "Bitcoin meetup focused on DeFi and Layer 2 solutions with prizes",
    deadline: "February 28, 2025",
    prize: "$10,000 in Bitcoin",
    status: "Join Now",
    link: "https://btc-denver-2025.devpost.com",
    pixelIcon: "🎯",
  },
  {
    type: "reward",
    title: "Find Bugs, Earn Money",
    description: "Help find security issues in Babylon Labs and earn up to $50,000",
    reward: "Up to $50,000",
    platform: "Bug Bounty Program",
    status: "Always Open",
    pixelIcon: "🎁",
  },
  {
    type: "news",
    title: "Major Exchange Adds Bitcoin Staking",
    description: "Kraken exchange now lets you stake Bitcoin directly without complicated steps",
    date: "June 19, 2025",
    impact: "Big News",
    pixelIcon: "📰",
  },
  {
    type: "event",
    title: "Bitcoin Conference Las Vegas",
    description: "Big Bitcoin DeFi conference and networking event",
    date: "May 29, 2025",
    location: "Las Vegas, Nevada",
    pixelIcon: "🎪",
  },
]

export const premiumPackages: PremiumPackage[] = [
  {
    name: "Beginner",
    price: "$9 per month",
    simpleDescription: "Perfect for people just starting with Bitcoin DeFi",
    features: ["Easy protocol guides", "Weekly news updates", "Community chat access", "Track your progress"],
    popular: false,
    pixelIcon: "🌱",
    level: "Level 1",
  },
  {
    name: "Advanced",
    price: "$29 per month",
    simpleDescription: "Best value! Everything you need to become a Bitcoin DeFi expert",
    features: [
      "Everything in Beginner",
      "AI assistant help",
      "1-on-1 expert sessions",
      "Advanced tools",
      "Priority help",
      "Digital certificates",
    ],
    popular: true,
    pixelIcon: "🔧",
    level: "Level 5",
  },
  {
    name: "Business",
    price: "$99 per month",
    simpleDescription: "For teams and companies wanting to learn Bitcoin DeFi together",
    features: [
      "Everything in Advanced",
      "Team collaboration",
      "Custom integrations",
      "Dedicated manager",
      "Business analytics",
      "Your own branded version",
    ],
    popular: false,
    pixelIcon: "👑",
    level: "Level 10",
  },
]

export const achievements: Achievement[] = [
  {
    name: "First Steps",
    description: "Completed your first lesson about Bitcoin protocols",
    icon: "🎮",
    rarity: "Common",
    xp: 10,
  },
  {
    name: "Explorer",
    description: "Learned about 5 different Bitcoin protocols",
    icon: "🗺️",
    rarity: "Uncommon",
    xp: 50,
  },
  {
    name: "Expert",
    description: "Finished all advanced lessons and became an expert",
    icon: "🏆",
    rarity: "Rare",
    xp: 100,
  },
  {
    name: "Helper",
    description: "Helped 10 other people in the community forums",
    icon: "👑",
    rarity: "Epic",
    xp: 250,
  },
]

export const playerStats: PlayerStats = {
  level: 3,
  xp: 150,
  xpToNext: 100,
  completedLessons: 8,
  achievements: 2,
}
