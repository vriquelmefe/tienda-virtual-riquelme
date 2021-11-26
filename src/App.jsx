
import NavBar from './container/navbar/NavBar.jsx'
import ItemListContainer from './container/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
import PageNotFound from './components/PageNotFound/PageNotFound'
 import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <NavBar />
    <Switch>
      <Route exact path="/">
      <ItemListContainer greeting="Conoce más de mis productos para llevar la moda en Salud!"/>
      </Route>
      <Route path="/category/:catId">
      <ItemListContainer greeting="Conoce más de mis productos para llevar la moda en Salud!"/>

      </Route>
      <Route path="/category/:prodId">
      <ItemDetailContainer />

      </Route>
      <Route path="/contacto">

      </Route>
      <Route exact path="/login">

      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
