import React from 'react';
import styled from "styled-components";
import {FilterValuesType} from "../../App";

type HeaderPropsType = {
  ChangeFilter: (value: FilterValuesType) => void
}

const StyledHeader = styled.div`
  display: flex;
  height: 100px;
  background-color: dimgray;
  justify-content: center;
  align-items: center;
`

const StyledThemeButton = styled.button`
  width: 100px;
  height: 50px;
  font-size: 14px;
`

export const Header = (props: HeaderPropsType) => {
  return (
    <StyledHeader>
      <StyledThemeButton onClick={() => props.ChangeFilter('Native JS')}>Native JS</StyledThemeButton>
      <StyledThemeButton onClick={() => props.ChangeFilter('React')}>React</StyledThemeButton>
      <StyledThemeButton onClick={() => props.ChangeFilter('Other')}>Other</StyledThemeButton>
      <StyledThemeButton onClick={() => props.ChangeFilter('all')}>All</StyledThemeButton>
    </StyledHeader>
  )
}