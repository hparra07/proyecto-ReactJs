import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount.js'

const ItemListContainer = () => {

    return(
        <div>
            <h1>
                Productos
            </h1>
            <ItemCount initial='1'/>
        </div>
    )
}

export default ItemListContainer