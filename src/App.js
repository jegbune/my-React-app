// import logo from './logo.svg';
// import logo from './logo512.png'
import './App.css';

function Header() {

  return (
    <header>
      <nav>
      <img src="./logo512.png" width= "40px" />
      </nav>
    </header>
  
  )
}
function MainContent() {
  return (
    <div>
       <ul className='nav-list'>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

      <h1>Reasons I'm excited to learn React</h1>
        <ol>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ol>
    </div>
  )
}
      

function Footer() {
return (
<footer>
        © 2023 Egbune development. All rights reserved.
      </footer>
)

}

function App() {
  return (
    <div>
    <Header />
    <MainContent />,
    <Footer />   
    </div>
  )
    
}

export default App;










































    //   <div className="App">
    //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>