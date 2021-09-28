import { useContext } from "react"
import { useState } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../Carrito/CartItem/CartItem"

const Carrito = () => {
    const {productosCarrito} = useContext(CartContext)
    const {limpiarCarrito} = useContext(CartContext)
    const [cantidad, setCantidad] = useState()

    const CarritoLleno = () => (
        <div class="col-md-6 order-md-2 mb-4">
        <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Tu Carrito</span>
        </h4>
        <div className='row row-cols-4'>
            {productosCarrito.map(item => 
                <CartItem key={item.id} item={item} setCantidad={setCantidad}/>)}
        </div>
        <div>
            <p class="list-group-item d-flex" id="total">Total (ARS):
                <span>{cantidad}</span>&dollar;</p>
        </div><br></br>
        <button id="boton_vaciar" class="btn btn-success confirmarCompra">Confirmar compra</button>
        <button className='btn btn-danger' type='submit' onClick={limpiarCarrito}>Vaciar Carrito</button>
    </div>

    )

    const CarritoVacio = () => (
        <div>
            <h4>Tu carrito está vacío, agrega productos <Link to='/'> aquí</Link></h4>
        </div>
    )
    return(
        <div>
            <h1 style={{display:'flex', justifyContent:'center'}}>Carrito</h1>
            {productosCarrito ? <CarritoLleno/> : <CarritoVacio/>}
            {/*<button className='btn btn-outline-success' type='submit'>Finalizar compra</button>*/}
        </div>
    )
}

export default Carrito