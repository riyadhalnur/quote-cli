#!/usr/bin/env node
'use strict';

const meow = require('meow');
const chalk = require('chalk');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
const quote = require('./index.js');

const cli = meow({
	help: [
		'Usage',
		'  $ quote [options]',
		'',
		'Options',
		'  qotd Display quote of the day',
		'',
		'Examples',
		'  $ quote',
		'  To be or not be, that is the question. - William Shakespeare',
		'  $ quote qotd',
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
