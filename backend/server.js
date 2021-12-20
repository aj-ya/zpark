const mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.json());

const db=mysql.createConnection({
    host: "database-2.csjknnw5cwlt.ap-south-1.rds.amazonaws.com",
    port: "3306",
    user: "admin",
    password: "adnan27jakati",
    database: "grepit",
});

db.connect((err) => {
    if(err){
        console.log(err.message);
        return;
    }
    console.log("database connected");
});

app.get('/get', (req,res) => {

    let sql= 'SELECT * FROM adnan';
    let query = db.query(sql,(err,results) => {
        if(err) throw err;

        var length=results.length;
        
        // console.log(length);
        //console.log(results);
        res.send(results);
    });
});

app.post('/insert',(req,res) => {
    var username = req.body.username;
    var rfid = req.body.rfid;
    var car = req.body.car;
    var charge = req.body.charge;
    var bal = req.body.bal;

    const sql='INSERT INTO adnan VALUES (?,?,?,?,?)';
    try{
        db.query(sql,[rfid,username,car,charge,bal],(err,results) =>{
            if(err) throw err;
            console.log(results);
        });
    }
    catch{
        alert('check you data');
    }
    
});

app.listen(3001,() => {
    console.log("port 3001");
})