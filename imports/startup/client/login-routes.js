import '../../ui/layout/signin-layout.html'
import '../../ui/layout/main.html'


var PostLogout = function(){
    Router.go('/');
};

Router.onBeforeAction(function(){
    if (! Meteor.userId()) {
        this.render('signinLayout');
    } else {
        this.next();
    }
});

Router.route('/', function(){
    this.render('Main');
})
