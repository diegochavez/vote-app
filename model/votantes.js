Votantes = new Meteor.Collection("votantes");

Meteor.methods({
        'getDeviceID': function(thisDeviceID) {
            return Votantes.findOne(
            	{ deviceID: thisDeviceID }
            	);
        }
});
