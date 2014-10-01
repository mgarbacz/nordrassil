var TrieNode = (function() {
    function TrieNode(character) {
        this.character = character || '';
        this.children = {};
        this.strings = [];
    }

    TrieNode.prototype.add = function(string, index) {
        var currChar = string[index];

        if (currChar) {
            currChar = currChar.toLowerCase();
            if (!this.children[currChar]) {
                this.children[currChar] = new TrieNode(currChar);
            }
            this.children[currChar].add(string, index + 1);
        } else {
            this.strings.push(string);
        }
    };

    TrieNode.prototype.search = function(string, index) {
        var currChar = string[index];

        if (currChar) {
            currChar = currChar.toLowerCase();
            if (!this.children[currChar]) {
                return [];
            } else {
                return this.children[currChar].search(string, index + 1);
            }
        } else if (index === 0) {
            return [];
        } else {
            return collectStrings(this);
        }
    };

    var collectStrings = function(node) {
        var strings = node.strings.slice();

        for (var child in node.children) {
            strings = strings.concat(collectStrings(node.children[child]));
        }

        return strings;
    };

    TrieNode.prototype.find = function(string, index) {
        var currChar = string[index];

        if (currChar) {
            currChar = currChar.toLowerCase();
            if (!this.children[currChar]) {
                return false;
            } else {
                return this.children[currChar].find(string, index + 1);
            }
        } else {
            return this.strings.indexOf(string) > -1 ? true : false;
        }
    };

    return TrieNode;
})();

module.exports = TrieNode;
