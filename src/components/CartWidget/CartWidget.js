import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import './CartWidget.css'

const CartWidget = () => {
    const {quantity} = useContext(CartContext)

    
    return (
        <div>
            <NavLink to='/carrito' className='carrito'>
                <img src='../assets/images/carrito.jpg' height='50px' alt='logoCarrito' style={{marginRight:'10px'}}></img>
            {quantity}</NavLink>
        </div>
    )
}

export default CartWidget