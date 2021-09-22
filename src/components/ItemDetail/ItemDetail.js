import ItemCount from "../ItemCount/ItemCount.js"

const ItemDetail = (props) =>{

    return (
        <div>
            <h2 style={{color:'forestgreen'}}>Detalle del producto</h2>
            <div class="portfolio-menu mt-2 mb-4"></div>
            <div className='portfolio-item row'>
                <div className='item selfie'>
                    <ul className='row-cols-4 orden'>
                        <li key={props.item.id}>
                        <img className='carta' src={props.item.imagen} alt='vegetal' width='200px' height='150px'></img>
                        <figcaption>{props.item.nombre} {props.item.descripcion}</figcaption>
                        <p style={{color:'forestgreen'}}>Disponibles: {props.item.stock}</p>
                        <small className='text-muted' style={{fontSize:'15px'}}>${props.item.precio}.00</small>
                            <div className='abajo'>
                                <ItemCount/> 
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail