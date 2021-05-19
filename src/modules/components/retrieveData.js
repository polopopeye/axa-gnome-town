import React from 'react';
import axios from 'axios';

const RetrieveData = () => {
  //   const getData = () => {
  axios
    .get(
      'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json'
    )
    .then(function (response) {
      console.log(response);

      return response;
    })
    .catch(function (error) {
      console.log(error);
      return 'error';
    });
};

export default RetrieveData;
