import React from 'react';
import {DataContainer,TableHead,Table,TableRow,Data} from '../stylings/fetchStylings'
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
      <DataContainer>
        <Table>
          <TableHead>
            <Data>Name</Data>
            <Data>First Name</Data>
            <Data>Last Name</Data>
            <Data>Mail Id</Data>
          </TableHead>

          {userData &&
            userData?.data?.map((user, i) => {
              return (
                <TableRow key={i}>
                  <Data>{user?.id}</Data>
                  <Data>{user?.first_name}</Data>
                  <Data>{user?.last_name}</Data>
                  <Data>{user?.email}</Data>
                </TableRow>
              );
            })}
        </Table>
      </DataContainer>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    userData: state?.OrgUserData,
  };
};
export default connect(mapStateToProps)(FetchContainer);
