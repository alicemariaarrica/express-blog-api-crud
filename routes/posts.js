const express = require('express');
const router = express.Router(); //crea effettivamente l'oggetto router di express


const postsControllers = require('../controllers/postsControllers');


router.post('/', postsControllers.store);

module.exports = router; 
