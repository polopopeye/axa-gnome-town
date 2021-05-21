import React from 'react';

import axios from 'axios';

let urlAPI =
  'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';
let city = 'Brastlewark';

export default async function retrieveData(callback) {
  axios
    .get(urlAPI)
    .then(function (response) {
      callback(response.data[city]);
      return response.data[city].length;
    })
    .catch(function (error) {
      console.log(error);
      return 'error';
    });
}
