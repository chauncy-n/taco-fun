const Taco = require('../models/Taco');

module.exports = {
    index: function(req, res, next){
        res.render('tacos/index', {tacos: Taco.getAllTacos() });
    },
    new: function(req, res, next){
        res.render('tacos/new');
    },
    create: function(req, res, next){
        let data = req.body;
        Taco.addTaco(data.tacoName, data.tacoProtein, data.tacoGarnish);
        res.redirect('/tacos');
    },
    show: function(req, res, next){
        res.render('tacos/show', {taco: Taco.getTaco(req.params.id), id:req.params.id});

    },
    edit: function(req, res, next){
        let taco = Taco.getTaco(req.params.id);
        res.render('tacos/edit', {taco, id: req.params.id});
    },
    update: function(req, res, next){
        let info = req.body;
        Taco.updateTaco(info.name, info.protein,info.garnish);
        res.redirect('/tacos');
    },
    destroy: function(req, res, next){
        Taco.deleteTaco(req.params.id);
        res.redirect('/tacos');
    },
}