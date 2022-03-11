import React from 'react';
import styled from "styled-components";
import {FilterValuesType} from "../App";

type HeaderPropsType = {
    ChangeFilter: (value: FilterValuesType) => void
}

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

export const Header = (props: HeaderPropsType) => {
    return (
        <StyledHeader>
            <StyledH1>my tech diary</StyledH1>
            <StyledThemeButton onClick={() => props.ChangeFilter('Native JS')}>Native JS</StyledThemeButton>
            <StyledThemeButton onClick={() => props.ChangeFilter('React')}>React</StyledThemeButton>
            <StyledThemeButton onClick={() => props.ChangeFilter('Other')}>Other</StyledThemeButton>
            <StyledThemeButton onClick={() => props.ChangeFilter('all')}>All</StyledThemeButton>
            <button>light/dark</button>
            <div>my profile</div>
        </StyledHeader>
    )
}