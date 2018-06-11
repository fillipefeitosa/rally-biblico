import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { AutoForm } from 'meteor/aldeed:autoform';

SimpleSchema.extendOptions(['autoform']);

export const Churches = new Mongo.Collection("Churches");
Churches.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
});

ChurchSchema = new SimpleSchema({
    church: {
        type: String,
        label: "Igreja",
        max: 200
    },
    initials: {
        type: String,
        label: "Sigla",
        max: 15
    },
    address: {
        type: String,
        label: "Endereço",
        max: 200
    },
    disclaimer: {
        type: String,
        label: "Observações",
        max: 600,
        optional: true,
    },
    contacts: {
        type: Array,
        optional: true,
        label: "Contatos",
        maxCount: 3
    },
    "contacts.$": {
        type: Object,
        label: "Contatos",
    },
    "contacts.$.name": {
        type: String,
        max: 200,
        label: 'Nome'
    },
    "contacts.$.email": {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail",
    },
    father: {
        type: Array,
        label: "Pastor Titular",
        optional: true,
        maxCount: 1,
    },
    "father.$": {
        type: Object,
        label: "Contato",
        optional: true,
    },
    "father.$.name": {
        type: String,
        label: "Nome Completo",
        max: 200
    },
    "father.$.email": {
        type: String,
        regEx: SimpleSchema.RegEx.Email,
        label: "E-mail",
    },
    "father.$.telefone": {
        type: String,
        label: "Telefone",
        max: 30
    }

});

Churches.attachSchema(ChurchSchema);
