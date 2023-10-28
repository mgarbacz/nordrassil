# nordrassil [![Coverage Status](https://img.shields.io/coveralls/mgarbacz/nordrassil.svg)](https://coveralls.io/r/mgarbacz/nordrassil)

> Nordrassil, the Word Trie - a trie data structure implemented in vanilla JavaScript

Demo: [Nordrassil, the Word Trie](http://mgarbacz.github.io/nordrassil/)

## Build locally:

Install dependencies with

    npm install

This app uses the [Vite](https://vitejs.dev/) build tool. The source resides inside the `app` directory and is built by Vite into the `dist` directory. You can serve the content in `dist` using your preferred web server.

To initiate a build:

    npm run build

## Development:

Vite can also watch the `app` directory for file changes, and serve the content without needing to run a full build. This is the best way to develop, as it will auto reload the browser tab you are viewing from.

To initiate dev mode and serve the content on `http://localhost:5173`

    npm run dev

Alternatively, to have Vite watch for changes and serve the complete production build on `http://localhost:4173`:

    npm run serve

Or, to do the same watching for changes and production build but serve from your preferred web server::

    npm run watch

## Run test cases:

    npm test

This will run the tests in `test` using [Mocha](http://mochajs.org/). It will report code coverage via [Istanbul](http://gotwarlost.github.io/istanbul/) as well.

## License

See [LICENSE](LICENSE) file included in this distribution.
