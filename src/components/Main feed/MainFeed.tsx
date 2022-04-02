import React from 'react';
import styled from "styled-components";
import {LikeComponent} from "./LikeComponent";

type PostPropsType = {
    id: string
    postText: string
    theme: string
    postTime: any
}
type PostsPropsType = {
    posts: Array<PostPropsType>
    DeletePost: (id: string) => void
}

const StyledMainFeed = styled.div`
  display: flex;
  border: solid 5px rgba(150, 150, 150, 0.38);
  background-color: #fff2b6;
`

export const MainFeed = (props: PostsPropsType) => {
    return (
        <div>
            {props.posts.map(m =>
                <StyledMainFeed>
                <p>{m.postText}</p>
                <div>{m.theme}</div>
                    <div>{m.postTime}</div>
                <LikeComponent/>
                <button onClick={() => props.DeletePost(m.id)}>x</button>
            </StyledMainFeed>)}
        </div>
    )
}