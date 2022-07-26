import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";
import {Registration} from "./Registration/Registration";

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
        <Registration/>
      </StyledProfile>
    </>
  )
}