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
    const newStarship = new Starship();

    newStarship.name = req.body.name;
    newStarship.shiptype = req.body.shiptype;
    newStarship.shipclass = req.body.shipclass;

    newStarship.save((err, saved) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json({ starship: saved })
    });
};

