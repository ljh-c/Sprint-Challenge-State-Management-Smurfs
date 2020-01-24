import React from 'react';
import { deleteSmurf } from '../actions/smurfActions';

const SmurfCard = ({ smurf, dispatch }) => {
  return (
    <div>
      <p>{smurf.name}</p>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
      <button onClick={() => dispatch(deleteSmurf(smurf.id))}>Delete {smurf.name}</button>
    </div>
  );
};

export default SmurfCard;