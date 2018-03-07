import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    
    state = {
        posts: [],
        selectedPostId:null
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(resolve=>{
            const postsArr = resolve.data.slice(0,4);
            const updatedPosts = postsArr.map(e=>{
                //console.log(e);
                return {
                    ...e,
                    author:'Chris'
                }
            })
            //console.log(updatedPosts);
            this.setState({posts:updatedPosts});
            //console.log(resolve, 'status:'+resolve.status);
        });
    }
    postSelectedHandler = (id)=> {
this.setState({selectedPostId:id})
    };

    render () {
        const posts = this.state.posts.map (e=>{
            return <Post 
            key={e.id} 
            title={e.title} 
            author={e.author}
            clicked={()=>this.postSelectedHandler(e.id)}/>;
        })

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;