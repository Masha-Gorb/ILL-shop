import React, {useState} from 'react';

export const LikeComponent = () => {
    let [likesCount, setLikesCount] = useState(0)
    const AddLikeHandler = () => {
        setLikesCount(likesCount+1)
    }
    return (
        <div>
            {likesCount}
            <button onClick={AddLikeHandler}>Like</button>
        </div>
    )
}
