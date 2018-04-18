import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {

  ServiceConfiguration.configurations.remove({
    service: "facebook"
  });

  ServiceConfiguration.configurations.insert({
    service: "facebook",
    appId: '219411755279252',
    secret: '576ee03a0bd34632f7fe11379e75bcc1'
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
