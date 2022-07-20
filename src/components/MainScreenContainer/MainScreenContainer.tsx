import React from 'react';
import {Header} from "../Header/Header";
import {SliderImage} from "../SliderImage/SliderImage";
import {MainFeed} from "../MainFeed/MainFeed";
import styled from "styled-components";

const StyledMainScreenContainer = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  border: 1px solid gray;
`
export const MainScreenContainer = () => {
  return (
    <>
      <StyledMainScreenContainer>
        <Header/>
        <SliderImage/>
        <MainFeed/>
      </StyledMainScreenContainer>
    </>
  )
}