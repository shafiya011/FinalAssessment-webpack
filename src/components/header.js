import React from "react";
import {
  SearchOutlined,
  MenuUnfoldOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { Tag, Button, Breadcrumb, Divider } from "antd";
import {
  Navbar,
  NavTool,
  LeftHead,
  Heading,
  OrgName,
  MenuFold,
  NameCard,
  Post,
  HeaderName,
  GuideBtn,
  DefaultTag,
  Bellbtn,
  BreadCrumbContainer,
  HamburgerContainer
} from "../stylings/headerStyling";
import Guide from "../asset/guide";
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
            <Breadcrumb
              className="breadCrums"
              separator=">"
              items={[
                {
                  title: "Organisation",
                },
                {
                  title: "Accounts",
                },
                {
                  title: "Reviews",
                  href: "",
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

        <Divider type="vertical" />
        <NameCard>S</NameCard>
        <div>
          <div>
            <HeaderName className="myName">Shafiya FA</HeaderName>
          </div>
          <Post className="admin">Onboarding Admin</Post>
        </div>
      </NavTool>
    </Navbar>
  );
};

export default Header;