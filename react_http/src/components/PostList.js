import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMsg: []
      }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com11/posts')
        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg: 'Error Retreiving data'})
        })
    }

  render() {
    const {posts, errorMsg} = this.state
    return (
      <div>
        List of Posts
        {
            posts.length ?
            posts.map(post => <div key = {posts.id}>{post.title}</div>) :
            null
        }

        {errorMsg ? <div>{errorMsg}</div> : null}
        
      </div>
    )
  }
}

export default PostList
