import React, {ChangeEvent, useState} from 'react';
import {Modal} from "./Modal";
type PostInputType = {
    AddPost: (newPostValue: string) => void
}

export const PostInput = (props: PostInputType) => {
    const onClose = () => setModal(false)
    const [isModal, setModal] = React.useState(false)

    let [newPostValue, setPostValue] = useState('')
    const AddPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPostValue(e.currentTarget.value)
    }
    const AddNewPost = () => {
        props.AddPost(newPostValue)
        setPostValue('')
        onClose()
    }


    return (
        <div>
            {/*<input value={newPostValue} onChange={AddPostHandler}/>*/}
            {/*<button onClick={AddNewPost}>add post</button>*/}

            <React.Fragment>
                <button onClick={() => setModal(true)}>+</button>
                <Modal
                    visible={isModal}
                    title="Write new tech post!"
                    content={<textarea value={newPostValue} onChange={AddPostHandler}>Дорогой дневник, мне не подобрать слов, чтобы описать боль и унижение, которое я испытал.</textarea>}
                    footer={<button onClick={AddNewPost}>Publish!</button>}
                    themeSelector={
                        <select>
                            <option>React</option>
                            <option>NativeJS</option>
                            <option>Other</option>
                        </select>}
                    onClose={onClose}
                />
            </React.Fragment>
        </div>
    )
}