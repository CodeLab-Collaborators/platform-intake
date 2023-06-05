import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../common/Header'

const MainLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default MainLayout