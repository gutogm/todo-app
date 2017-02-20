var knex = require('knex')({
  client: 'mysql',
  connection: {
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'todo',
    charset  : 'utf8'
  }
});

module.exports = knex;