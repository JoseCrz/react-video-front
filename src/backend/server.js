import express from 'express'
import webpack from 'webpack'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import serverRoutes from './routes/serverRoutes'

import Layout from '../frontend/components/Layout'
import reducer from '../frontend/reducers'
import initialState from '../frontend/initialState'

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

const setResponse = html => {
  return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="assets/app.css" type="text/css">
      <title>React Video</title>
    </head>
    <body>
      <div id="app">
        ${html}
      </div>
      <script  type="text/javascript" src="assets/app.js"></script>
    </body>
    </html>
  `)
}

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState)
  const html = renderToString(
    <Provider store={store} >
      <StaticRouter location={req.url} context={ { } }>
        <Layout>
          {renderRoutes(serverRoutes)}
        </Layout>
      </StaticRouter>
    </Provider>
  )

  res.send(setResponse(html))
}

app.get('*', renderApp)

app.listen(PORT, error => {
  if (error) console.log(error)
  else console.log(`Listening on port: ${PORT}`)
})