/**
 * Site Configuration
 *
 * This file contains all the configuration settings for the Bloomfolio template.
 * Update these values to personalize your portfolio site.
 */

import { Flower2, CodeXml, Mail } from "@lucide/astro";
import { Code } from "astro:components";

/**
 * Social media links configuration
 */
export interface SocialLinks {
  github?: string;
  linkedin?: string;
  twitter?: string;
  bluesky?: string;
  instagram?: string;
  youTube?: string;
  codetips?: string;
  qiita?: string;
}

/**
 * Extra link configuration for FAB component
 */
export interface ExtraLink {
  /** URL or path for the link */
  link: string;
  /** Lucide icon component */
  icon: any;
  /** Tooltip label for the link */
  label: string;
}

/**
 * Extra links configuration
 */
export interface ExtraLinks {
  /** Enable or disable the FAB component */
  enable: boolean;
  /** Array of extra links to display */
  links: ExtraLink[];
}

/**
 * Sections visibility configuration
 * Control which sections appear on the index page
 */
export interface SectionsConfig {
  /** Show/hide About section */
  about: boolean;
  /** Show/hide Projects section */
  projects: boolean;
  /** Show/hide Blog section */
  blog: boolean;
  /** Show/hide Work Experience section */
  work: boolean;
  /** Show/hide Education section */
  education: boolean;
  /** Show/hide Hackathons section */
  hackathons: boolean;
  /** Show/hide Contact section */
  contact: boolean;
}

/**
 * Main site configuration interface
 */
export interface SiteConfig {
  /** Site/Portfolio name */
  name: string;
  /** Main title/headline */
  title: string;
  /** Site description for SEO and hero section */
  description: string;
  /** Path to avatar/logo image */
  avatar: string;
  /** Location/City */
  location: string;
  /** Contact email */
  email: string;
  /** Social media profile links */
  socialLinks: SocialLinks;
  /** Enable ThemeSelector (dropdown) instead of ThemeToggle (checkbox) */
  enableThemeSelector: boolean;
  /** Extra links configuration for FAB component */
  extraLinks: ExtraLinks;
  /** Sections visibility configuration (Hero is always visible) */
  sections: SectionsConfig;
}

/**
 * Site configuration object
 * Update these values to customize your portfolio
 */
export const siteConfig: SiteConfig = {
  name: "阿部健人",
  title: "Python / Javascript / Web エンジニア",
  description:
    "Pythonで身の回りの作業を自動化することが好き。大学では情報学を専攻し、研究室でVRとロボットの研究をする傍ら、卒論 Web タイマーを作って研究仲間を楽しませるなどしていた。",
  avatar: "../assets/bloomfolio.png",
  location: "🗾Japan",
  email: "abeckento@gmail.com",
  socialLinks: {
    github: "https://github.com/mqnowa",
    // linkedin: "https://linkedin.com/in/lauroguedes",
    // twitter: "https://twitter.com/leowg",
    // bluesky: "https://bsky.app/profile/lauroguedes.bsky.social",
    // instagram: "https://instagram.com/lauroguedes.dev",
    // youTube: "https://youtube.com/leowgweb",
    // codetips: "https://codetips.cloud/u/lauroguedes",
    qiita: "https://qiita.com/mqnowa",
  },
  enableThemeSelector: false,
  extraLinks: {
    enable: true,
    links: [
      {
        link: "https://github.com/lauroguedes/bloomfolio",
        icon: Flower2,
        label: "素敵なテンプレートのリポジトリ",
      },
      {
        link: "https://github.com/mqnowa/mqnowa.github.io",
        icon: CodeXml,
        label: "このポートフォリオのリポジトリ",
      },
      {
        link: "/blog/contact",
        icon: Mail,
        label: "連絡先・履歴書",
      },
    ],
  },
  sections: {
    about: true,
    projects: true,
    blog: true,
    work: true,
    education: true,
    hackathons: false,
    contact: true,
  },
};
