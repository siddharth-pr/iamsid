export interface SiteConfig {
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lang: string;
  base: string;
  website: string;
  social: Record<string, string>;
  googleAnalyticsId?: string;
  homeHeroDescription: string;
  blogDescription: string;

  // Homepage post counts
  featuredPostsCount: number;
  latestPostsCount: number;

  // CTA (Call-to-Action) block for blog posts
  cta: {
    enabled: boolean;
    filePath: string; // Path to markdown file with CTA content
  };

  // Homepage Hero block
  hero: {
    enabled: boolean;
    filePath: string;
  };

  // Giscus comments configuration
  comments: {
    enabled: boolean;
    repo: string; // e.g., 'username/repo'
    repoId: string;
    category: string;
    categoryId: string;
    mapping: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
    reactionsEnabled: boolean;
    emitMetadata: boolean;
    inputPosition: 'top' | 'bottom';
    theme: string; // e.g., 'preferred_color_scheme', 'light', 'dark'
    lang: string;
  };
}

export const SITE: SiteConfig = {
  author: 'Siddharth',
  desc: 'Personal blog of Siddharth: travel notes, life updates, and technical musings.',
  title: 'iamsid',
  ogImage: 'og.png',
  lang: 'en-US',
  base: '/',
  website: 'https://www.iamsid.net',
  social: {
    linkedin: 'https://www.linkedin.com/in/siddharthpr/',
  },
  googleAnalyticsId: '', // Example: 'G-XXXXXXXXXX'
  homeHeroDescription:
    'Writing about travel, life, and things I learn along the way as an engineer.',
  blogDescription: 'Stories, notes, and reflections from my journey.',

  // Homepage post counts
  featuredPostsCount: 3,
  latestPostsCount: 3,

  // CTA (Call-to-Action) block for blog posts
  cta: {
    enabled: false,
    filePath: 'site/cta.md',
  },

  hero: {
    enabled: true,
    filePath: 'site/hero.md',
  },

  // Giscus comments configuration
  // Get your configuration from https://giscus.app
  comments: {
    enabled: false, // Set to true after filling in the IDs below
    repo: 'iamsid/iamsid-site', // Your GitHub repository
    repoId: '', // Get from https://giscus.app - enter repo above and copy the value
    category: 'General', // GitHub Discussions category name
    categoryId: '', // Get from https://giscus.app - select category and copy the value
    mapping: 'pathname',
    reactionsEnabled: true,
    emitMetadata: false,
    inputPosition: 'bottom',
    theme: 'preferred_color_scheme', // Automatically matches your site theme
    lang: 'en',
  },
};
