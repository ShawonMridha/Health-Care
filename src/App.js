
import './App.css';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ServiceData from './Components/ServiceData/ServiceData';
import Details from './Components/Details/Details';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Footer from './Components/Footer/Footer';
import NotFound from './Components/NotFound/NotFound';
import AboutUs from './Components/AboutUs/AboutUs';
import NurseDetails from './Components/NurseDetails/NurseDetails';
import Nurse from './Components/Nurse/Nurse';


function App() {
  return (
    <div className="">
   
    <AuthProvider>
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
         <Route path="/register">
          <Register></Register>
         </Route>
         <PrivateRoute path="/details/:id">
           <Details></Details>
         </PrivateRoute>
         <Route path="/about">
           <AboutUs></AboutUs>
         </Route>
         <Route path="/nurse">
           <Nurse></Nurse>
         </Route>
         <Route path="*">
           <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
