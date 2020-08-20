const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

let jsonParser = bodyParser.json()
const port = 3000
app.use(cors(({origin: [
    'http://localhost:8080'
]})))
let chats = []
app.post('/chat', jsonParser, (req, res)=>{
    console.log(req.body)
    chats.push(req.body)
    res = res.status(200);
    res.send(chats)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })