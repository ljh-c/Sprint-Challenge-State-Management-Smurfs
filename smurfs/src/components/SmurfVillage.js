import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSmurfs } from '../actions/smurfActions';
import SmurfCard from './SmurfCard';

const SmurfVillage = () => {
  const data = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <>
      {!data.smurfs && !data.isFetching && (
        <>
          <br />
          <button onClick={() => dispatch(fetchSmurfs())}>Get Smurfs</button>
        </>
      )}
      {data.isFetching && (
        <p>Loading...</p>
      )}
      {data.smurfs && !data.isFetching && (
        <>
          {data.smurfs.map(smurf => <SmurfCard key={smurf.id} smurf={smurf} />)}
        </>
      )}
    </>
  );
}

export default SmurfVillage;