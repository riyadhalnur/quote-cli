#!/usr/bin/env node
'use strict';

var meow = require('meow');
var chalk = require('chalk');
var updateNotifier = require('update-notifier');
var quote = require('./index.js');
var pkg = require('./package.json');

var cli = meow({
	help: [
		'Usage',
		'  $ quote-cli',
		'',
		'Options',
		'	 qotd Display quote of the day',
		'',
		'Examples',
		'  $ quote-cli',
		'  To be or not be, that is the question. - William Shakespeare',
		'  $ quote-cli qotd',
		'  Wars teach us not to love our enemies, but to hate our allies. - W. L. George'
	]
});

updateNotifier({pkg: pkg}).notify();

quote(cli.input[0], function (err, result) {
	if (err) {
		console.log(chalk.bold.red(err));
		process.exit(1);
	}

	console.log(chalk.cyan(chalk.yellow(result.quote.body) + ' - ' + result.quote.author));
	process.exit();
});
