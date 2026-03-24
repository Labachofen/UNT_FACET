import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === "production"
const repoName = "la-bachofen-main"

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/UNT_FACET/",
        permanent: true,
      },
    ]
  },
}

export default nextConfig
