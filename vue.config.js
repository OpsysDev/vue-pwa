module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/works-for-plants/'
    : '/',
  outputDir: 'docs'
}
