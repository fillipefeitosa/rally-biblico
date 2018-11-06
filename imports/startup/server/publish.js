import '../../api/churches/server/publications.js';
import '../../api/rally/server/publications.js';

Meteor.publish(null, function (){
  return Meteor.roles.find({})
});
