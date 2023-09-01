import styled from "styled-components";

export const DataContainer = styled.div`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  width: 100vw;
`;

export const Table = styled.ul`
  width: 100%;
  font-size: 17px;
  padding: 5px;
`;

export const TableHead = styled.li`
  background-color: #95a5a6;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  display: flex;
  /* padding: 7px; */
  padding: 10px 20px;

  /* @media (max-width: 400px) {
    display: none;
  } */
`;

export const TableRow = styled.li`
  background-color: #ffffff;
  /* padding: 2px; */
  display: flex;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
    padding: 10px 20px;
    justify-content: space-between;
    margin-bottom: 15px;

  /* @media (max-width: 400px) {
    display: block; */
/* 
    &:before {
      color: #6c7a89;
      padding-right: 10px;
      content: attr({Data});
      flex-basis: 50%;
      text-align: start;
      display: block;
    } */
  
`

export const Data = styled.div`
  flex-basis: 25%;
  padding: 7px;

  /* @media (max-width: 400px) {
    flex-basis: 100%;
    display: flex;
    padding: 10px 0;
  } */
`;
    