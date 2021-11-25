
import './App.css';
import NavBar from './container/navbar/NavBar.jsx'
// import ItemListContainer from './container/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from './container/ItemDetailContainer/ItemDetailContainer';
 import todosLosProductos from'./productos';



function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greeting="Conoce más de mis productos para llevar la moda en Salud!"/> */}
      <ItemDetailContainer todosLosProductosLista={todosLosProductos}/>
    </div>
  );
}

export default App;
