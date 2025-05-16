import express from 'express';
import authRoutes  from "./Routers/Routers.js";//connecting to router folder
import { connectDB } from "./lib/db.js"; //connecting to database
import "dotenv/config.js";
import cookieParser from "cookie-parser";

const app = express();  //create a new express application

const PORT = process.env.PORT;
app.use(express.json()); //parse incoming requests with JSON payloads
app.use(cookieParser()); //parse incoming requests with cookie payloads

app.use("/api/auth", authRoutes);  //common path

app.listen(PORT, () => {
    console.log(`Server is running on port http:localhost:${PORT}/api/auth/`);
    connectDB(); //connect to database
  });

export default app;