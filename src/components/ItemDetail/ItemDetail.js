import ItemCount from "../ItemCount/ItemCount.js"
import { NavLink } from "react-router-dom"

const ItemDetail = (props) =>{

    return (
        <div>
            <h2 style={{color:'forestgreen'}}>Lista de productos</h2>
            <div class="portfolio-menu mt-2 mb-4"></div>
            <div className='portfolio-item row'>
                <div className='item selfie'>
                    <ul className='row-cols-4 orden'>
                        <li key={props.item.id}><NavLink className='card-link' to={'/producto/' + props.item.nombre}>
                        <img className='carta' src={props.item.imagen} alt='vegetal' width='200px' height='150px'>
                        </img></NavLink>
                        <figcaption><NavLink className='card-link' to={'/producto/' + props.item.nombre}>{props.item.nombre} {props.item.descripcion}</NavLink></figcaption>
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