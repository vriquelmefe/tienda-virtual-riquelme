
import './App.css';
import NavBar from './container/navbar/NavBar.jsx'
import ItemListContainer from './container/ItemListContainer/ItemListContainer.jsx'



function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Conoce más de mis productos para llevar la moda en Salud!"/>
    </div>
  );
}

export default App;
