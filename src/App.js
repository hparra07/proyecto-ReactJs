import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar/NavBar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import Inicio from './components/views/Inicio.js'
import Ayuda from './components/views/Ayuda.js'
import Nosotros from './components/views/Nosotros.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import Carrito from './components/Carrito/Carrito'
import CartWidget from './components/CartWidget/CartWidget'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'

function App() {

  return (
    <div className="App">
      <CartContextProvider>

      <BrowserRouter>
        <header className="App-header">
            <NavBar/>
            <Switch>
              <Route exact path='/'>
                <Inicio/>
                <ItemListContainer/>
              </Route>

              <Route path='/nosotros'>
                <Nosotros/>
              </Route>

              <Route path='/productos'>
                <ItemListContainer/>
              </Route>

              <Route path='/categoria/:id'>
                <ItemListContainer/>
              </Route>

              <Route path='/item/:itemid'>
                <ItemDetailContainer/>
              </Route>

              <Route path='/ayuda'>
                <Ayuda/>
              </Route>

              <Route path='/carrito'>
                  <Carrito/>
              </Route>

              <Route path='carrito'>
                <CartWidget/>
              </Route>
            </Switch>
        </header>
      </BrowserRouter>

      </CartContextProvider>
      
    </div>
  )
}

export default App