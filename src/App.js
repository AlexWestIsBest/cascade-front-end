import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

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