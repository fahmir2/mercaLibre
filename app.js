const express = require("exoress");
const app = express();

app.get('/', (req, res)=>{
    res.send('Hola mundo')
})