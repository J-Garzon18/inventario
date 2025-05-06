// conexion a mongoo
const express= require("express")
const mongoose = require("mongoose")
require("dotenv").config()



const holaRoutes=require("./routes/holaMundo")
const app = express()
const PORT= process.env.PORT || 3006

app.set("port",PORT)
app.use("/api/hola",holaRoutes)


app.get("/",(req,res)=>{
    res.send("Hola Mundo")
})

mongoose.connect(process.env.MONGO_URI)
.then(console.log("Base de datos conectada"))
.catch(err=>console.error("no se pudo conectar a la Base de datos",err))


app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})

