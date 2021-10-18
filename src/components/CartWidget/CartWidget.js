import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './CartWidget.css'
import { useEffect, useState } from "react/cjs/react.development"

const CartWidget = () => {
    const {cantidadCarrito} = useContext(CartContext)
    const [actSize, setActSize] = useState(0)
    useEffect(() => {
        setActSize(cantidadCarrito)
    },[cantidadCarrito])
  
    return (
        <div>
            <NavLink to='/carrito' className="ml-auto"><i style={{marginRight:'10px'}} className="fas fa-shopping-cart"> <span
            className="badge badge-danger">{actSize}</span></i></NavLink>
        </div>
    )
}

export default CartWidget