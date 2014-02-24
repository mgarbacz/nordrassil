var Trie = require('trie');

trie = new Trie();

trie.add('bat');
trie.add('bad');

var searchInput = document.getElementById('search-input');
var searchResults = document.getElementById('search-results');

searchInput.oninput = function() {
  searchResults.innerHTML = '';

  var results = trie.search(this.value);

  for (var result in results) {
    var el = document.createElement('li');
    var elText = document.createTextNode(results[result]);
    el.appendChild(elText);
    searchResults.appendChild(el);
  }

};

console.log(trie);
