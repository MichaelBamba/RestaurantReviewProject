const express = require('express')
router = express.Router()
reviewModel = require('../models/reviewModel');

/* GET home page. */
router.get('/', async function (req, res, next) {
  const RestaurantInfo = await reviewModel.getAllrestaurantData();
  const ReviewInfo = await reviewModel.getReviewDatabyRestId();
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
router.post('/', async function (req, res) {
  const { restaunt_id, review_title, review_text } = req.body;
  const postData = await reviewModel.addReview(restaunt_id, review_title, review_text)
  console.log(postData);
  res.sendStatus(200).redirect("/");
})


module.exports = router;
