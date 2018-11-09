import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

import '../imports/startup/server';

Meteor.startup(() => {
    
    // facebook accounts configurations
    ServiceConfiguration.configurations.remove({
        service: "facebook"
    });

    ServiceConfiguration.configurations.insert({
        service: "facebook",
        appId: '836307303236785',
        secret: '0aef8bd515a0e5ebb26546d01ae3bda8'
    });

    // On Create User Routine
    Accounts.onCreateUser(function (options, user) {
        user.roles = ['Convidado'];
        if (!user.services.facebook) {
            return user;
        }
        user.username = user.services.facebook.name;
        user.emails = [{address: user.services.facebook.email}];

        return user;
    });

});


// Only Users and Groups Publications allowed here.
// Import API Publications

// Publish All Users to Admin User
Meteor.publish("allUsers", function(){
    if(Roles.userIsInRole(Meteor.userId(), 'Administrador')){
        return Meteor.users.find({});
    }
});
