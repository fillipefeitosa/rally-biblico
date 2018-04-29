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
        const date = $(event.target).val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.birthDate": date}});
    },
    'keyup [name=cidade]': function(event){
        const cidade = $(event.target).val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.city": cidade}});
    },
    'change [name=UF]': function(event){
        const UF = $(event.target).val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.uf": UF}});
    }
});
