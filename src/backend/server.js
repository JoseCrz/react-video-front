import express from 'express'

const app = express()

app.get('*', (req, res) => {
  res.json({ greeting: 'Hello from Express' })
})

app.listen(3000, error => {
  if (error) console.log(error)
  else console.log('Listening on port: 3000!')
})