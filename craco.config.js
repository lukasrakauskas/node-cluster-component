module.exports = {
  devServer: {
    proxy: {
      '/api': { target: 'http://localhost:8080', pathRewrite: { '^/api': '' } }
    }
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')]
    }
  }
}
