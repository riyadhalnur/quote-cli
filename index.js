'use strict';

var got = require('got');
var _ = require('lodash');

module.exports = function (opts, callback) {
	opts = opts || '';

	var requestURL = (opts === 'qotd') ? 'https://favqs.com/api/qotd.json' : 'https://favqs.com/api/quotes/';

	var headers = {
		'Authorization': 'Token token=a857a430e3a1e6d481eaafc1ab6e1f19'
	};

	got(requestURL, {headers: headers}, function (err, data, response) {
		if (err) {
			return callback(err);
		}

		if (response.statusCode === 200 && data) {
			var parsedData = JSON.parse(data);

			if (parsedData.quotes && _.isArray(parsedData.quotes)) {
				var result = {quote: _.sample(parsedData.quotes)};
				callback(null, result);
			} else {
				callback(null, parsedData);
			}
		}
	});
};
