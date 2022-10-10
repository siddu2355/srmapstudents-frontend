import React from 'react';
import Detail from "./Detail"

class CodeChefScreen extends Detail {
    render() {
        return (
            <div className="screen">
                {this.titleHeading("Code Chef Details Of 'Name'")}
                <div className="main-content">
                    {this.titleValue("Contest Rating", "999")}
                    {this.titleValue("Global Rank", "1234")}
                    {this.titleValue("Country Rank", "1234")}
                    {this.titleValue("Number Of Contests Participated", 7)}
                    {this.titleValue("Number Of Problems Solved", "6570")}
                </div>
            </div>
        );
    }
}

export default CodeChefScreen;