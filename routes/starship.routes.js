var express = require('express');
var router = express.Router();
var starship_controller = require('../controllers/starshipController');


// GET all Starships
router.get('/starships', starship_controller.starship_list);

// GET a Starship by id
router.get('/starships/:id', starship_controller.starship_find_by_id);

// POST request for creating a Starship
router.post('/starship/create', starship_controller.starship_create_post);

// DELETE a Starship by id
router.delete('/starships/:id', starship_controller.starship_delete);

// PUT a Starship by id
router.put('/starships/edit/:id', starship_controller.starship_update);

module.exports = router;

