import './ItemCount.css'
import { useState } from "react"

const ItemCount = () => {
    
    const[count, setCount] = useState(1)

    const funcionRestar = () =>{
        if(count <= 0){
            console.log('no hacer nada')
        }else{
            setCount(count - 1)
        }
    }

    const funcionSumar = () =>{
        if(count >= 15){
            alert('No hay más stock')
        }else{
            setCount (count + 1)
        }
    }

    return(
        <div className='fluid'>
            <h2>{count}</h2>
            <div className='centrar'>
                <button className='btn btn-danger' type='submit' onClick={funcionRestar}>-</button>
                <button className='btn btn-outline-success' type='submit' onClick={funcionSumar} >+</button>
            </div>
            <div className='centrado'>
                <button className='btn btn-outline-success' type='submit'>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount