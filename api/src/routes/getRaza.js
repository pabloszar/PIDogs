const { Router } = require('express');
const router = Router();
const controller = require('../controller/controller');

router.get('/dogs/name?=', (req, res) => {
    try {
        const { raza } = req.params
        res.status(200).send(controller.getRaza(raza))
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
        
});


module.exports = router;