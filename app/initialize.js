var Trie = require('trie');

trie = new Trie();

trie.add('bat');
trie.add('bad');

var searchInput = document.getElementById('search-input');
var searchResults = document.getElementById('search-results');
var addButton = document.getElementById('add-button');

addButton.style.display = 'none';
addButton.disabled = true;

searchInput.oninput = function() {
  searchResults.innerHTML = '';

  var results = trie.search(this.value);
  var exists = trie.find(this.value);

  if (results) {
    for (var result in results) {
      var el = document.createElement('li');
      var elText = document.createTextNode(results[result]);
      el.appendChild(elText);
      searchResults.appendChild(el);
    }
  }

  if (exists || !this.value) {
    addButton.style.display = 'none';
    addButton.disabled = true;
  } else {
    addButton.style.display = 'inline-block';
    addButton.disabled = false;
  }
};

searchInput.onkeyup = function(event) {
  if (event.which === 13) {
    addButton.click();
  }
};

addButton.onclick = function() {
  trie.add(searchInput.value);

  var result = trie.find(searchInput.value);

  if (result) {
    searchInput.oninput();
  }
};

console.log(trie);
