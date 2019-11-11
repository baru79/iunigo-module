import React from 'react';
import styled from 'styled-components'
import { getSize, getColor } from '../functions/helpers'

const InputComponent = ({ ...props }) => {
    const { type } = props;
    switch (type) {
        case "textarea":
            return <textarea {...props} />
        default:
            return <input {...props} />
    }
};

const InputStyled = styled(InputComponent)`
    color: ${props => props.styles && props.styles.color ? getColor(props.styles.color) : "black"};
    font-size: ${props => props.styles && props.styles.size ? getSize(props.styles.size) : getSize(props.theme.size)};
    border: 1px solid ${props => props.styles && props.styles.backgroundColor && props.styles.backgroundColor !== "white" ? getColor(props.styles.backgroundColor) : "#d9d9d9"};
  `;

const Input = styled(InputStyled)`
  margin: 15px;
  padding: 10px 15px;
  border-radius: 4px;
  outline: none;
`

export default Input;