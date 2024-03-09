import express from 'express'
import cors from 'cors'
import softJobsRouter from './config/routes/softJobsRoutes.js'
import loginRouter from './config/routes/loginRoutes.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(cors())
app.use(softJobsRouter)
app.use(loginRouter)

app.listen(PORT, console.log(`¡Servidor encendido en el puerto! ${PORT}`))
