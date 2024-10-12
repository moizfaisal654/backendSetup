require('dotenv').config()
const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login',(req,res)=>{
  res.send("Welocme to login page")
})
app.get('/signup',(req,res)=>{
    res.send("<h1>Welocme to signup page</h1>")
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})