import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <div className= "container">
      <Navigation />
      <Main />
      <Footer />
    </div>
    </div>
  );
}

export default App;