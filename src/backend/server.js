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
  res.json({ greeting: 'Hello from Express' })
})

app.listen(PORT, error => {
  if (error) console.log(error)
  else console.log(`Listening on port: ${PORT}`)
})