var Starship = require('../models/starship');

// GET: Get list of all starships
exports.starship_list = function(req, res) {
    Starship.find().exec((err, starships) => {
      if (err) {
        res.status(500).send(err);
      }

      res.json({ starships });
    });
};

// POST: Create a starship
exports.starship_create_post = function(req, res) {
    res.send('TEST POST');
};

