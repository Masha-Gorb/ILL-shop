import React, {useState} from 'react';
import './App.css';
import {MainFeed} from "./components/Main feed/MainFeed";
import {AddPostModalWindow} from "./components/AddPostModalWindow/AddPostModalWindow";
import {Header} from "./components/Header/Header";
import {v1} from "uuid";
import {Menu} from "./components/Menu/Menu";
import styled from "styled-components";

// const StyledApp = styled.div`
//   display: flex;
// `
export type FilterValuesType = "all" | 'React' | 'Native JS' | 'Other';

function App() {
    let [posts, setPosts] = useState([
        {id: v1(), postText: 'No fancy subscriptions or observables under the hood, just plain React state and props. By staying within the core React framework and away from magic, Formik makes debugging, testing, and reasoning about your forms a breeze. If you know React, and you know a bit about forms, you know Formik!',
            theme: 'React', postTime: 'Fri Mar 11 2022 16:38:14 GMT+0300 (Moscow Standard Time)'},
        {id: v1(), postText: 'another post text about css',
            theme: 'Other', postTime: 'Fri Mar 11 2022 16:38:14 GMT+0300 (Moscow Standard Time)'},
        {id: v1(), postText: 'another post text about native',
            theme: 'Native JS', postTime: 'Fri Mar 11 2022 16:38:14 GMT+0300 (Moscow Standard Time)'},
        {id: v1(), postText: 'vbhef',
            theme: 'Other', postTime: 'Fri Mar 11 2022 16:38:14 GMT+0300 (Moscow Standard Time)'},
        {id: v1(), postText: 'another vwe veje',
            theme: 'React', postTime: 'Fri Mar 11 2022 16:38:14 GMT+0300 (Moscow Standard Time)'},
        {id: v1(), postText: 'another post text about native',
            theme: 'Native JS', postTime: 'Fri Mar 11 2022 16:38:14 GMT+0300 (Moscow Standard Time)'},
        {id: v1(), postText: 'anoteh fvpeqh vp about native',
            theme: 'React', postTime: 'Fri Mar 11 2022 16:38:14 GMT+0300 (Moscow Standard Time)'},
    ]);
    let [filter, setFilter] = useState<FilterValuesType>('all')

    let postTime = new Date().toString()

    const AddPost = (newPostValue: string, newPostThemeValue: string) => {
        let newPost = {id: v1(), postText: newPostValue, theme: newPostThemeValue, postTime: postTime}
        setPosts([newPost,...posts])
        console.log(postTime)
    }

    const DeletePost = (id: string) => {
        let newPosts = posts.filter( f => f.id !== id)
        setPosts(newPosts)
    }

    const ChangeFilter = (value: FilterValuesType) => {
        setFilter(value)
    }

    let filtredPosts = posts;
    if (filter === 'React') {
        filtredPosts = posts.filter( f => f.theme === 'React')
    }
    if (filter === 'Native JS') {
        filtredPosts = posts.filter( f => f.theme === 'Native JS')
    }
    if (filter === 'Other') {
        filtredPosts = posts.filter( f => f.theme === 'Other')
    }

    return (
    <div>
        <Menu/>
        <Header
            ChangeFilter={ChangeFilter}
        />

        <AddPostModalWindow
            AddPost={AddPost}
        />
        <MainFeed
            posts={filtredPosts}
            DeletePost={DeletePost}
        />
    </div>
  );
}

export default App;
