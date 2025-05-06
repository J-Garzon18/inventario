const {default: entregaModel} = require("../models/entregas.models")

exports.leerEntregas = async (req, res)=> {

    try{
        const entregas = await entregaModel.find({})
        return res.status(200).json(entregas)
    } catch (error){
            console.error(error)
            return res.status(500).sed(error)
    }
}

exports.crearEntrega= async ( req,res)=> {
    try{
        const entrega=new entregaModel(req.body)
        await entrega.save()
        return res.status(201).json(entrega)
    } catch(error){
        console.error(error)
        return res.status(500).send(error)
    }
}
