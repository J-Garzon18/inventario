const express = require("express")
const router = express.Router()

router.get("/",(req,res)=>{
    res.send("estamos en la ruta hola")
})

router.get("/Jorge",(req,res)=>{
    res.send("hola Jorge")
})

router.get("/JorgeA",(req,res)=>{
    res.send("Hola JorgeA")
})
module.exports = router
