// import { useContext } from 'react';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import './App.css';
import AuthProvide from './context/AuthProvide';
import DataList from './pages/DataList/DataList';
import Heading from './pages/Heading/Heading';
import Detail from './pages/Home/Detail/Detail';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Products from './pages/Products/Products';
import Register from './pages/register/Register';

function App() {
  return (
    <div className="App">
     <AuthProvide>
     <BrowserRouter>
      <Heading></Heading>
         <Switch>
            <Route exact path="/">
            <Home></Home>
            </Route>
            <Route exact path="/home">
            <Home></Home>
            </Route>
            <Route path="/products">
            <Products></Products>
            </Route>
            <Route  path="/datalist">
             <DataList></DataList>
            </Route>
            <Route path="/login">
            <Login></Login>
            </Route>
            <Route path="/register">
            <Register></Register>
            </Route>
            <PrivateRoute path="/detail/:id">
              <Detail></Detail>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
         </Switch>
      </BrowserRouter>
     </AuthProvide>
    
    
    </div>
  );
}

export default App;
