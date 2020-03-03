const express = require('express')
router = express.Router()
reviewModel = require('../models/reviewModel');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const RestaurantInfo = await reviewModel.getAllrestaurantData();
  const ReviewInfo = await reviewModel.getAllReviewData();
  res.render('template', {
    locals: {
      title: 'SOLO',
      RestaurantInfo: RestaurantInfo,
      ReviewInfo: ReviewInfo
    },
    partials: {
      partial: 'partial-index'
    }
  });
});

module.exports = router;
