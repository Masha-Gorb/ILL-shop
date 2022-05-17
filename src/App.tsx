import React, {useState} from 'react';
import './App.css';
import {Posts} from "./components/Main feed/Posts";
import {Header} from "./components/Header/Header";
import {v1} from "uuid";
import {AddPostComponent} from "./components/AddPostComponent/AddPostComponent";

export type FilterValuesType = "all" | 'React' | 'Native JS' | 'Other';

function App() {
  let [posts, setPosts] = useState([
    {
      id: v1(),
      author: 'Poline',
      postText: 'No fancy subscriptions or observables under the hood, just plain React state and props. By staying within the core React framework and away from magic, Formik makes debugging, testing, and reasoning about your forms a breeze. If you know React, and you know a bit about forms, you know Formik!',
      theme: 'React',
      postTime: 'Fri Mar 11 2022 16:03'
    },
    {
      id: v1(), author: 'Oleg', postText: 'another post text about css',
      theme: 'Other', postTime: 'Fri Mar 11 2022 16:14'
    },
    {
      id: v1(), author: 'Sasha', postText: 'another post text about native',
      theme: 'Native JS', postTime: 'Fri Mar 11 2022 16:38'
    },
  ]);
  let [filter, setFilter] = useState<FilterValuesType>('all')

  let postTime = new Date().toString()

  const AddPost = (newPostValue: string, newPostThemeValue: string) => {
    let newPost = {id: v1(), author: 'No Name', postText: newPostValue, theme: newPostThemeValue, postTime: postTime}
    setPosts([newPost, ...posts])
    console.log(postTime)
  }

  const DeletePost = (id: string) => {
    let newPosts = posts.filter(f => f.id !== id)
    setPosts(newPosts)
  }

  const ChangeFilter = (value: FilterValuesType) => {
    setFilter(value)
  }

  let filtredPosts = posts;
  if (filter === 'React') {
    filtredPosts = posts.filter(f => f.theme === 'React')
  }
  if (filter === 'Native JS') {
    filtredPosts = posts.filter(f => f.theme === 'Native JS')
  }
  if (filter === 'Other') {
    filtredPosts = posts.filter(f => f.theme === 'Other')
  }

  return (
    <div>
      <Header
        ChangeFilter={ChangeFilter}
      />
      <AddPostComponent
        AddPost={AddPost}/>
      <Posts
        posts={filtredPosts}
        DeletePost={DeletePost}
      />
    </div>
  );
}

export default App;
