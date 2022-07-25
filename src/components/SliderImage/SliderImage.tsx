import React from 'react';
import styled from "styled-components";

const StyledSliderImage = styled.div`
  display: flex;
  height: 300px;
  background-color: #d7e3e3;
`

export const SliderImage = () => {
  return (
    <StyledSliderImage>
      <span>slider image</span>
    </StyledSliderImage>
  )
}