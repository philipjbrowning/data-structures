exports.TestQueueLinkedList = function () {

    'use strict';

    var expect = require('chai').expect,
        QueueLinkedList = require('../../src/Queue/QueueLinkedList').QueueLinkedList;

    describe('Queue implemented with a linked list', function () {

        var myQueue;

        beforeEach(function () {
            myQueue = new QueueLinkedList(3);
        });

        it('should be empty when initialized.', function () {
            expect(myQueue.IsEmptyQueue()).to.equal(true);
            expect(myQueue.QueueSize()).to.equal(0);
        });

        it('DeQueue() should remove a node from the front of the queue', function () {
            myQueue.EnQueue('A');
            myQueue.EnQueue('B');
            myQueue.EnQueue('C');
            expect(myQueue.DeQueue()).to.equal('A');
            expect(myQueue.DeQueue()).to.equal('B');
            expect(myQueue.DeQueue()).to.equal('C');
            // expect(myQueue.DeQueue).to.throw(Error);
        });

        it('DeQueue() on an empty queue should throw error queue underflow', function () {
            expect(myQueue.DeQueue).to.throw(Error);
        });


        it('EnQueue() should add a node to the back of the queue', function () {
            myQueue.EnQueue('A');
            myQueue.EnQueue('B');
            myQueue.EnQueue('C');
            expect(myQueue.DeQueue()).to.equal('A');
            expect(myQueue.DeQueue()).to.equal('B');
            expect(myQueue.DeQueue()).to.equal('C');
        });

        it('EnQueue() on an full queue should throw error queue overflow', function () {
            myQueue.EnQueue('A');
            myQueue.EnQueue('B');
            myQueue.EnQueue('C');
            expect(myQueue.EnQueue).to.throw(Error);
        });

        it('Front() should return the node in the front of the queue without removing it', function () {
            myQueue.EnQueue('A');
            myQueue.EnQueue('B');
            myQueue.EnQueue('C');
            expect(myQueue.Front()).to.equal('A');
            expect(myQueue.Front()).to.equal('A');
            expect(myQueue.Front()).to.equal('A');
        });

        it('IsEmptyQueue() should return true if empty, false if not', function () {
            expect(myQueue.IsEmptyQueue()).to.equal(true);
            myQueue.EnQueue('A');
            expect(myQueue.IsEmptyQueue()).to.equal(false);
            myQueue.EnQueue('B');
        });

        it('QueueSize() should return the size of the queue accurately', function () {
            myQueue.EnQueue('A');
            expect(myQueue.QueueSize()).to.equal(1);
            myQueue.EnQueue('B');
            myQueue.EnQueue('C');
            expect(myQueue.QueueSize()).to.equal(3);
            myQueue.Front();
            myQueue.Front();
            expect(myQueue.QueueSize()).to.equal(3);
            myQueue.DeQueue();
            expect(myQueue.QueueSize()).to.equal(2);
        });


    });

};

