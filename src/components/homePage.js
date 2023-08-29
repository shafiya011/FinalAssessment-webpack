import React from 'react';
import HomeBackground from '../asset/homeSvg';
import HomePageSvg from '../asset/homePageSvg';
import { Form, Select, Button, DatePicker } from 'antd';
import {
  HomePageContainer,
  Description,
  ExportBtn,
  HomeImgContainer,
  ImageContainer,
  FormWrapper1,
  SelectField1,
  FormWrapper2,
  SelectReport,
  ReportFormat,
  SelectOption,
} from '../stylings/homepageStylings';
const SelectOptions = [
  'Survey Results',
  'Account Deactivation Details',
  'Review Managemen',
  'publish History',
  'User details',
  'Account Statistics report',
];

const HomePage = () => {
  const { RangePicker } = DatePicker;
  const handleChange = (value) => {
    console.log(`Selected: ${value}`);
  };
  return (
    <HomePageContainer>
      <ImageContainer>
        <HomeBackground />
        <HomePageSvg />
      </ImageContainer>

      <Description>
        Select your required report and timeline then click “Export Report” to
        generate.
      </Description>
      <div>
        <FormWrapper1>
          <div>
            <p>Select Report</p>
            <SelectReport>
              <SelectOption
                defaultValue={SelectOptions[0]}
                onChange={handleChange}
              >
                {SelectOptions.map((values, index) => (
                  <option key={index} value={`values ${index + 1}`}>
                    {values}
                  </option>
                ))}
              </SelectOption>
            </SelectReport>
          </div>
          <div>
            <p>Report Format</p>
            <ReportFormat defaultValue="XLS" onChange={handleChange}>
              {SelectOptions.map((values, index) => (
                <option></option>
              ))}
            </ReportFormat>
          </div>
        </FormWrapper1>
        <FormWrapper2>
          <div>
            <p>Report Period</p>
            <RangePicker />
          </div>
          <div>
            <p>Action</p>
            <ReportFormat value="Download">
              <Select.Option value="demo">Download</Select.Option>
            </ReportFormat>
          </div>
        </FormWrapper2>
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
