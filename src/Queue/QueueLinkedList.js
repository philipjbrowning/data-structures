exports.QueueLinkedList = function (MAX_SIZE) {

    'use strict';

    var Node = require('../Nodes/LinkedListNode').LinkedListNode,

        back,
        front,
        size = 0;

    this.DeQueue = function () {
        var newNode;
        if (size > 1) {
            newNode = front;
            front = front.next;
            size--;
        } else if (size === 1) {
            newNode = front;
            front = null;
            back = null;
            size--;
        } else {
            throw new Error('Queue underflow');
        }
        return newNode.data;
    };

    this.EnQueue = function (data) {
        var newNode;
        if (size < MAX_SIZE) {
            newNode = new Node(data);
            if (!front) {
                front = newNode;
                back = newNode;
            } else {
                back.next = newNode;
                back = newNode;
            }
            size++;
        } else {
            throw new Error('Queue overflow');
        }
    };

    this.Front = function () {
        return front.data;
    };

    this.IsEmptyQueue = function () {
        return size === 0;
    };

    this.QueueSize = function () {
        return size;
    };

};

