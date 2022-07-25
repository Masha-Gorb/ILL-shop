import React from 'react';
import styled from "styled-components";
import {MainFeed} from "../MainFeed/MainFeed";
import {SliderImage} from "../SliderImage/SliderImage";


const StyledMainScreenContainer = styled.div`
  margin-left: 10%;
  margin-right: 10%;
  border: 1px solid gray;
`
export const MainScreenContainer = () => {
  return (
    <>
      <StyledMainScreenContainer>
        <SliderImage/>
        <MainFeed/>
      </StyledMainScreenContainer>
    </>
  )
}