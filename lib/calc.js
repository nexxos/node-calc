#!/usr/bin/env node

/*
 * calc
 * https://github.com/nexxos/node-calc
 *
 * Copyright (c) 2013 Oliver Schafeld
 * Licensed under the MIT license.
 *
 * adapted from: http://flippinawesome.org/2013/07/29/writing-a-command-line-utility-using-node/?utm_source=javascriptweekly&utm_medium=email
 */


'use strict';

exports.awesome = function() {
  return 'awesome';
};

// console.log(process.argv);

// slice at index 2, catch all arguments
var userArgs = process.argv.slice(2);

var value1 = parseInt(userArgs[0]);
var value2 = parseInt(userArgs[1]);

var answer = value1 + value2;

console.log(answer);
