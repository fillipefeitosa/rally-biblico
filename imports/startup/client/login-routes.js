import '../../ui/layout/main.html'
import '../../ui/layout/signinLayout.html'

var PostLogout = function(){
    Router.go('/');
};

Router.onBeforeAction(function(){
    if (! Meteor.userId()) {
        this.render('signin-layout');
    } else {
        this.next();
    }
});

Router.route('/', {
    template: 'main'
});;
