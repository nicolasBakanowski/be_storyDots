import express from 'express'
import bodyParser from 'body-parser'
import productRoute from './routes/productRoute.js'
import cors from 'cors'

const app = express()
const port = process.env.PORT || 30000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(
  cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  }),
)

app.use('/product', productRoute)

app.use((req, res, next) => {
  res.status(404).send('Ruta no encontrada')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Error interno del servidor')
})

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`)
})
