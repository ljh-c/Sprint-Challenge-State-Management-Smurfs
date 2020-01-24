import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSmurfs } from '../actions/smurfActions';
import SmurfForm from './SmurfForm';
import SmurfCard from './SmurfCard';

const SmurfVillage = () => {
  const data = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <>
      {!data.smurfs && !data.isFetching && (
        <>
          <button onClick={() => dispatch(fetchSmurfs())}>Get Smurfs</button>
        </>
      )}
      {data.isFetching && (
        <p>Loading...</p>
      )}
      {data.smurfs && !data.isFetching && (
        <>
          <SmurfForm dispatch={dispatch} editingSmurf={data.editingSmurf} isEditing={data.isEditing} />
          {data.smurfs.map(smurf => <SmurfCard key={smurf.id} smurf={smurf} dispatch={dispatch} />)}
        </>
      )}
    </>
  );
}

export default SmurfVillage;