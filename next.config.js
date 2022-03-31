/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  distDir: 'src',

} 

module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
}


module.exports = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
}