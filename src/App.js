import React from 'react';
import logo from "./logo.svg"
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      toggleDropdown: false
    }
  }
  render(){

    return (
      <div className="App">
      <header className="main-header">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d2/Stitch_%28Lilo_%26_Stitch%29.svg/1200px-Stitch_%28Lilo_%26_Stitch%29.svg.png" alt="stitch logo" className="header-logo" />
        {this.state.toggleDropdown
        ? (
          <>
          <span className="dropdown-toggle" onClick={() => this.setState({toggleDropdown: !this.state.toggleDropdown})}> ≡ </span>
          <nav className ="mobile-links">
            <p>Home</p>
            <p>About</p>
            <p>Contact</p>
          </nav>
          </>
        )
        :(
          <span className="dropdown-toggle" onClick={() => this.setState({toggleDropdown: !this.state.toggleDropdown})}> ≡ </span>
        )
        }
        <nav className="header-links">
          <span>Home</span>
          <span>About</span>
          <span>Contract</span>
        </nav>
      </header>
      <img src={logo} alt='react.js logo' className='react-logo'/>
      <img src={logo} alt='react.js logo' className='react-logo1'/>
      <img src={logo} alt='react.js logo' className='react-logo2'/>
    </div>
   );
  }
}

export default App;
