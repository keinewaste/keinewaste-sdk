var api = require('../api/categories.js');

function Categories(config) {
    this.init(config);
}

Categories.prototype.init = function (client) {
    this.client = client;

    return this;
};


Categories.prototype.Categories = function (params, callback) {
    this.client.callApi(api, 'Categories', params, callback);
};



module.exports = new Categories();
