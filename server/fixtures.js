if (Posts.find().count() === 0) {

	Posts.insert({
		title: 'Introducing Telescope',
		url: 'http://sachagrief.com/introductin-telescope'
	});

	Posts.insert({
		title: 'Meteor',
		url: 'http://meteor.com'
	});

	Posts.insert({
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com'
	});

	Posts.insert({
		title: 'The Great Cat Spacewar',
		url: 'http://reddit.com'
	});
}