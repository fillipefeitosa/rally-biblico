
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

Router.route("/admin", function(){
    this.layout("main");
    this.render("admin");
});

Router.route("/admin/usergroups", function(){
    this.layout("main");
    this.render("usergroups");
});

Router.route("/admin/churches", function(){
    this.layout("main");
    this.render("churches");
});

Router.route("/admin/rallycreate", function(){
    this.layout("main");
    this.render("rallycreate");
});

Router.route("/admin/rallypannel", function(){
    this.layout("main");
    this.render("rallypannel");
});

Router.route("/admin/rally/:_id", function(){
    this.layout('main');
    this.render('rallyupdate');

}, {
    name : 'rally.update',
    data: function() {
        return Rally.findOne(this._id);
    }
}
);
