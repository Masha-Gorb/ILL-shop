import React from 'react';
import styled from "styled-components";

const StyledShoppingCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #aeffa1;
`


export const ShoppingCart = () => {
  return (
    <>
      <StyledShoppingCart>
        <h1>Shopping Cart</h1>
        <ul>
          <li>Calendar 1</li>
          <li>Calendar 2</li>
          <li>Pattern 3</li>
        </ul>
      </StyledShoppingCart>
    </>
  )
}