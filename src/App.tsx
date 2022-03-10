import React, {useState} from 'react';
import './App.css';
import {MainFeed} from "./components/Post";
import {PostInput} from "./components/PostInput";
import {Header} from "./components/Header";
import {Modal} from "./components/Modal";

function App() {
    const [isModal, setModal] = React.useState(false)
    const onClose = () => setModal(false)

    let [posts, setPosts] = useState([
        {postText: 'No fancy subscriptions or observables under the hood, just plain React state and props. By staying within the core React framework and away from magic, Formik makes debugging, testing, and reasoning about your forms a breeze. If you know React, and you know a bit about forms, you know Formik!',
            theme: 'React'},
        {postText: 'another post text',
            theme: 'Other'},
    ]);

    const AddPost = (newPostValue: string) => {
        let newPost = {postText: newPostValue, theme: 'NoTheme'}
        setPosts([newPost,...posts])
    }

    return (
    <div className="App">
        <Header/>
        <React.Fragment>
            <button onClick={() => setModal(true)}>+</button>
            <Modal
                visible={isModal}
                title="Write new tech post!"
                content={<textarea>Дорогой дневник, мне не подобрать слов, чтобы описать боль и унижение, которое я испытал.</textarea>}
                footer={<button onClick={onClose}>Publish!</button>}
                themeSelector={
                <select>
                    <option>React</option>
                    <option>NativeJS</option>
                    <option>Other</option>
                </select>}
                onClose={onClose}
            />
        </React.Fragment>

        <PostInput
            AddPost={AddPost}
        />
        <MainFeed
            posts={posts}
        />
    </div>
  );
}

export default App;
