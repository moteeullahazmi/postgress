import { Client } from "pg";
import  {urlData}  from "./config";

const client = new Client(urlData);


async function dataConnect(){
await client.connect()

try {

    // const insert1 = await client.query("INSERT into users(username,email,password) VALUES ('aaaaaazmi123', 'aaaaaaazmiazmi11@gmail.com', '11112234d586'; delete users;)")

    const insertQuery = ("INSERT into users(username,email,password) VALUES ($1, $2, $3)")
    const response = await client.query(insertQuery, ['aaaaaazmi123', 'aaaaaaazmiazmi11@gmail.com', '11112234d586; delete users;'])
    

    const result = await client.query("SELECT * FROM users")
console.log(result.rows)
await client.end();
} catch (error) {
    console.log(error)
}
}

dataConnect();
