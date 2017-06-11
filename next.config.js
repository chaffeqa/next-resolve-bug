const path = require('path')
const srcDir = path.resolve(__dirname, 'src')

module.exports = {
  webpack: (config, { dev }) => {
    config.resolve.modules.push(srcDir)
    // Important: return the modified config
    return config
  }
}
