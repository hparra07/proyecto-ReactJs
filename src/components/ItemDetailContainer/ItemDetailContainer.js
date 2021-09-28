import ItemDetail from "../ItemDetail/ItemDetail.js"
import { useEffect, useState } from 'react'
import { useParams } from "react-router"

const miItem = [
    { id: '01', stock:'10', nombre: "Apio", categoria: "hierbas", precio: '70', imagen:'../assets/images/apio.jpg', descripcion: " x atado"},
    { id: '02', stock:'25', nombre: "Banana", categoria: 'frutas', precio: '80', imagen: "../assets/images/bananas.jpg", descripcion: "x 1 Kg"},
    { id: '03', stock:'30', nombre: "Cebolla morada", categoria: 'verduras', precio: '100', imagen: "../assets/images/cebolla_morada.jpg", descripcion:" x 1 Kg"},
    { id: '04', stock:'8', nombre: "Cilantro", categoria: "hierbas", precio: '50', imagen:'../assets/images/cilantro.jpg', descripcion: " x atado"},
    { id: '05', stock:'25', nombre: "Choclo amarillo", categoria: 'verduras', precio: '90', imagen: "../assets/images/choclo.jpg", descripcion: "x Unid."},
    { id: '06', stock:'5', nombre: "Espinaca", categoria: 'hierbas', precio: '50', imagen: "../assets/images/espinaca.jpg", descripcion: "x atado"},
    { id: '07', stock:'30', nombre: "Huevos blancos", categoria: 'otros', precio: '150', imagen: "../assets/images/huevos_blancos.jpg", descripcion: " x maple"},
    { id: '08', stock:'35', nombre: "Huevos color", categoria: 'otros', precio: '180', imagen: "../assets/images/huevos_colorados.jpeg", descripcion: " x maple"},
    { id: '09', stock:'5', nombre: "Lechuga criolla", categoria: 'verduras', precio: '70', imagen: "../assets/images/lechuga_criolla.jpg", descripcion: "x planta"},
    { id: '10', stock:'8', nombre: "Lechuga francesa", categoria: 'verduras', precio: '80', imagen: "../assets/images/lechuga_francesa.jpg", descripcion: "x planta"},
    { id: '11', stock:'10', nombre: "Lechuga mantecosa", categoria: 'verduras', precio: '60', imagen: "../assets/images/lechuga_mantecosa.jpg", descripcion: "x planta"},
    { id: '12', stock:'12', nombre: "Lechuga repollada", categoria: 'verduras', precio: '80', imagen: "../assets/images/lechuga_repollada.jpg", descripcion: "x planta"},
    { id: '13', stock:'20', nombre: "Manzana roja", categoria: "frutas", precio: '100', imagen:'../assets/images/manzana.jpeg', descripcion: " x 1 Kg"},
    { id: '14', stock:'30', nombre: "Mermelada", categoria: "otros", precio: '110', imagen:'../assets/images/mermelada.jpg', descripcion: " x Unid."},
    { id: '15', stock:'30', nombre: "Miel", categoria: "otros", precio: '110', imagen:'../assets/images/miel.jpg', descripcion: " x Unid."},
    { id: '16', stock:'14', nombre: "Morron amarillo", categoria: 'verduras', precio: '150', imagen: "../assets/images/morron_amarillo.jpg", descripcion: " x 1 Kg"},
    { id: '17', stock:'14', nombre: "Morron rojo", categoria: 'verduras', precio: '150', imagen: "../assets/images/morron_rojo.jpg", descripcion: " x 1 Kg"}, 
    { id: '18', stock:'14', nombre: "Morron verde", categoria: 'verduras', precio: '150', imagen: "../assets/images/morron_verde.jpg", descripcion: " x 1Kg"},
    { id: '19', stock:'50', nombre: "Palta", categoria: 'frutas', precio: '90', imagen: "../assets/images/palta.jpg", descripcion: " x Unid."},
    { id: '20', stock:'3', nombre: "Papa blanca", categoria: 'verduras', precio: '60', imagen: "../assets/images/papa_blanca.jpg", descripcion: " x 1 Kg"},
    { id: '21', stock:'5', nombre: "Papa negra", categoria: 'verduras', precio: '50', imagen: "../assets/images/papa_negra.jpg", descripcion: " x 1 Kg"},
    { id: '22', stock:'4', nombre: "Papines", categoria: 'verduras', precio: '90', imagen: "../assets/images/papines.png", descripcion: " x 500 Gr"},
    { id: '23', stock:'4', nombre: "Perejil", categoria: "hierbas", precio: '60', imagen:'../assets/images/perejil.jpg', descripcion: " x atado"},
    { id: '24', stock:'13', nombre: "Remolacha", categoria: 'verduras', precio: '90', imagen: "../assets/images/remolacha.jpg", descripcion: " x 1 Kg"},
    { id: '25', stock:'20', nombre: "Tomate cherry", categoria: 'verduras', precio: '120', imagen: "../assets/images/tomate-cherry.jpg", descripcion: "x 500 Gr"},
    { id: '26', stock:'25', nombre: "Tomate perita", categoria: 'verduras', precio: '80', imagen: "../assets/images/tomate_perita.jpg", descripcion: " x 1 Kg"},
    { id: '27', stock:'40', nombre: "Sandia", categoria: "frutas", precio: '110', imagen:'../assets/images/sandia.png', descripcion: " x 1 Kg"},
]

const obtenerId = (id) =>{
    return new Promise((resolve) => {
        const producto = miItem.find(prod => Number(prod.id) === Number(id))
            setTimeout(() => resolve(producto), 1000)
    })
}

const ItemDetailContainer = () => {
    const[item, setItem] = useState([])
    const {itemid} = useParams()

    useEffect(()=> {
        obtenerId(itemid).then(result =>{
            setItem(result)
        })
    },[itemid])

   if (item.length === 0){
        return <h3>Cargando...</h3>
    }

    return(
        <div className='container'>
            <div className='row row-cols'>
                    <ItemDetail key={item.id} item={item}/>
            </div>
        </div>
    )
}

export default ItemDetailContainer