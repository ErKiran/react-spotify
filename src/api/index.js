import axios from 'axios';
import config from '../config/config';

export async function getArtist(query) {
    const res = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=artist`, {
        headers: {
            'Authorization': `Bearer ${config.Bearer}`,
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    })
    const trim = res.data.artists.items;
    return trim[0];
}

export async function getTopTrack(id) {
    const res = await axios.get(`https://api.spotify.com/v1/artists/${id}/top-tracks?country=US`, {
        headers: {
            'Authorization': `Bearer ${config.Bearer}`,
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
    })
    return res.data.tracks;

}
