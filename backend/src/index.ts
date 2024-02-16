// Initialize express, connection to mongo (db), basically all backend api stuff

import express, { Request, Response } from "express";
import cors from "cors";
import 'dotenv/config';

const app = express(); // Create a new server
app.use(express.json()); // Convert the body of any request we made to api server to json format
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
    res.json({
        message: "Hello! Your Server is running!"
    }); 
})

// navigate to localhost:7000/test will receive above message on browser

app.listen(7000, () => {
    console.log("Server stared on localhost:7000"); // if the server started successfully, we will see this message
})

// npm run dev -> Run the server