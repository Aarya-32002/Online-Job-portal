import logo from './logo.svg';
import './App.css';
import Registration from'./components/Registration';
import Login from'./components/Login';
import Appbar from'./components/Appbar';

function App(store) {

  function Page() {
    switch(store.getState()) {
      case"Login":
      return(<div><Login/></div>)
      case"Registration":
      return(<div><Registration/></div>)

    }

  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <body>
        <Appbar store/>
        <Page/>
      </body>
    </div>
  );
}

export default App;
