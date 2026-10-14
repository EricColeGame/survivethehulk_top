export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Survive The Hulk Wiki",
  shortName: "Survive The Hulk",
  logoText: "S",
  tagline: "Complete Guides, Codes, Recipes & Tier Lists",
  description: "Your ultimate guide to My Seafood Stand on Roblox! Explore active working codes, seafood recipes, best upgrades, profit strategies, and progression guides.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://myseafoodstand.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://myseafoodstand.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/109166720609444/Survive-The-Hulk",
  heroVideoId: "dt74pK2NMRQ", // Survive The Hulk Roblox gameplay showcase
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
