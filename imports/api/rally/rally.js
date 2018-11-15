import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { AutoForm } from 'meteor/aldeed:autoform';

SimpleSchema.extendOptions(['autoform']);

export const Rally = new Mongo.Collection("Rally");
Rally.allow({
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

RallySchema = new SimpleSchema({
    rallyName: {
        type: String,
        label: "Rally",
        max: 200
    },
    rallyInitials: {
        type: String,
        label: "Id do Rally",
        max: 15
    },

    regularity: {
        type: String,
        label: "Modalidade",
        allowedValues: ['Bíblia - 1 ano', 'Novo Testamento - 6meses', 'Novo Testamento 5x5', 'Novos Convertidos'],
        autoform: {
            options: [
                {label: "Bíblia em 1 ano", value: "Bíblia - 1 ano"},
                {label: "Novo Testamento em 6 meses", value: "Novo Testamento - 6meses"},
                {label: "Novo Testamento 5x5", value: "Novo Testamento 5x5"},
                {label: "Novos Convertidos 30 dias", value: "Novos Convertidos"}
            ]
        }
    },

    startDate: {
        type: Date,
        label: "Largada",
    },

    regularityFlag: {
        type: Array,
        optional: true,
        label: "Bandeiradas",
        maxCount: 5
    },
    "regularityFlag.$": {
        type: Object,
        optional: true,
        label: "Bandeirada",
    },
    "regularityFlag.$.name": {
        type: String,
        maxCount: 20
    },
    "regularityFlag.$.date": {
        type: Date,
        label: "Data"
    }

});

Rally.attachSchema(RallySchema);
