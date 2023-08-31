import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_REQUEST,
  FETCH_DATA_FAILURE,
} from './actionTypes';
import axios from 'axios';
export const FetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});
export const FetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});
export const FetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
const FetchUserData = () => {
  return (dispatch) => {
    dispatch(FetchDataRequest());
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `eyJhbGciOiJFUzI1NiJ9.eyJzZXNzaW9uX2tleSI6ImFYeWVRN1MvbFBJNHBBdEk5Y1lYazBiNGNWelJnOHk5cnNxNm5SdEp4aWlKOTZLV0VKa3FRdjRWR2VScG5YQ2hzZkZJVW5nMzV6c293SXVKIiwiZXhwaXJlc19hdCI6IjIwMjMtMDktMDkgMDQ6MTc6MDggVVRDIn0.fdPs6QBDyK_xLtUHQI9_aUifkeGPYNIx5XAG1UMaahsPxni6hf-XZrElrOTSf4HNgBkELXYbtpp1OnFeOEzhGA`,
      'Page-Token':
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyYW5kb21WYWx1ZSI6NDEyMjg4MDM4OX0.T6WDsLscx9fSOkxgz_oTQSW6UUNLmhQsq4Jlxq8AeIY',
    };
    axios
      .get(
        'https://api.devtest.experience.com/v2/core/organizations/10225/users?page=1&limit=10',
        { headers },
      )
      .then((res) => {
        const data = res?.data?.data;
        // console.log(data, 'hhh');
        dispatch(FetchDataSuccess(data));
      })
      .catch((err) => {
        const errMsg = err.error;
        dispatch(FetchDataFailure(errMsg));
      });
  };
};
export default FetchUserData;
