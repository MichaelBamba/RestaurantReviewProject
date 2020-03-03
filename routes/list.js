const express = require('express'),
    router = express.Router(),
    reviewModel = require('../models/reviewModel');


router.get('/:id?', async (req, res) => {
    const { id } = req.params;

    let RestaurantInfo = [];
    if (!!id) {
        RestaurantInfo = await reviewModel.getRestaurantById(id)
    }
    else {
        RestaurantInfo = await reviewModel.getAllrestaurantData();
    }
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