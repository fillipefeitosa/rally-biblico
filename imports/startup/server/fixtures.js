// Fill DB with data after first run
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { HTTP } from 'meteor/http'

// Used APIs
import { Bible } from '../../api/bible/bible.js';

Meteor.startup(function(){
    console.log("Running Startup Fixtures on Server.");
    // Default Roles for Rally Bíblico
    var roles = Meteor.roles.find({}).count();
    if (roles > 0) {
        console.log("Roles Defined. Default Behavior.");
    } else {
        Roles.createRole('Convidado');
        Roles.createRole('Piloto');
        Roles.createRole('Coordenador');
        Roles.createRole('Administrador');
    }

    // Get Bible (Por-NTLH)from BibleSearch
    var bibleCount = Bible.find().count();
    if(bibleCount > 0){
        console.log("Bible already defined. Default Behavior");
    } else {
        try {
            request = HTTP.get("https://bibles.org/v2/versions/por-NTLH/books.js?include_chapters=true", {auth:"zML67PplCmnER9a5yPyZeQO55qfraVrPo3K2VcAO:X"});
            books = request['data']['response']['books'];
            for(const [key,value] of Object.entries(books)){
                book = value;
                Bible.insert(book);
            }
            // Bible.insert();
            console.log("Bible Books in PT-BR Registered.");
        } catch (e) {
            console.log(e);
        }
    }

});
