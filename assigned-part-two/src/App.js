import { BrowserRouter as Router, Route} from 'react-router-dom'
import LogIn from './Pages/LogIn';
import './App.css';
import ResetPassword from './Pages/ResetPassword';
import CreatePassword from './Pages/CreatePassword';
import UpdatePassword from './Pages/UpdatePassword';
import Zones from './Pages/Zones';
import AssignmentHistory from './Pages/AssignmentHistory';
import Account from './Pages/Account';
import LogOut from './Pages/LogOut';

function App() {
  return (
    <Router>
      <Route path='/account' component={Account} exact></Route>
      <Route path='/assignment-history' component={AssignmentHistory} exact></Route>
      <Route path='/create-password' component={CreatePassword} exact></Route>
      <Route path='/log-out' component={LogOut} exact></Route>
      <Route path='/reset-password' component={ResetPassword} exact></Route>
      <Route path='/update-password' component={UpdatePassword} exact></Route>  
      <Route path='/zones' component={Zones} exact></Route>
      <Route path='/' component={LogIn} exact></Route>
      
    </Router>
  );
}

export default App;
