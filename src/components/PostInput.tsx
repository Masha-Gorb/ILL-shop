import React, {ChangeEvent, useState} from 'react';
type PostInputType = {
    AddPost: (newPostValue: string) => void
}

export const PostInput = (props: PostInputType) => {
    let [newPostValue, setPostValue] = useState('')
    const AddPostHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPostValue(e.currentTarget.value)
    }
    const AddNewPost = () => {
        props.AddPost(newPostValue)
        setPostValue('')
    }


    return (
        <div>
            <input value={newPostValue} onChange={AddPostHandler}/>
            <button onClick={AddNewPost}>add post</button>
        </div>
    )
}