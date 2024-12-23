import {Client} from "pg";
const pgClient = new Client("postgresql://neondb_owner:lDE72uVYQNBq@ep-empty-glade-a5fof37v.us-east-2.aws.neon.tech/neondb?sslmode=require");


import express  from "express"
const app = express();

async function pgClientConnect(){
    await pgClient.connect();
    const response = await pgClient.query("UPDATE users SET username= 'moteeullah.azmi' WHERE id='2' ");
    console.log(response.rows) // response.rows
}

pgClientConnect();

console.log("update")