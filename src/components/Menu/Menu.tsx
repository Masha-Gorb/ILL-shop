import React from 'react';
import styled from "styled-components";
import {MenuList} from "./MenuList";

const StyledMenu = styled.div`
  display: flex;
  width: 300px;
  background-color: #a1e6ff;
`

export const Menu = () => {
    return (
        <StyledMenu>
            here will be logo
            <MenuList/>
        </StyledMenu>
    )
}