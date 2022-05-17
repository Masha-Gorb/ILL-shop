import React from 'react';
import styled from "styled-components";
import {LikeComponent} from "./LikeComponent";

type PostPropsType = {
  id: string
  author: string
  postText: string
  theme: string
  postTime: any
}
type PostsPropsType = {
  posts: Array<PostPropsType>
  DeletePost: (id: string) => void
}
export const StyledPostContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff9ea;
    height: 100%;
    width: 80%;
    margin: 0 auto;

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

export const Posts = (props: PostsPropsType) => {
  return (
    <StyledPostContainer>
      {props.posts.map(m =>
        <StyledPost>
          <div>{m.author}</div>
          <p>{m.postText}</p>
          <StyledAddsToPost>
            <div>{m.theme}</div>
            <div>{m.postTime}</div>
            <LikeComponent/>
            {/*<button onClick={() => props.DeletePost(m.id)}>*/}
            {/*  Delete*/}
            {/*</button>*/}
          </StyledAddsToPost>
        </StyledPost>)}
    </StyledPostContainer>
  )
}