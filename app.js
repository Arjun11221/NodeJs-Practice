import express from "express";
import router from "./routes/web.js";
import path from "path";
import connectDb from "./db/connectDb.js";
import session from "express-session";

const app = express();
const port = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
connectDb(DATABASE_URL);

app.use(session({
    secret : "Nothing is more Important than youself"
}));

app.use(express.static(path.join(process.cwd() , "public")));
app.use(express.urlencoded({extended:false}));

app.set("views","./views");
app.set("view engine" , "ejs");

app.use("",router); 

app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})