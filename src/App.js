import React from 'react';
import BillingReport from './components/billingReport';
import UserApi from './components/fetchApp';

const App = () => {
  return (
    <div>
      <BillingReport />
      <UserApi />
    </div>
  );
};
export default App;
