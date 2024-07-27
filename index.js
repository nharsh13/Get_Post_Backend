const express=require("express");
const app=express();
const port =3000;

// For extracting data from url encoded data of post req.
app.use(express.urlencoded({extended: true}));
// app.use(express.json);

app.get("/register",(req,res)=>{
    let{user,password}=req.query;
    res.send(`Standard get response. Welcome ${user}`);
})

app.post("/register",(req,res)=>{
    let{user,password}=req.body;
    res.send(`Standard post response. Welcome ${user}`);
})

app.listen(port ,()=>{
    console.log(`Listening from port ${port}`);
})