import React from 'react';
import styled from 'styled-components';
export const ProjectContainer = styled.div`
  box-sizing: border-box;
  background-color: rgba(248, 248, 249, 1);
  width: 100vw;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  // left: 81px;
  // margin-left: 81px;
  width: 100vw;
  @media (max-width: 400px) {
    width: 100%;
    display: block;
    flex-direction: column;
  }
`;
