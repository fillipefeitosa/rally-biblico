import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Session } from 'meteor/session';

// Exposed Routes

exposed = FlowRouter.group({});
exposed.route('/', {
    name: 'main',
    action: function(){
        BlazeLayout.render('App_body', {top: "header", main: "main", pageContent:"rally"});
    }
});

// Logged Routes
loggedIn = FlowRouter.group({
    triggersEnter: [
        function(){
            var route;
            if(!(Meteor.loggingIn() || Meteor.userId())){
                route = FlowRouter.current();
                if (route.route.name !== 'signin') {
                    // Adicionar Mensagem de Redirecionamento
                    Session.set('redirectAfterLogin',route.path);
                }
                return FlowRouter.go('main');
            }
        }
    ]
});
loggedIn.route('/dadospessoais', {
    name: 'dadospessoais',
    action: function(){
        BlazeLayout.render('App_body', {navbar:"navbar", top:"header", main:"main", pageContent:"dadospessoais" });
    }
});

// Admin Routes
var adminRoutes = FlowRouter.group({
    prefix: '/admin',
    name: 'admin',
});

adminRoutes.route('/', {
    name: 'adminhome',
    action: function(){
        BlazeLayout.render('App_body', {navbar:"navbar",top:"header", main:"main", pageContent:"admin" });
    },
});

adminRoutes.route('/churches', {
    name: 'churches',
    action: function(){
        BlazeLayout.render('App_body', {navbar:"navbar",top:"header", main:"main", pageContent:"churches"});
    }
});

adminRoutes.route('/rallypannel', {
    name: 'churches',
    action: function(){
        BlazeLayout.render('App_body', {navbar:"navbar",top:"header", main:"main", pageContent:"rallypannel"});
    }
});

adminRoutes.route('/usergroups', {
    name: 'churches',
    action: function(){
        BlazeLayout.render('App_body', {navbar:"navbar",top:"header", main:"main", pageContent:"usergroups"});
    }
});

// LEGACY CODE
// var PostLogout = function(){
//     Router.go('/');
// };
//
// AccountsTemplates.configure({
//     defaultLayout: 'main',
//     onLogoutHook: PostLogout
// });

// Router.route('/', function(){
//     this.layout('main');
//     this.render('piloto');
// });

// Router.route('/dadospessoais', function () {
//   this.layout('main');
//   this.render('dadospessoais');
// });
//
// Router.route("/admin", function(){
//     this.layout("main");
//     this.render("admin");
// });
//
// Router.route("/admin/usergroups", function(){
//     this.layout("main");
//     this.render("usergroups");
// });
//
// Router.route("/admin/churches", function(){
//     this.layout("main");
//     this.render("churches");
// });
//
// Router.route("/admin/rallycreate", function(){
//     this.layout("main");
//     this.render("rallycreate");
// });
//
// Router.route("/admin/rallypannel", function(){
//     this.layout("main");
//     this.render("rallypannel");
// });
//
// Router.route("/admin/rally/:_id", function(){
//     this.layout('main');
//     this.render('rallyupdate');
//
// }, {
//     name : 'rally.update',
//     data: function() {
//         return Rally.findOne(this._id);
//     }
// }
// );
