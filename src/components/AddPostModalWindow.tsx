import React, {ChangeEvent, useState} from 'react';
import {Modal} from "./Modal";
type PostInputType = {
    AddPost: (newPostValue: string) => void
}

export const AddPostModalWindow = (props: PostInputType) => {
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
            <React.Fragment>
                <button onClick={() => setModal(true)}>+</button>
                <Modal
                    visible={isModal}
                    title="Write new tech post!"
                    content={<textarea
                        value={newPostValue}
                        onKeyPress={(e) => { if (e.charCode === 13) {AddNewPost()}}}
                        onChange={AddPostHandler}>к</textarea>}
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