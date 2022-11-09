'use strict';
const axios = require('axios');
const path = 'https://jsonplaceholder.typicode.com/posts';

const Service = {
  async list() {
    try {
      const response = await axios.get(path);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  },
};

module.exports = Service;
