import React from 'react';
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  background-color: darkslategrey;
`
const StyledH1 = styled.h1`
  margin-left: 50pt;
  margin-right: 50px;
  color: #b4fce3;
`
const StyledThemeButton = styled.button`
    width: 300pt;
    background-color: #b4fce3;
    border: solid 4pt darkslategrey;
    font-size: 14pt;
    color: darkslategrey;
    margin-bottom: 2pt;
    margin-top: 2pt;
`

export const Header = () => {
    return (
        <StyledHeader>
            <StyledH1>my tech diary</StyledH1>
            <StyledThemeButton>Native JS</StyledThemeButton>
            <StyledThemeButton>React</StyledThemeButton>
            <StyledThemeButton>Other</StyledThemeButton>
            <button>light/dark</button>
            <div>my profile</div>
        </StyledHeader>
    )
}