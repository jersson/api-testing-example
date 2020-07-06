'use strict';
const axios = require('axios/index');
const path = 'https://jsonplaceholder.typicode.com/posts';

const Service = {
    list() {
        return axios.get(path)
                .then((res) => {
                    return res.data;
                })
                .catch((err) => {
                    return err;
                });
    }
};

module.exports = Service;