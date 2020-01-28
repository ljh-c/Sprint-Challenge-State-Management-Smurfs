import React from 'react';
import { deleteSmurf, stageEdit } from '../actions/smurfActions';

// make edit buttons disappear when editing

const SmurfCard = ({ smurf, dispatch }) => {
  return (
    <div>
      <p>{smurf.name}</p>
      <p>{smurf.age}</p>
      <p>{smurf.height}</p>
      <button onClick={() => dispatch(stageEdit(smurf))}>Edit info</button>{' '}
      <button onClick={() => dispatch(deleteSmurf(smurf.id))}>Delete {smurf.name}</button>
    </div>
  );
};

export default SmurfCard;