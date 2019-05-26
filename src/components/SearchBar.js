import React, { Component } from 'react';
import axios from 'axios';

import { FormControl, FormGroup, InputGroup, Button } from 'react-bootstrap';
import config from '../config/config';

class SearchBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ''
        }
    }
    async submit() {
        console.log(this.state)
        const options = {
            method: 'GET',
            url: `https://api.spotify.com/v1/search?q=${this.state.query}&type=track`,
            headers: {
                'Authorization': `Bearer ${config.Bearer}`,
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        }
        const res = await axios(options);
        console.log(res)
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
            </div>
        );
    }
}

export default SearchBar;