import React from 'react';
import styled from "styled-components";

const StyledProductCard = styled.div`
  display: flex;
  height: 300px;
  width: 300px;
  background-color: antiquewhite;
  margin-top: 10px;
`

type ProductCardPropsType = {
  title: string
}

export const ProductCard = (props:ProductCardPropsType) => {
  return (
    <>
      <StyledProductCard>
        <span>{props.title}</span>
      </StyledProductCard>
    </>
  )
}