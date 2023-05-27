const {Router} = require('express')  // permite trabajar con mas rutas
const router = Router();
const laptopController = require('../controllers/laptop.controller');


router.get('/',laptopController.obtenerLaptops);

router.get('/todos',laptopController.todos)

router.get('/:ns',laptopController.buscarLaptop)

router.delete('/eliminar/:ns',laptopController.eliminarLaptop)

router.post('/insertar',laptopController.insertarLaptop)



module.exports = router;