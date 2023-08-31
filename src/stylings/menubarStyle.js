import { Divider } from 'antd';
import styled from 'styled-components';
export const MenuContainer = styled.div`
  width: 80px;
  height: 746px;
  flex-shrink: 0;
  background: #fff;
  font-family: 'Poppins', sans-serif;
  @media (max-width: 400px) {
    display: none;
  }
`;
export const Icons = styled.div`
  display: flex;
  padding: 12px 28px;
  align-items: flex-start;
  gap: 10px;
  font-size: 24px;
  color: rgba(163, 173, 184, 1);
`;

export const IconDivider = styled.div`
  width: 50px;
  height: 1px;
  //   marging: 10px auto;
  margin: auto;
  text-align: center;
`;
export const Apps = styled.p`
  color: var(--Grey-100, #485c72);
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: center;
`;
export const CoustomDivider = styled(Divider)`
  margin: 10px auto;
  text-align: center;
`;
