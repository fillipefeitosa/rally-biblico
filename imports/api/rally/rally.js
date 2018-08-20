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
        label: "Regularidade",
        allowedValues: ['anual', 'semestral', 'customizado'],
        autoform: {
            options: [
                {label: "Anual", value: "anual"},
                {label: "Semestral", value: "semestral"},
                {label: "Customizado", value: "customizado"}
            ]
        }
    },

    startDate: {
        type: Date,
        label: "Data de Início",
    },

    finishDate: {
        type: Date,
        label: "Data de Término",
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
