import ItemDetail from "../ItemDetail/ItemDetail.js"
import { useEffect, useState } from 'react'

const miItem = [
    { id: '01', stock:'25', nombre: "Banana", cat: 'frutas', precio: '80', imagen: "../assets/images/bananas.jpg", descripcion: "x 1 Kg"},
]

const ItemDetailContainer = () => {
    const[item, setItem] = useState([])

    const Lista = () => {
        return new Promise ((resolve) =>{
            setTimeout(() => resolve(miItem), 2000)   
        })
    }
   
    useEffect(() => {
        const list = Lista()

        list.then(list => {
            setItem(list)
        })
    },[])

   if (item.length === 0){
        return <h3>Cargando...</h3>
    }

    return(
        <div className='container'>
            <div className='row row-cols-1'>
                {item.map(item => 
                    <ItemDetail item={item}/>)}
            </div>
        </div>
    )
}

export default ItemDetailContainer