import express from 'express';
import data from './data';

const app = express();

app.get("/api/products",(req,res)=>{
    res.send(data.products);
});

app.listen(3333,()=>{
    console.log("Porta aberta na porta 3333");
});