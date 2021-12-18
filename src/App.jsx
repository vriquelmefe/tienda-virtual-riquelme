
import NavBar from './container/navbar/NavBar.jsx'
import ItemListContainer from './container/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import Contacto from './components/Contacto/Contacto'
import Login from './components/Login/Login'
import CardView from './components/CartView/CartView'
import PageNotFound from './components/PageNotFound/PageNotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CartContextProvider from './Context/CartContext'
import { UserContextProvider } from './Context/UserContext';
import Checkout from './components/Checkout/Checkout.js';
import PageAdmin from './components/PageAdmin/PageAdmin';
import SignUp from './components/SignUp/SignUp.jsx';



function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
      <Router>
        <NavBar />
      <Switch>
        <Route exact path="/">
        <ItemListContainer greeting="Conoce más de la moda en Salud!!!"/>
        </Route>
        <Route path="/category/:catId">
        <ItemListContainer greeting="Todos los productos que puedas imaginar!!!"/>

        </Route>
        <Route exact path="/item/:prodId" component={ItemDetailContainer}/>
        <Route path="/contacto" component={Contacto} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/cart" component={CardView} />
        <Route exact path="/checkout" component={Checkout} />
        <Route exact path="/admin" component={PageAdmin} />
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      </Router>
      </CartContextProvider>
      </UserContextProvider>
  );
}

export default App;
