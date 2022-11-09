import express from 'express'
import { skillRouter } from './skills.js'
import { routes } from './index.js'

const app = express()

app.use(express.json())

app.use(routes)
app.use('/api', skillRouter)


app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found"
  })
})

export { app }