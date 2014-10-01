# nordrassil [![Build Status](https://travis-ci.org/mgarbacz/nordrassil.svg?branch=master)](https://travis-ci.org/mgarbacz/nordrassil) [![Coverage Status](https://img.shields.io/coveralls/mgarbacz/nordrassil.svg)](https://coveralls.io/r/mgarbacz/nordrassil)

> A Word Trie implemented in vanilla JavaScript

Demo: [Nordrassil, the Word Trie](http://mgarbacz.github.io/nordrassil/)

## Run locally:

Install dependencies with

    npm install

This app uses the [Brunch](http://brunch.io) build tool. The source resides inside the `app` directory and is built by Brunch into the `public` directory. You can serve the content in `public` using your preferred web server.

To initiate a build:

    npm run build

To initiate a production build (minifies JavaScript and CSS):

    npm run build-prod

Brunch can also watch the `app` directory for file changes, and initiate builds on the fly.

To initiate a watch:

    npm run watch

To initiate a watch and have Brunch serve the resulting content on port 3333:

    npm run serve

If you are going to be doing any development on the app, that last command would be what you want to use.

## Running tests:

    npm test

This will run the tests in `test` using [Mocha](http://visionmedia.github.io/mocha/). It will report code coverage via [Istanbul](http://gotwarlost.github.io/istanbul/) as well.
