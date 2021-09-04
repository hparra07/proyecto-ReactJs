import { useState } from "react"
import './CartWidget.css'

const CartWidget = () => {

    const [contador] = useState(5)
    return (
        <div>
            <a href='carrito' className='carrito'>
                <img src='./assets/images/carrito.jpg' height='50px' alt='logoCarrito' style={{marginRight:'10px'}}></img>
            {contador}</a>
        </div>
    )
}

export default CartWidget