const { Router } = require('express');
const router = Router();
const controller = require('../controller/controller');

router.get('/temperaments', (req, res) => {
    try {
        res.status(200).send(controller.getTemp())
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
        
});


module.exports = router;