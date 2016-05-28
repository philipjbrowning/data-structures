exports.QueueWithTwoStacks = function (MAX_SIZE) {

    'use strict';

    var Stack = require('../Stack/StackLinkedList').StackLinkedList,

        S1 = new Stack(MAX_SIZE),
        S2 = new Stack(MAX_SIZE);

    // Time Complexity: O(1) when S2 is not empty, O(n) otherwise
    this.DeQueue = function () {
        if (!S2.isEmptyStack()) {
            return S2.pop();
        } else {
            while (!S1.isEmptyStack()) {
                S2.push(S1.pop());
            }
            return S2.pop();
        }
    };

    // Time Complexity: O(1)
    this.EnQueue = function (data) {
        S1.push(data);
    };

    // Time Complexity: O(1)
    this.Front = function () {
        if (!S2.isEmptyStack()) {
            return S2.top();
        } else {
            while (!S1.isEmptyStack()) {
                S2.push(S1.pop());
            }
            return S2.top();
        }
    };

    // Time Complexity: O(1)
    this.IsEmptyQueue = function () {
        return S1.isEmptyStack();
    };

    // Time Complexity: O(1)
    this.QueueSize = function () {
        if (!S2.isEmptyStack()) {
            return S2.length();
        } else {
            return S1.length();
        }
    };
};

