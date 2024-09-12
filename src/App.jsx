import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Portal from './Portal'
import CreateBook from './CreateBook'
import ListBook from './ListBook'
import EditBook from './EditBook'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portal' element={<Portal />}>
            <Route path='createbook' element={<CreateBook />} />
            <Route path='listbook' element={<ListBook />} />
            <Route path='editbook/:bookId' element={<EditBook />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App