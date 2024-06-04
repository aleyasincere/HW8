import React, { useContext } from 'react'
import { ModalContext } from '../../Context/ModalProvider'

const Modal = () => {
    const {isOpen,closeModal} = useContext(ModalContext)
    if(!isOpen) return null
    return (
        <div>
            <h1>MODAl</h1>
            <button onClick={closeModal}>закрыть модальное окно"</button>
        </div>
    )
}

export default Modal