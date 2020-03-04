const express = require('express'),
    router = express.Router(),
    reviewModel = require('../models/reviewModel');


router.get('/:id?', async (req, res) => {
    const { id } = req.params;
    let reviewInfo = [];
    let RestaurantInfo = [];
    if (!!id) {
        RestaurantInfo = await reviewModel.getRestaurantById(id);
        reviewInfo = await reviewModel.getReviewDatabyRestId(id);

    }

    else {
        RestaurantInfo = await reviewModel.getAllrestaurantData();
        reviewInfo = [""];
    }
    res
        .render('template', {
            locals: {
                title: 'Restaurants',
                ArrayOfRestaurants: RestaurantInfo,
                ArrayofReview: reviewInfo
            },
            partials: {
                partial: 'partial-list'
            }
        })
})



module.exports = router