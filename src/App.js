import Main from './components/Main/Main'
import About from './components/About/About'
import ModalProvider from '/Context/ModalProvider'
import Ref from './pages/Ref/Ref'

const App = () => {
  
  return (
    <div>
      <ModalProvider>
        <About/>
        
      <Main/>
      </ModalProvider>
      <Ref/>
    </div>
  )
}

export default App
