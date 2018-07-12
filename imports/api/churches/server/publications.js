import { Template } from 'meteor/templating';
import { Churches } from '../churches.js';

// Publish all churches(complete) to the Admin
Meteor.publish("Churches", function(){
    if (Roles.userIsInRole(Meteor.userId(), 'Administrador')) {
        return Churches.find({});
    }
});
