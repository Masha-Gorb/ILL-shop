import React from 'react';
import {LikeComponent} from "./LikeComponent";
import styled from "styled-components";

type PostPropsType = {
    postText: string
    theme: string
}
type PostsPropsType = {
    posts: Array<PostPropsType>
}

const StyledMainFeed = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  margin-left: 480px;
  border: solid 5px rgba(150, 150, 150, 0.38);
  background-color: #fff2b6;
`

export const MainFeed = (props: PostsPropsType) => {
    return (
        <div>
            {props.posts.map(m => <StyledMainFeed>
                <p>{m.postText}</p>
                <p>test commit</p>
                <div>{m.theme}</div>
                <LikeComponent/>
            </StyledMainFeed>)}
        </div>
    )
}