import React from 'react';

const Flower = () => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <rect x="47.5" y="25" width="5" height="40" fill="green" />

        <circle cx="50" cy="30" r="10" fill="pink" />
        <circle cx="45" cy="35" r="10" fill="pink" />
        <circle cx="55" cy="35" r="10" fill="pink" />
        <circle cx="50" cy="40" r="10" fill="pink" />

        <circle cx="50" cy="35" r="5" fill="yellow" />
      </svg>
      ;
    </div>
  );
};

export default Flower;
