import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

Meteor.startup(() => {
    // Default Roles for Rally Bíblico
    var roles = Meteor.roles.find({}).count();
    if (roles > 0) {
        console.log("Roles Defined. Default Behavior.");
    } else {
        Roles.createRole('Convidado');
        Roles.createRole('Piloto');
        Roles.createRole('Coordenador');
        Roles.createRole('Administrador');
    }


    ServiceConfiguration.configurations.remove({
        service: "facebook"
    });

    ServiceConfiguration.configurations.insert({
        service: "facebook",
        appId: '836307303236785',
        secret: '0aef8bd515a0e5ebb26546d01ae3bda8'
    });

    Accounts.onCreateUser(function (options, user) {
        console.log(user._id);
        Roles.addUsersToRoles(user._id, ['Convidado']);
        console.log(user);
        if (!user.services.facebook) {
            return user;
        }
        user.username = user.services.facebook.name;
        user.emails = [{address: user.services.facebook.email}];

        return user;
    });

});
