import Intro from "./components/Intro/Intro"
import Navbar from "./components/Navbar/Navbar"
import Skills from './components/Skills/Skills'

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Intro />
      <Skills />
    </div>
  )
}

export default App
