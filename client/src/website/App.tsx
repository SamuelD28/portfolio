import React, { Component } from 'react';

import CSSModules from 'react-css-modules';
import styles from './App.module.css';

// Containers imports
import Navigation from './components/navigation/navigation';
import About from './containers/about/about';
import Competence from './containers/competence/competence';
import Blog from './containers/blog/blog';

enum Direction {
  Left,
  Right
}

class App extends Component {

  state = {
    selectedSection: Number(0),
  }

  ChangeActiveSection = (direction: Direction) => {

    let position: number = this.state.selectedSection;

    switch (direction) {
      case Direction.Left: position--; break;
      case Direction.Right: position++; break;
    }

    if (position < 0)
      position = 2;
    else if (position > 2)
      position = 0;

    this.setState({ selectedSection: position });
  }

  DisplayPage = () => {
    switch (this.state.selectedSection) {
      case 0: return <About />
      case 1: return <Competence />
      case 2: return <Blog />
    }
  }

  ChangeActiveSectionTo = (sectionNumber: number) => {

    if (sectionNumber < 0 || sectionNumber > 2)
      throw new Error("Bad number");

    this.setState({ selectedSection: sectionNumber });
  }

  render() {
    return (
      <div>
        <Navigation ActiveSection={this.state.selectedSection} ChangeActiveSectionTo={this.ChangeActiveSectionTo} />
        {this.DisplayPage()}
      </div>
    );
  }
}

export default CSSModules(App, styles, { handleNotFoundStyleName: "log", allowMultiple: true });
