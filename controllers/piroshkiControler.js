const Piroshki = require('../models/Piroshki');


module.exports = {
    index: function(req, res, next){
        res.render('piroshki/index', {piroshki: piroshkiModel.getAllPiroshki() });
    },
    new: function(req, res, next){
        res.render('piroshki/new');
    },
    create: function(req, res, next){
        let data = req.body;
        Piroshki.addPiroshki(data.piroshkyName, data.piroshkiFilling, data.piroshkiSize);
        res.redirect('/piroshki');
    },
    show: function(req, res, next){
        res.render('piroshki/show', {piroshki: Piroshki.getPiroshki(req.params.id), id:req.params.id});

    },
    edit: function(req, res, next){
        let piroshki = Piroshki.getPiroshki(req.params.id);
        res.render('piroshki/edit', {piroshki, id: req.params.id});
    },
    update: function(req, res, next){
        let info = req.body;
        Piroshki.updatePiroshki(info.name, info.filling,info.size);
        res.redirect('/piroshki');
    },
    destroy: function(req, res, next){
        Piroshki.deletePiroshki(req.params.id);
        res.redirect('/piroshki');
    },
}