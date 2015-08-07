Template.newsSubmisson.events({
  "submit form": function (event, template) {
    var titl = event.target.inputtitle.value;
    var u = event.target.hackerNews_title.value;
    var des = event.target.hackerNews_description.value

    if(titl != null && u != null && des != null){
    Posts.insert({
      title: tit,
      url: u,
      description: des
    });}

  }
});
