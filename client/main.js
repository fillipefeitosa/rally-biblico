import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '../imports/startup/client';


Template.login.events({
    "click #login-facebook": function(e){
        e.preventDefault();
        console.log('give me some login');

        Meteor.loginWithFacebook({requestPermissions:['public_profile', 'email']}, function(err){
            if(err){
                console.log('Handle errors here: ', err);
            }
        });
    }
});
