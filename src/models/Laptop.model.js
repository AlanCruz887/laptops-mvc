const {model,Schema} = require ('mongoose')


const laptopSchema = new Schema({
    noSerie:{
        require:true,
        unique:true,
        type:String
    },
    marca:String,
    modelo:String,
    procesador:String,
    ram:Number,
    almacenamiento:Number,
    pulgadas:Number,
    tarjetaGrafica:String
},
{
    versionKey:false,
    timestamps:true
}
)


module.exports = model('laptop',laptopSchema)