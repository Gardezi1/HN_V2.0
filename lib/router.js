Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'templayout' } );


Router.route('showNewsScreen' ,  function(){
  this.render('templayout');
});

Router.route('submitNews', function(){
  this.render('templayoutSub');
});
