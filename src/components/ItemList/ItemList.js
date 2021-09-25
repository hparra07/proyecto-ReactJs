import { useState , useEffect } from "react"
import Item from "../Item/Item"


const ItemList = (props) => {
    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(props.producto)
    }, [props.producto])
 
    return(
        <div className='container'>
            <h1 style={{display:'flex', justifyContent:'center'}}>Productos</h1>
            <div className='row row-cols-4'>
                {items.map(item => 
                    <Item key={item.id} producto={item}/>)}
            </div>
        </div>
    )
}

export default ItemList