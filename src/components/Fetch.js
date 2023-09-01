import React from 'react';
import {
  DataContainer,
  TableHead,
  Table,
  TableRow,
  Data,
  Heading,
  HeadData,
} from '../stylings/fetchStylings';
import { useEffect } from 'react';
import FetchUserData from '../redux/action';
import { connect, useDispatch } from 'react-redux';
const FetchContainer = ({ userData }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchUserData());
  }, []);
  return (
    <div>
      <DataContainer>
        <Heading>Organisation User Data</Heading>
        <Table>
          <TableHead>
            <HeadData>Id</HeadData>
            <HeadData>First Name</HeadData>
            <HeadData>Last Name</HeadData>
            <HeadData>Mail Id</HeadData>
          </TableHead>
          <tbody>
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
          </tbody>
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
