import {Routes, Route} from 'react-router-dom'

/* =============== COMPONENT ============= */
import Layout from './components/Layout'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Home from './pages/Home'
import User from "./pages/User"
import Deposit from './pages/Deposit'
import Withdraw from './pages/Withdraw'
import Kyc from './pages/Kyc'

function App() {
  

  return (
    <div className='flex'>
      <div className='w-2/12'>
          <Sidebar/>
      </div>
      <div className='w-10/12'>
          <div className='Navbar relative'>
            <Navbar/>
          </div>
          <div className='pt-20'>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path='/user' element={<User/>}/>
              <Route path='/deposit' element={<Deposit/>}/>
              <Route path='/withdraw' element={<Withdraw/>}/>
              <Route path='/kyc' element={<Kyc/>}/>
            </Routes>
          </div>
      </div>
    </div>
  )
}

export default App
