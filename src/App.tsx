import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Marvin Nguyen</h1>
      <h2>Electrical Engineering Student</h2>
      <h3>Hi! My name is Marvin Nguyen and this is my personal portfolio website.</h3>
      
      <a href='https://www.linkedin.com/in/marvintuanminhnguyen/' target="_blank" className="card">
        LinkedIn&nbsp;
      </a>
      <a href='https://drive.google.com/file/d/1F0Y4PoYIUZzYuECMRSxCgwg3M9Y48c3h/view?usp=sharing' target="_blank" className="card">
        Resume&nbsp; 
      </a>
      <a href='https://github.com/marvinnguyen617' target="_blank" className="card">
        Github&nbsp;
      </a>
    </>
  )
}

export default App
