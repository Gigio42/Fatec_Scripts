import express from 'express'
import routes from './routes/index.js'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/API', routes)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})