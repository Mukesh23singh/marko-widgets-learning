/**
 * Marko compiler uses render.js first, if it is present in the tag directory before honoring template.marko!
 */
var template = require('./template.marko');

module.exports = function name(input, out) {
    //out.write('Hello ' + input.name + '!');
    var name = input.name;
    var messagecount = input.messageCount; // index's template.marko file uses "message-count" attribute.
    
    if(name){
        name = name.toUpperCase();
    }else{
        name = '(no name)';
    }
    console.log('message count is : ', messagecount);
    template.render({
        name: name,
        messageCount: messagecount
     }, out);
};
