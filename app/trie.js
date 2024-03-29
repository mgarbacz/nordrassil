import TrieNode from './trie-node.js';

export default function Trie() {
  this.root = new TrieNode();
}

Trie.prototype.add = function(string) {
  this.root.add(string.trim(), 0);
  return this;
};

Trie.prototype.search = function(string) {
  return this.root.search(string.trim(), 0);
};

Trie.prototype.find = function(string) {
  return this.root.find(string.trim(), 0);
};
