import React from 'react';
import { Card, Tag } from 'antd';
import DownloadFile from '../asset/downloadFile';
import DownloadReport from '../asset/downloadReport';
// import Wade from '../asset/wade';
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
  ActivityHead,
  Title,ViewMore,
  Time,
  TimeWrapper
} from '../stylings/activityFeedStylings';

const ActivityFeed = () => {
  return (
    <ActivityWrapper>
      {/* <CardContainer
        type="inner"
        title="Activity Feeds"
        extra={<a href="#">View All</a>}
      > */}
      <ActivityHead>
        <Title>ActivityFeed</Title>
        <ViewMore><a>View More</a></ViewMore>
      </ActivityHead>
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
              <TimeWrapper>
              <Download>
                <DownloadReport />
                Download Report
              </Download>
              <Time>2 hours ago</Time>
              </TimeWrapper>
            </DetailsContainer>
          </FeedContainer>

          <FeedContainer>
            <ImageContainer>
              <UserImage src="https://s3-alpha-sig.figma.com/img/9f93/6d28/03ffef0f3919e687c7cdf564d6d052e0?Expires=1694390400&amp;Signature=Az-K883ZtLGR3e90ZmTgFRn1q05v9znbmPZyH7owkliPU30DOD4YpMF13qJbsrA-148O-YnSb-IIxLUoJgH-qOOu2VvD1oDyceGnqxq2a-~OOqUZTtbjI86yG8uzsKtd0Lq3usdVSA5PxUGOUemzjO3Z4k1w9Mj1m5bzKamOKiE4Ocqypx1LwJ87peyc1DbuoC8FTt2gU2AdmKk6s8gvjb~TGHFJfk66PT2dBNSMy~tcVn~RZYV2xzF-EPPtzjeOHZEXz2hBsrIxEAlhlxRc0tSmTNejIuSLB6nTYDLFMp3ixxJ4o31DTvnFCfftVEv4i21mCDjPQfydEzDcxsBOIg__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
          {/* <Wade/> */}
            </ImageContainer>
            <DetailsContainer>
              <NamenTagWrap>
                <UserName>Wade Warren</UserName>
                <PendingTag>Pending</PendingTag>
              </NamenTagWrap>
              <TimeWrapper>
              <FeedDetails>Exported CS Admin dashboard</FeedDetails>
              <Time>1 day ago</Time>
              </TimeWrapper>
            </DetailsContainer>
          </FeedContainer>

          <FeedContainer>
            <ImageContainer>
              <UserImage src="https://s3-alpha-sig.figma.com/img/9f93/6d28/03ffef0f3919e687c7cdf564d6d052e0?Expires=1694390400&amp;Signature=Az-K883ZtLGR3e90ZmTgFRn1q05v9znbmPZyH7owkliPU30DOD4YpMF13qJbsrA-148O-YnSb-IIxLUoJgH-qOOu2VvD1oDyceGnqxq2a-~OOqUZTtbjI86yG8uzsKtd0Lq3usdVSA5PxUGOUemzjO3Z4k1w9Mj1m5bzKamOKiE4Ocqypx1LwJ87peyc1DbuoC8FTt2gU2AdmKk6s8gvjb~TGHFJfk66PT2dBNSMy~tcVn~RZYV2xzF-EPPtzjeOHZEXz2hBsrIxEAlhlxRc0tSmTNejIuSLB6nTYDLFMp3ixxJ4o31DTvnFCfftVEv4i21mCDjPQfydEzDcxsBOIg__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </ImageContainer>
            <DetailsContainer>
              <NamenTagWrap>
                <UserName>Robert Fox</UserName>
                <FailedTag>Failed</FailedTag>
              </NamenTagWrap>
              <TimeWrapper>
              <FeedDetails>
                Downloaded monthly digest from Aug 1, 2020 to Aug 11, 2020
              </FeedDetails>
              <Time>3 days ago</Time>
              </TimeWrapper>
            </DetailsContainer>
          </FeedContainer>

          <FeedContainer>
            <ImageContainer>
              <UserImage src="https://s3-alpha-sig.figma.com/img/9f93/6d28/03ffef0f3919e687c7cdf564d6d052e0?Expires=1694390400&amp;Signature=Az-K883ZtLGR3e90ZmTgFRn1q05v9znbmPZyH7owkliPU30DOD4YpMF13qJbsrA-148O-YnSb-IIxLUoJgH-qOOu2VvD1oDyceGnqxq2a-~OOqUZTtbjI86yG8uzsKtd0Lq3usdVSA5PxUGOUemzjO3Z4k1w9Mj1m5bzKamOKiE4Ocqypx1LwJ87peyc1DbuoC8FTt2gU2AdmKk6s8gvjb~TGHFJfk66PT2dBNSMy~tcVn~RZYV2xzF-EPPtzjeOHZEXz2hBsrIxEAlhlxRc0tSmTNejIuSLB6nTYDLFMp3ixxJ4o31DTvnFCfftVEv4i21mCDjPQfydEzDcxsBOIg__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </ImageContainer>
            <DetailsContainer>
              <NamenTagWrap>
                <UserName>Christopher Yin</UserName>
                <NoDataTag>No Data Found</NoDataTag>
              </NamenTagWrap>
              <TimeWrapper>
              <FeedDetails>Exported User dashboard</FeedDetails>
              <Time>6 days ago</Time>
              </TimeWrapper>
            </DetailsContainer>
          </FeedContainer>

          <FeedContainer>
            <ImageContainer>
              <UserImage src="https://s3-alpha-sig.figma.com/img/9f93/6d28/03ffef0f3919e687c7cdf564d6d052e0?Expires=1694390400&amp;Signature=Az-K883ZtLGR3e90ZmTgFRn1q05v9znbmPZyH7owkliPU30DOD4YpMF13qJbsrA-148O-YnSb-IIxLUoJgH-qOOu2VvD1oDyceGnqxq2a-~OOqUZTtbjI86yG8uzsKtd0Lq3usdVSA5PxUGOUemzjO3Z4k1w9Mj1m5bzKamOKiE4Ocqypx1LwJ87peyc1DbuoC8FTt2gU2AdmKk6s8gvjb~TGHFJfk66PT2dBNSMy~tcVn~RZYV2xzF-EPPtzjeOHZEXz2hBsrIxEAlhlxRc0tSmTNejIuSLB6nTYDLFMp3ixxJ4o31DTvnFCfftVEv4i21mCDjPQfydEzDcxsBOIg__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </ImageContainer>
            <DetailsContainer>
              <NamenTagWrap>
                <UserName>Michael Joe</UserName>
                <ViewTag>View</ViewTag>
              </NamenTagWrap>
              <FeedDetails>
                Viewed verified user report for all time till date.
              </FeedDetails>
              <TimeWrapper>
              <Download>
                {/* <DownloadReport /> */}
                View Report
              </Download>
              <Time>2 hours ago</Time>
              </TimeWrapper>
            </DetailsContainer>
          </FeedContainer>
          <FeedContainer>
            <ImageContainer>
              <UserImage src="https://s3-alpha-sig.figma.com/img/9f93/6d28/03ffef0f3919e687c7cdf564d6d052e0?Expires=1694390400&amp;Signature=Az-K883ZtLGR3e90ZmTgFRn1q05v9znbmPZyH7owkliPU30DOD4YpMF13qJbsrA-148O-YnSb-IIxLUoJgH-qOOu2VvD1oDyceGnqxq2a-~OOqUZTtbjI86yG8uzsKtd0Lq3usdVSA5PxUGOUemzjO3Z4k1w9Mj1m5bzKamOKiE4Ocqypx1LwJ87peyc1DbuoC8FTt2gU2AdmKk6s8gvjb~TGHFJfk66PT2dBNSMy~tcVn~RZYV2xzF-EPPtzjeOHZEXz2hBsrIxEAlhlxRc0tSmTNejIuSLB6nTYDLFMp3ixxJ4o31DTvnFCfftVEv4i21mCDjPQfydEzDcxsBOIg__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
            </ImageContainer>
            <DetailsContainer>
              <NamenTagWrap>
                <UserName>Emma Stone</UserName>
                <StatusTag color="green">Download</StatusTag>
              </NamenTagWrap>
              <FeedDetails>
                Downloaded monthly digest from Aug 1, 2020 to Aug 11, 2020
              </FeedDetails>
              <TimeWrapper>
              <Download>
                <DownloadFile />
                Download Report
              </Download>
              <Time>3 days agoo</Time>
              </TimeWrapper>
            </DetailsContainer>
          </FeedContainer>
        </ContentWrapper>
      {/* </CardContainer> */}
    </ActivityWrapper>
  );
};

export default ActivityFeed;
