var Trie = require('trie');

trie = new Trie();

/* Request words file */

var wordRequest = new XMLHttpRequest();
wordRequest.addEventListener('load', transferComplete, false);
wordRequest.addEventListener('progress', updateProgress, false);
wordRequest.open('get', 'words.txt', true);

var percentElement = document.getElementById('loading');
function updateProgress(event) {
  if (event.lengthComputable) {
    var percentComplete = (100 * event.loaded / event.total).toFixed(0) + '%';
    percentElement.innerHTML = percentComplete;
  }
}

function transferComplete() {
  var words = this.responseText.split('\n');
  for (var word in words) {
    trie.add(words[word].replace(/\r?\n|\r/, ''));
  }

  var spinnerElement = document.getElementById('spinner');
  var mainElement = document.getElementById('main');
  spinnerElement.parentElement.removeChild(spinnerElement);
  mainElement.style.display = 'block';
}

wordRequest.send();


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
