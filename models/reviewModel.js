const db = require('./conn');

class RestaurantInfo {
    constructor(id, name, stars, distance, category, favorite_dish, takeout, ate_last) {
        this.id = id;
        this.name = name;
        this.stars = stars;
        this.distance = distance;
        this.category = category;
        thes.favorite_dish = favorite_dish;
        this.takeout = takeout;
        this.ate_last = ate_last;

    }
    static async getAllrestaurantData() {
        try {
            const response = await db.any('SELECT * FROM restaurant INNER JOIN review on restaurant_id = restaurant.id');
            console.log(response)



            return response;
        }
        catch (error) {
            console.error('ERROR:', error);
            return error;
        }
    }
    static async getAllReviewData() {
        try {
            const response = await db.any('SELECT * FROM review');
            console.log(response)
            return response
        }
        catch (error) {
            console.error('error', error);
            return error;
        }
    }
}






module.exports = RestaurantInfo;