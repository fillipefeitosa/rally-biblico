import { Template } from 'meteor/templating';
import { Moment } from 'meteor/momentjs:moment';

import { Rally } from '../../api/rally/rally.js';

import './rallymanager.html';

// Rally Manager -> Insert Operations
Template.rallycreate.onCreated(function(){
    this.autorun(() => {
        this.subscribe('Rally');
    });
});

Template.rallycreate.helpers({
    formCollection() {
        return Rally;
    },
});

// Rally Update
Template.rallyupdate.onCreated(function(){
    this.autorun(() => {
        this.subscribe('Rally');
    });
});

Template.rallyupdate.helpers({
    formCollection() {
        return Rally.find(_id);
    },
});

// Rally rallypannel
Template.rallypannel.onCreated(function(){
    this.autorun(() => {
        this.subscribe('Rally');
    });
});

Template.rallypannel.helpers({
    rallys: function(){
        return Rally.find();
    },
    startDate: function(){
        rawDate = Rally.find({'_id' : this._id}, {startDate : 1});
        return moment(rawDate).format('MMMM D YYYY');
    },
    finishDate: function(){
        rawDate = Rally.find({'_id' : this._id}, {finishDate : 1});
        return moment(rawDate).format('MMMM D YYYY');
    }
});
