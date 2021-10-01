import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"

const CartItem = ({item }) => {
    const [cantidadItem, setCantidadItem] = useState(item.quantity)
    const {removerItem} = useContext(CartContext)

    console.log(setCantidadItem);
    return(
        <div>
            <div className='col-md'>
                <div className='item selfie'>
                    <ul className='orden list-group mb-3'>
                        <li key={item.id}>
                        <img className='carta' src={item.imagen} alt='vegetal' width='100px' height='100px'></img>
                        <figcaption>{item.nombre} {item.descripcion}</figcaption>
                        <small className='text-muted' style={{fontSize:'15px'}}>Total: $
                        {Number(item.precio) * Number(item.quantity)}.00
                        </small>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='centrar'>
                            <p className='contador'>Cantidad de items: {cantidadItem}</p>
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