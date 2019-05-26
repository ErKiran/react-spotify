import React, { Component } from 'react';
import '../App.css';

class Genre extends Component {

    render() {
        const { genre } = this.props;
        if (genre) {
            return (
                <div className="profile">
                    <div className="profile-info">
                        <div className="profile-genre"></div>
                        {
                            genre.map((name, k) => {
                                return (
                                    <span key={k}>{name}</span>
                                )
                            })
                        }
                    </div>
                </div>
            );
        }
        else {
            return (
                <div></div>
            )
        }
    }
}

export default Genre;