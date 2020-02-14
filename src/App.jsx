import React from "react"
import {app, zerb, nerk, grayImage} from "./styles/App.module.scss"

const App = props => {
    return (
        <div className="blah">
            <div className={app}>
                <p>I'm a SCSS module</p>
                <p className={`${zerb} ${nerk}`}>{props.title}</p>
                <div className={grayImage}></div>
            </div>
        </div>
    )
}

export default App
