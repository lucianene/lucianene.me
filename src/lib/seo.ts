export const SITE_URL = "https://lucianene.me";

export const SITE_NAME = "Lucian Ene";

export const SITE_TITLE =
  "Lucian Ene — Engineering Lead & Staff Engineer";

export const SITE_DESCRIPTION =
  "Lucian Ene is an Engineering Lead and Staff Engineer based in Bucharest. Full-stack developer specializing in Laravel, PHP, React, Next.js, AWS, and AI tooling. Author of Fastcss.";

export const SITE_KEYWORDS = [
  "Lucian Ene",
  "Engineering Lead",
  "Staff Engineer",
  "Full Stack Developer",
  "Bucharest",
  "Romania",
  "Laravel",
  "PHP",
  "React",
  "Next.js",
  "AWS",
  "Fastcss",
  "Symfony",
  "TypeScript",
].join(", ");

export const OG_IMAGE = `${SITE_URL}/og.png`;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Lucian Ene",
  url: SITE_URL,
  image: `${SITE_URL}/lucian-ene.png`,
  jobTitle: "Engineering Lead & Staff Engineer",
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bucharest",
    addressCountry: "RO",
  },
  knowsAbout: [
    "Software Architecture",
    "Laravel",
    "PHP",
    "React",
    "Next.js",
    "TypeScript",
    "AWS",
    "Docker",
    "AI agents",
    "Symfony",
    "Vue.js",
  ],
  sameAs: [
    "https://www.linkedin.com/in/lucianene",
    "https://github.com/lucianene",
    "https://fastcss.org",
  ],
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  author: {
    "@type": "Person",
    name: "Lucian Ene",
  },
  inLanguage: "en",
};
