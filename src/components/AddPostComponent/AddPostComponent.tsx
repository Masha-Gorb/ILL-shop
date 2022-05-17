import React, {ChangeEvent, useState} from 'react';

type PostInputType = {
  AddPost: (newPostValue: string,  newPostThemeValue: string) => void
}

export const AddPostComponent = (props: PostInputType) => {

  let [newPostValue, setPostValue] = useState('')
  let [newPostThemeValue, setNewPostThemeValue] = useState('')

  // const NewPostThemeValueHandler = (e: ChangeEventHandler<HTMLSelectElement>) => {
  //   setNewPostThemeValue(e.currentTarget.value as string)
  // }

  const AddPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostValue(e.currentTarget.value)
  }
  const AddNewPost = () => {
    props.AddPost(newPostValue, newPostThemeValue)
    setNewPostThemeValue('')
    setPostValue('')
  }
  return (
    <div>
      <textarea
        value={newPostValue}
        onKeyPress={(e) => { if (e.charCode === 13) {AddNewPost()}}}
        onChange={AddPostHandler}>а</textarea>
      <button onClick={AddNewPost}>+</button>
      <select>
        <option value={'React'}>React</option>
        <option value={'Native JS'}>NativeJS</option>
        <option value={'Other'}>Other</option>
      </select>
    </div>
  )
}