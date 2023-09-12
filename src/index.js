import express from 'express'
import {pool} from './db.js'
import indexRoutes from './routes/index.routes.js'
import despachadoresRoutes from './routes/despachadores.routes.js'
import conductoresRoutes from './routes/conductores.routes.js'
import despachosRoutes from './routes/despachos.routes.js'
import usersRoutes from './routes/users.routes.js'


const app = express()
app.use(express.json())



app.use(indexRoutes)
app.use('/api' ,despachadoresRoutes)
app.use('/api' ,conductoresRoutes)
app.use(despachosRoutes)
app.use('/api' ,usersRoutes)



app.listen(3000)
console.log('servidor online' , 3000)


