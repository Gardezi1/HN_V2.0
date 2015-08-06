Template.newsSubmisson.events({
  "submit form": function (event, template) {
    var tit = event.target.inputtitle.value;
    var u = event.target.hackerNews_title.value;
    var des = event.target.hackerNews_description.value

    Posts.insert({
      title: tit,
      url: u,
      description: des
    });

  }
});
