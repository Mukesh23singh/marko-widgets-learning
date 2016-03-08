// page controller

var template = require('./template.marko');

module.exports = function roothandler(req, res) {
    template.render({
       name: 'Franklin',
       colors: ['red', 'brown', 'purple'] 
    }, res );
};
