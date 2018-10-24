const express = require('express');
const router = express.Router();
const tacos = require('../controllers/tacosController');


//router.get('/', home.index);

// GET /tacos returns all tacos
router.get('/tacos', tacos.index);
// GET /tacos/new - returns the creation form
router.get('/tacos/new', tacos.new);
// POST /tacos - adds the form data to the DB
router.post('/tacos', tacos.create);
//GET /tacos/:id - returns one taco
router.get('/tacos/:id', tacos.show);
// GET /tacos
router.get('/tacos/:id/edit', tacos.edit);
router.put('/tacos/:id', tacos.update);
router.delete('/tacos/:id', tacos.destroy);



module.exports = router;
