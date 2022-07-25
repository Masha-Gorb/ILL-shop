import React from 'react';
import styled from "styled-components";
import {ShoppingCart} from "../ShoppingCart/ShoppingCart";
import {Link} from "react-router-dom";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d4a9ff;
`

export const Profile = () => {
  return (
    <>
      <StyledProfile>
        <button>
          <Link to="/main">Back to main</Link>
        </button>
        <div>
          <h2>here will be profile info</h2>
        </div>
        <ShoppingCart/>
      </StyledProfile>
    </>
  )
}