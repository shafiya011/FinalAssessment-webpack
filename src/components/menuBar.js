import React from 'react';
import Dashboard from '../asset/dashboard';
import Logo from '../asset/logo';
import Heirrarchy from '../asset/heirrarchy';
import Transaction from '../asset/transaction';
import Setting from '../asset/setting';
import { Divider } from 'antd';
import Listings from '../asset/listings';
import Campaign from '../asset/campaign';
import Reviews from '../asset/reviews';
import Site from '../asset/reportSite';
import Widges from '../asset/widges';
import Monitor from '../asset/monitor';
import {
  Icons,
  MenuContainer,
  IconDivider,
  Apps,
  CoustomDivider,
} from '../stylings/menubarStyle';

const MenuBar = () => {
  const menuApps = [
    <Listings />,
    <Campaign />,
    <Reviews />,
    <Site />,
    <Widges />,
    <Monitor />,
  ];
  const MenuIcons = [
    <Logo />,
    <Dashboard />,
    <Heirrarchy />,
    <Transaction />,
    <Setting />,
  ];
  return (
    <MenuContainer>
      {MenuIcons.map((icons, index) => (
        <Icons key={index}>{icons}</Icons>
      ))}
      <IconDivider>
        <CoustomDivider />
      </IconDivider>
      <Apps>Apps</Apps>
      {menuApps.map((icons, index) => (
        <Icons key={index}>{icons}</Icons>
      ))}
    </MenuContainer>
  );
};

export default MenuBar;
