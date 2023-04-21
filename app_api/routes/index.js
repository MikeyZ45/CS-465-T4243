const express = require('express');
const router = express.Router();


const tripsController = require('../controllers/trips');

router
    .route('/trips')
    .get(tripsController.tripsList)
    .post(tripsController.tripsAddtrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
module.exports = router;