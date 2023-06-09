import React from 'react'
import Header from '../common/Header'
import { Outlet } from "react-router-dom"
import styled from 'styled-components'
import ScrollToTop from '../../hooks/ScrcollTop'


const IntructorsLayout = () => {
    return (
        <ScrollToTop>
            <Container>
                <Header />

                <Outlet />

            </Container></ScrollToTop>
    )
}

export default IntructorsLayout

const Container = styled.div`
background: radial-gradient(
    rgba(103, 68, 2, 0.2) 8%,
    transparent 2%
);
background-position: 0% 0%;
background-size: 3vmin 3vmin;

    
`