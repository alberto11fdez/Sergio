var express = require('express');
var router = express.Router();
var usersRouter = require('./usersRoute');
var productRouter = require('./productRoute');
var offerRouter = require('./offerRoute');
var auctionRouter = require('./auctionRoute'); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = {
  router,
  usersRouter,
  productRouter,
  offerRouter,
  auctionRouter,
}
