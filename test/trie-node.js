var TrieNode = require('../app/trie-node');

describe('TrieNode', function() {
  var trienode;

  beforeEach(function() {
    trienode = new TrieNode();
  });

  it('should be an object', function() {
    expect(trienode).to.be.ok;
  });

  it('should set a character', function() {
    trienode = new TrieNode('t');

    expect(trienode.character).to.equal('t');
  });

  it('should have add method', function() {
    expect(trienode.add).to.be.an.instanceof(Function);
  });

  it('should have search method', function() {
    expect(trienode.add).to.be.an.instanceof(Function);
  });

  it('should have find method', function() {
    expect(trienode.add).to.be.an.instanceof(Function);
  });

});
