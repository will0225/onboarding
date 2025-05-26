import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/onboarding",
  assetPrefix: "/onboarding",
  i18n: {
    locales: ["en", "es", "fr", "de", "ru"],
    defaultLocale: "en",
  },
  trailingSlash: true, 
  reactStrictMode: true,
  
};

export default nextConfig;
