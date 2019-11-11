import React from 'react'
import styled, { css } from 'styled-components'
import Loader from './Loader'
import { getColor, getSize } from '../functions/helpers'

const StyledButton = styled.button`
    background-color: ${props => props.styles && props.styles.backgroundColor ? getColor(props.styles.backgroundColor) : "white"};
    color: ${props => props.styles && props.styles.color ? getColor(props.styles.color) : "black"};
    font-size: ${props => props.styles && props.styles.size ? getSize(props.styles.size) : getSize(props.theme.size)};
    border: 2px solid ${props => props.styles && props.styles.backgroundColor && props.styles.backgroundColor !== "white" ? getColor(props.styles.backgroundColor) : "black"};
    cursor: pointer;
    ${props => {
        return (
            props.styles && props.styles.inverse &&
            css`
                background-color: white;
                color: ${props => getColor(props.styles.backgroundColor)};
            `
        )
    }}
    ${props => {
        return (
            !props.disabled ?
                css`
                    :hover {
                        background-color: ${props => props.styles && props.styles.inverse ? getColor(props.styles.backgroundColor) : "white"}
                        color: ${ props => props.styles && props.styles.inverse ? "white" : getColor(props.styles.backgroundColor)};
                        cursor: pointer;
                    }
                ` :
                css`
                    : disabled {
                        color: rgba(0, 0, 0, 0.25);
                        cursor: not-allowed;
                    }
                `
        )
    }}
`

const StyleBased = styled(StyledButton)`
    margin: 15px;
    padding: 10px 15px;
    border-radius: 4px;
    outline: none;
`

const Button = ({ styles, loading, children, ...props }) => {
    const isEmpty = loading !== undefined ? Object.entries(loading).length === 0 && loading.constructor === Object : true;
    return (
        <StyleBased styles={styles ? styles : {}} {...props}>
            <div>{children}</div>
            {!isEmpty && <Loader loading={loading} />}
        </StyleBased>
    )
}

export default Button;