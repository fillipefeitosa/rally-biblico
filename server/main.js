import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

  ServiceConfiguration.configurations.remove({
    service: "facebook"
  });

  ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '836307303236785',
    secret: '0aef8bd515a0e5ebb26546d01ae3bda8'
  });
  // code to run on server at startup

  Accounts.onCreateUser(function (options, user) {

    if (!user.services.facebook) {
        return user;
    }
    user.username = user.services.facebook.name;
    user.emails = [{address: user.services.facebook.email}];

    return user;
    });

});
