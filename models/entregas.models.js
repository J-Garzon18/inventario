import mongoose from "mongoose";

const Schema = mongoose.Schema

const entregaSchema = new Schema({
    nombre: {
        type:String,
        required: true,
        unique: true
    },
    link_repo: {
        type:String,
        required:false,
        default:""
    },
    estado: {
        type:Boolean,
        default: false
    },
    avance:{
        type:Number,
        default:0
    }
})

// exporta el modelo de mongoose
export default  mongoose.model("entregas",entregaSchema)
