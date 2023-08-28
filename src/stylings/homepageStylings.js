import { Button } from 'antd';
import styled from 'styled-components';
// import React from 'react';
export const HomePageContainer = styled.div`
  width: 780px;
  height: 714px;
  flex-shrink: 0;
  border: 1px solid black;
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
`;
