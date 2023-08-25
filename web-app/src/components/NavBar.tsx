'use client'

import React, { useState } from 'react'
import Menu from "./Menu"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false)

    const handleMenuClick = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <nav className='flex flex-1 items-end justify-end bg-primary-black bg-opacity-30'>
                <button className='text-primary-white p-4' onClick={handleMenuClick}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </nav>
            <Menu isOpen={isOpen} onClose={handleMenuClick} />
        </>
    )
}