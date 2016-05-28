exports.TestStackLinkedList = function () {

    'use strict';

    var expect = require('chai').expect,
        StackLinkedList = require('../../src/Stack/StackLinkedList').StackLinkedList;

    describe('Stack implemented with a linked list', function () {

        var myStack;

        beforeEach(function () {
            myStack = new StackLinkedList(3);
        });

        it('should be empty when initialized.', function () {
            expect(myStack.length()).to.equal(0);
            expect(myStack.isEmptyStack()).to.equal(true);
            expect(myStack.isFullStack()).to.equal(false);
        });

        it('deleteStack() should remove all nodes', function () {
            myStack.push('A');
            myStack.push('B');
            myStack.push('C');
            myStack.deleteStack();
            expect(myStack.isEmptyStack()).to.equal(true);
        });

        it('isFullStack() should be true if full, false if not', function () {
            expect(myStack.isFullStack()).to.equal(false);
            myStack.push('A');
            myStack.push('B');
            myStack.push('C');
            expect(myStack.isFullStack()).to.equal(true);
        });

        it('isEmptyStack() should be true if empty, false if not', function () {
            expect(myStack.isEmptyStack()).to.equal(true);
            myStack.push('A');
            expect(myStack.isEmptyStack()).to.equal(false);
            myStack.push('B');
        });

        it('length() should count the number of nodes accurately', function () {
            myStack.push('A');
            expect(myStack.length()).to.equal(1);
            myStack.push('B');
            myStack.push('C');
            expect(myStack.length()).to.equal(3);
            myStack.top();
            myStack.top();
            expect(myStack.length()).to.equal(3);
            myStack.pop();
            expect(myStack.length()).to.equal(2);
        });

        it('pop() should return the most recently pushed node and remove it', function () {
            myStack.push('A');
            expect(myStack.pop()).to.equal('A');
            myStack.push('B');
            myStack.push('C');
            expect(myStack.pop()).to.equal('C');
        });

        it('pop() should throw stack underflow error if called while the stack is empty', function () {
            expect(myStack.pop).to.throw(Error);
        });

        it('push() should insert data correctly', function () {
            myStack.push('A');
            expect(myStack.top()).to.equal('A');
            myStack.push('B');
            expect(myStack.pop()).to.equal('B');
            myStack.push('C');
            expect(myStack.pop()).to.equal('C');
        });

        it('push() should throw stack overflow error if called while the stack is full', function () {
            myStack.push('A');
            myStack.push('B');
            myStack.push('C');
            expect(myStack.push).to.throw(Error);
        });

        it('top() should return the most recently pushed node without removing it', function () {
            myStack.push('A');
            expect(myStack.top()).to.equal('A');
            myStack.push('B');
            myStack.push('C');
            expect(myStack.top()).to.equal('C');
        });
    });

};

