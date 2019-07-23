import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Blog extends Component{
    constructor(props){
        super(props);
        this.state = {
            posts : null
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            this.setState({
                posts : res.data.slice(0,5)
            })
        })
    }
    render(){
        const {posts} = this.state;
        const postsList = posts ? (
            posts.map(post=>{
                return(
                    <div key={post.id} className="post card">
                    <div className="card-content">
                    <Link to={'/post/' + post.id}><h5>{post.title}</h5></Link>
                    <p>{post.body}</p>
                    </div>
                    </div>
                )
            })
        ) 
        
        : (<div>Loading Please wait.</div>)
        return(
            <div className="container">
            <h2>Blog</h2>
            {postsList}
            </div>
        )
    }
}

export default Blog