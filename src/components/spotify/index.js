import React from 'react';
import { Row } from 'react-bootstrap'

function Spotify() {
    return (
        <div className="spotify">
            <iframe src="https://open.spotify.com/embed/playlist/19joiHc6Lzw2YCNtbRVij1?theme=0" width="100%" height="180" frameborder="0" allowtransparency="true" style={{margin: "0px"}} allow="encrypted-media"></iframe>   
        </div>
    )
}

export default Spotify;