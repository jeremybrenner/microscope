Posts = new Mongo.Collection('posts');

Meteor.methods({
	// method which actually inserts the post, called from client - run on server
	postInsert: function(postAttributes) {
		check(Meteor.userId(), String);
		check(postAttributes, {
			title: String,
			url: String
		});
		// check and return for any 'reposts', returns ID and flag if true
		var postWithSameLink = Posts.findOne({url: postAttributes.url});
		if (postWithSameLink) {
			return {
				postExists: true,
				_id: postWithSameLink._id
			}
		}
		// extend user object with sensitive data for database
		var user = Meteor.user();
		var post = _.extend(postAttributes, {
			userId: user._id,
			author: user.username,
			submitted: new Date()
		});
		// actually insert post, return ID
		var postId = Posts.insert(post);
		return {
			_id: postId
		};
	}
});