import ItemDetail from "../ItemDetail/ItemDetail.js"
import { useEffect, useState } from 'react'
import { useParams } from "react-router"
import { getDoc, doc } from "@firebase/firestore"
import { db } from "../../services/firebase/firebase.js"

const ItemDetailContainer = () => {
    const[item, setItem] = useState([])
    const {itemid} = useParams()

    useEffect(()=> {
        getDoc(doc(db, 'ItemList', itemid)).then((querySnapshot) => {
            const product = { id: querySnapshot.id, ...querySnapshot.data()}
            setItem(product)
        }).catch((error) => {
            console.log('Error al buscar items', error)
        })
        return(() => {
            setItem(undefined)
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