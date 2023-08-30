import { Button, Tag, Divider, Breadcrumb } from 'antd';
import { styled } from 'styled-components';
export const Navbar = styled.nav`
  width: 1220px;
  height: 70px;
  background: #fff;
  box-sizing: border-box;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 50;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
export const NavTool = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 400px) {
    width: 100%;
    display: none;
  }
`;
export const LeftHead = styled.div`
  display: flex;
  align-items: center;
  margin: 14px 0px;
`;
export const Heading = styled.div`
  width: 100%;
`;
export const OrgName = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: rgba(65, 83, 103, 1);
  font-family: 'SF Pro Display';
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.18px;
  text-transform: capitalize;
  margin-bottom: 5px;
`;
export const MenuFold = styled.div`
  font-size: 23px;
  text-align: center;
  margin: 23px 20px;
`;
export const Letter = styled.div`
  border-radius: 50%;
`;
export const BreadCrums = styled(Breadcrumb)`
  color: var(--blue-t-15, #3d7ab6);
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.13px;
  text-transform: capitalize;
  .ant-breadcrumb a {
    color: rgba(65, 83, 103, 1);
    font-family: SF Pro Display;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.13px;
    text-transform: capitalize;
  }
`;

export const ImageCard = styled.div`
  color: rgb(255, 255, 255);
  border: 1px solid black;
  border-radius: 30px;

  width: 36px;
  height: 36px;
  text-align: center;

  margin-right: 10px;
`;
export const HeaderName = styled.label`
  color: var(--grey-100, #485c72);
  text-align: right;
  font-family: SF Pro Display;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.13px;
  text-transform: capitalize;
  margin-right: 10px;
`;
export const AdminWrapper = styled.div`
  margin-right: 20px;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: flex-start;
`;
export const Post = styled.label`
  color: var(--grey-t-50, #a3adb8);
  font-family: SF Pro Display;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -0.12px;
  text-transform: capitalize;
`;
export const PageTitle = styled.div`
  color: var(--grey-s-10, #415367);
  font-family: SF Pro Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.18px;
  text-transform: capitalize;
`;
export const GuideBtn = styled(Button)`
  margin-right: 15px;
  outline: none;
  background-color: rgba(240, 242, 244, 1);
  padding: 6px;
`;
export const DefaultTag = styled(Tag)`
  display: flex;
  padding: 4px 14px 6px 14px;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 2px;
  border: 1px solid var(--blue-t-65, #afc8e1);
  background: var(--blue-t-92, #edf3f8);
  margin-right: 15px;
  gap: 10px;
  color: rgba(27, 99, 169, 1);
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  font-variant: all-small-caps;
`;
export const Bellbtn = styled.div`
  margin-right: 15px;
`;
export const VerticalDivider = styled(Divider)`
  width: 1px;
  height: 20px;
  margin: 0px;
  margin-right: 15px;
`;
export const UserImage = styled.img`
  display: flex;
  width: 36px;
  height: 36px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
`;
