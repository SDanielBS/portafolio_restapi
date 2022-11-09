import { Router } from 'express'
const routes = Router()

routes.get('/de', (req, res) => {
  res.send("estamos en de index de chill")
})

export { routes }