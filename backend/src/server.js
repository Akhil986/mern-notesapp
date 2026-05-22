import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectBD } from "./config/db.js";
import dotenv from "dotenv"
import cors from "cors"
import path from "path"
dotenv.config();
const app = express();
const port = process.env.PORT||5001;
const __dirname =path.resolve()

if(process.env.NODE_ENV !== "production"){
app.use(cors({
origin:"http://localhost:5173",
}));
}
app.use(express.json());

app.use("/api/notes",notesRoutes);

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"));
})
}


connectBD().then(()=>{
app.listen(process.env.PORT,()=>{
    console.log("server started on port:",port);
});
});

