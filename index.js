// conexion a mongoo
const express= require("express")
const mongoose = require("mongoose")
require("dotenv").config()



const holaRoutes=require("./routes/entregas.routes")
const app = express()
const PORT= process.env.PORT || 3006
const entregasRoutes = require("./routes/entregas.routes")

//Montrar Base de dato
app.set("port",PORT)
app.use(express.json())
app.use("/api/hola",holaRoutes) //En la de entregas no es necesario tenerla pero funcionan las dos
app.use("/api/entregas",entregasRoutes)

app.get("/",(req,res)=>{
    res.send("Hola Mundo")
})


// BASE DE DATOS CONEXION
mongoose.connect(process.env.MONGO_URI)
.then(console.log("Base de datos conectada"))
.catch(err=>console.error("no se pudo conectar a la Base de datos",err))


app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${PORT}`)
})

