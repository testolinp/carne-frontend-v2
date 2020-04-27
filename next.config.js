const withSass = require('@zeit/next-sass')

const nextConfig = {
  distDir: 'build'
}

module.exports = withSass(nextConfig)
