import express from 'express'
import config from '../config'

const { DEV, PORT } = config

const app = express()

if (DEV) {
  console.log('Working in development mode')
}

app.get('*', (req, res) => {
  res.json({ greeting: 'Hello from Express' })
})

app.listen(PORT, error => {
  if (error) console.log(error)
  else console.log(`Listening on port: ${PORT}`)
})