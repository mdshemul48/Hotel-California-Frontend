import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// context
import { AuthProvider } from './Contexts/AuthContext';
// components
import Home from './components/Home/Home';

// header and footer
import NavBar from './components/Shared/NavBar/NavBar';

import './App.css';
// bootstrap style
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
