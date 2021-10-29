import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// context
import { AuthProvider } from './Contexts/AuthContext';
// components
import NavBar from './components/Shared/NavBar/NavBar';

import './App.css';
// bootstrap style
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Switch></Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
