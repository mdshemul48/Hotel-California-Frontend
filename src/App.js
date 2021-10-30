import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// context
import { AuthProvider } from './Contexts/AuthContext';

// components
import Home from './components/Home/Home';
import MyReservation from './components/MyReservation/MyReservation';
import AddRoom from './components/AddRoom/AddRoom';
// header and footer
import NavBar from './components/Shared/NavBar/NavBar';
import Footer from './components/Shared/Footer/Footer';

// auth
import Auth from './components/Auth/Auth';

// private route
import PrivateRoute from './Routes/PrivateRoute';
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
          <Route path='/auth' exact>
            <Auth />
          </Route>
          <PrivateRoute path='/my-reservation'>
            <MyReservation />
          </PrivateRoute>{' '}
          <PrivateRoute path='/manage-reservation'>
            Manage All Rooms
          </PrivateRoute>{' '}
          <PrivateRoute path='/add-room'>
            <AddRoom />
          </PrivateRoute>{' '}
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
