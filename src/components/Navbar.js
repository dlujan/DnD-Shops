import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/general" className="link-comp">
                    <div>
                        General Store
                    </div>
                </Link>
                <Link to="/blacksmith" className="link-comp">
                    <div>
                        Blacksmith 
                    </div>
                </Link>
                <Link to="/leatherworker" className="link-comp">
                    <div>
                        Leatherworker
                    </div>
                </Link>
                <Link to="/fletcher" className="link-comp">
                    <div>
                        Fletcher
                    </div>
                </Link>
                <Link to="/tailor" className="link-comp">
                    <div>
                        Tailor
                    </div>
                </Link>
                <Link to="/tavern" className="link-comp">
                    <div>
                        Tavern
                    </div>
                </Link>
                <Link to="/arcane" className="link-comp">
                    <div>
                        Arcane
                    </div>
                </Link>
                <Link to="/potions" className="link-comp">
                    <div>
                        Potions
                    </div>
                </Link>
                <Link to="/temple" className="link-comp">
                    <div>
                        Temple
                    </div>
                </Link>
                <Link to="/jeweler" className="link-comp">
                    <div>
                        Jeweler
                    </div>
                </Link>
                <Link to="/animals" className="link-comp">
                    <div>
                        Animals
                    </div>
                </Link>
                <Link to="/custom" className="link-comp">
                    <div>
                        Custom
                    </div>
                </Link>
            </div>
        )
    }
}
