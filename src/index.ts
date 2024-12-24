import {Client} from "pg";

import { urlData } from "./config";
import express  from "express";
const app = express();


const pgClient = new Client(urlData);




async function pgClientConnect(){
    await pgClient.connect();
    const response = await pgClient.query("UPDATE users SET username= 'moteeullah.azmi' WHERE id='2' ");
    console.log(response.rows) // response.rows
}

pgClientConnect();
