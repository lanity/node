import express from "express"

const app = express()

app.get("/", (req,res) => {
    res.send("HELLO WORLD")
})

app.listen(3000, ()=> {
    console.log("server 3000 portta calisti.");
})