import Navbar from './components/Navbar.jsx';
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'


function App(){
  return (
    <div>
      <div>
        <Navbar name='sujan' address="location1" clg='Amrit science'/>
      </div>
      <div>
        <Main />
      </div>
      <Footer />
    </div>
  )
}

export default App;