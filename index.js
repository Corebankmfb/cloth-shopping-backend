import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import path from "path";

import { errorHandler } from "./middleware/error-handler.js";
import connectDB from "./config/db.js";

import clothRoutes from "./routes/clothRoutes.js";

const app = express();

const __dirname = path.resolve();

dotenv.config({path: "./config/config.env"})

connectDB().then()


app.use(morgan("dev"))

app.use(express.json())

app.use(cors())

app.use("/public", express.static(path.join(__dirname, "public")))

app.use("/api/cloth", clothRoutes)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`server starting at PORT ${PORT}`)
})