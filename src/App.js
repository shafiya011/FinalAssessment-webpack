import React from 'react';
import HomePage from './components/homePage';
import Header from './components/header';
import ActivityFeed from './components/activityFeed';
import {
  ProjectContainer,
  ContentContainer,
} from './stylings/projectContainer';
const App = () => {
  return (
    <ProjectContainer>
      <Header />
      <ContentContainer>
        <HomePage />
        <ActivityFeed />
      </ContentContainer>
    </ProjectContainer>
  );
};
export default App;
