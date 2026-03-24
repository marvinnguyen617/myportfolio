import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom' 
import { Home } from './Pages/home'
import { About } from './Pages/about'
import { Projects } from './Pages/projects'
import { Layout } from './Components/layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
        </Route>
      </Routes>
    </Router>
  )

}

export default App