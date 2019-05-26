import React, { Component } from 'react';
import { FormControl, FormGroup, InputGroup, Button } from 'react-bootstrap';

import Artist from './Artist';
import Genre from './Genre';
import Gallery from './Gallery';
import { getArtist, getTopTrack } from '../api';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: '',
            artist: '',
            followers: null,
            images: null,
            genre: '',
            tracks: ''
        }
    }
    async submit() {
        const artists = await getArtist(this.state.query);
        const toptrack = await getTopTrack(artists.id);
        this.setState({
            artist: artists.name,
            followers: artists.followers.total,
            images: artists.images.map(i => i.url),
            genre: artists.genres,
            tracks: toptrack
        })
    }
    render() {
        return (
            <div>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for an artist"
                            onChange={e => { this.setState({ query: e.target.value }) }}
                            value={this.state.query}
                        />
                        <Button variant="danger" onClick={() => this.submit()}>Search</Button>
                    </InputGroup>

                </FormGroup>
                <Artist
                    artist={this.state.artist}
                    followers={this.state.followers}
                    images={this.state.images}
                />
                <Genre
                    genre={this.state.genre}
                />
                <Gallery
                    track={this.state.tracks}
                />
            </div>
        );
    }
}

export default SearchBar;