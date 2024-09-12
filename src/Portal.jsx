import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'

function Portal() {
    return (
        <>
            <div className='d-flex'>
                <Sidebar />
                <main className="flex-grow-1">
                    <Outlet />
                </main>
            </div>
        </>
    )
}

export default Portal