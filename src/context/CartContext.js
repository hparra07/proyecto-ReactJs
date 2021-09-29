import { createContext } from "react";
import { useEffect, useState } from "react/cjs/react.development";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [productosCarrito, setProductosCarrito] = useState([])
    const [cantidadProducto, setCantidadProducto] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const removerItem = (id) => {
        const listaNueva = productosCarrito.filter((item) => item.id !== id)
        setProductosCarrito(listaNueva)
        setQuantity(0)
    }

    useEffect(() => {
        if(productosCarrito.length === 0){
            setCantidadProducto(0)
        }else{
            productosCarrito.forEach(element => {
                setCantidadProducto(cantidadProducto + element.quantity)
            })
        }
    },[productosCarrito])

    const cambiarCantidad = (count) => {
        setQuantity(count)
    }

    const limpiarCarrito = () => {
        setProductosCarrito([])
        setQuantity(0)
    }

    const agregarItem = (item, quantity) => {
        setProductosCarrito(item, quantity)
    }

    return(
        <CartContext.Provider
        value={{
            productosCarrito,
            agregarItem,
            limpiarCarrito,
            cambiarCantidad,
            quantity,
            removerItem,
            setProductosCarrito,
            cantidadProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}
    