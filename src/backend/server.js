import express from 'express'
import webpack from 'webpack'

import config from '../config'

const { DEV, PORT } = config

const app = express()

if (DEV) {
  console.log('Working in development mode')

  const webpackConfig = require('../../webpack.config')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const webpackCompiler = webpack(webpackConfig)
  const webpackServerConfig = { port: PORT, hot: true }
  
  app.use(webpackDevMiddleware(webpackCompiler, webpackServerConfig))
  app.use(webpackHotMiddleware(webpackCompiler))

}

app.get('*', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="assets/app.css" type="text/css">
      <title>React Video</title>
    </head>
    <body>
      <div id="app"></div>
      <script  type="text/javascript" src="assets/app.js"></script>
    </body>
    </html>
  `)
})

app.listen(PORT, error => {
  if (error) console.log(error)
  else console.log(`Listening on port: ${PORT}`)
})