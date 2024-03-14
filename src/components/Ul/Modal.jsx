import React from 'react'
import { Dialog } from '@headlessui/react'

export const Modal = ({ children, isOpen, close }) => {
    return (
        <Dialog
            open={isOpen}
            onClose={close}
            className="relative z-50"
        >
            <div className="fixed inset-0 flex w-screen bg-[#0000007e] items-center justify-center p-4">
                <Dialog.Panel className="w-full max-w-sm rounded bg-white p-5">
                    <Dialog.Title>Complete your emails</Dialog.Title>

                    {children}
                    <button className='bg-red-500 text-white p-4 rounded font-medium' onClick={close}>Cancel</button>
                </Dialog.Panel>
            </div>
        </Dialog>
    )
}
