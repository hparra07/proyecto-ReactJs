import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList.js'

const ItemListContainer = () => {

    return(
        <div className='container'>
            <h1>
                Productos
            </h1>
                <ItemList/>
        </div>

    )
}

export default ItemListContainer