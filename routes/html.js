// This file offers a set of html routes

// Dependencies
const path = require('path');

module.exports = function(app) {
	// Each of the below routes will enterDescriptionOfRoutes.

	app.get('/', (req, res) => {
		res.sendFile(path.join(__dirname + './public/index.html'));
	});
};
