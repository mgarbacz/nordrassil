var Trie = require('trie');

trie = new Trie();

/* Request words file */

var percentElement = document.getElementById('loading');

var wordRequest = new XMLHttpRequest();
wordRequest.addEventListener('load', transferComplete, false);
wordRequest.addEventListener('progress', updateProgress, false);
wordRequest.open('get', 'words.txt', true);
wordRequest.send();

function updateProgress(event) {
  if (event.lengthComputable) {
    var percentComplete = (100 * event.loaded / event.total).toFixed(0) + '%';
    percentElement.innerHTML = percentComplete;
    console.log(percentComplete);
  }
}

function transferComplete() {
  var words = this.responseText.split('\n');
  for (var word in words) {
    trie.add(words[word]);
  }

  var spinnerElement = document.getElementById('spinner');
  spinnerElement.parentElement.removeChild(spinnerElement);
}


/* Read input from user */

var searchInput = document.getElementById('search-input');
var searchResults = document.getElementById('search-results');
var addButton = document.getElementById('add-button');

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
    addButton.disabled = true;
  } else {
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
