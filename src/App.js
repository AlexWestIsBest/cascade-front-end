import * as React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <div className= "container">
        <Navigation/>
      </div>
    </div>
  );
}

export default App;