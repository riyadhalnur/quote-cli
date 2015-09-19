'use strict';

var got = require('got');
var _ = require('lodash');

module.exports = function (opts, callback) {
	opts = opts || '';

	var requestURL = (opts === 'qotd') ? 'https://favqs.com/api/qotd.json' : 'https://favqs.com/api/quotes' + _.random(0, 9999);

	got(requestURL, function (err, data, response) {
		if (err) {
			return callback(err);
		}

		if (response.statusCode === 200 && data) {
			return callback(null, JSON.parse(data));
		}
	});
};
