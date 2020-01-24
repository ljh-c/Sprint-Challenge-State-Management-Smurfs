import React from 'react';

const SmurfCard = ({ smurf }) => {
  return (
    <div>
      <p>{smurf.name}</p>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
    </div>
  );
};

export default SmurfCard;