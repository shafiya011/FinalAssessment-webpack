import styled from 'styled-components';
import { Tag } from 'antd';
export const ActivityWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap');
  height: 714px;
  // width: 380px;
  flex-shrink: 0;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(99, 116, 135, 0.1);
  margin: 18px 23px 22px 0px;
  font-family: 'SF Pro Display', sans-serif;
  @media (max-width: 400px) {
    width: 100%;
    display: block;
    flex-direction: center;
    align-items: center;
  }
`;
export const ActivityHead = styled.div`
  height: 42px;
  flex-shrink: 0;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
  border-radius: 3px 3px 0px 0px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(228, 231, 234, 1);
  @media (max-width: 400px) {
    width: 100%;
    align-items: center;
  }
`;
export const Title = styled.div`
  color: #3a4a5b;
  font-style: normal;
  font-weight: 400;
  margin: 11px 0px 10px 20px;
  line-height: normal;
`;

export const ViewMore = styled.div`
  color: var(--blue-s-10, #185998);
  font-size: 14px;
  margin: 13px 20px 12px 0px;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
`;

export const ContentWrapper = styled.div`
  margin: 20px 21px 24px 20px;
  &::-webkit-scrollbar {
    width: 4px;
    flex-shrink: 0;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const FeedContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(228, 231, 234, 1);
`;
export const DetailsContainer = styled.div`
  width: 291px;
`;
export const UserName = styled.p`
  color: var(--grey-100, #485c72);
  font-size: 14px;
  font-style: normal;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  line-height: normal;
  margin: 0px;
`;
export const FeedDetails = styled.p`
  color: var(--grey-t-25, #768595);
  width: 215px;
  font-size: 14px;
  margin: 0px;
  margin-bottom: 15px;
  font-style: normal;
  font-weight: 300;
`;
export const Download = styled.p`
  color: var(--blue-100, #1b63a9);
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  display: flex;
  margin: 0px;
  margin-bottom: 12px;
  align-items: center;
`;
export const TimeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Time = styled.p`
  color: var(--grey-t-50, #a3adb8);
  text-align: right;
  font-size: 11px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0px;
  margin-bottom: 13px;
`;
export const NamenTagWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 9px;
`;
export const StatusTag = styled(Tag)`
  width: 71px;
  height: 17px;
  flex-shrink: 0;
  margin: 0px;
  border-radius: 3px;
  border: 1px solid var(--green-t-15, #47ba78);
  color: var(--green-t-15, #47ba78);
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  padding: 2px 6px 3px 5px;
`;
export const PdfContainer = styled.div`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;
export const ImageContainer = styled.div`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 48px;
  margin-right: 20px;
  margin-bottom: 23px;
  box-shadow: 0px 0px 10px 0px rgba(90, 90, 90, 0.1);
`;
export const UserImage = styled.img`
  width: 48px;
  height: 48px;
  flex-shrink: 0;
  border-radius: 48px;
  box-shadow: 0px 0px 10px 0px rgba(90, 90, 90, 0.1);
`;
export const FailedTag = styled(Tag)`
  width: 47px;
  height: 17px;
  flex-shrink: 0;
  border-radius: 3px;
  border: 1px solid var(--red-s-10, #c52828);
  color: var(--red-s-10, #c52828);
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  padding: 2px 7px 3px 6px;
  margin: 0;
`;
export const PendingTag = styled(Tag)`
  width: 58px;
  height: 17px;
  flex-shrink: 0;
  color: var(--yellow-or-80, #ffa642);
  text-align: center;
  font-size: 10px;
  padding: 2px 7px 3px 5px;
  border-radius: 3px;
  border: 1px solid var(--yellow-or-80, #ffa642);
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  margin: 0;
`;
export const ViewTag = styled(Tag)`
  margin: 0;
  width: 37px;
  height: 17px;

  border-radius: 3px;
  border: 1px solid var(--blue-t-15, #3d7ab6);
  color: var(--blue-t-15, #3d7ab6);
  padding: 2px 5px 3px 5px;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
`;
export const NoDataTag = styled(Tag)`
  width: 92px;
  height: 17px;

  border-radius: 3px;
  border: 1px solid var(--grey-t-35, #8895a3);
  color: var(--grey-t-35, #8895a3);
  text-align: center;
  font-size: 10px;

  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  padding: 2px 7px 3px 3px;
  margin: 0;
`;
