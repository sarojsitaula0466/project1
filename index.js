const express = require('express')
const app = express()
const port = 8080

app.use( express.urlencoded()); 
app.use(express.static('./scripts'))
app.use(express.static('./styles'))

app.get('/', (req, res) => res.sendfile('./index.html'))

app.post('/submit-order', (req,res) => {console.log(req.body) ; res.json({success:true})});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))