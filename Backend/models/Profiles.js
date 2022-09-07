const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectID,
		ref: 'user',
	},

	company: {
		type: String,
	},
	website: {
		type: String,
	},
	location: {
		type: String,
	},
	
	
	description: {
		type: String,
	},

	social: {
		youtube: {
			type: String,
		},
		twitter: {
			type: String,
		},
		facebook: {
			type: String,
		},
		instagram: {
			type: String,
		},
	},
	date: {
		type: Date,
		default: Date.now,
	},
});
