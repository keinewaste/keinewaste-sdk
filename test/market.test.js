var
    expect = require('chai').expect,
    KeineWaste = require('../lib/main.js');
var Market = KeineWaste.Market();


describe('Keine Waste Market client', function (done) {

    it('Gets All Markets', function (done) {
        this.timeout(15000);

        Market.GetAll({}, function (error, data) {
            if (error) {
                return done(error);
            }

            expect(data.length).to.greaterThan(0);

            var marketId = data[0].id;
            Market.GetById({
                'id': marketId
            }, function (error, data) {
                if (error) {
                    return done(error);
                }

                expect(data.id).to.equals(marketId);
                var userId = data.user_id;

                Market.GetByUser({
                    'id': userId
                }, function (error, data) {
                    if (error) {
                        return done(error);
                    }

                    expect(data.length).to.greaterThan(0);
                    return done();
                });

            });
        });
    });


});