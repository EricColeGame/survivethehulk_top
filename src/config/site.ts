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
  tagline: "Survival Guides, Hulk Abilities, Hiding Spots & Hulkbuster Tips",
  description: "Your ultimate Survive The Hulk wiki: survivor tactics, Hulk abilities, hiding spots, Hulkbuster combat, and progression guides for the asymmetric multiplayer survival game on Roblox.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://survivethehulk.top",
  supportEmail: "support@survivethehulk.top",
  gameUrl: "https://www.roblox.com/games/109166720609444/Survive-The-Hulk",
  heroVideoId: "dt74pK2NMRQ", // Survive The Hulk Roblox gameplay showcase
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
