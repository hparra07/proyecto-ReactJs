import { useState } from "react"
import { NavLink } from "react-router-dom"
import './CartWidget.css'

const CartWidget = () => {
    const[count] = useState(0)
    return (
        <div>
            <NavLink to='/carrito' className='carrito'>
                <img src='../assets/images/carrito.jpg' height='50px' alt='logoCarrito' style={{marginRight:'10px'}}></img>
            {count}</NavLink>
        </div>
    )
}

export default CartWidget