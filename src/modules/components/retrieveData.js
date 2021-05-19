import React from 'react';
import axios from 'axios';
const RetrieveData = () => {
  //   const getData = () => {
  axios
    .get(
      'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json',
      { params: { id: 0 } }
    )
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  //   };

  //   return (
  //     <>
  //       <button onClick={getData}>TESTEANDO</button>
  //     </>
  //   );
};

export default RetrieveData;
