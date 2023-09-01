import React from 'react'
import store from '../redux/store';
import { Provider } from 'react-redux';
import FetchContainer from '../components/Fetch';
import ReactDOM from 'react-dom';
import Fetch from '../components/Fetch';

const UserApi = () => {
  return (
    <div>
       <Provider store={store}>
      <FetchContainer />
    </Provider>
    </div>
  )
}

export default UserApi
