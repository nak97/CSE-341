const routes = require('express').Router();

routes.get('/', (req, res, next)=>{
  res.json('Elfrie ');
});

module.exports = routes;
