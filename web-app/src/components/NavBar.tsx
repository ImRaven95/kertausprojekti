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
            <nav className='bg-primary-black p-2'>
                <button className='text-primary-white' onClick={handleMenuClick}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </nav>
            <Menu isOpen={isOpen} onClose={handleMenuClick} />
        </>
    )
}