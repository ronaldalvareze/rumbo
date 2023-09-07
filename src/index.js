import express from 'express'
import {pool} from './db.js'
import despachadoresRoutes from './routes/despachadores.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use(indexRoutes)
app.use(despachadoresRoutes)

app.listen(3000)
console.log('servidor online' , 3000)


