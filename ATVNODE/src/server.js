import express from 'express'
import routes from './routes/index.js'

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', routes)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})