import React from 'react'
import styled from 'styled-components';

// styled text input
const TextInput = (props) => {
    const type = props.type;
    
    return (
        <div>
            <StyledInput type={type}></StyledInput>
        </div>
    )
}

export default TextInput

const StyledInput = styled.input`
    width: 289px;
    height: 40px;
    margin-top: -1%;
    margin-bottom: 4%;
    border-radius: 10px;
    border-color: rgba(118,118,118,.3);
    border-width: 1px;
    border-style: solid;
    
`