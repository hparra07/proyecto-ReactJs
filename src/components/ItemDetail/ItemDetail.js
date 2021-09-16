import { useState, useEffect } from "react"
import ItemCount from "../ItemCount/ItemCount.js"

const miItem = [
    { id: '01', nombre: "Banana", precio: '80', imagen: "./assets/images/bananas.jpg", descripcion: "Lorem Ipsum" },
    ]

const unicoItem = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => resolve(miItem), 2000)   
    })
}

const ItemDetail = () =>{
    const[listaItem, setListaItem] = useState([])

    useEffect(() => {
        const list = unicoItem()

        list.then(list => {
            setListaItem(list)
        })
    },[])

    return (
        <div>
        <div className='container'>
            <div class="portfolio-menu mt-2 mb-4"></div>
            <div className='portfolio-item row'>
                <div className='item selfie'>
                    <ul className='row row-cols-4 orden'>
                        {listaItem.map(it => <li key={it.id}>
                        <img className='carta' src={it.imagen} alt='vegetal' width='200px' height='150px'>
                        </img>
                        <figcaption>{it.nombre}<br/>{it.descripcion}</figcaption>
                            <div className='abajo'>
                                <ItemCount/>
                                <small className='text-muted'>${it.precio}.00</small>
                            </div>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ItemDetail