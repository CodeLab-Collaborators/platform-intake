import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../common/Header'
import ScrollToTop from '../../hooks/ScrcollTop'

const Layout = () => {
    return (
        <ScrollToTop>
            <Header />
            <Outlet />
        </ScrollToTop>
    )
}

export default Layout