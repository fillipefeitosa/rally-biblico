import { Template } from 'meteor/templating';

import './piloto.html';



Template.dadospessoais.helpers({
    'userProfile': function(){
        const userProfile = Meteor.user().profile;
        return userProfile;
    },    

    states(){
        stateArray = [
            ["Rôndonia","RO"],
            ["Acre","AC"],
            ["Amazonas","AM"],
            ["Roraima","RR"],
            ["Pará","PA"],
            ["Amapá","AP"],
            ["Tocantins","TO"],
            ["Maranhão","MA"],
            ["Piauí","PI"],
            ["Ceará","CE"],
            ["Rio Grande do Norte","RN"],
            ["Paraíba","PB"],
            ["Pernambuco","PE"],
            ["Alagoas","AL"],
            ["Sergipe","SE"],
            ["Bahia","BA"],
            ["Minas Gerais","MG"],
            ["Espírito Santo","ES"],
            ["Rio de Janeiro","RJ"],
            ["São Paulo","SP"],
            ["Paraná","PR"],
            ["Santa Catarina","SC"],
            ["Rio Grando do Sul","RS"],
            ["Mato Grosso do Sul","MS"],
            ["Mato Grosso","MT"],
            ["Goiás","GO"],
            ["Distrito Federal","DF"],
        ]
        return stateArray.sort();
    },


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
