import { FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE } from '../actions/smurfActions';

const initialState = {
  isFetching: false,
  items: null,
  error: ''
};

const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_SMURFS_START:
      return {
        ...state,
        isFetching: true
      };
    
    case FETCHING_SMURFS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        smurfs: action.payload
      }

    case FETCHING_SMURFS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default smurfReducer;