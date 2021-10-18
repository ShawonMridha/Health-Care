
import './App.css';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import ServiceData from './Components/ServiceData/ServiceData';
import Details from './Components/Details/Details';

function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Switch>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/services">
           <ServiceData></ServiceData>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/details/:id">
           <Details></Details>
         </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
