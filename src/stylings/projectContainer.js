import React from 'react';
import styled from 'styled-components';
export const ProjectContainer = styled.div`
  box-sizing: border-box;
  background-color: rgba(248, 248, 249, 1);
  width: 100%;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  @media (max-width: 400px) {
    width: 100%;
    display: block;
    flex-direction: column;
  }
`;
export const Apps = styled.div`
display:flex;
width:100vw;
margin:0px
padding:0px;
box-sizing:border-box;
box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.2);`;
