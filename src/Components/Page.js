import React, { Component } from 'react'
import axios from 'axios'

export default class Page extends Component{
    constructor(props){
        super(props);
        this.state = {
            post : null,
            id : null
        }
    }
    componentDidMount(){
        let id= this.props.match.params.post_id;
        axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(res=>{
            this.setState({
                post : res.data
            })
        });
        // console.log(this.state.post)
        // console.log(this.props);
        // console.log(id);
    }
    render(){
        const {post} = this.state;
        const thePost = post ? (
            <div className="post card">
            <div className="card-content">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </div>
            </div>
            ) : 
            (<div>Loading please wait...</div>);
        return(
            <div className="container">
               {thePost}
            </div>
        )
    }
}