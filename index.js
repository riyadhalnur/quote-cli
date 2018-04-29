'use strict';

const axios = require('axios');
const _ = require('lodash');

const baseUrl = 'https://favqs.com/api/';
const headers = {
  Authorization: 'Token token=a857a430e3a1e6d481eaafc1ab6e1f19'
};

module.exports = (opts, callback) => {
  return new Promise((resolve, reject) => {
    opts = opts || '';

    axios({
      url: opts === 'qotd' ? '/qotd.json' : '/quotes/',
      baseURL: baseUrl,
      headers: headers
    })
      .then(response => {
        if (response.data.quotes && _.isArray(response.data.quotes)) {
          let result = { quote: _.sample(response.data.quotes) };
          return resolve(result);
        }

        return resolve(response.data);
      })
      .catch(err => reject(err));
  });
};
