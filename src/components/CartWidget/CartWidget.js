import { useState } from "react"
import './CartWidget.css'

const CartWidget = () => {
    const[count] = useState(0)
    return (
        <div>
            <a href='carrito' className='carrito'>
                <img src='./assets/images/carrito.jpg' height='50px' alt='logoCarrito' style={{marginRight:'10px'}}></img>
            {count}</a>
        </div>
    )
}

export default CartWidget