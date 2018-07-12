import { Template } from 'meteor/templating';
import { Moment } from 'meteor/momentjs:moment';

import { Churches } from '../../api/churches/churches.js';

import './admin.html';

Template.churches.helpers({
    formCollection() {
        return Churches;
    }
});


Template.churches.onCreated(function(){
    this.autorun(() => {
        this.subscribe('Churches');
    });
});

Template.usergroups.onCreated(function(){
    // Arrow Function keeps this functionality
    this.autorun(() => {
        this.subscribe('allUsers');
    });
});

Template.usergroups.helpers({
    users: function(){
        return Meteor.users.find();
    },
    userEmail: function(){
        return this.emails[0].address;
    },
    isCoord: function(){
        return Roles.userIsInRole(this._id, 'Coordenador') ? 'Coordenador' : 'normal';
    },
    createdAt: function(){
        return moment(this.createdAt).format('MMMM D YYYY');
    }
});
