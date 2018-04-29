import { Template } from 'meteor/templating';

import './piloto.html';



Template.dadospessoais.helpers({
    'userProfile': function(){
        const userProfile = Meteor.user().profile;
        return userProfile;
    }
});

Template.dadospessoais.events({
    'keyup [name=nomeCompleto]': function(event){
        const name = $(event.target).val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.name": name}});
    },
    'change [name=dataNascimento]': function(event){
        const birthDate = $(event.target).val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.birthDate": bithDate}});
    },
    'keyup [name=cidade]': function(event){
        const city = $(event.target).val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.city": city}});
    },
    'change [name=UF]': function(event){
        const uf = $(event.target).val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.uf": uf}});
    }
});
