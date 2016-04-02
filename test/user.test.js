var
    expect = require('chai').expect,
    KeineWaste = require('../lib/main.js');
var UserClient = KeineWaste.UserClient();



describe('Keine Waste user client', function (done) {

    it('Gets user', function (done) {
        this.timeout(15000);

        UserClient.GetUser({
            'id': 31
        }, function (error, data) {
            if (error) {
                return done(error);
            }

            expect(data.id).to.equals(31);
            expect(data.email).to.equals("no@email.com");
            return done();
        });
    });

});