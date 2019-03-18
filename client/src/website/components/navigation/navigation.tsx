import React, { Component } from 'react';

import CSSModules from 'react-css-modules';
import styles from './navigation.module.css';

class Navigation extends Component<any, any> {

    readonly state = {
        menus: [
            "À Propos",
            "Compétences",
            "Travaux"
        ]
    }

    GenerateMenu = (): any => {
        return this.state.menus.map((menu, index) => (
            <li styleName={this.props.ActiveSection === index ? "navigation-link active" : "navigation-link"}
                onClick={() => this.props.ChangeActiveSectionTo(index)}>
                {menu}
            </li>
        ));
    }

    render() {
        return (
            <nav styleName="navigation">
                <ul styleName="navigation-list">
                    {this.GenerateMenu()}
                </ul>
            </nav>
        );
    }
}

export default CSSModules(Navigation, styles, { allowMultiple: true, handleNotFoundStyleName: "log" });