import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount.js'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {

    return(
        <div className='container'>
            <h1>
                Productos
            </h1>
                <ItemCount/>
                <ItemList/>
        </div>

    )
}

export default ItemListContainer