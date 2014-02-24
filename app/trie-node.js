var TrieNode = (function() {
  function TrieNode(character) {
    this.character = character || '';
    this.children = {};
    this.string = '';
  }

  TrieNode.prototype.add = function(string, index) {
    var currChar = string[index];

    if (currChar) {
      if (!this.children[currChar]) {
        this.children[currChar] = new TrieNode(currChar);
      }
      this.children[currChar].add(string, index + 1);
    } else {
      this.string = string;
    }
  };

  TrieNode.prototype.search = function(string, index) {
    var currChar = string[index];

    if (currChar) {
      if (!this.children[currChar]) {
        return false;
      } else {
        return this.children[currChar].search(string, index + 1);
      }
    } else {
      return collectStrings(this);
    }
  };

  var collectStrings = function(node) {
    var strings = [];

    if (node.string) {
      strings.push(node.string);
    }

    for (var child in node.children) {
      strings = strings.concat(collectStrings(node.children[child]));
    }

    return strings;
  };

  return TrieNode;
})();

module.exports = TrieNode;
