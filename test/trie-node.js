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

  describe('add method', function() {
    it('should be a function', function() {
      expect(trienode.add).to.be.an.instanceof(Function);
    });

    it('should return undefined', function() {
      expect(trienode.add('test', 0)).to.be.undefined;
    });

    it('should store next case insensitive character', function() {
      trienode.add('tEsT', 3);
      expect(trienode.children['t']).to.be.ok;
    });

    it('should store case sensitive string', function() {
      trienode.add('tEsT', 3);
      expect(trienode.children['t'].strings).to.contain('tEsT');
    });
  });

  describe('search method', function() {
    it('should be a function', function() {
      expect(trienode.search).to.be.an.instanceof(Function);
    });
  });

  describe('find method', function() {
    it('should be a function', function() {
      expect(trienode.find).to.be.an.instanceof(Function);
    });
  });
});
