import React from "react";

function Contact(props){
    return(
        <div>
            <h1>Epic 2018 Trailers</h1>

            <div className="videos">
                <h3>Black Panther</h3>
                <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/ctOLmLY5fBM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <h3>Avengers: Infinity War</h3>
                <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/QwievZ1Tx-8?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <h3>Ant-Man and The Wasp</h3>
                <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/8_rTIAOohas?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <h3>Venom</h3>
                <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/UdbNRmYjnhI?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <h3>The New Mutants</h3>
                <iframe className="video" width="560" height="315" src="https://www.youtube.com/embed/UWzowMx9H2I?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                <br/>
            </div>
        </div>
    )
}

export default Contact; 