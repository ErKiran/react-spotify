import React, { Component } from 'react';

class Gallery extends Component {
    render() {
        const { track } = this.props;

        if (track) {
            return (
                <div>
                    {
                        track.map((track, k) => {
                            const img = track.album.images[0].url;
                            return (
                                <div
                                    key={k}
                                    className="track"
                                >
                                    <img
                                        src={img}
                                        alt="track"
                                        className="track-img"
                                    />
                                    <p className="track-text">
                                        {track.name}
                                    </p>
                                </div>
                            )
                        })
                    }

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


export default Gallery;