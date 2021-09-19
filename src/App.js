import './App.css'
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import "bootstrap/dist/css/bootstrap.min.css"
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Inicio from './components/views/Inicio.js'
import Ayuda from './components/views/Ayuda.js'
import Nosotros from './components/views/Nosotros.js'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <NavBar/>
            <Switch>
              <Route exact path='/'>
                <Inicio/>
                <ItemDetailContainer/>
              </Route>
              <Route path='/nosotros'>
                <Nosotros/>
              </Route>
              <Route path='/productos'>
                <ItemListContainer/>
              </Route>
              <Route path='/ayuda'>
                <Ayuda/>
              </Route>
            </Switch>
        </header>
      </BrowserRouter>
    </div>
  )
}

export default App