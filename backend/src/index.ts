// Initialize express, connection to mongo (db), basically all backend api stuff

import express, { Request, Response } from "express";
import cors from "cors";
import 'dotenv/config';
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => console.log("Connected to database!")); // Connect to mongodb  

const app = express(); // Create a new server
app.use(express.json()); // Convert the body of any request we made to api server to json format
app.use(cors());

// check connection to endpoint
app.get("/health", async (req: Request, res: Response) => {
    res.send({ message: "Health Ok!" })
})

// /api/my/user
app.use("/api/my/user", myUserRoute);

// app.get("/test", async (req: Request, res: Response) => {
//     res.json({
//         message: "Hello! Your Server is running!"
//     }); 
// })

// navigate to localhost:7000/test will receive above message on browser

app.listen(7000, () => {
    console.log("Server stared on localhost:7000"); // if the server started successfully, we will see this message
})

// npm run dev -> Run the server