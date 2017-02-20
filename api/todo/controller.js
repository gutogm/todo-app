var express = require('express');
var router = express.Router();
var Todo = require('./model')

/* GET todo listing. */
router.route('/')

.get(function(req, res, next) {
	Todo.collection().fetch().then(function(todos) {
		res.json(todos.toJSON());
    });
})

.post(function (req, res) {
    Todo.forge({
      title: req.body.title,
      description: req.body.description
    })
    .save()
    .then(function (todo) {
      res.json({error: false, data: {title: todo.get('title')}});
    })
    .catch(function (err) {
      res.status(500).json({error: true, data: {message: err.message}});
    }); 
  });

module.exports = router;
