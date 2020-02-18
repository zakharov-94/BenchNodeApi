'use strict';
module.exports = function (app) {
    var test = require('../controllers/testController');

    // Routes
    app.route('/test')
        //.post(test.smt)
        .get(test.getHello);
};