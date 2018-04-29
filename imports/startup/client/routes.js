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

Router.route('/', function(){
    this.layout('main');
    this.render('piloto');
});


Router.route('/dadospessoais', function () {
  this.layout('main');
  this.render('dadospessoais');
});
