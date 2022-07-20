import React from 'react';
import {ProductCard} from "../ProductCard/ProductCard";
import styled from "styled-components";

const StyledMainFeed = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  @media screen and (max-width: 1129px) {
    flex-direction: column;
    align-items: center;
  }
`

export const MainFeed = () => {
  return (
    <StyledMainFeed>
      <ProductCard title='Календари'/>
      <ProductCard title='Паттерны'/>
      <ProductCard title='Постеры'/>
      <ProductCard title='Открытки'/>

    </StyledMainFeed>
  )
}