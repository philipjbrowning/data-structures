var jsdom = require('mocha-jsdom');

describe('Data Structures Built in JavaScript', function () {

    'use strict';

    jsdom();

    // Stack Implementations
    require('./Stack/TestStackLinkedList').TestStackLinkedList();

    // Queue Implementations


});

