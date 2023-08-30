import React from 'react';
import styled from 'styled-components';
export const ProjectContainer = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  background-color: rgba(248, 248, 249, 1);
  width: 100vw;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  width: 100vw;
  @media (max-width: 400px) {
    width: 100%;
    display: block;
    flex-direction: column;
  }
`;
