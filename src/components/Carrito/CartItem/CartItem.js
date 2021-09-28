import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"

const CartItem = ({item , setCantidad}) => {
    const [cantidadItem, setCantidadItem] = useState(item.quantity)
    console.log(cantidadItem);
    const {removerItem} = useContext(CartContext)

    setCantidad(Number(item.precio) * Number(item.quantity))

    return(
        <div>
            <h1>CartItem</h1>
            <div class="portfolio-menu mt-2 mb-4"></div>
            <div className='portfolio-item row'>
                <div className='item selfie'>
                    <ul className='row-cols-4 orden'>
                        <li key={item.id}>
                        <img className='carta' src={item.imagen} alt='vegetal' width='200px' height='150px'></img>
                        <figcaption>{item.nombre}</figcaption>
                        <small className='text-muted' style={{fontSize:'15px'}}>$
                        {Number(item.precio) * Number(item.quantity)}.00
                        </small>
                        <div className='centrar'>
                            <button className='btn btn-danger' type='submit' onClick={item.quantity - 1}>-</button>
                            <p className='contador'>{item.quantity}</p>
                            <button className='btn btn-outline-success' type='submit' onClick={() => setCantidadItem(Number(item.count) + 1)}>+</button>
                        </div>
                        <div className='centrado'>
                            <button className='btn btn-outline-success' type='submit' onClick={() => removerItem(item.id)}>Remover</button>
                        </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CartItem