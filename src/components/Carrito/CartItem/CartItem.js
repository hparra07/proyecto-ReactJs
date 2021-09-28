import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"

const CartItem = ({item , setCantidad}) => {
    const [cantidadItem, setCantidadItem] = useState(item.quantity)
    console.log(cantidadItem);
    const {removerItem} = useContext(CartContext)

    setCantidad(Number(item.precio) * Number(cantidadItem))
    console.log(cantidadItem);

    return(
        <div>
            <div className='col-md'>
                <div className='item selfie'>
                    <ul className='orden list-group mb-3'>
                        <li key={item.id}>
                        <img className='carta' src={item.imagen} alt='vegetal' width='100px' height='100px'></img>
                        <figcaption>{item.nombre}</figcaption>
                        <small className='text-muted' style={{fontSize:'15px'}}>$
                        {Number(item.precio) * Number(item.quantity)}.00
                        </small>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='centrar'>
                        <button className='btn btn-danger' type='submit' onClick={() => cantidadItem - 1}>-</button>
                            <p className='contador'>{cantidadItem}</p>
                        <button className='btn btn-outline-success' type='submit' onClick={() => setCantidadItem(Number(cantidadItem) + 1)}>+</button>
                    </div>
                    <div className='centrado'>
                        <button className='btn btn-danger' type='submit' onClick={() => removerItem(item.id)}>Remover</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem