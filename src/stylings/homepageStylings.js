import { Button, Select, DatePicker } from 'antd';
import styled from 'styled-components';
const { RangePicker } = DatePicker;
export const HomePageContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
  width: 780px;
  height: 714px;
  flex-shrink: 0;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.1);
  text-align: center;
  margin: 20px 17px 20px 20px;
  font-family: 'Poppins', sans-serif;
  @media (max-width: 400px) {
    width: 100%;
    display: block;
    margin: 0px;
  }
`;
export const ImageContainer = styled.div`
  position: relative;
  width: 319px;
  height: 152px;
  flex-shrink: 0;
  margin: 50px auto 25px;
  margin-bottom: 26px;
  text-align: center;
`;
export const Description = styled.p`
  color: var(--grey-t-15, #637487);
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 45px;
`;
export const ExportBtn = styled(Button)`
  display: inline-flex;
  padding: 15px 30px;
  align-items: center;
  text-align: center;
  gap: 8px;
  height: 50px;
  width: 160px;
  border-radius: 3px;
  background: #275f98;
  margin-top: 20px;
  @media (max-width: 400px) {
    text-align: center;
    display: block;
    margin: 15px auto;
  }
`;
export const BtnSpan = styled.span`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const HomeImgBackground = styled.div`
  position: relative;
`;
export const FormWrapper1 = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 400px) {
    width: 350px;
    margin: 0px;
    display: block;
    padding: 0px;
  }
`;
export const FormWrapper2 = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 400px) {
    width: 350px;

    display: block;
    padding: 0px;
  }
`;

export const SelectOption = styled.select`
  width: 358px;
  height: 50px;
  margin-bottom: 20px;
  margin-right: 25px;
  border-radius: 3px;
  border: 1px solid var(--grey-t-75, #d1d6dc);
  background: #fff;
  color: rgba(72, 92, 114, 1);
  font-size: 15px;
  font-weight: 200;
  padding: 15px 0px 16px 12px;
  font-family: 'Poppins', sans-serif;
  @media (max-width: 400px) {
    width: 350px;
  }
`;
export const ReportFormat = styled.select`
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@1&family=Karla:wght@200;400&family=Poppins:wght@100&display=swap');
  width: 177px;
  height: 50px;
  flex-shrink: 0;
  margin-bottom: 20px;
  border-radius: 3px;
  border: 1px solid var(--grey-t-75, #d1d6dc);
  background: #fff;
  color: rgba(72, 92, 114, 1);
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-size: 15px;
  padding: 15px 0px 16px 12px;
  @media (max-width: 400px) {
    width: 350px;
  }
`;
export const ReportPeriod = styled(RangePicker)`
  width: 358px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 3px;
  color: rgba(72, 92, 114, 1);
  font-family: 'Poppins', sans-serif;
  margin-right: 25px;
  font-size: 16px;
  border: 1px solid rgba(209, 214, 220, 1);
  background: #fff;
  @media (max-width: 400px) {
    width: 350px;
    margin-bottom: 20px;
  }
`;
export const Actions = styled.select`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap');
  width: 177px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid var(--grey-t-75, #d1d6dc);
  background: #fff;
  color: rgba(72, 92, 114, 1);
  font-size: 15px;
  padding: 15px 0px 16px 12px;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  @media (max-width: 400px) {
    width: 350px;
    margin-bottom: 20px;
  }
`;
export const SelectTitle = styled.p`
  margin: 0px;
  text-align: start;
  color: rgba(118, 133, 149, 1);
  font-size: 15px;
  font-style: normal;
  line-height: normal;
  margin-bottom: 5px;
  word-spacing: 0.3px;
  letter-spacing: 0.3px;
  font-weight: 300;
`;
