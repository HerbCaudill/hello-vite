import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-primary-500 h-screen ">
      <header className="text-center flex flex-col text-center justify-center text-white">
        <img src={logo} className="max-h-64" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button
            className="p-4 m-5 leading-none border-2 border-white rounded-xl focus:outline-transparent hover:bg-primary-400"
            onClick={() => setCount(count => count + 1)}
          >
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
