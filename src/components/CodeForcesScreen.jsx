import React from 'react';
import Detail from "./Detail"

class CodeForcesScreen extends Detail {
    render() {
        return (
            <div className="screen">
                {this.titleHeading("Code Forces Details Of 'Name'")}
                <div className="main-content">
                    {this.titleValue("Tag", "Legendary GrandMaster")}
                    {this.titleValue("Contest Rating", "999")}
                    {this.titleValue("Maximum Contest Rating", "1234")}
                    {this.titleValue("Number Of Problems Solved", "6570")}
                </div>
            </div>
        );
    }
}

export default CodeForcesScreen;