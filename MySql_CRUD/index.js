const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')
const app = express();
const port = 3000;
const router = require('./route/index')

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'rege@1518',
    database:'mysql_dummy'
})

db.connect((err)=>{
    if(err){
        console.log(err);
    }
    console.log("DB connected")
})

// Pass the database connection to routes
app.use((req, res, next) => {
    req.db = db;
    next();
});

//set the route index api
app.use('/',router)

app.listen(port,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("App is running on port:" + port)
})


