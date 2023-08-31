import React from 'react';
import { MenuUnfoldOutlined, BellOutlined } from '@ant-design/icons';
import { Tag, Button, Breadcrumb } from 'antd';
import {
  Navbar,
  NavTool,
  LeftHead,
  Heading,
  OrgName,
  MenuFold,
  Post,
  HeaderName,
  GuideBtn,
  DefaultTag,
  Bellbtn,
  VerticalDivider,
  UserImage,
  ImageCard,
  NameContainer,
  AdminWrapper,
  BreadCrums,
} from '../stylings/headerStyling';
import Guide from '../asset/guide';
import DropDown from '../asset/useActionDropdown';
const Header = () => {
  return (
    <Navbar className="reviewNavbar">
      <LeftHead>
        <MenuFold>
          <MenuUnfoldOutlined />
        </MenuFold>

        <Heading>
          <OrgName>North Pacific</OrgName>
          <div>
            <BreadCrums
              className="breadCrums"
              separator=">"
              items={[
                {
                  title: 'Organisations',
                },
                {
                  title: 'Accounts',
                },
                {
                  title: 'Reports',
                  href: '',
                },
              ]}
            />
          </div>
        </Heading>
      </LeftHead>

      <NavTool>
        <div className="headTool">
          <DefaultTag id="orgTag" color="processing">
            Default
          </DefaultTag>
        </div>

        <GuideBtn className="headTool" shape="circle">
          <Guide />
        </GuideBtn>

        <Bellbtn className="headTool">
          <Button shape="circle" icon={<BellOutlined />} />
        </Bellbtn>

        <VerticalDivider type="vertical" />
        <ImageCard>
          <UserImage
            src="https://s3-alpha-sig.figma.com/img/7ffe/452c/edd0f87dda0d02800c7b0ef846a648c9?Expires=1694390400&amp;Signature=I53K8PH-zjWP3~CiIdjIjk1GFNKlUDZjwWN1VpQqz1IVZ-LdKSeqlOAge85hXjKyqs-C5hfUtH3jLclzh47LQXSk~xcDWQNIac7GA9C~o7oOzbfR7Y7KIsVFsXLFJooCizWafv4e8EYAaUCyAjUyx1TspgX4ozMeyzXzX2asdm3rIbUMhqUpzXK1YXfDjwgBc8cX39aKX9vdqHO1pnwbqOc7Q6ce7D44rvZV5c4Y5tkNNK39UqWcVVRCuma~4X-U~c8IjKfOyctGOHWzS01lXDgZkl48XLz4qzg2TFXBhL1y6-C73WWHj0XvsKUQ1XOcnJE-FFO77JNU~K4YhJVVZQ__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="userImage"
          ></UserImage>
        </ImageCard>
        <AdminWrapper>
          <NameContainer>
            <HeaderName className="myName">Bessie Cooper</HeaderName>

            <DropDown />
          </NameContainer>
          <Post className="admin">Super Admin</Post>
        </AdminWrapper>
      </NavTool>
    </Navbar>
  );
};

export default Header;
