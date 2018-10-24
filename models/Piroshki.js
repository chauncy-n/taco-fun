const piroshkiModel ={
    data: [
        {
            name: 'good stuff',
            filling: 'potato',
            size: 3 
        },
        {
            name: 'another piroshki',
            filling: 'cottage cheese and onions',
            size: 3 
        }
    ],

    addPiroshki: function(name, filling, size){
        let newPiroshki = {
            name, filling, size
        };
        this.data.push(newPiroshki);
    },
    getAllPiroshki: function(){
        return this.data;
    },
    getPiroshki: function(id){
        return this.data[id];
    },
    updatePiroshki: function(id, name, filling, size){
        this.data[id] = {name, filling, size};
    },
    deletePiroshki: function(id){
        return this.data.splice(id);
    }
}

module.exports = piroshkiModel;