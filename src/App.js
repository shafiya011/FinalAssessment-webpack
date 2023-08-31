import React from 'react';
import HomePage from './components/homePage';
import Header from './components/header';
import ActivityFeed from './components/activityFeed';
import {
  ProjectContainer,
  ContentContainer,
  Apps,
} from './stylings/projectContainer';
import MenuBar from './components/menuBar';
import store from './redux/store';
import { Provider } from 'react-redux';
import FetchContainer from './components/Fetch';
import ReactDOM from 'react-dom';
import Fetch from './components/Fetch';
import { FeedContainer } from './stylings/activityFeedStylings';
const App = () => {
  return (
    // <Apps>
    //   <MenuBar />
    //   <ProjectContainer>
    //     <Header />
    //     <ContentContainer>
    //       <HomePage />
    //       <ActivityFeed />
    //     </ContentContainer>
    //   </ProjectContainer>
    // </Apps>
    <Provider store={store}>
      <FetchContainer />
    </Provider>
  );
};
export default App;
