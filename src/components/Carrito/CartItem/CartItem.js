import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"

const CartItem = ({item }) => {
    const [cantidadItem, setCantidadItem] = useState(item.quantity)
    const {removerItem} = useContext(CartContext)

    console.log(setCantidadItem);
    return(
            <div style={{display:'flex', justifyContent:'center'}} className='col-md mb-3'>
                <div className='item selfie'>
                    <ul className='orden'>
                        <li key={item.id}>
                        <img className='carta' src={item.imagen} alt='vegetal' width='100px' height='100px'></img>
                        <figcaption>{item.nombre} {item.descripcion}</figcaption>
                        <small className='text-muted' style={{fontSize:'15px'}}>Total: $
                        {Number(item.precio) * Number(item.quantity)}.00
                        </small>
                        </li>
                        <li>Cantidad de items: {cantidadItem} <button className='btn btn-danger' type='submit' onClick={() => removerItem(item.id)}>X</button></li>
                    </ul>
                </div>
            </div>
    )
}

export default CartItem