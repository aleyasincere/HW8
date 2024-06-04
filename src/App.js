import React from 'react'
import Main from './components/Main/Main'
import ModalProvider from './Context/ModalProvider'
import About from './components/About/About'
import Ref from './pages/Ref/Ref'

const App = () => {

    return (
        <div>
            <ModalProvider>
                <About/>
                <Main/>
                <h1>lalallalla</h1>
            </ModalProvider>
            <Ref/>
        </div>
    )
}

export default App