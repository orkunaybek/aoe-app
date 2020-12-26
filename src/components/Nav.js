import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav>
                <div className="logo">AOE <span>Units</span></div>
                <div className="links">
                    <NavLink className="link" exact to='/'>Home</NavLink>
                    <NavLink className="link" to='/units'>Units</NavLink>
                </div>
            </nav>
        );
    }
}

export default Nav;
