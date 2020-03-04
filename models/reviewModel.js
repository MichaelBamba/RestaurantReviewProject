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
            const response = await db.any('SELECT * FROM restaurant');



            return response;
        }
        catch (error) {
            console.error('ERROR:', error);
            return error;
        }
    }
    static async getRestaurantById(id) {
        try {
            const response = await db.any(`select * from restaurant where restaurant.id = ${id}`);

            return response
        }
        catch (error) {
            console.error('ERROR:', error);
            return error;
        }
    }
    static async getReviewDatabyRestId(id) {
        try {
            const response = await db.any(`SELECT * FROM review where review.restaurant_id = ${id}`);

            return response
        }
        catch (error) {
            console.error('error', error);
            return error;
        }
    }
    static async addReview(restaurant_id, review_title, review_text) {
        try {
            const response = await db.one(`INSERT INTO review (reviewer_id,  restaurant_id,stars, title, review)
            values ($1, $2, $3, $4, $5) RETURNING id;`, [1, restaurant_id, 3, review_title, review_text]
            );
            return response;
        }
        catch (error) {
            console.error('error', error);
            return error;
        }
    }
}






module.exports = RestaurantInfo;