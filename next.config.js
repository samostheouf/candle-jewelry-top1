const nextConfig = {
  // Termux (Android aarch64) : @next/swc-android-arm64 manquant
  // SWC WASM crash sur Node 26+Termux → basculer vers Babel + Terser
  experimental: {
    useWasmBinary: true,
  },
  swcMinify: false,
  compiler: {
    // Babel compilation — utilisé quand SWC est désactivé
    babel: async (content, options) => {
      const babel = require("@babel/core")
      const result = await babel.transformAsync(content, {
        ...options,
        presets: [
          ["@babel/preset-env", { targets: { node: "current" } }],
          "@babel/preset-react",
          "@babel/preset-typescript",
        ],
        sourceType: "module",
        retainLines: true,
        compact: false,
        babelrc: false,
        configFile: false,
      })
      return result.code
    },
  },
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'geolocation=(), microphone=()' },
        { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
        { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
        { key: 'Content-Security-Policy', value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://*.vercel.app;" },
      ],
    }]
  },
}

module.exports = nextConfig
