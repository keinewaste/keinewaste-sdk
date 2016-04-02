var
    expect = require('chai').expect,
    KeineWaste = require('../lib/main.js');
var Categories = KeineWaste.Categories();


describe('Keine Waste Categories client', function (done) {

    it('Gets Categories', function (done) {
        this.timeout(15000);

        Categories.Categories({}, function (error, data) {
            if (error) {
                return done(error);
            }

            expect(data.length).to.greaterThan(0);
            return done();
        });
    });


});