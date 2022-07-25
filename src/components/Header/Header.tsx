import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledHeader = styled.div`
  display: flex;
  height: 100px;
  background-color: azure;
  justify-content: center;
  align-items: center;
`

export const Header = () => {
  return (
    <StyledHeader>

      <button>
        <Link to="/profile">Profile</Link>
      </button>

    </StyledHeader>
  )
}