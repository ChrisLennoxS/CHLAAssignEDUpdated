import React from 'react'
import styled from 'styled-components'
import NavBar from '../Components/NavBar/NavBar'

const Zones = () => {
    return (
        <>
        <NavBar></NavBar>
        <Background>
            
        </Background>
        </>
    )
}

export default Zones

const Background = styled.div`
    background-color: rgb(229, 229, 229);
    width: 100vw;
    height: 95vh;
`