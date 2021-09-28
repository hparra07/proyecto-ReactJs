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
        <div className='row'>
            <div className='col-md-6-order-1'>
                    {productosCarrito.map(item => 
                        <CartItem key={item.id} item={item} setCantidad={setCantidad}/>)}
            </div>
        </div>
    )

    const CarritoVacio = () => (
        <div>
            <h4>Tu carrito está vacío, agrega productos <Link to='/productos'> aquí</Link></h4>
        </div>
    )

    const confirmarCompra = () =>{
        if(CarritoLleno > 0){
            alert('Gracias por tu compra!')
            limpiarCarrito()
        }else{
            alert('El carrito no puede estar vacío para finalizar la compra')
        }
    }

    return(
        <div className='row'> 
            <h1 style={{display:'flex', justifyContent:'center'}}>Carrito</h1>
            {productosCarrito > 0 ? <CarritoLleno/> : <CarritoVacio/>}
            <div className='col-md order-md-1'>
                <h1>Tus Datos</h1>
                    <div className="col-md-8 order-md-1">
                        <form className="needs-validation" validate>
                            <div className="row ">
                                <div className="col-md-6 mb-3 ">
                                    <label for="firstName ">Nombre:</label>
                                    <input type="text " className="form-control " id="firstName "  placeholder="Tu nombre " value=" " ></input>
                                </div>
                                <div className="col-md-6 mb-3 ">
                                    <label for="lastName ">Apellido:</label>
                                    <input type="text " className="form-control " id="lastName " placeholder="Tu apellido " value=" " ></input>
                                </div>
                            </div>
                            <div className="mb-3 ">
                                <label for="email ">Email:</label>
                                <input type="email " className="form-control " id="email " placeholder="Tu email " ></input>
                            </div>
                            <div className="mb-3 ">
                                <label for="address ">Dirección:</label>
                                <input type="text " className="form-control " id="address " placeholder="Tu domicilio " ></input>
                            </div>
                            <div>
                                <p className="list-group-item d-flex">Total (ARS):<span>{cantidad}$</span></p>
                                <button className='btn btn-outline-success' type='submit' onClick={confirmarCompra}>Finalizar compra</button>
                                <button className='btn btn-danger' type='submit' onClick={limpiarCarrito}>Vaciar Carrito</button>
                            </div>
                        </form>
                    </div>
            </div> 
        </div>

    )
}

export default Carrito