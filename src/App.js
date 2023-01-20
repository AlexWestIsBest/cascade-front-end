import { useState } from 'react';
import Navigation from './components/Navigation';
import Logout from './components/Logout';
import Main from './components/Main';
import Footer from './components/Footer';
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <div className= "container">
        <Navigation 
          user={user}
          setUser={setUser}
        />
        <Logout 
          user={user}
          setUser={setUser}
        />
        <Main 
          user={user}
          setUser={setUser}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;