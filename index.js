import express from 'express'
import bodyParser from 'body-parser'
import getEntries from './queries.js'

const app = express()
const port = process.env.PORT || 5001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/entries', getEntries)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})