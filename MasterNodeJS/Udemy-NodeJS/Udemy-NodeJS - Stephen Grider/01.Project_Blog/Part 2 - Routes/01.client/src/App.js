import React, { Component } from 'react';
import PostCreate from './PostCreate';
import PostList from './PostList';
import CommentCreate from './CommentCreate';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <h1>Create Post</h1>
                <PostCreate></PostCreate>
                <hr/>
                <h1>Post</h1>
                <PostList></PostList>
            </div>
        );
    }
};
export default App;