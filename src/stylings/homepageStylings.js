import { Button, Select,DatePicker } from 'antd';
import styled from 'styled-components';
 const { RangePicker } = DatePicker;
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
  margin-bottom:26px;
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
  margin-bottom:45px;
`;
export const ExportBtn = styled(Button)`
  display: inline-flex;
  padding: 15px 30px;
  align-items: center;
  text-align:center;
  gap: 8px;
  height:50px;
  width:160px;
  border-radius: 3px;
  background: #275f98;
  margin-top:20px;
 
`;
export const BtnSpan=styled.span`
color: #FFF;
font-family: SF Pro Display;
font-size: 17px;
font-style: normal;
font-weight: 500;
line-height: normal;`

export const HomeImgBackground = styled.div`
  position: relative;
`;
export const FormWrapper1 = styled.div`
  display: flex;
  justify-content: center;
`;
export const FormWrapper2 = styled.div`
  display: flex;
  justify-content: center;
`;

export const SelectOption = styled.select`
width:358px;
height:50px;
margin-bottom:20px;
margin-right:25px;
border-radius: 3px;
border: 1px solid var(--grey-t-75, #D1D6DC);
background: #FFF;

`;
export const ReportFormat = styled.select`
  width: 177px;
height: 50px;
flex-shrink: 0;
margin-bottom:20px;
  border-radius: 3px;
  border:  1px solid var(--grey-t-75, #d1d6dc);
  // background: #fff;
`;
export const ReportPeriod = styled(RangePicker)`

  width: 358px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 3px;
  margin-right:25px;
  /* color:black; */
  /* margin-bottom:20px; */
  border: 1px solid rgba(209, 214, 220, 1);
  background: #fff;
  
`;
export const Actions = styled.select`
  width: 177px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 3px;
  /* margin-bottom:20px; */
  border: 1px solid var(--grey-t-75, #d1d6dc);
  background: #fff;
`;
export const SelectTitle=styled.p`
margin:0px;
text-align:start;
color: var(--grey-t-25, #768595);
font-family: SF Pro Display;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
margin-bottom:5px;`