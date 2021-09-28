import './ItemCount.css'
import { useState } from "react"
import { useContext } from 'react/cjs/react.development'
import { CartContext } from '../../context/CartContext'

const ItemCount = ({setContador, item})=> {
    const[count, setCount] = useState(0)
    const {quantity, cambiarCantidad, agregarItem, productosCarrito, setProductosCarrito} = useContext(CartContext)

    const funcionRestar = () =>{
        if(count <= 0){
            alert('La cantidad del item no puede ser menor a 0')
        }else{
            setCount(count - 1)
            cambiarCantidad(quantity - 1)
        }
    }

    const funcionSumar = () =>{
        if(count >= item.stock){
            alert('No hay más stock')
        }else{
            setCount (count + 1)
            cambiarCantidad(quantity + 1)
        }
    }

    const agregarCarrito = () => {
        const productosCarritoId = productosCarrito?.map(item => item.id)

        if(productosCarritoId?.includes(item.id)){
            const actualizarCarrito = productosCarrito?.map(i =>{

                if(i.id === item.id){
                    let oldQuantity = i.quantity
                    return{
                        ...i,
                        quantity: count + oldQuantity
                    }
                }else{
                    return i
                }
            })
        setProductosCarrito(actualizarCarrito)
        }else{
            const newProduct = {
                ...item,
                quantity: count
            }
            productosCarrito
            ? agregarItem([...productosCarrito, newProduct])
            : agregarItem([newProduct])
        }

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