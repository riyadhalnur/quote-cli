'use strict';

const test = require('ava').test;
const quote = require('./');

test('Quote', function (t) {
	quote('qotd', function (err, result) {
		t.assert(!err, err);
		t.assert(result, result);
		t.end();
	});
});
