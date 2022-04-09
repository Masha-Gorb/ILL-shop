import React, {useState} from 'react';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

export const LikeComponent = () => {
    let [likesCount, setLikesCount] = useState(0)
    const AddLikeHandler = () => {
        setLikesCount(likesCount+1)
    }
    return (
        <div>
            {/*{likesCount}*/}
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} onClick={AddLikeHandler}/>

        </div>
    )
}
