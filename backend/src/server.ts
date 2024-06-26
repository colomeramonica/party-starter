import './lib/moduleAlias'
import express from 'express'
import dotenv from 'dotenv'
import router from './router'
dotenv.config()

const app = express()
const port = parseInt(process.env.ENV_PORT || '9001', 10);

app.use(express.json())
app.use('/', router)

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`)
})