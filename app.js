import express from "express";
import web from './routes/web.js';
import bodyParser from "body-parser";
var app = express();
const port = 3000;

// middlewares 
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())
app.use("/", web);


app.listen(3000, (req, res)=>{
    console.log("server started")
})