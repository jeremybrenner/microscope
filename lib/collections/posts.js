Posts = new Mongo.Collection('posts');

Posts.allow({
	insert: function() {
		return !! userId;
	}
});