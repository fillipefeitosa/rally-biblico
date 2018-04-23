import '../../ui/layouts/main.js'
import '../../ui/accounts/signin.js'
import '../../ui/layouts/piloto.js'

var PostLogout = function(){
    Router.go('/');
};

AccountsTemplates.configure({
    defaultLayout: 'main',
    onLogoutHook: PostLogout
});

// Router.onBeforeAction(function(){
//     if (! Meteor.userId()) {
//         this.render('signin');
//     } else {
//         this.next();
//     }
// });

Router.route('/', {
    template: 'main'
});
