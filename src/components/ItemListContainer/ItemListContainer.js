import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList.js'
import { useEffect, useState } from 'react'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { useParams } from 'react-router'

const misProductos = [
    { id: '01', stock:'25 Kg', nombre: "Banana", categoryId: 'frutas', precio: '80', imagen: "./assets/images/bananas.jpg", descripcion: "x 1 Kg"},
    { id: '02', stock:'30 Kg', nombre: "Cebolla morada", categoryId: 'verduras', precio: '100', imagen: "./assets/images/cebolla_morada.jpg", descripcion:" x 1 Kg"},
    { id: '03', stock:'25 Unid.', nombre: "Choclo amarillo", categoryId: 'verduras', precio: '90', imagen: "./assets/images/choclo.jpg", descripcion: "x Unid."},
    { id: '04', stock:'5 Kg', nombre: "Espinaca", categoryId: 'hierbas', precio: '50', imagen: "./assets/images/espinaca.jpg", descripcion: "x atado"},
    { id: '05', stock:'30 maples', nombre: "Huevos blancos", categoryId: 'otros', precio: '150', imagen: "./assets/images/huevos_blancos.jpg", descripcion: " x maple"},
    { id: '06', stock:'35 maples', nombre: "Huevos colorados", categoryId: 'otros', precio: '180', imagen: "./assets/images/huevos_colorados.jpeg", descripcion: " x maple"},
    { id: '07', stock:'5 Kg', nombre: "Lechuga criolla", categoryId: 'verduras', precio: '70', imagen: "./assets/images/lechuga_criolla.jpg", descripcion: "x planta"},
    { id: '08', stock:'8 Kg', nombre: "Lechuga francesa", categoryId: 'verduras', precio: '80', imagen: "./assets/images/lechuga_francesa.jpg", descripcion: "x planta"},
    { id: '09', stock:'10 Kg', nombre: "Lechuga mantecosa", categoryId: 'verduras', precio: '60', imagen: "./assets/images/lechuga_mantecosa.jpg", descripcion: "x planta"},
    { id: '10', stock:'12 Kg', nombre: "Lechuga repollada", categoryId: 'verduras', precio: '80', imagen: "./assets/images/lechuga_repollada.jpg", descripcion: "x planta"},
    { id: '11', stock:'14 Kg', nombre: "Morron amarillo", categoryId: 'verduras', precio: '150', imagen: "./assets/images/morron_amarillo.jpg", descripcion: " x 1 Kg"},
    { id: '12', stock:'14 Kg', nombre: "Morron rojo", categoryId: 'verduras', precio: '150', imagen: "./assets/images/morron_rojo.jpg", descripcion: " x 1 Kg"}, 
    { id: '13', stock:'14 Kg', nombre: "Morron verde", categoryId: 'verduras', precio: '150', imagen: "./assets/images/morron_verde.jpg", descripcion: " x 1Kg"},
    { id: '14', stock:'50 Unid.', nombre: "Palta", categoryId: 'frutas', precio: '90', imagen: "./assets/images/palta.jpg", descripcion: " x Unid."},
    { id: '15', stock:'3 Kg', nombre: "Papa blanca", categoryId: 'verduras', precio: '60', imagen: "./assets/images/papa_blanca.jpg", descripcion: " x 1 Kg"},
    { id: '16', stock:'5 Kg', nombre: "Papa negra", categoryId: 'verduras', precio: '50', imagen: "./assets/images/papa_negra.jpg", descripcion: " x 1 Kg"},
    { id: '17', stock:'4 Kg', nombre: "Papines", categoryId: 'verduras', precio: '90', imagen: "./assets/images/papines.png", descripcion: " x 500 Gr"},
    { id: '18', stock:'13 Kg', nombre: "Remolacha", categoryId: 'verduras', precio: '90', imagen: "./assets/images/remolacha.jpg", descripcion: " x 1 Kg"},
    { id: '19', stock:'20 Kg', nombre: "Tomate cherry", categoryId: 'verduras', precio: '120', imagen: "./assets/images/tomate-cherry.jpg", descripcion: "x 500 Gr"},
    { id: '20', stock:'25 Kg', nombre: "Tomate perita", categoryId: 'verduras', precio: '80', imagen: "./assets/images/tomate_perita.jpg", descripcion: " x 1 Kg"}
    ]

    const Lista = (categoryId) => {
        return new Promise ((resolve) =>{
            setTimeout(() => resolve(!categoryId ? misProductos : misProductos.filter(producto => producto.categoryId === categoryId)))   
        })
    }
   
const ItemListContainer = () => {

    const[items, setItems] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const list = Lista(id)

        list.then(list => {
            setItems(list)
        })
    },[id])

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