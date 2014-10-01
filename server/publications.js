Meteor.publish('posts', function() {
  return Posts.find();
});


/*Meteor.posts('posts', function(author){
	return Posts.find({flagged: false, author:author});
});*/

