# nordrassil [![Build & Test](https://github.com/mgarbacz/nordrassil/actions/workflows/node.js.yml/badge.svg)](https://github.com/mgarbacz/nordrassil/actions/workflows/node.js.yml)[![Coverage Status](https://img.shields.io/coveralls/mgarbacz/nordrassil.svg)](https://coveralls.io/r/mgarbacz/nordrassil)

> Nordrassil, the Word Trie - a trie data structure implemented in vanilla JavaScript

Demo: [Nordrassil, the Word Trie](http://mgarbacz.github.io/nordrassil/)

## Build locally

Install dependencies with:

    npm install

This app uses the [Vite](https://vitejs.dev/) build tool with a non-default config. The source resides inside the `app` directory and is built by Vite into the `dist` directory. You can serve the content in `dist` using your preferred web server.

To initiate a build:

    npm run build

## Development

Vite can also watch the `app` directory for file changes, and serve the content without needing to run a build. This is the best way to develop, as it will not require source maps and will auto reload the browser tab you are viewing from.

To initiate dev mode and serve the content on `http://localhost:5173`:

    npm run dev

Or, to have Vite watch for changes and serve the complete production build on `http://localhost:4173`:

    npm run serve

Or, to do the same watching for changes and the production build, but serve `dist` from your preferred web server instead:

    npm run watch

## Test suite

Run test cases with:

    npm test

This will run the tests in `test` using [Mocha](http://mochajs.org/). Code coverage reports are also set up with [c8](https://github.com/bcoe/c8).

To get a code coverage report with the tests:

    npm run coverage

## License

See [LICENSE](LICENSE) file included in this distribution.
