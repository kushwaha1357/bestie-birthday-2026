import {Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home'
import Message from './pages/Message'
import Hug from './pages/Hug'

export default function App(){
  return(
    <div className="min-h-screen p-4">
      <nav className="bg-white/80 backdrop-blur-md rounded-full shadow-lg p-4 max-w-2xl mx-auto mb-8 sticky top-4">
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <Link to='/' className="nav-link bg-gradient-to-r from-pink-400 to-pink-600 text-white hover:from-pink-500 hover:to-pink-700">
            🏠 Home
          </Link>
          <Link to='/message' className="nav-link bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:from-purple-500 hover:to-purple-700">
            💌 Message
          </Link>
          <Link to='/hug' className="nav-link bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:from-blue-500 hover:to-blue-700">
            🎉 Quiz
          </Link>
        </div>
      </nav>
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/message' element={<Message/>}/>
          <Route path='/hug' element={<Hug/>}/>
        </Routes>
      </main>
    </div>
  )
}
