import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../common/Header'
import ScrollToTop from '../../hooks/ScrcollTop'

const MainLayout = () => {
    return (
        <ScrollToTop>
            <Header />
            <Outlet />
        </ScrollToTop>
    )
}

export default MainLayout