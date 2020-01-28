import { 
  FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, 
  ADD_SMURF_SUCCESS, DELETE_SMURF_SUCCESS } from '../actions/smurfActions';

const initialState = {
  isFetching: false,
  smurfs: null,
  error: '', 
  editingSmurf: null,
  isEditing: false
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

    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      };

    case DELETE_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload
      }

    case 'STAGE_EDIT':
      return {
        ...state,
        editingSmurf: action.payload,
        isEditing: true
      };

    case 'SEND_EDIT':
      return {
        ...state,
        editingSmurf: '', 
        isEditing: false
      }

    case 'EDIT_SMURF_SUCCESS':
      return {
        ...state,
        smurfs: action.payload
      };

    default:
      return state;
  }
};

export default smurfReducer;