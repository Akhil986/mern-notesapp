import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectBD } from "./config/db.js";
import dotenv from "dotenv"
import cors from "cors"
dotenv.config();
const app = express();
const port = process.env.PORT||5001;


app.use(cors({
origin:"http://localhost:5173",
}));
app.use(express.json());

app.use("/api/notes",notesRoutes);




connectBD().then(()=>{
app.listen(process.env.PORT,()=>{
    console.log("server started on port:",port);
});
});

