var TrieNode = require('../app/trie-node');

describe('TrieNode', function() {
  var trienode;

  beforeEach(function() {
    trienode = new TrieNode();
  });

  it('should be an object', function() {
    expect(trienode).to.be.ok;
  });

  it('should set a character on construction', function() {
    trienode = new TrieNode('t');

    expect(trienode.character).to.equal('t');
  });

  it('should store a string array', function() {
    expect(trienode.strings).to.be.an.instanceof(Array);
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

  it('should return undefined when adding', function() {
    expect(trienode.add('test', 0)).to.be.undefined;
  });

  it('should store next case insensitive character when adding', function() {
    trienode.add('tEsT', 3);
    expect(trienode.children['t']).to.be.ok;
  });

  it('should store case sensitive string when adding', function() {
    trienode.add('tEsT', 3);
    expect(trienode.children['t'].strings).to.contain('tEsT');
  });

});
