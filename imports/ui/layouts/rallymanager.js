import { Template } from 'meteor/templating';
import { Moment } from 'meteor/momentjs:moment';

import { Rally } from '../../api/rally/rally.js';
import { Bible } from '../../api/bible/bible.js';

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
        this.subscribe('rally.info');
    });
});

Template.rallyupdate.helpers({
    formCollection() {
        return Rally.find(_id);
    },
});

// Rally rallylist
Template.rallylist.onCreated(function(){
    this.autorun(() => {
        this.subscribe('rally.info');
        this.subscribe('bible.books');
    });
});

Template.rallylist.helpers({
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


// Rally OnInsert Hook
// Used to create tracks on rally
Rally.after.insert(function (userId, doc) {
    var trackObj = {
        month: "janeiro",
        month: "fevereiro",
        month: "março"
    }
    // console.log(trackObj);
    Rally.update(this._id, {$set:{
        tracks : trackObj
    }});
});
