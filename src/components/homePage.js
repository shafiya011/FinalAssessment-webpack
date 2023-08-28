import React from 'react';
import HomeSvg from '../asset/homeSvg';
import HomePageSvg from '../asset/homePageSvg';
import { Form, Select, Button, DatePicker } from 'antd';
import {
  HomePageContainer,
  Description,
  ExportBtn,
  HomeImgContainer,
} from '../stylings/homepageStylings';

const HomePage = () => {
  const { RangePicker } = DatePicker;
  return (
    <HomePageContainer>
      <div>
        <div>
          <HomeSvg />
        </div>
        <HomeImgContainer>
          <HomePageSvg />
        </HomeImgContainer>
      </div>
      <Description>
        Select your required report and timeline then click “Export Report” to
        generate.
      </Description>
      <div>
        <div>
          <Form style={{ display: 'flex' }}>
            <Form.Item name="selectreport" label="Select Report">
              <Select value="SurveyResults">
                <Select.Option value="Select Report1">
                  Select Report1
                </Select.Option>
                <Select.Option value="demo">Select Report2</Select.Option>
                <Select.Option value="demo">Select Report3</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item label="Report Format">
              <Select value="XLS">
                <Select.Option value="demo">XLS</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
        <div>
          <Form style={{ display: 'flex' }}>
            <Form.Item label="Report Period">
              <RangePicker />
            </Form.Item>
            <Form.Item label="Action">
              <Select value="Download">
                <Select.Option value="demo">Download</Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
        <div>
          <ExportBtn type="primary" htmlType="submit">
            Export Report
          </ExportBtn>
        </div>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
