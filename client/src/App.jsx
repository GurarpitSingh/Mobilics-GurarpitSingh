import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Topbar from './Topbar'
import QueryInput from './QueryInput'
import Results from './Results'

function App() {

  return (
    <div className='container pt-4'>
    <Topbar />
    <QueryInput />
    </div>
  )
}

export default App
