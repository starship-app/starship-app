var express = require('express');
var router = express.Router();

// Require controller modules.
var starship_controller = require('../controllers/starshipController');

// STARSHIP ROUTES

// GET all Starships
router.get('/starships', starship_controller.starship_list);

// POST request for creating a Starship.
router.post('/starship/create', starship_controller.starship_create_post);

module.exports = router;

