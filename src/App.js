import './App.css'
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import "bootstrap/dist/css/bootstrap.min.css"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'

function App() {

  return (
    
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App