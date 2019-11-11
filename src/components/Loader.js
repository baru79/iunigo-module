import React from 'react'
import styled, { keyframes } from 'styled-components'
import { getSize } from '../functions/helpers'

const Bounce = keyframes`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`

const StyledDotsLoader = styled.div`
    display: inline-block;
`
/*
    width: ${props => (props.loading.size === "big" ? '20px' : '12px')};
    height: ${props => (props.loading.size === "big" ? '20px' : '12px')};
*/
const Dot = styled.span`
    width: ${props => props.styles && props.styles.size ? getSize(props.styles.size) : getSize(props.theme.size)};
    height: ${props => props.styles && props.styles.size ? getSize(props.styles.size) : getSize(props.theme.size)};
    background-color: ${props => props.loading.color};
    border-radius: 100%;
    display: inline-block;
    animation: ${Bounce} 1s infinite ease-in-out both;
    &:first-child {
        animation-delay: -0.32s;
    }
    &:nth-child(2) {
        animation-delay: -0.16s;
    }
`

const Loader = props => {
    return (
        <StyledDotsLoader {...props}>
            <Dot {...props} style={{}} />
            <Dot {...props} style={{}} />
            <Dot {...props} style={{}} />
        </StyledDotsLoader>
    )
}

export default Loader;