'use strict';
const Service = require('./service');

const Controller = {
    getPosts(req,res,next) {
        return Service.list()
                .then((posts) => {
                    return res.status(201).json(posts);
                })
                .catch((err) => {
                    return next(err);
                });
    }
};

module.exports = Controller;