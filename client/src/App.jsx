import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ClientsList from './components/ClientsList/ClientsList'
import NewClient from './components/NewClient/NewClient'
import UpdateClient from './components/UpdateClient/UpdateClient'
import Test from './components/Test/Test'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ClientsList />}></Route>
        <Route path='/add' element={<NewClient />}></Route>
        <Route path='/update/:id' element={<UpdateClient />}></Route>
        <Route path='/test' element={<Test></Test>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
