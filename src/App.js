import React, { Component } from 'react';
import './App.scss';
import Avatar from './component/Avatar';
import MainTitle from './component/MainTitle';
import ModuleTitle from './component/ModuleTitle';
import AboutMe from './component/AboutMe';
import EducationExperience from './component/education/EducationExperience';

class App extends Component {
  render() {
    return (
      <div className={'app'}>
        <header>
          <Avatar />
          <MainTitle />
        </header>

        <div className={'split_line'} />

        <main>
          <section>
            <ModuleTitle title={'ABOUT ME'} />
            <AboutMe />
          </section>

          <section>
            <ModuleTitle title={'EDUCATION'} />
            <EducationExperience />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
