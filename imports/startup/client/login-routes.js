import '../../ui/layout/main.html'
import '../../ui/layout/signinLayout.html'
import '../../ui/layout/homelayout.html'

var PostLogout = function(){
    Router.go('/');
};

AccountsTemplates.configure({
    defaultLayout: 'homelayout',
    onLogoutHook: PostLogout
});

Router.onBeforeAction(function(){
    if (! Meteor.userId()) {
        this.render('signin-layout');
    } else {
        this.next();
    }
});

Router.route('/', {
    template: 'main'
});
