import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_REQUEST,
  FETCH_DATA_FAILURE,
} from './actionTypes';
const initialState = {
  loading: true,
  data: [],
  error: '',
};
const DataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_DATA_SUCCESS:
      // console.log(action.payload, 'lll');
      return {
        ...state,
        loading: true,
        data: action.payload,
        error: '',
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        data: [],
        error: action?.payload,
      };

    default:
      return state;
  }
};
export default DataReducer;
