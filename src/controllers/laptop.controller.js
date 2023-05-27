const laptopController = {};
const laptop = require("../models/Laptop.model");


laptopController.obtenerLaptops = async (req,res)=>{
    const laptops = await laptop.find()
    res.render('../src/views/index.ejs',{laptops})
}


laptopController.todos = async (req,res)=>{
    const laptops = await laptop.find()
    res.json(laptops)
}


laptopController.insertarLaptop = async (req,res)=>{
    const productoInsertado = new laptop(req.body)
    productoInsertado.save()
    res.redirect("/")
}

laptopController.eliminarLaptop = async (req,res)=>{
    await laptop.findOneAndDelete({noSerie:req.params.ns})
    res.json('{"status":"Eliminado"}')
}

laptopController.buscarLaptop = async (req,res) =>{
    const laptop1 = await laptop.findOne({noSerie:req.params.ns})
    res.render('../src/views/editar',{laptop1})
}

module.exports = laptopController
 


