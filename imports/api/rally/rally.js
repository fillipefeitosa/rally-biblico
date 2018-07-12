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

RallySchema = SimpleSchema({
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
});
