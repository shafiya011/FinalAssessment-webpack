import React from 'react';
import { Card, Tag } from 'antd';
import DownloadFile from '../asset/downloadFile';
import DownloadReport from '../asset/downloadReport';
// import Nigel from '../asset/feedImage1';
import {
  ActivityWrapper,
  CardContainer,
  ContentWrapper,
  FeedContainer,
  UserName,
  FeedDetails,
  Download,
  NamenTagWrap,
  StatusTag,
  PdfContainer,
  ImageContainer,
  NoDataTag,
  DetailsContainer,
  UserImage,
  FailedTag,
  PendingTag,
  ViewTag,
} from '../stylings/activityFeedStylings';

const ActivityFeed = () => {
  return (
    <ActivityWrapper>
      <CardContainer
        type="inner"
        title="Activity Feeds"
        extra={<a href="#">View All</a>}
      >
        <ContentWrapper>
          <FeedContainer>
            <ImageContainer>
              <UserImage src="https://s3-alpha-sig.figma.com/img/9f93/6d28/03ffef0f3919e687c7cdf564d6d052e0?Expires=1694390400&amp;Signature=Az-K883ZtLGR3e90ZmTgFRn1q05v9znbmPZyH7owkliPU30DOD4YpMF13qJbsrA-148O-YnSb-IIxLUoJgH-qOOu2VvD1oDyceGnqxq2a-~OOqUZTtbjI86yG8uzsKtd0Lq3usdVSA5PxUGOUemzjO3Z4k1w9Mj1m5bzKamOKiE4Ocqypx1LwJ87peyc1DbuoC8FTt2gU2AdmKk6s8gvjb~TGHFJfk66PT2dBNSMy~tcVn~RZYV2xzF-EPPtzjeOHZEXz2hBsrIxEAlhlxRc0tSmTNejIuSLB6nTYDLFMp3ixxJ4o31DTvnFCfftVEv4i21mCDjPQfydEzDcxsBOIg__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </ImageContainer>
            <DetailsContainer>
              <NamenTagWrap>
                <UserName>Nigel Chatsworth</UserName>
                <StatusTag color="green">Download</StatusTag>
              </NamenTagWrap>
              <FeedDetails>
                Downloaded survey result report from Aug 1, 2020 to Aug 11,
                2020.
              </FeedDetails>
              <Download>
                <DownloadReport />
                Download Report
              </Download>
            </DetailsContainer>
          </FeedContainer>

          <FeedContainer>
            <ImageContainer>
              <UserImage src="https://s3-alpha-sig.figma.com/img/9f93/6d28/03ffef0f3919e687c7cdf564d6d052e0?Expires=1694390400&amp;Signature=Az-K883ZtLGR3e90ZmTgFRn1q05v9znbmPZyH7owkliPU30DOD4YpMF13qJbsrA-148O-YnSb-IIxLUoJgH-qOOu2VvD1oDyceGnqxq2a-~OOqUZTtbjI86yG8uzsKtd0Lq3usdVSA5PxUGOUemzjO3Z4k1w9Mj1m5bzKamOKiE4Ocqypx1LwJ87peyc1DbuoC8FTt2gU2AdmKk6s8gvjb~TGHFJfk66PT2dBNSMy~tcVn~RZYV2xzF-EPPtzjeOHZEXz2hBsrIxEAlhlxRc0tSmTNejIuSLB6nTYDLFMp3ixxJ4o31DTvnFCfftVEv4i21mCDjPQfydEzDcxsBOIg__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </ImageContainer>
            <DetailsContainer>
              <NamenTagWrap>
                <UserName>Nigel Chatsworth</UserName>
                <PendingTag>Pending</PendingTag>
              </NamenTagWrap>
              <FeedDetails>Exported CS Admin dashboard</FeedDetails>
            </DetailsContainer>
          </FeedContainer>

          <FeedContainer>
            <ImageContainer>
              <UserImage src="https://s3-alpha-sig.figma.com/img/9f93/6d28/03ffef0f3919e687c7cdf564d6d052e0?Expires=1694390400&amp;Signature=Az-K883ZtLGR3e90ZmTgFRn1q05v9znbmPZyH7owkliPU30DOD4YpMF13qJbsrA-148O-YnSb-IIxLUoJgH-qOOu2VvD1oDyceGnqxq2a-~OOqUZTtbjI86yG8uzsKtd0Lq3usdVSA5PxUGOUemzjO3Z4k1w9Mj1m5bzKamOKiE4Ocqypx1LwJ87peyc1DbuoC8FTt2gU2AdmKk6s8gvjb~TGHFJfk66PT2dBNSMy~tcVn~RZYV2xzF-EPPtzjeOHZEXz2hBsrIxEAlhlxRc0tSmTNejIuSLB6nTYDLFMp3ixxJ4o31DTvnFCfftVEv4i21mCDjPQfydEzDcxsBOIg__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </ImageContainer>
            <DetailsContainer>
              <NamenTagWrap>
                <UserName>Nigel Chatsworth</UserName>
                <FailedTag>Failed</FailedTag>
              </NamenTagWrap>
              <FeedDetails>
                Downloaded monthly digest from Aug 1, 2020 to Aug 11, 2020
              </FeedDetails>
            </DetailsContainer>
          </FeedContainer>

          <FeedContainer>
            <ImageContainer>
              <UserImage src="https://s3-alpha-sig.figma.com/img/9f93/6d28/03ffef0f3919e687c7cdf564d6d052e0?Expires=1694390400&amp;Signature=Az-K883ZtLGR3e90ZmTgFRn1q05v9znbmPZyH7owkliPU30DOD4YpMF13qJbsrA-148O-YnSb-IIxLUoJgH-qOOu2VvD1oDyceGnqxq2a-~OOqUZTtbjI86yG8uzsKtd0Lq3usdVSA5PxUGOUemzjO3Z4k1w9Mj1m5bzKamOKiE4Ocqypx1LwJ87peyc1DbuoC8FTt2gU2AdmKk6s8gvjb~TGHFJfk66PT2dBNSMy~tcVn~RZYV2xzF-EPPtzjeOHZEXz2hBsrIxEAlhlxRc0tSmTNejIuSLB6nTYDLFMp3ixxJ4o31DTvnFCfftVEv4i21mCDjPQfydEzDcxsBOIg__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </ImageContainer>
            <DetailsContainer>
              <NamenTagWrap>
                <UserName>Nigel Chatsworth</UserName>
                <NoDataTag>No Data Found</NoDataTag>
              </NamenTagWrap>
              <FeedDetails>Exported User dashboard</FeedDetails>
            </DetailsContainer>
          </FeedContainer>

          <FeedContainer>
            <ImageContainer>
              <UserImage src="https://s3-alpha-sig.figma.com/img/9f93/6d28/03ffef0f3919e687c7cdf564d6d052e0?Expires=1694390400&amp;Signature=Az-K883ZtLGR3e90ZmTgFRn1q05v9znbmPZyH7owkliPU30DOD4YpMF13qJbsrA-148O-YnSb-IIxLUoJgH-qOOu2VvD1oDyceGnqxq2a-~OOqUZTtbjI86yG8uzsKtd0Lq3usdVSA5PxUGOUemzjO3Z4k1w9Mj1m5bzKamOKiE4Ocqypx1LwJ87peyc1DbuoC8FTt2gU2AdmKk6s8gvjb~TGHFJfk66PT2dBNSMy~tcVn~RZYV2xzF-EPPtzjeOHZEXz2hBsrIxEAlhlxRc0tSmTNejIuSLB6nTYDLFMp3ixxJ4o31DTvnFCfftVEv4i21mCDjPQfydEzDcxsBOIg__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </ImageContainer>
            <DetailsContainer>
              <NamenTagWrap>
                <UserName>Nigel Chatsworth</UserName>
                <ViewTag>View</ViewTag>
              </NamenTagWrap>
              <FeedDetails>
                Viewed verified user report for all time till date.
              </FeedDetails>
              <Download>
                {/* <DownloadReport /> */}
                View Report
              </Download>
            </DetailsContainer>
          </FeedContainer>
          <FeedContainer>
            <ImageContainer>
              <UserImage src="https://s3-alpha-sig.figma.com/img/9f93/6d28/03ffef0f3919e687c7cdf564d6d052e0?Expires=1694390400&amp;Signature=Az-K883ZtLGR3e90ZmTgFRn1q05v9znbmPZyH7owkliPU30DOD4YpMF13qJbsrA-148O-YnSb-IIxLUoJgH-qOOu2VvD1oDyceGnqxq2a-~OOqUZTtbjI86yG8uzsKtd0Lq3usdVSA5PxUGOUemzjO3Z4k1w9Mj1m5bzKamOKiE4Ocqypx1LwJ87peyc1DbuoC8FTt2gU2AdmKk6s8gvjb~TGHFJfk66PT2dBNSMy~tcVn~RZYV2xzF-EPPtzjeOHZEXz2hBsrIxEAlhlxRc0tSmTNejIuSLB6nTYDLFMp3ixxJ4o31DTvnFCfftVEv4i21mCDjPQfydEzDcxsBOIg__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </ImageContainer>
            <DetailsContainer>
              <NamenTagWrap>
                <UserName>Nigel Chatsworth</UserName>
                <StatusTag color="green">Download</StatusTag>
              </NamenTagWrap>
              <FeedDetails>
                Downloaded monthly digest from Aug 1, 2020 to Aug 11, 2020
              </FeedDetails>
              <Download>
                <DownloadFile />
                Download Report
              </Download>
            </DetailsContainer>
          </FeedContainer>
        </ContentWrapper>
      </CardContainer>
    </ActivityWrapper>
  );
};

export default ActivityFeed;
