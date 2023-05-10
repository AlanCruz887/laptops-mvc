const {Router} = require('express')  // permite trabajar con mas rutas
const router = Router();
const laptopController = require('../controllers/laptop.controller');


router.get('/',laptopController.obtenerLaptops);

router.get('/:ns',laptopController.buscarLaptop)

router.delete('/:ns',laptopController.eliminarLaptop)

router.post('/',laptopController.insertarLaptop)



module.exports = router;