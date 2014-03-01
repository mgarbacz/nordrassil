var Trie = require('../app/trie');

describe('Trie', function() {
  var trie;

  beforeEach(function() {
    trie = new Trie();
  });

  it('should be an object', function() {
    expect(trie).to.be.ok;
  });
});
