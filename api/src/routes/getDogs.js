const { Router } = require('express');
const router = Router();
const controller = require('../controller/controller');

router.get('/dogs', (req, res) => {
    try {
        res.status(200).send(controller.getDogs())
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
        
});


module.exports = router;