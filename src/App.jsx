
import NavBar from './container/navbar/NavBar.jsx'
import ItemListContainer from './container/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import Contacto from './components/Contacto/Contacto'
import Login from './components/Login/Login'
import CartWidget from './components/Cardwidget/CardWidget'
import PageNotFound from './components/PageNotFound/PageNotFound'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CartContextProvider from './Context/CartContext'



function App() {
  return (
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
      <Route exact path="/cart" component={CartWidget} />
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
    </Router>
    </CartContextProvider>
  );
}

export default App;
