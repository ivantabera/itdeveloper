import React, { Component } from 'react'

export default class Posts extends Component {

    state = {
        post: []
    }

    async componentDidMount(){
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await res.json()
        
        this.setState({
            post: data
        })
        console.log("data", data)
        
    }

    render() {
        return (
            <div>
                <h1>Publicaciones post</h1>
                {
                    this.state.post.map(post => {
                        return <div key={post.id}>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}
