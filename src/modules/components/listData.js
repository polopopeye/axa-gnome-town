import React from 'react';

const listData = (params) => {
  return (
    <div>
      <h1>{params[0].id}</h1>
      <h1>{params[1].id}</h1>
      <h1>{params[2].id}</h1>
    </div>
  );
};

export default listData;
