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
const App = () => {
  return (
    <Apps>
      <MenuBar />
      <ProjectContainer>
        <Header />
        <ContentContainer>
          <HomePage />
          <ActivityFeed />
        </ContentContainer>
      </ProjectContainer>
    </Apps>
  );
};
export default App;
