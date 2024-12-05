const express = require('express')
const cors = require('cors')
const mysql = require('mysql2')

const app = express();
const port = process.env.port || 3001;

app.use(express.json())
app.use(cors())

app.listen( port, (err)=>{
    if(err){
        console.log(err)
    }
    console.log("App is running on "+ port)
})

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'rege@1518',
    database:'Tunion'
})
