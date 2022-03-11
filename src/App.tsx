import React, {useState} from 'react';
import './App.css';
import {MainFeed} from "./components/Post";
import {PostInput} from "./components/PostInput";
import {Header} from "./components/Header";
import {v1} from "uuid";

function App() {
    let [posts, setPosts] = useState([
        {id: v1(), postText: 'No fancy subscriptions or observables under the hood, just plain React state and props. By staying within the core React framework and away from magic, Formik makes debugging, testing, and reasoning about your forms a breeze. If you know React, and you know a bit about forms, you know Formik!',
            theme: 'React', postTime: {}},
        {id: v1(), postText: 'another post text',
            theme: 'Other', postTime: {}},
    ]);

    let postTime = new Date()

    const AddPost = (newPostValue: string) => {
        let newPost = {id: v1(), postText: newPostValue, theme: 'NoTheme', postTime: postTime}
        setPosts([newPost,...posts])
    }

    const DeletePost = (id: string) => {
        let newPosts = posts.filter( f => f.id !== id)
        setPosts(newPosts)
    }

    return (
    <div className="App">
        <Header/>
        <PostInput
            AddPost={AddPost}
        />
        <MainFeed
            posts={posts}
            DeletePost={DeletePost}
        />
    </div>
  );
}

export default App;
