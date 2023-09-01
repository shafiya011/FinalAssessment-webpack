import React from 'react';
import BillingReport from './components/billingReport';
import UserApi from './components/fetchApp';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
   
    <Router>
       <BillingReport/>
        <Routes>
          
          {/* <Route path="/billingreport"  element={<BillingReport />}></Route> */}
          <Route path="/orguserapi" exact element = {<UserApi/>}> </Route>
        </Routes>
      
    </Router>
  
   
  );
};
export default App;
