import { Button, Select } from 'antd';
import styled from 'styled-components';
// import React from 'react';
export const HomePageContainer = styled.div`
  width: 780px;
  height: 714px;
  flex-shrink: 0;

  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.1);
  text-align: center;
  margin: 20px 17px 20px 20px;
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 319px;
  height: 152px;
  flex-shrink: 0;
  margin: 50px auto 25px;
  margin:bottom:26px;
  text-align: center;
`;
export const Description = styled.p`
  color: var(--grey-t-15, #637487);
  text-align: center;
  font-family: SF Pro Display;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const ExportBtn = styled(Button)`
  display: inline-flex;
  padding: 15px 30px;
  align-items: center;
  gap: 8px;
  border-radius: 3px;
  background: #275f98;
`;
export const HomeImgContainer = styled.div`
  //   position: absolute;
`;
export const HomeImgBackground = styled.div`
  position: relative;
`;
export const FormWrapper1 = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const FormWrapper2 = styled.div`
  display: flex;
  justify-content: space-around;
`;
export const SelectReport = styled.div`
  border: 1px solid black;
  width: 358px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 3px;
  // border: 1px solid var(--grey-t-75, #d1d6dc);
  background: #fff;
  padding: 15px auto 16px 12px;
  text-align: start;
`;
export const SelectOption = styled(Select)`
  border: 1px solid black;
  width: 358px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 3px;
  // border: 1px solid var(--grey-t-75, #d1d6dc);
  background: #fff;
  padding: 15px auto 16px 12px;
  text-align: start;
`;
export const ReportFormat = styled(Select)`
  width: 177px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid var(--grey-t-75, #d1d6dc);
  // background: #fff;
`;
export const ReportPeriod = styled(Select)`
  width: 358px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid var(--grey-t-75, #d1d6dc);
  background: #fff;
`;
export const Actions = styled(Select)`
  width: 177px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid var(--grey-t-75, #d1d6dc);
  background: #fff;
`;
