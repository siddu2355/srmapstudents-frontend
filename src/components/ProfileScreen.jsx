import React, { Component } from 'react';

class ProfileScreen extends Component {
    state = {  }
    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                height:"90vh"
            }}>
                <div className='name-div'>
                    <h2>firstname</h2>
                    <h2>lastname</h2>
                </div>
                <h2>Username</h2>
            </div>
        );
    }
}

export default ProfileScreen;