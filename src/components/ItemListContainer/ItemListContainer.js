import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList.js'
import { useEffect, useState } from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'

const misProductos = [
    { id: '01', stock:'25 Kg', nombre: "Banana", cat: 'frutas', precio: '80', imagen: "./assets/images/bananas.jpg", descripcion: "x 1 Kg"},
    { id: '02', stock:'30 Kg', nombre: "Cebolla morada", cat: 'verduras', precio: '100', imagen: "./assets/images/cebolla_morada.jpg", descripcion:" x 1 Kg"},
    { id: '03', stock:'25 Unid.', nombre: "Choclo amarillo", cat: 'verduras', precio: '90', imagen: "./assets/images/choclo.jpg", descripcion: "x Unid."},
    { id: '04', stock:'5 Kg', nombre: "Espinaca", cat: 'hierbas', precio: '50', imagen: "./assets/images/espinaca.jpg", descripcion: "x atado"},
    { id: '05', stock:'30 maples', nombre: "Huevos blancos", cat: 'otros', precio: '150', imagen: "./assets/images/huevos_blancos.jpg", descripcion: " x maple"},
    { id: '06', stock:'35 maples', nombre: "Huevos colorados", cat: 'otros', precio: '180', imagen: "./assets/images/huevos_colorados.jpeg", descripcion: " x maple"},
    { id: '07', stock:'5 Kg', nombre: "Lechuga criolla", cat: 'verduras', precio: '70', imagen: "./assets/images/lechuga_criolla.jpg", descripcion: "x planta"},
    { id: '08', stock:'8 Kg', nombre: "Lechuga francesa", cat: 'verduras', precio: '80', imagen: "./assets/images/lechuga_francesa.jpg", descripcion: "x planta"},
    { id: '09', stock:'10 Kg', nombre: "Lechuga mantecosa", cat: 'verduras', precio: '60', imagen: "./assets/images/lechuga_mantecosa.jpg", descripcion: "x planta"},
    { id: '10', stock:'12 Kg', nombre: "Lechuga repollada", cat: 'verduras', precio: '80', imagen: "./assets/images/lechuga_repollada.jpg", descripcion: "x planta"},
    { id: '11', stock:'14 Kg', nombre: "Morron amarillo", cat: 'verduras', precio: '150', imagen: "./assets/images/morron_amarillo.jpg", descripcion: " x 1 Kg"},
    { id: '12', stock:'14 Kg', nombre: "Morron rojo", cat: 'verduras', precio: '150', imagen: "./assets/images/morron_rojo.jpg", descripcion: " x 1 Kg"}, 
    { id: '13', stock:'14 Kg', nombre: "Morron verde", cat: 'verduras', precio: '150', imagen: "./assets/images/morron_verde.jpg", descripcion: " x 1Kg"},
    { id: '14', stock:'50 Unid.', nombre: "Palta", cat: 'frutas', precio: '90', imagen: "./assets/images/palta.jpg", descripcion: " x Unid."},
    { id: '15', stock:'3 Kg', nombre: "Papa blanca", cat: 'verduras', precio: '60', imagen: "./assets/images/papa_blanca.jpg", descripcion: " x 1 Kg"},
    { id: '16', stock:'5 Kg', nombre: "Papa negra", cat: 'verduras', precio: '50', imagen: "./assets/images/papa_negra.jpg", descripcion: " x 1 Kg"},
    { id: '17', stock:'4 Kg', nombre: "Papines", cat: 'verduras', precio: '90', imagen: "./assets/images/papines.png", descripcion: " x 500 Gr"},
    { id: '18', stock:'13 Kg', nombre: "Remolacha", cat: 'verduras', precio: '90', imagen: "./assets/images/remolacha.jpg", descripcion: " x 1 Kg"},
    { id: '19', stock:'20 Kg', nombre: "Tomate cherry", cat: 'verduras', precio: '120', imagen: "./assets/images/tomate-cherry.jpg", descripcion: "x 500 Gr"},
    { id: '20', stock:'25 Kg', nombre: "Tomate perita", cat: 'verduras', precio: '80', imagen: "./assets/images/tomate_perita.jpg", descripcion: " x 1 Kg"}
    ]

const ItemListContainer = () => {

    const[items, setItems] = useState([])

    const Lista = () => {
        return new Promise ((resolve, reject) =>{
            setTimeout(() => resolve(misProductos), 2000)   
        })
    }
   
    useEffect(() => {
        const list = Lista()

        list.then(list => {
            setItems(list)
        })
    },[])

    if (items.length === 0){
        return <h3>Cargando...</h3>
    }
    return(
        <div>
            <ItemList items={items}/>
            <ItemDetailContainer/>
        </div>
    )
}

export default ItemListContainer