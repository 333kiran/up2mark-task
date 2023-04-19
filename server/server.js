import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';


import router from './routes/route.js';
import connection from './database/db.js';


const app = express();

dotenv.config();


app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',router);


const PORT = process.env.PORT || 8088;

const URL = process.env.DATABASE_URI;

connection(URL);

app.listen(PORT ,()=>{
    console.log(`server is runing on port ${PORT}`);
})