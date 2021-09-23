import './ItemCount.css'
import { useState } from "react"

const ItemCount = ({setContador})=> {
    
    const[count, setCount] = useState(0)

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

    const agregarCarrito = () => {
        setContador(count)
        setCount(0)
    }

    return(
        <div className='fluid'>
            <div className='centrar'>
                <button className='btn btn-danger' type='submit' onClick={funcionRestar}>-</button>
                <p className='contador'>{count}</p>
                <button className='btn btn-outline-success' type='submit' onClick={funcionSumar}>+</button>
            </div>
            <div className='centrado'>
                <button className='btn btn-outline-success' type='submit' onClick={agregarCarrito}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount