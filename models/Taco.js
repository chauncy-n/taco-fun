const tacoModel = {
    data: [
        {
            name: 'captain Beefheart',
            protein: 'Carne Asada',
            garnish: 'cheddar, lettuce and pico'
        },
        {
            name: 'Piggy Azelea',
            protein: 'Carnitas',
            garnish: 'chile peppers and pinapple'
        }
    ],
    // same as name: name, protein: name etc...
    addTaco: function(name, protein, garnish){
        let newTaco = {
            name,
            protein,
            garnish
        };
        this.data.push(newTaco);
    },
    getAllTacos: function(){
        return this.data;
    },
    getTaco: function(id){
        return this.data[id];
    },
    updateTaco: function(id, name, protein, garnish){
        data[id] = {name,protein,garnish};
    },
    deleteTaco: function(id){
        return this.data.splice(id);
    }
};

module.exports = tacoModel;