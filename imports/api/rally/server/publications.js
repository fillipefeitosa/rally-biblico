import { Template } from 'meteor/templating';
import { Rally } from '../rally.js';

// Publish all Rally to all users
Meteor.publish("rally.info", function(){
        return Rally.find({});
});
