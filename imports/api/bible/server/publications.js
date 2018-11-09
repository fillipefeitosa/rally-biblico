import { Meteor } from 'meteor/meteor';
import { Bible } from '../bible.js';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish("bibleBooks", function(){
    if(Roles.userIsInRole(Meteor.userId(), 'Administrador')){
        return Bible.find({});
    }
});
