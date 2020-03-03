const express = require('express'),
    router = express.Router(),
    reviewModel = require('../models/reviewModel');


router.get('/:id?', async (req, res) => {
    const RestaurantInfo = await reviewModel.getAllrestaurantData();
    res
        .render('template', {
            locals: {
                title: 'Restaurants',
                ArrayOfRestaurants: RestaurantInfo
            },
            partials: {
                partial: 'partial-list'
            }
        })
})
module.exports = router