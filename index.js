//const express = require('express');
// const http = require('http');
// const bodyParser = require('body-parser');
// const fs = require('fs/promises');
import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import eventEmitter from 'events';
import fs from 'fs/promises';
import mongoose from 'mongoose';
const app = express();
import { MongoClient } from 'mongodb';
const myEmmiter = new eventEmitter();
import csv from 'csv-parser';
//const client = new MongoClient('mongodb://root:RX1664@142.93.221.6:27017/demo');

//client.connect();

// mongoose.connect('mongodb://root:RX1664@142.93.221.6:27017/demo',{useNewUrlParse:true}, (err,db)=>{
//     if(err) {console.log(err)}else{

//         console.log(db);
//     }
// });

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send("Running")
})

app.get('/populate',(req,res)=>{

//    async function readData(){
//        myEmmiter.on('readJsonData',()=>{
//            const resData = await fetch('https://jsonplaceholder.typicode.com/comments');
//            const d = resData.json();
//            d.then(result=>{console.log(result)
//               res.send(result)
//            }).catch(err=>console.log(err))
//           }

//        });

async function readCsv(){
    const csvFiles = await fetch('http://console.mbwebportal.com/deepak/csvdata.csv')

}
readCsv();
    
 
})


app.listen(3030,()=>console.log("Running at 3030"))