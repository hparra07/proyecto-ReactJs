import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList.js'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { db } from '../../services/firebase/firebase'
import { collection, getDocs, query, where } from '@firebase/firestore'
import Footer from '../views/Footer'

const ItemListContainer = () => {

    const[items, setItems] = useState([])
    const {categoryid} = useParams()

    useEffect(() => {
        if(!categoryid){
            getDocs(collection(db, 'ItemList')).then((querySnapshot)=>{
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                })
                setItems(products)
            }).catch((error) => {
                console.log('Error al buscar items', error)
            })
        }else{
            getDocs(query(collection(db, 'ItemList'), where('categoria', '==', categoryid))).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data()}
                })
                setItems(products)
            }).catch((error) => {
                console.log('Error al buscar items', error)
            })
        }
    },[categoryid])

    if (items.length === 0){
        return <h3>Cargando...</h3>
    }

    return(
        <div>
            <ItemList producto={items}/>
            <Footer/>
        </div>
    )
}

export default ItemListContainer