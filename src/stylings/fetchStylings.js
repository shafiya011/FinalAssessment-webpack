import styled from 'styled-components';

export const DataContainer = styled.div`
  max-width: 1000px;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
  padding-right: 10px;
  width: 100vw;
`;
export const Heading = styled.h1`
  font-size: 50px;
  font-weight: 600;
  background: linear-gradient(to top, #09203f 0%, #537895 100%);
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
`;

export const Table = styled.table`
  width: 100%;
  font-size: 17px;
  padding: 5px;
`;

export const TableHead = styled.thead`
  background-color: #95a5a6;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  display: flex;
  text-align: start;
  padding: 10px 20px;
`;

export const TableRow = styled.tr`
  background-color: #ffffff;
  display: flex;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  padding: 10px 20px;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const Data = styled.td`
  flex-basis: 25%;
  padding: 7px;
`;
export const HeadData = styled.th`
  flex-basis: 25%;
  padding: 7px;
  text-align: start;
`;
