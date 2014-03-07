var TrieNode = require('../app/trie-node');

describe('TrieNode', function() {
  var trienode;

  beforeEach(function() {
    trienode = new TrieNode();
  });

  it('should be an object', function() {
    expect(trienode).to.be.ok;
  });

});
