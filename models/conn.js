const pgp = require("pg-promise")({
    query: function (e) {
        console.log("QUERY:", e.query);
    }
});
const options = {
    host: 'localhost',
    database: 'restaurantexercise'

};



const db = pgp(options);

module.exports = db