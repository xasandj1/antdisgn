import React from 'react'
import { Header } from './Header'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export const MainLayout = () => {
    return (
        <div className='wrapper'>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
