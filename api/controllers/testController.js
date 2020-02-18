'use strict';

exports.getHello = function (req, res) {
    res.json(["Hello", "World", "!!!"]);
};