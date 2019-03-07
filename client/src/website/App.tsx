import React, { Component } from 'react';

import CSSModules from 'react-css-modules';
import styles from './App.module.css';

// Containers imports
import Navigation from './components/navigation/navigation';
import About from './containers/about/about';
import Competence from './containers/competence/competence';
import Footer from './containers/footer/footer';
import Contact from './containers/contact/contact';
import Work from './containers/work/work';
import Blog from './containers/blog/blog';

enum Direction {
  Left,
  Right
}

class App extends Component {

  state = {
    selectedSection: Number(2),
    sections: Array(
      <About />,
      <Competence />,
      <Blog />,
      <Contact />
    )
  }

  DisplayCarousel = () => {
    return this.state.sections[this.state.selectedSection];
  }

  ChangeActiveSection = (direction: Direction) => {

    let position: number = this.state.selectedSection;

    switch (direction) {
      case Direction.Left: position--; break;
      case Direction.Right: position++; break;
    }

    if (position < 0)
      position = this.state.sections.length - 1;
    else if (position > this.state.sections.length - 1)
      position = 0;

    this.setState({ selectedSection: position });
  }

  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => this.ChangeActiveSection(Direction.Left)}
            className="btn btn-primary btn-outline"><i className="icon-arrow-left2"></i>
          </button>
          <button
            onClick={() => this.ChangeActiveSection(Direction.Right)}
            className="btn btn-primary btn-outline">
            <i className="icon-arrow-right2"></i>
          </button>
        </div>
        {this.DisplayCarousel()}
      </div>
    );
  }
}

export default CSSModules(App, styles, { handleNotFoundStyleName: "log", allowMultiple: true });
