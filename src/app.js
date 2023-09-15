import express from 'express'
import despachadoresRoutes from './routes/despachadores.routes.js'
import conductoresRoutes from './routes/conductores.routes.js'
import despachosRoutes from './routes/despachos.routes.js'
import usersRoutes from './routes/users.routes.js'
import indexRoutes from './routes/index.routes.js'


const app = express()
app.use(express.json())



app.use(indexRoutes)


app.use('/api' ,despachadoresRoutes)
app.use('/api' ,conductoresRoutes)
app.use('/api',despachosRoutes)
app.use('/api' ,usersRoutes)

app.use ((req,res,next) => {
    res.status(404).json({
        message: 'EndPoint no Encontrado'
    })
})


export default app