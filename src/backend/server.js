import express from 'express'
import webpack from 'webpack'
import React from 'react'
import helmet from 'helmet'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { StaticRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import serverRoutes from './routes/serverRoutes'
import getManifest from './utils/getManifest'

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

} else {
  app.use((req, res, next) => {
    if(!req.manifest) {
      req.manifest = getManifest()
      next()
    }
  })
  app.use(express.static(`${__dirname}/public`))
  app.use(helmet())
  app.use(helmet.permittedCrossDomainPolicies())
  app.disable('x-powered-by')
}

const setResponse = (html, preloadedState, manifest) => {
  const mainStyles = manifest ? manifest['main.css'] : 'assets/app.css'
  const mainScript = manifest ? manifest['main.js'] : 'assets/app.js'
  const vendorBuild = manifest ? manifest['vendors.js'] : '/assets/vendor.js'

  return (`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="${mainStyles}" type="text/css">
      <title>React Video</title>
    </head>
    <body>
      <div id="app">
        ${html}
      </div>
      <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g,'\\u003c')}
        </script>
      <script type="text/javascript" src="${mainScript}"></script>
      <script type="text/javascript" src="${vendorBuild}"></script>
    </body>
    </html>
  `)
}

const renderApp = (req, res) => {
  const store = createStore(reducer, initialState)
  const preloadedState = store.getState()

  const html = renderToString(
    <Provider store={store} >
      <StaticRouter location={req.url} context={ { } }>
        <Layout>
          {renderRoutes(serverRoutes)}
        </Layout>
      </StaticRouter>
    </Provider>
  )

  res.send(setResponse(html, preloadedState, req.manifest))
}

app.get('*', renderApp)

app.listen(PORT, error => {
  if (error) console.log(error)
  else console.log(`Listening on port: ${PORT}`)
})