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

    it('Creates an offer', function (done) {
        Market.CreateOffer({
            'token': 'CAAYBQjWI6owBACYGn7Pjcy8ZASPmNfHCS1MXOptyLP0legQOBdj40eAZA10IdZAyxFZBmQxSgTWmfwmaM9TVbJvML5xZAgVUDvu07sVS3OnWZBVVvh757ENRgAu1qJMAlDWZAxCP6rOhpfdjG8G2xGpfcKeAtdU8YG5Inglwg7DXDMwyYk3z3jC17wFp0bBR6Lw5kM1VeWJGmrASgK4xWxm',
            "deliveryType": "truck",
            "description": "Very good food",
            "products": [
                {
                    "title": "Potatos",
                    "imageUrl": "http://www.google.com",
                    "quantity": "100"
                }
            ],
            "distance": "100",
            "meetingTime": {
                "date": "2015-10-11 13:30"
            },
            "categories": [
                1, 2
            ]
        }, function (error, data) {
            if (error) {
                return done(error);
            }

            expect(data.status).to.equals("new");
            return done();
        });

    });


});