import axios from 'axios';

export const FETCHING_SMURFS_START = 'FETCHING_SMURFS_START';
export const FETCHING_SMURFS_SUCCESS = 'FETCHING_SMURFS_SUCCESS';
export const FETCHING_SMURFS_FAILURE = 'FETCHING_SMURFS_FAILURE';

// export const ADD_SMURF = 'ADD_SMURF'
export const ADD_SMURF_SUCCESS = 'ADD_SMURF_SUCCESS'
export const DELETE_SMURF_SUCCESS = 'DELETE_SMURF_SUCCESS';

export const fetchSmurfs = () => dispatch => {
  dispatch({ type: FETCHING_SMURFS_START });
  axios.get('http://localhost:3333/smurfs')
  .then(res => {
    // console.dir(res.data);
    dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data })
  })
  .catch(err => {
    dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err.response })
  })
};

// export const addSmurf = (smurfInfo) => {
//   // console.log('hello from action creator');
//   return { type: ADD_SMURF, payload: smurfInfo }
// }

export const addSmurf = smurfInfo => dispatch => {
  axios.post('http://localhost:3333/smurfs', smurfInfo)
  .then(res => {
    console.log('IT\'S WORKING!!!!!!');
    // console.dir(res);
    dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
  })
  .catch(err => {
    console.log(err);
  })
};

export const deleteSmurf = smurfId => dispatch => {
  axios.delete(`http://localhost:3333/smurfs/${smurfId}`)
  .then(res => {
    // console.log('bye nerd!', res);
    dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data })
  })
  .catch(err => {
    console.log(err);
  })
}