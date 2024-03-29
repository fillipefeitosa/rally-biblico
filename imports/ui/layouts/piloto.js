import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';
import './piloto.html';

Template.dadospessoais.helpers({
    'userProfile': function(){
        const userProfile = Meteor.user().profile;
        return userProfile;
    },    

    states(){
        stateArray = [
            ["Rôndonia"],
            ["Acre"],
            ["Amazonas"],
            ["Roraima"],
            ["Pará"],
            ["Amapá"],
            ["Tocantins"],
            ["Maranhão"],
            ["Piauí"],
            ["Ceará"],
            ["Rio Grande do Norte"],
            ["Paraíba"],
            ["Pernambuco"],
            ["Alagoas"],
            ["Sergipe"],
            ["Bahia"],
            ["Minas Gerais"],
            ["Espírito Santo"],
            ["Rio de Janeiro"],
            ["São Paulo"],
            ["Paraná"],
            ["Santa Catarina"],
            ["Rio Grando do Sul"],
            ["Mato Grosso do Sul"],
            ["Mato Grosso"],
            ["Goiás"],
            ["Distrito Federal"],
        ]
        return stateArray.sort();
    },

    'dataCheck': function(a,b){
        return a == b;
    },


});

Template.dadospessoais.events({
    'keyup [name=nomeCompleto]': function(event){
        const name = $(event.target).val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.name": name}});
    },
    'change [name=dataNascimento]': function(event){
        const birthDate = $(event.target).val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.birthDate": birthDate}});
    },
    'keyup [name=cidade]': function(event){
        const city = $(event.target).val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.city": city}});
    },
    'change [name=uf]': function(event){
        const uf = $(event.target).val();
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.uf": uf}});
    }
});


// Rally events
// highlighter routine

Template.rally.onRendered(function(){
    var highlighterScript = '//bibles.org/linker/js/client.js';
    DocHead.loadScript(highlighterScript, function() {
        window.BIBLESEARCH.highlighterBooks['Ps'] = "sl,ps,psa,psalm,psalms";
    });
});
