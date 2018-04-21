import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import '/imports/startup/client';
import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});


Template.login.events({
    "click #login-facebook": function(e){
        e.preventDefault();
        console.log('give me some login');

        Meteor.loginWithFacebook({requestPermissions:['public_profile', 'email']}, function(err){
            if(err){
                console.log('Handle errors here: ', err);
            }
        });
    },
    "click .log-out": function(e){
        e.preventDefault();
        console.log('logOUTTT!!');

        Meteor.logout(function(err){
            console.log('Handle errors here: ', err);
        });
    }
});
