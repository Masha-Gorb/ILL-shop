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
const StyledPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #f3f3f3;
    margin: 30px 30px 30px 30px;

`
const StyledPost = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 600px;
    padding-bottom: 10px;
    background-color: #efefef;
`
const StyledAddsToPost = styled.div`
  display: flex;

`

export const Post = (props: PostsPropsType) => {
  return (
    <StyledPostContainer>
      {props.posts.map(m =>
        <StyledPost>
          <p>{m.postText}</p>
          <StyledAddsToPost>
            <div>{m.theme}</div>
            <div>{m.postTime}</div>
            <LikeComponent/>
            <button onClick={() => props.DeletePost(m.id)}>
              Delete
            </button>
          </StyledAddsToPost>
        </StyledPost>)}
    </StyledPostContainer>
  )
}