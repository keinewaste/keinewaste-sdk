var
    expect = require('chai').expect,
    KeineWaste = require('../lib/main.js');
var Autocomplete = KeineWaste.Autocomplete();


describe('Keine Waste Autocomplete client', function (done) {

    it('Gets autocomplete', function (done) {
        this.timeout(15000);

        Autocomplete.Autocomplete({
            'query': "test"
        }, function (error, data) {
            if (error) {
                return done(error);
            }

            expect(data.length).to.greaterThan(0);
            return done();
        });
    });


});