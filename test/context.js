
var context = require('../lib/context');

exports['context without instance variable'] = function (test) {
    var mycontext = context.createContext();
    test.equal(mycontext.isInstanceVariable('a'), false);
}

exports['context with instance variable'] = function (test) {
    var mycontext = context.createContext();
    mycontext.defineInstanceVariable('a');
    test.equal(mycontext.isInstanceVariable('a'), true);
}

exports['context without local variable'] = function (test) {
    var mycontext = context.createContext();
    test.equal(mycontext.isLocalVariable('a'), false);
}

exports['context with local variable'] = function (test) {
    var mycontext = context.createContext();
    mycontext.defineLocalVariable('a');
    test.equal(mycontext.isLocalVariable('a'), true);
}

exports['context without argument'] = function (test) {
    var mycontext = context.createContext();
    test.equal(mycontext.isArgumentVariable('a'), false);
}

exports['context with argument'] = function (test) {
    var mycontext = context.createContext();
    mycontext.defineArgumentVariable('a');
    test.equal(mycontext.isArgumentVariable('a'), true);
}
