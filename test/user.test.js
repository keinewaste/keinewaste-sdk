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


    it('Modifies user', function (done) {
        this.timeout(15000);

        UserClient.ModifyUser({
            'token': 'CAAYBQjWI6owBACYGn7Pjcy8ZASPmNfHCS1MXOptyLP0legQOBdj40eAZA10IdZAyxFZBmQxSgTWmfwmaM9TVbJvML5xZAgVUDvu07sVS3OnWZBVVvh757ENRgAu1qJMAlDWZAxCP6rOhpfdjG8G2xGpfcKeAtdU8YG5Inglwg7DXDMwyYk3z3jC17wFp0bBR6Lw5kM1VeWJGmrASgK4xWxm',
            'bio': 'test bio',
            'type': 'receiver'
        }, function (error, data) {
            if (error) {
                return done(error);
            }

            expect(data.type).to.equals("receiver");

            return done();
        });
    });
});