import React from 'react'


const About = ()=>{
    return(
        <div className="container">
        <h2>About</h2>
        <div className="post card">
        <div className="card-content">
        <p><b>Dependencies</b></p>
            <ul>
                <li>react-router-dom</li>
                <li>axios</li>
                <li>Material CSS</li>
            </ul>
        <p><b>API provided by</b></p>
            <ul><li>JSONPLACEHOLDER</li></ul>
        <p><b>Tutorial</b></p>
            <ul>
                <li>By The Net Ninja</li>
                <li>Playlist link : <a href="https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG" target="_blank" rel="noopener noreferrer">Complete React Tutorial (with Redux)</a></li>
            </ul>
        <p><b>Developer</b></p>
        <ul><li>Sandip Satyal</li></ul>
        </div>
        </div>
        </div>
    )
}

export default About