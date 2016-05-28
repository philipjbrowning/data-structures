var jsdom = require('mocha-jsdom');

describe('Data Structures Built in JavaScript', function () {

    'use strict';

    jsdom();

    // Stack Tests
    require('./Stack/TestStackLinkedList').TestStackLinkedList();

    // Queue Tests
    require('./Queue/TestQueueLinkedList').TestQueueLinkedList();


});

