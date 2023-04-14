// import logo from './logo.svg';
// import logo from './logo512.png'
import './App.css';


function MainContent() {
  return (
    <div>
    <header className='header'>
      <nav>
      <img src="./logo512.png"  alt='logo' />
      </nav>
       <ul className='nav-list'>
          <li>Menu</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
    </header>

      <h1>Reasons I'm excited to learn React</h1>
        <ol>
          <li>It's a popular library, so I'll be able to fir in with the cool kids!</li>
          <li>I'm more likely to get a job as a developer if I know React</li>
          <li>It look pretty fun to use</li>
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