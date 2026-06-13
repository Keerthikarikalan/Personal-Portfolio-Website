const express = require("express");
const app = express();

app.use(express.json());

const projects = [
    {
        title:"Portfolio Website",
        description:"Full Stack Project"
    }
];

app.get("/projects",(req,res)=>{
    res.json(projects);
});

app.listen(5000,()=>{
    console.log("Server running");
});
