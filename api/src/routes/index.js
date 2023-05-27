const { Router } = require('express');
const router = Router();
const controller = require('../controller/controller');

router.post('/dogs', (req, res) => {
    try {
        const newDog = req.body
        res.status(201).json({"message": controller.postDog(newDog)})
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
});


module.exports = router;