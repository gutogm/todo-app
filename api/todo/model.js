var config = require('../../bin/config')
var bookshelf = require('bookshelf')(config);

var Todo = bookshelf.Model.extend({
  tableName: 'todo'
});

module.exports = Todo;