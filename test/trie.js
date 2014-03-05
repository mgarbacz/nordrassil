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

  it('should add without errors', function() {
    expect(trie.add('test')).to.be.undefined;
  });

  it('should return true when found', function() {
    trie.add('test');

    expect(trie.find('test')).to.be.true;
  });

  it('should return false when not found', function() {
    expect(trie.find('test')).to.be.false;
  });

  it('should trim leading/trailing spaces when adding', function() {
    trie.add('  test   ');

    expect(trie.find('test')).to.be.true;
  });

  it('should return all matching strings when searching', function() {
    trie.add('test');
    trie.add('tester');
    trie.add('nottest');

    var result = trie.search('test');

    expect(result).to.be.an.instanceof(Array);
    expect(result).to.contain('test');
    expect(result).to.contain('tester');
    expect(result).to.not.contain('nottest');
  });

  it('should ignore case when searching', function() {
    trie.add('test lower');
    trie.add('TEST UPPER');
    trie.add('TeSt MiXeD');

    var result = trie.search('test');

    expect(result).to.contain('test lower');
    expect(result).to.contain('TEST UPPER');
    expect(result).to.contain('TeSt MiXeD');
  });

  // search not match return empty array
  // search one match return one element array
  // add should ignore case on character -> TrieNode
  // add should save case on word -> TrieNode
  // search should ignore case
  // find should ignore case

});
