if(Roles.userIsInRole(Meteor.userId(), 'Administrador')){
    Meteor.publish("Churches", function(){
        return Churches.find({}).fetch();
    });
}
