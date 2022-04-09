import React, {ChangeEvent, ReactNode, useState} from 'react';
import {Modal} from "./Modal";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
type PostInputType = {
    AddPost: (newPostValue: string,  newPostThemeValue: string) => void
}

export const AddPostModalWindow = (props: PostInputType) => {
    const onClose = () => setModal(false)
    const [isModal, setModal] = React.useState(false)

    let [newPostValue, setPostValue] = useState('')
    let [newPostThemeValue, setNewPostThemeValue] = useState('')

    const NewPostThemeValueHandler = (e: SelectChangeEvent<string>, child: ReactNode) => {
        setNewPostThemeValue(e.target.value as string)
    }

    const AddPostHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setPostValue(e.currentTarget.value)
    }
    const AddNewPost = () => {
        props.AddPost(newPostValue, newPostThemeValue)
        setNewPostThemeValue('')
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
                    content={
                    <textarea
                        value={newPostValue}
                        onKeyPress={(e) => { if (e.charCode === 13) {AddNewPost()}}}
                        onChange={AddPostHandler}>к</textarea>}
                    footer={<button onClick={AddNewPost}>Publish!</button>}
                    themeSelector={
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Theme</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={newPostThemeValue}
                                label="Theme"
                                onChange={NewPostThemeValueHandler}>
                                <MenuItem value={'React'}>React</MenuItem>
                                <MenuItem value={'Native JS'}>NativeJS</MenuItem>
                                <MenuItem value={'Other'}>Other</MenuItem>
                            </Select>
                        </FormControl>
                }
                    onClose={onClose}
                />
            </React.Fragment>
        </div>
    )
}