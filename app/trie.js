var TrieNode = require('trie-node');

var Trie = (function() {
  function Trie() {
    this.root = new TrieNode();
  }

  Trie.prototype.add = function(string) {
    this.root.add(string, 0);
  };

  return Trie;
})();

module.exports = Trie;
