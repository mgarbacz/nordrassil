import Trie from '../app/trie.js';

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

    describe('add method', function() {
        it('should be a function', function() {
            expect(trie.add).to.be.an.instanceof(Function);
        });

        it('should return itself', function() {
            expect(trie.add('test')).to.equal(trie);
        });

        it('should trim leading/trailing spaces', function() {
            expect(trie.add('  test   ').root.children['t']).to.be.ok;
        });
    });

    describe('search method', function() {
        it('should be a function', function() {
            expect(trie.search).to.be.an.instanceof(Function);
        });

        it('should return an array', function() {
            expect(trie.search('test')).to.be.an.instanceof(Array);
        });

        it('should return an empty array when there is no match', function() {
            expect(trie.search('test')).to.be.empty;
        });

        it('should return an empty array when given no search term', function() {
            expect(trie.search('')).to.be.empty;
        });

        it('should return a single element array when there is one match', function() {
            expect(trie.add('test').search('test')).to.have.length(1);
        });

        it('should return all matching strings', function() {
            trie.add('test');
            trie.add('tester');
            trie.add('nottest');

            var result = trie.search('test');

            expect(result).to.contain('test');
            expect(result).to.contain('tester');
            expect(result).to.not.contain('nottest');
        });

        it('should ignore case', function() {
            trie.add('test lower');
            trie.add('TEST UPPER');
            trie.add('TeSt MiXeD');

            var result = trie.search('test');

            expect(result).to.contain('test lower');
            expect(result).to.contain('TEST UPPER');
            expect(result).to.contain('TeSt MiXeD');
        });
    });

    describe('find method', function() {
        it('should be a function', function() {
            expect(trie.find).to.be.an.instanceof(Function);
        });

        it('should return true when found', function() {
            expect(trie.add('test').find('test')).to.be.true;
        });

        it('should return false when not found', function() {
            expect(trie.find('test')).to.be.false;
        });

        it('should consider case', function() {
            trie.add('TeSt');

            expect(trie.find('test')).to.be.false;
            expect(trie.find('TEST')).to.be.false;
            expect(trie.find('TeSt')).to.be.true;
        });
    });

});
