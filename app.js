import express from "express";
import router from "./routes/web.js";
import path from "path";
const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(process.cwd() , "public")));

app.set("views","./views");
app.set("view engine" , "ejs");

app.use("",router);


app.listen(port, ()=>{
    console.log(`http://localhost:${port}`);
})