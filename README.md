# nordrassil [![Build Status](https://travis-ci.org/mgarbacz/nordrassil.svg?branch=master)](https://travis-ci.org/mgarbacz/nordrassil)

> A Word Trie implemented in vanilla JavaScript

Demo: [Nordrassil, the Word Trie](http://mgarbacz.github.io/nordrassil/)

##### Run locally:
This app uses the [Brunch](http://brunch.io) build tool. Install it
globally via [npm](https://www.npmjs.org/):

    npm install -g brunch

Then install the other dependencies with

    npm install

Then build the project from it's dev-friendly structure in the `app`
directory to a user-optimized structure via:

    brunch b              // regular build

or

    brunch b -P           // production build (runs through minification)

This will put the app into the `public` directory, which you can then serve
out of your preferred web server.

