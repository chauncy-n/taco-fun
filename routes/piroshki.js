const express = require('express');
const router = express.Router();
const piroshki = require('../controllers/piroshkiController');

router.get('/piroshki', piroshki.index);
router.get('/piroshki/new', piroshki.new);
router.post('/piroshki/', piroshki.create);
router.get('/piroshki/:id', piroshki.show);
router.get('/piroshki/:id/edit', piroshki.edit);
router.put('/piroshki/:id', piroshki.update);
router.delete('/piroshki/:id',piroshki.destroy);

module.exports = router;
