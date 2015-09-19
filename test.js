'use strict';

var ava = require('ava');
var quote = require('./');

ava('Quote', function (t) {
	quote('qotd', function (err, result) {
		t.assert(!err, err);
		t.assert(result, result);
		t.end();
	});
});
