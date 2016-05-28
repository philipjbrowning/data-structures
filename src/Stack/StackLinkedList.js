exports.StackLinkedList = function (MAX_SIZE) {

    'use strict';

    var Node = require('../Nodes/LinkedListNode').LinkedListNode,

        head = null,
        size = 0;

    // Time Complexity: O(n)
    this.deleteStack = function () {
        while (head) {
            this.pop();
        }
    };

    // Time Complexity: O(1)
    this.isEmptyStack = function () {
        return size === 0;
    };

    // Time Complexity: O(1)
    this.isFullStack = function () {
        return size === MAX_SIZE;
    };

    // Time Complexity: O(1)
    this.length = function () {
        return size;
    };

    // Time Complexity: O(1)
    this.pop = function () {
        var newNode;

        if (head) {
            newNode = head;
            head = head.next;
            size--;
            return newNode.data;
        } else {
            throw new Error('Stack underflow');
        }
    };

    // Time Complexity: O(1)
    this.push = function (data) {
        var newNode;

        if (size < MAX_SIZE) {
            newNode = new Node(data);
            newNode.next = head;
            head = newNode;
            size++;
        } else {
            throw new Error('Stack overflow');
        }
    };

    // Time Complexity: O(1)
    this.top = function () {
        return head.data;
    };
};

