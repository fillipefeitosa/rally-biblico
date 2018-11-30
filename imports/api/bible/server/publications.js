import { Meteor } from 'meteor/meteor';
import { Bible } from '../bible.js';
import { Roles } from 'meteor/alanning:roles';

Meteor.publish("bible.books", function(){
    if(Roles.userIsInRole(Meteor.userId(), 'Administrador')){
        return Bible.find({},{ fields: { name:1, abbr:1, id:1, chapters:1}});
    }
});
