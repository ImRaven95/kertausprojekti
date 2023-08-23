// Desc: This file contains the menu component that is used in the NavBar component
import { Transition } from '@headlessui/react';
import { useEffect } from 'react';


interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function Menu({ isOpen, onClose}: Props) {
    
    //Listening for the mousedown event when the menu is open to close it when the user clicks outside of the menu
    useEffect(() => {
        const handleMouseDown = (event: MouseEvent) => {
            if (isOpen) {
                const target = event.target as HTMLElement;
                if (!target.closest('.menu')) {
                    onClose();
                }
            }
        };
        document.addEventListener('mousedown', handleMouseDown);
        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, [isOpen, onClose]);


    return (
        <Transition
            show={isOpen}
            enter='transition-opacity duration-75'
            enterFrom='opacity-0'
            enterTo='opacity-90'
            leave='transition-opacity duration-150'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
        >
            <div className="fixed top-0 right-0 h-full w-64 bg-primary-white z-10 shadow-lg">
                <div className="p-3">
                    <h3 className="text-gray-800 font-bold text-xl mb-3">Menu</h3>
                    <ul className="mt-2">
                        <li>
              
                        </li>
                        <button>
              
                        </button>
                    </ul>
                </div>
                <button
                    className="absolute top-3 right-3 hover:text-gray-600"
                    onClick={onClose}
                >
                    <svg
                        className="h-6 w-6 fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 8.586l4.95-4.95 1.414 1.414L11.414 10l4.95 4.95-1.414 1.414L10 11.414l-4.95 4.95-1.414-1.414L8.586 10 3.636 5.05l1.414-1.414L10 8.586z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </Transition>
    );
}