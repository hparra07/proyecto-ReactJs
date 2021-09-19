import { useState, useEffect } from "react"
import ItemCount from "../ItemCount/ItemCount.js"
import { NavLink } from "react-router-dom"
const miItem = [
    { id: '01', nombre: "Banana", precio: '80', imagen: "./assets/images/bananas.jpg", descripcion: "x 1 Kg"},
    { id: '02', nombre: "Cebolla morada", precio: '100', imagen: "./assets/images/cebolla_morada.jpg", descripcion:" x 1 Kg"},
    { id: '03', nombre: "Choclo amarillo", precio: '90', imagen: "./assets/images/choclo.jpg", descripcion: "x Unid."},
    { id: '04', nombre: "Espinaca", precio: '50', imagen: "./assets/images/espinaca.jpg", descripcion: "x atado"},
    { id: '05', nombre: "Huevos blancos", precio: '150', imagen: "./assets/images/huevos_blancos.jpg", descripcion: " x maple"},
    { id: '06', nombre: "Huevos colorados", precio: '180', imagen: "./assets/images/huevos_colorados.jpeg", descripcion: " x maple"},
    { id: '07', nombre: "Lechuga criolla", precio: '70', imagen: "./assets/images/lechuga_criolla.jpg", descripcion: "x planta"},
    { id: '08', nombre: "Lechuga francesa", precio: '80', imagen: "./assets/images/lechuga_francesa.jpg", descripcion: "x planta"},
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

    if (listaItem.length === 0){
        return <h3>Cargando...</h3>
    }

    return (
        <div>
            <h2 style={{color:'forestgreen'}}>Lista de productos</h2>
        <div className='container'>
            <div class="portfolio-menu mt-2 mb-4"></div>
            <div className='portfolio-item row'>
                <div className='item selfie'>
                    <ul className='row row-cols-4 orden'>
                        {listaItem.map(it => <li key={it.id}><NavLink className='card-link' to={'/producto/' + it.nombre}>
                        <img className='carta' src={it.imagen} alt='vegetal' width='200px' height='150px'>
                        </img></NavLink>
                        <figcaption><NavLink className='card-link' to={'/producto/' + it.nombre}>{it.nombre}<br/>{it.descripcion}</NavLink></figcaption>
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