import './ItemCount.css'
import { useState } from "react"

const ItemCounter = () => {
    const[count, setCount] = useState(0)

    return(
        <div className='cart'>
            <h2>{count}</h2>
            <div className='centrar'>
                <button className='btn btn-danger' type='submit' onClick={() => setCount(count - 1)}>-</button>
                <button className='btn btn-outline-success' type='submit' onClick={() => setCount(count + 1)}>+</button>
            </div>
            <div className='centrado'>
                <button className='btn btn-outline-success' type='submit'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCounter