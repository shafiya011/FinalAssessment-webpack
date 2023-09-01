import React from 'react';
import DownloadFile from '../asset/downloadFile';
import DownloadReport from '../asset/downloadReport';
import Nigel from '../asset/nigel';
import {
  ActivityWrapper,
  ContentWrapper,
  FeedContainer,
  UserName,
  FeedDetails,
  Download,
  NamenTagWrap,
  StatusTag,
  ImageContainer,
  NoDataTag,
  DetailsContainer,
  UserImage,
  FailedTag,
  PendingTag,
  ViewTag,
  ActivityHead,
  Title,
  ViewMore,
  Time,
  TimeWrapper,
} from '../stylings/activityFeedStylings';

const ActivityFeed = () => {
  return (
    <ActivityWrapper>
      <ActivityHead>
        <Title>Activity Feeds</Title>
        <ViewMore>
          <a>View All</a>
        </ViewMore>
      </ActivityHead>
      <ContentWrapper>
        <FeedContainer>
          <ImageContainer>
            <Nigel />
          </ImageContainer>
          <DetailsContainer>
            <NamenTagWrap>
              <UserName>Nigel Chatsworth</UserName>
              <StatusTag color="green">Download</StatusTag>
            </NamenTagWrap>
            <FeedDetails>
              Downloaded survey result report from Aug 1, 2020 to Aug 11, 2020.
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
            <UserImage src="https://s3-alpha-sig.figma.com/img/2742/825c/5b9e2ac60597e0026c42122dad5ad552?Expires=1694390400&Signature=dzN8Iw9np7eYHcUbjZzJZlhswVmNdFgMmWqmLpxHp-O3YJsqS~NIH2o0eVI~FGxdCdn32CaICTwc7IK7913cuO9ie4v2dNu8ck~s3YRpCGxflsqm1U1Z~lE-iBdq7Wk3Kz58XW9-VOK1Ek9Vb6tp8GFKpOKdWHd7HdNNonk6rPTCRK~UvOOKYMK3rpijftM7dSQRhrVUYpNCevaJOmqZNvJwcrjyfnUily~E6C4hpRLgT5mjW1Pz87pLchPr8t994EbHtf9JctzSeklTV~azBlFtDvOIs2aSHIgm-MOgGkZET3avs12wAw-ZcLiagt0B6dTd53t6iap1EajzGHYfQg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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
            <UserImage src="https://s3-alpha-sig.figma.com/img/8f14/4bfc/079e801a4d30d0e3e71dbaeaf9c8d7bf?Expires=1694390400&amp;Signature=AzCWoQrt7nyuC-3Ahjd1pNKs1slsohGXsdSfOsYp5oShynFVCTBOyJyj2yjyPpXTmhtAxW0gA--bOqfD0V~WiqgmlCGpJ3RvRS4-F5GIIlDu4rjgPpVkKZo9YFu6t1As3j6QZO~xFQXTJqB9gBZIAoIJFjtN4wUM1mjMFEzm5fGls6Z0NNPzQ7hBgFCNBp5TZluHjCBET9IX5tylrHp2cL~IEk0VJAjDrWsRmAwrON-NX196NpG39NEshGokL4B0XWVkcfKAHxSjJsTTeuEct3M1GDaEfVCY1VgVUOaRYRivf-8Og7tWDLDyrTIVHlCmyZGgiwmcUoXriFPF99B~WA__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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
            <UserImage src="https://s3-alpha-sig.figma.com/img/1a76/fe0d/51deb8946aa620f39670e53ab74607a0?Expires=1694390400&Signature=qQ70es3ZJr107gHJse41LXX5ytVtKwGj6tG0oRxkMnBcpwlnSDTtz0lQDowy-0SfGRPxgwcCxIG0XYc1zjU64ii4vzYu~W4~B0~LNJuRoNJnjz3u8qxsNN3kyCr93go8BrNJtrH-aXIyRKeGbgHLB~0-gm-wnH6c4RxPRa9ZEr5WQdFAUWUhLZTtf5wDL5yGHJ-jdcG~tSwwGmd4jHjecQwV8gtgmRvFB1vDXo53ccqjTxHdbPiTqWpKSiugV80v05Z7vOiYXNMCIW~RwPmScC1vlxiO1GUPaZDFgg8XgHxiU6L8F1D~T6cBntB8d9E6AX6z-qrJyjyi8wbm2kZpBg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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
            <UserImage
              src="https://s3-alpha-sig.figma.com/img/8f14/4bfc/079e801a4d30d0e3e71dbaeaf9c8d7bf?Expires=1694390400&amp;Signature=AzCWoQrt7nyuC-3Ahjd1pNKs1slsohGXsdSfOsYp5oShynFVCTBOyJyj2yjyPpXTmhtAxW0gA--bOqfD0V~WiqgmlCGpJ3RvRS4-F5GIIlDu4rjgPpVkKZo9YFu6t1As3j6QZO~xFQXTJqB9gBZIAoIJFjtN4wUM1mjMFEzm5fGls6Z0NNPzQ7hBgFCNBp5TZluHjCBET9IX5tylrHp2cL~IEk0VJAjDrWsRmAwrON-NX196NpG39NEshGokL4B0XWVkcfKAHxSjJsTTeuEct3M1GDaEfVCY1VgVUOaRYRivf-8Og7tWDLDyrTIVHlCmyZGgiwmcUoXriFPF99B~WA__&amp;Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              width="441"
              height="441"
            />
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
              <Download>View Report</Download>
              <Time>2 hours ago</Time>
            </TimeWrapper>
          </DetailsContainer>
        </FeedContainer>
        <FeedContainer>
          <ImageContainer>
            <UserImage src="https://s3-alpha-sig.figma.com/img/df21/0a8e/4d14ff6f53f24f7a5e610000104a5635?Expires=1694390400&Signature=ir18IZxYCINE9FqLcDbsQEYOu3OyW677kmujb0Q-RcEnO6cV2SLsc7lPMMk~a6o~euU5tFpk2yz48~tBVP~adkrjH-FR2gaw3X1V0CB3m7a6zE9L24OGM6bCwm~4qmniCQeGBnL04VE7LEBDZxl8D-7nwf3j-n-5lyIiLjiuTYnCssgM--T0loSkYK2uSOQTtvYmH6E9cLKHLYvS9JXQqoRRyHWvD8yFBm-DaIiWcBqqCmYH9L3wd0ZMo9ARoC8lFz-GXsDlbhQZMzptk1dJm8WGaTnBmG9l9bSg~ZqoM5CDTZQuSWpYRVvBFAW-B5Q27tKsa41pHe~jVGABsiwQuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
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
    </ActivityWrapper>
  );
};

export default ActivityFeed;
