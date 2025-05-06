const express = require("express")
const router = express.Router()

const entregasController = require("../controllers/entregas.controllers")

router.get("/",entregasController.leerEntregas)
router.post("/",entregasController.crearEntrega)

module.exports = router

