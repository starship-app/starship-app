var express = require('express');
var router = express.Router();

// Require controller modules.
var starship_controller = require('../controllers/starshipController');

/// STARSHIP ROUTES ///

// POST request for creating Starship.
router.post('', starship_controller.starship_create_post);