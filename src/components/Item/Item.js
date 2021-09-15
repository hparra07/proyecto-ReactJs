import { useState, useEffect } from "react"
import './Item.css'

const misProductos = [
    { id: '01', nombre: "Banana", precio: '80', imagen: "./assets/images/bananas.jpg" },
    { id: '02', nombre: "Cebolla morada", precio: '100', imagen: "./assets/images/cebolla_morada.jpg" },
    { id: '03', nombre: "Choclo amarillo", precio: '90', imagen: "./assets/images/choclo.jpg" },
    { id: '04', nombre: "Espinaca", precio: '50', imagen: "./assets/images/espinaca.jpg" },
    { id: '05', nombre: "Maple de huevos blancos", precio: '150', imagen: "./assets/images/huevos_blancos.jpg" },
    { id: '06', nombre: "Maple de huevos colorados", precio: '180', imagen: "./assets/images/huevos_colorados.jpeg" },
    { id: '07', nombre: "Lechuga criolla", precio: '70', imagen: "./assets/images/lechuga_criolla.jpg" },
    { id: '08', nombre: "Lechuga francesa", precio: '80', imagen: "./assets/images/lechuga_francesa.jpg" },
    { id: '09', nombre: "Lechuga mantecosa", precio: '60', imagen: "./assets/images/lechuga_mantecosa.jpg" },
    { id: '10', nombre: "Lechuga repollada", precio: '80', imagen: "./assets/images/lechuga_repollada.jpg" },
    { id: '11', nombre: "Morron amarillo", precio: '150', imagen: "./assets/images/morron_amarillo.jpg" },
    { id: '12', nombre: "Morron rojo", precio: '150', imagen: "./assets/images/morron_rojo.jpg" }, 
    { id: '13', nombre: "Morron verde", precio: '150', imagen: "./assets/images/morron_verde.jpg" },
    { id: '14', nombre: "Palta", precio: '90', imagen: "./assets/images/palta.jpg" },
    { id: '15', nombre: "Papa blanca", precio: '60', imagen: "./assets/images/papa_blanca.jpg" },
    { id: '16', nombre: "Papa negra", precio: '50', imagen: "./assets/images/papa_negra.jpg" },
    { id: '17', nombre: "Papines", precio: '90', imagen: "./assets/images/papines.png" },
    { id: '18', nombre: "Remolacha", precio: '90', imagen: "./assets/images/remolacha.jpg" },
    { id: '19', nombre: "Tomate cherry", precio: '120', imagen: "./assets/images/tomate-cherry.jpg" },
    { id: '20', nombre: "Tomate perita", precio: '80', imagen: "./assets/images/tomate_perita.jpg" }
    ]

const Lista = () => {
    return new Promise ((resolve, reject) =>{
        setTimeout(() => resolve(misProductos),2000)   
    })
}

const Item = () => {
    const[listaProductos, setListaProductos] = useState([])

    useEffect(() => {
        const list = Lista()

        list.then(list => {
            setListaProductos(list)
        })
    },[])

    return (
        <div>
        <div className='container'>
            <div class="portfolio-menu mt-2 mb-4"></div>
            <div className='portfolio-item row'>
                <div className='item selfie'>
                    <ul className='row row-cols-4 orden'>
                        {listaProductos.map(producto => <li key={producto.id}>
                        <img className='carta' src={producto.imagen} alt='vegetal' width='200px' height='150px'>
                        </img>
                        <figcaption>{producto.nombre}</figcaption>
                            <div className='abajo'>
                                <button type='button' className='btn btn-outline-success'>Agregar</button>
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