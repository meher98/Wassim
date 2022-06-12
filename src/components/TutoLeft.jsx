import React from 'react'
import "../assets/css/tutorial.css"
export default function Tuto(props) {
    return (
        <div>
            <div className="video-slide left">
             	<div className="content-wrapper">
                    <div className="video-type">
                        <h3>{props.title}</h3>
                        <p>{props.text} </p>
                        
                    </div>
                    <iframe className="vimeo-player" src={props.video} width="670" height="376" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>
                </div>
            </div>


        </div>
    )
}
