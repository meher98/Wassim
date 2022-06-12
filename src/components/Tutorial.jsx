import React from 'react'
import "../assets/css/tutorial.css"
import TutoLeft from "./TutoLeft"
import TutoRight from "./TutoRight"
import tuto1 from "../assets/videos/tuto1.mp4"
import tuto2 from "../assets/videos/tuto2.mp4"

export default function Tuto() {
    return (
        <div>
            <TutoLeft title={"Tutorial1"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non nibh finibus, porttitor tellus nec, sollicitudin tellus. Fusce placerat vel metus et eleifend. Praesent quis tempor arcu."} video={tuto1}/>
            <TutoRight title={"Tutorial2"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non nibh finibus, porttitor tellus nec, sollicitudin tellus. Fusce placerat vel metus et eleifend. Praesent quis tempor arcu."} video={tuto2}/>
        </div>
    )
}
