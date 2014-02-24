var TrieNode = (function() {
  function TrieNode(character) {
    this.character = character || '';
    this.children = {};
  }

  TrieNode.prototype.add = function(string, index) {
    var currChar = string[index];

    if (currChar) {
      if (!this.children[currChar]) {
        this.children[currChar] = new TrieNode(currChar);
      }
      this.children[currChar].add(string, index + 1);
    }
  };

  return TrieNode;
})();

module.exports = TrieNode;
