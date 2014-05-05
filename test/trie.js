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

  it('should return itself when adding', function() {
    expect(trie.add('test')).to.equal(trie);
  });

  it('should return true when found', function() {
    expect(trie.add('test').find('test')).to.be.true;
  });

  it('should return false when not found', function() {
    expect(trie.find('test')).to.be.false;
  });

  it('should consider case when finding', function() {
    trie.add('TeSt');

    expect(trie.find('test')).to.be.false;
    expect(trie.find('TEST')).to.be.false;
    expect(trie.find('TeSt')).to.be.true;
  });

  it('should trim leading/trailing spaces when adding', function() {
    expect(trie.add('  test   ').find('test')).to.be.true;
  });

  it('should return an array when searching', function() {
    expect(trie.search('test')).to.be.an.instanceof(Array);
  });

  it('should return an empty array when searching with no match', function() {
    expect(trie.search('test')).to.be.empty;
  });

  it('should return a single element array when searching with one match', function() {
    expect(trie.add('test').search('test')).to.have.length(1);
  });

  it('should return all matching strings when searching', function() {
    trie.add('test');
    trie.add('tester');
    trie.add('nottest');

    var result = trie.search('test');

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

});
