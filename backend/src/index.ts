import './lib/moduleAlias'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = parseInt(process.env.ENV_PORT || '9000', 10);

app.use(express.json())

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`)
})