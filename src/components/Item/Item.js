import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount.js"
import './Item.css'

const misProductos = [
    { id: '01', nombre: "Banana", precio: '80', imagen: "./assets/images/bananas.jpg", descripcion: "x 1 Kg"},
    { id: '02', nombre: "Cebolla morada", precio: '100', imagen: "./assets/images/cebolla_morada.jpg", descripcion:" x 1 Kg"},
    { id: '03', nombre: "Choclo amarillo", precio: '90', imagen: "./assets/images/choclo.jpg", descripcion: "x Unid."},
    { id: '04', nombre: "Espinaca", precio: '50', imagen: "./assets/images/espinaca.jpg", descripcion: "x atado"},
    { id: '05', nombre: "Huevos blancos", precio: '150', imagen: "./assets/images/huevos_blancos.jpg", descripcion: " x maple"},
    { id: '06', nombre: "Huevos colorados", precio: '180', imagen: "./assets/images/huevos_colorados.jpeg", descripcion: " x maple"},
    { id: '07', nombre: "Lechuga criolla", precio: '70', imagen: "./assets/images/lechuga_criolla.jpg", descripcion: "x planta"},
    { id: '08', nombre: "Lechuga francesa", precio: '80', imagen: "./assets/images/lechuga_francesa.jpg", descripcion: "x planta"},
    { id: '09', nombre: "Lechuga mantecosa", precio: '60', imagen: "./assets/images/lechuga_mantecosa.jpg", descripcion: "x planta"},
    { id: '10', nombre: "Lechuga repollada", precio: '80', imagen: "./assets/images/lechuga_repollada.jpg", descripcion: "x planta"},
    { id: '11', nombre: "Morron amarillo", precio: '150', imagen: "./assets/images/morron_amarillo.jpg", descripcion: " x 1 Kg"},
    { id: '12', nombre: "Morron rojo", precio: '150', imagen: "./assets/images/morron_rojo.jpg", descripcion: " x 1 Kg"}, 
    { id: '13', nombre: "Morron verde", precio: '150', imagen: "./assets/images/morron_verde.jpg", descripcion: " x 1Kg"},
    { id: '14', nombre: "Palta", precio: '90', imagen: "./assets/images/palta.jpg", descripcion: " x Unid."},
    { id: '15', nombre: "Papa blanca", precio: '60', imagen: "./assets/images/papa_blanca.jpg", descripcion: " x 1 Kg"},
    { id: '16', nombre: "Papa negra", precio: '50', imagen: "./assets/images/papa_negra.jpg", descripcion: " x 1 Kg"},
    { id: '17', nombre: "Papines", precio: '90', imagen: "./assets/images/papines.png", descripcion: " x 500 Gr"},
    { id: '18', nombre: "Remolacha", precio: '90', imagen: "./assets/images/remolacha.jpg", descripcion: " x 1 Kg"},
    { id: '19', nombre: "Tomate cherry", precio: '120', imagen: "./assets/images/tomate-cherry.jpg", descripcion: "x 500 Gr"},
    { id: '20', nombre: "Tomate perita", precio: '80', imagen: "./assets/images/tomate_perita.jpg", descripcion: " x 1 Kg"}
    ]

const Lista = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => resolve(misProductos),2000)   
    })
}

const Item = (props) => {
    const[listaProductos, setListaProductos] = useState([])

    useEffect(() => {
        const list = Lista()

        list.then(list => {
            setListaProductos(list)
        })
    },[])

    if (listaProductos.length === 0){
        return <h3>Cargando...</h3>
    }
    return (
        <div>
            <h1 style={{display:'flex', justifyContent:'center'}}>Productos</h1>
        <div className='container'>
            <div class="portfolio-menu mt-2 mb-4"></div>
            <div className='portfolio-item row'>
                <div className='item selfie'>
                    <ul className='row row-cols-4 orden'>
                        {listaProductos.map(producto => <li key={producto.id}><NavLink className='card-link' to={'/producto/' + producto.nombre}>
                        <img className='carta' src={producto.imagen} alt='vegetal' width='200px' height='150px'>
                        </img></NavLink>
                        <figcaption><NavLink className='card-link' to={'/producto/' + producto.nombre}>{producto.nombre}</NavLink></figcaption>
                            <div className='abajo'>
                                <ItemCount/>
                                <small className='text-muted'>${producto.precio}.00</small>
                            </div>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Item