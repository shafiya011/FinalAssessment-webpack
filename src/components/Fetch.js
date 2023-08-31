import React from 'react';
import { useEffect } from 'react';
import FetchUserData from '../redux/action';
import { connect, useDispatch } from 'react-redux';
const FetchContainer = ({ userData }) => {
  const dispatch = useDispatch();
  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyYW5kb21WYWx1ZSI6NDEyMjg4MDM4OX0.T6WDsLscx9fSOkxgz_oTQSW6UUNLmhQsq4Jlxq8AeIY';
  useEffect(() => {
    dispatch(FetchUserData());
  }, []);
  // console.log(userData, 'ss');
  return (
    <div>
      <div>
        <table className="userTable">
          <thead>
            <th>Name</th>
            <th>Mail Id</th>
          </thead>

          {userData &&
            userData?.data?.map((user, i) => {
              return (
                <tr key={i}>
                  <td>{user?.id}</td>
                  <td>{user?.first_name}</td>
                  <td>{user?.last_name}</td>
                  <td>{user?.email}</td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state?.OrgUserData,
  };
};
export default connect(mapStateToProps)(FetchContainer);
