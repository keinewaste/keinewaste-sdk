var api = require('../api/autocomplete.js');

function Autocomplete(config) {
    this.init(config);
}

Autocomplete.prototype.init = function (client) {
    this.client = client;

    return this;
};


Autocomplete.prototype.Autocomplete = function (params, callback) {
    this.client.callApi(api, 'Autocomplete', params, callback);
};



module.exports = new Autocomplete();
