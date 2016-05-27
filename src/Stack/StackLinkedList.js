exports.StackLinkedList = function (MAX_SIZE) {

    'use strict';

    var Node = require('../Nodes/LinkedListNode').LinkedListNode,

        head = null,
        size = 0;

    this.isEmptyStack = function () {
        return size === 0;
    };

    this.isFullStack = function () {
        return size === MAX_SIZE;
    };

    this.length = function () {
        return size;
    };

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

    this.top = function () {
        return head.data;
    };
};

