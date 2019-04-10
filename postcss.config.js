const px2rem = require('postcss-px2rem')
const postcss = px2rem({
  remUnit: 75
})

module.exports = {
  plugins: {
    autoprefixer: {},
    postcss
  }
}
