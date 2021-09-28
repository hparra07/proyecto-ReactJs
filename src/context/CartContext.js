import { createContext } from "react";
import { useState } from "react/cjs/react.development";

export const CartContext = createContext()

export const CartContextProvider = ({children}) => {
    const [productosCarrito, setProductosCarrito] = useState([])
    const [quantity, setQuantity] = useState(0)

    const removerItem = (id) => {
        const listaNueva = productosCarrito.filter((item) => item.id !== id)
        setProductosCarrito(listaNueva)
    }

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
            setProductosCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}
    