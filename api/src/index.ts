require('dotenv').config()
import cors = require('cors')
import express from 'express'
import 'reflect-metadata'
import axios from 'axios'

const app = express()
const port = Number(process.env.PORT) || 3030
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/poaps/owned_by/:address', async (req, res) => {
  const walletAddress = req.params.address
  const result = await axios.get(
    `https://api.poap.tech/actions/scan/${walletAddress}`,
    {
      headers: {
        'X-API-Key': process.env.POAP_API_KEY,
      },
    }
  )
  console.log(result)
  res.end()
})
