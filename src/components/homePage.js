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
  ReportPeriod,
  Actions,
  SelectTitle,
  BtnSpan
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
  // const { RangePicker } = DatePicker;
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
            <SelectTitle>Select Report</SelectTitle>
            
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
            
          </div>
          <div>
            <SelectTitle>Report Format</SelectTitle>
            <ReportFormat defaultValue="XLS" onChange={handleChange}>
              {SelectOptions.map((values, index) => (
                <option>{values}</option>
              ))}
            </ReportFormat>
          </div>
        </FormWrapper1>
        <FormWrapper2>
          <div>
            <SelectTitle>Report Period</SelectTitle>
            <ReportPeriod />
          </div>
          <div>
            <SelectTitle>Action</SelectTitle>
            <Actions defaultValue="Download"value="Download">
              <option value="demo">Download</option>
            </Actions>
          </div>
        </FormWrapper2>
        <div>
          <ExportBtn type="primary" htmlType="submit">
           <BtnSpan> Export Report </BtnSpan>
          </ExportBtn>
        </div>
      </div>
    </HomePageContainer>
  );
};

export default HomePage;
