import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../Carrito/CartItem/CartItem"
import { getDoc, Timestamp, writeBatch, doc, addDoc, collection } from "@firebase/firestore"
import { useState } from "react/cjs/react.development"
import { db } from "../../services/firebase/firebase"

const Carrito = () => {
    const {productosCarrito} = useContext(CartContext)
    const {limpiarCarrito} = useContext(CartContext)
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')

    const precioTotal = productosCarrito.map(
        (itemCarrito) => itemCarrito.precio * itemCarrito.quantity
    )

    let total = precioTotal.reduce((a,b) => a + b, 0)

    const CarritoLleno = () => (
        <div className='col-md-6'>
            <div >
                {productosCarrito.map(item => 
                    <CartItem key={item.id} item={item}/>)}
            </div>
        </div>
    )

    const CarritoVacio = () => (
        <div className='col-md order-md-1'>
            <h4>Tu carrito está vacío, agrega productos <Link to='/productos'> aquí</Link></h4>
        </div>
    )

    const confirmarCompra = (e) =>{
        e.preventDefault()
        if(productosCarrito.length > 0){
            alert('Gracias por tu compra!')
        }else{
            alert('No hay items en el carrito, debes agregar uno para finalizar')
        }

        const objOrder = {
            buyer: name,
            phone: phone,
            email: email,
            address: address,
            items: productosCarrito,
            total: total,
            date: Timestamp.fromDate(new Date())
        }
        console.log(objOrder);

        const batch = writeBatch(db)
        const outOfStock = []

        objOrder.items.forEach((prod, i) => {
            getDoc(doc(db, 'ItemList', prod.id)).then(DocumentSnapshot => {
                if(DocumentSnapshot.data().stock > objOrder.items[i].quantity) {
                    batch.update(doc(db, 'ItemList', DocumentSnapshot.id), {
                        stock: DocumentSnapshot.data().stock - objOrder.items[i].quantity
                    })
                } else {
                    outOfStock.push({ ...DocumentSnapshot.data(), id: DocumentSnapshot.id})
                }
            })
        })

        if(outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), objOrder).then(() => {
                batch.commit().then(() => {
                    alert('La orden se ejecuto con éxito')
                })
            }).catch((error) => {
                alert(error, 'Error al ejecutar orden')
            }).finally(() => {
                limpiarCarrito()
            })
        }

    }

    return(
        <div className='row'> 
            <h1 style={{display:'flex', justifyContent:'center'}}>Carrito</h1>
            {productosCarrito.length > 0 ? <CarritoLleno/> : <CarritoVacio/>}
            <div className='col-md order-md-1'>
                <h1>Tus Datos</h1>
                    <div className="col-md-12 order-md-1" >
                        <form className="needs-validation" validate>
                            <div className="row ">
                                <div className="col-md-6 mb-3 ">
                                    <label for="firstName ">Nombre y Apellido:</label>
                                    <input required={true} type="text " className="form-control " id="name "  placeholder="Tu nombre y apellido " onChange={(e) => setName(e.target.value)} ></input>
                                </div>
                                <div className="col-md-6 mb-3 ">
                                    <label for="lastName ">Telefono:</label>
                                    <input required={true} type="number " className="form-control " id="phone " placeholder="Tu teléfono " 
                                    onChange={(e) => setPhone(e.target.value)} ></input>
                                </div>
                            </div>
                            <div className="mb-3 ">
                                <label for="email ">Email:</label>
                                <input required={true} type="email " className="form-control " id="email " placeholder="Tu email " 
                                onChange={(e) => setEmail(e.target.value)}></input>
                            </div>
                            <div className="mb-3 ">
                                <label for="address ">Dirección:</label>
                                <input required={true} type="text " className="form-control " id="address " placeholder="Tu domicilio "
                                onChange={(e) => setAddress(e.target.value)} ></input>
                            </div>
                            <div>
                                <p>Total (ARS):<span>
                                    {total}$</span></p>
                                <button className='btn btn-outline-success' type='submit' onClick={confirmarCompra}>Finalizar compra</button>
                                <button className='btn btn-danger' type='submit' onClick={limpiarCarrito}>Vaciar Carrito</button>
                            </div>
                        </form>
                    </div>
            </div> 
        </div>

    )
}

export default Carrito