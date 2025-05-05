const express= require("express")
const holaRoutes=require("./routes/holaMundo.routes")
const holaControllers = require("../contoller/holaMundo.controllers")
require("dotenv").config()
const PORT= process.env.PORT || 3006

router.get("/",holaControllers.holaMundo)


const app=express()


app.set("port",PORT)
app.use("/api/hola",holaRoutes)

app.get("/",(req,res)=>{
    res.send("Hola Mundo")
})

app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})

