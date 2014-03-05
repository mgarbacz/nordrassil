var Trie = require('../app/trie');

describe('Trie', function() {
  var trie;

  beforeEach(function() {
    trie = new Trie();
  });

  it('should be an object', function() {
    expect(trie).to.be.ok;
  });

  it('should have a root', function() {
    expect(trie.root).to.be.ok;
  });

  it('should have add method', function() {
    expect(trie.add).to.be.an.instanceof(Function);
  });

  it('should have search method', function() {
    expect(trie.search).to.be.an.instanceof(Function);
  });

  it('should have find method', function() {
    expect(trie.find).to.be.an.instanceof(Function);
  });

  it('should add string without errors', function() {
    expect(trie.add('test')).to.be.undefined;
  });

  it('should find an added string', function() {
    trie.add('test');

    expect(trie.find('test')).to.be.true;
  });

  it('should trim leading/trailing spaces when adding a string', function() {
    trie.add('  test   ');

    expect(trie.find('test')).to.be.true;
  });

  it('should search for all matching strings', function() {
    trie.add('test');
    trie.add('tester');
    trie.add('nottest');

    var result = trie.search('test');

    expect(result).to.be.an.instanceof(Array);
    expect(result).to.contain('test');
    expect(result).to.contain('tester');
    expect(result).to.not.contain('nottest');
  });

  // search not match return empty array
  // search one match return one element array
  // add should ignore case on character -> TrieNode
  // add should save case on word -> TrieNode
  // search should ignore case
  // find should ignore case

});
