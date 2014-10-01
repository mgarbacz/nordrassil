# nordrassil [![Build Status](https://travis-ci.org/mgarbacz/nordrassil.svg?branch=master)](https://travis-ci.org/mgarbacz/nordrassil) [![Coverage Status](https://img.shields.io/coveralls/mgarbacz/nordrassil.svg)](https://coveralls.io/r/mgarbacz/nordrassil)

> A Word Trie implemented in vanilla JavaScript

Demo: [Nordrassil, the Word Trie](http://mgarbacz.github.io/nordrassil/)

## Build locally:

Install dependencies with

    npm install

This app uses the [Brunch](http://brunch.io) build tool. The source resides inside the `app` directory and is built by Brunch into the `public` directory. You can serve the content in `public` using your preferred web server.

To initiate a build:

    npm run build

To initiate a production build (minifies JavaScript and CSS):

    npm run build-prod
    
## Development:

Brunch can also watch the `app` directory for file changes, and initiate builds on the fly. This is the best way to develop, as it will concat all the files, run the JavaScript code in `app` through JSHint, and auto reload the browser tab you are viewing from.

To initiate a watch and serve the resulting content using your preffered web server:

    npm run watch

To initiate a watch and have Brunch serve the resulting content on `http://localhost:3333`:

    npm run serve

## Run test cases:

    npm test

This will run the tests in `test` using [Mocha](http://visionmedia.github.io/mocha/). It will report code coverage via [Istanbul](http://gotwarlost.github.io/istanbul/) as well.

## License

See [LICENSE](LICENSE) file included in this distribution.
