import React, { Component } from 'react';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Playingurl: '',
            audio: null,
            playing: false
        }
    }
    playMusic(url) {
        let audio = new Audio(url);
        if (!this.state.playing) {
            audio.play();
            this.setState({
                playing: true,
                Playingurl: url,
                audio
            })
        }
        else {
            if (this.state.Playingurl === url) {
                this.state.audio.pause();
                this.setState({
                    playing: false
                })
            }
            else {
                this.state.audio.pause();
                audio.play();
                this.setState({
                    playing: true,
                    Playingurl: url,
                    audio
                })

            }
        }

    }
    render() {
        const { track } = this.props;
        console.log(track)

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
                                    onClick={() => this.playMusic(track.preview_url)}
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