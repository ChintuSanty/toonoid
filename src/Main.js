import logo from './logo.svg';

const Main = () =>{
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Museum For Animation
        </p>
        <a
          className="App-link"
          href="/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          Know Everything About Animation
        </a>
      </header>
    )
}

export default Main