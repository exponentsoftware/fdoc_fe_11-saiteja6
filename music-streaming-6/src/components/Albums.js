//Create a component called Albums which will display multiple Album components. Insert an Albums component into the render output of App and pass the albums array from state of App to Albums component as props.

import React from 'react'
import Album from './Album'

export default function Albums(props) {
    // console.log(props)
    const mappedData = props.map(prop => {
        return(key={prop[i].id} artist={prop[i].artist} album_title={prop[i].album_title} album_cover={prop[i].album_cover} songs={prop[i].songs.map(song => {
            return song
        })})
    })
    return (
        //Inside {Albums} component map over the album props and for each album in the array create a new {Album} component to be displayed inside {Albums}. Be sure to pass the id of each album as a key to each {Album} component. For each album object, pass it as props to the {Album} component.
        <div>

            <Album />
            <Album />
            <Album />
        </div>
    )
}
