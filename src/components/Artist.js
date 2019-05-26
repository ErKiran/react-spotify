import React, { Component } from 'react';
import '../App.css';

class Artist extends Component {
    render() {
        const { artist, followers, images } = this.props;
        if (images) {
            return (
                <div className="profile">
                    <img src={images[0]} alt="profile" className="profile-image" />
                    <div className="profile-info">
                        <div className="profile-name">{artist}</div>
                        <div className="profile-followers">{followers} followers</div>
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            );
        }

    }
}

export default Artist;