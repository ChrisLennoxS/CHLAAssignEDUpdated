import React from 'react'
import styled from 'styled-components';

const ModalTitle = (props) => {
    const header = props.title;
    return (
        <div style={{marginBottom: '-4%'}}>
            <Title>{header}</Title>
        </div>
    )
}

export default ModalTitle

const Title = styled.h2`
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 21px;
    
`