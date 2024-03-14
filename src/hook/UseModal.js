import React from 'react'

export const UseModal = () => {
    const [isOpen, setIsopen] = React.useState(false)
    const open = () => setIsopen(true)
    const close = () => setIsopen(false)
    return { open, isOpen, close }
}
