import React from 'react';
import Detail from './Detail';

class GitHubDetailScreen extends Detail {
    render() {
        return (
            <div className="screen">
                {this.titleHeading("Git Hub Details Of 'Name'")}
                <div className="main-content">
                    {this.titleValue("Number of Repositeries", 99)}
                </div>
            </div>
        );
    }
}

export default GitHubDetailScreen;