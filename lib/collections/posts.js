Posts = new Mongo.Collection('posts');
Posts.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  url: {
    type: String,
    label: "Url"
  },
  description: {
    type: String,
    label: "Description"
  }
}));
Posts.allow({
  insert: function(userId, doc) {
    // only allow posting if you are logged in
    return true;
  }
});
