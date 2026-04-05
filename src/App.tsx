import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom' 
import { Home } from './Pages/home'
import { Experience } from './Pages/experience'
import { Projects } from './Pages/projects'
import { Contact } from './Pages/contact'
import { Layout } from './Components/layout'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )

}

export default App