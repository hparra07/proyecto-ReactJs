import './Ayuda.css'

const Ayuda = () => {
    return(
        <div>
            <h1 style={{display:'flex', justifyContent:'center'}}>Ayuda</h1>
            <h2>Preguntas frecuentes</h2>
            <section className="container-fluid">
            <ol className="container-fluid ayuda">
                <li><strong>¿Cómo comprar?</strong></li>
                <p>Podrás acceder a una lista desplegada de todos nuestros productos presionando en el botón “Agregar”, o bien, ingresar en cada una de las categorías de producto (Vegetales, Frutas, Orgánicos, etc.). Además puedes utilizar el buscador para
                    acceder a los productos que desees. Luego puedes agregar los productos que elijas a tu carrito de compra haciendo click en “Añadir a Carrito”. Tu pedido puede ser revisado siempre que quieras, presionando el ícono de carrito de compra
                    y podrás modificarlo desde allí.</p>
                <li><strong>¿Cómo registrarse?</strong></li>
                <p>Para ser usuario de nuestra página, deberás rellenar el formulario de registro con los datos necesarios.</p>
                <li><strong>¿Cómo finalizar el pedido?</strong></li>
                <p>Una vez que hayas seleccionado todos los productos que vas a adquirir, a través del Carrito de Compra selecciona la opción “Continuar” y procederás a iniciar el proceso de pago para posterior envío.</p>
                <li><strong>¿Cuáles son los métodos de pago?</strong></li>
                <p>Podrás realizar el pago con todas las tarjetas de débito o crédito o a través de Mercado Pago.</p>
                <li><strong>¿Cómo modificar la compra?</strong></li>
                <p>El pedido puede ser modificado desde el Carrito de Compra. Allí podrás tanto eliminar como modificar cantidades de productos.</p>
                <li><strong>¿Cuáles son los métodos de envío?</strong></li>
                <p>Puedes elegir la opción de envío a domicilio, retiro en tienda o programar el envío para cuando lo desees.</p>
                <li><strong>¿Cuáles son los horarios de atención?</strong></li>
                <p>Trabajamos todos los días de 09 a 20 horas.</p>
                <li><strong>¿A qué zonas llegamos?</strong></li>
                <p>Cubrimos toda la zona de CABA.</p>
                <li><strong>¿Cómo obtener información de los productos?</strong></li>
                <p>Contarás con información específica de cada producto haciendo click sobre el mismo. Encontrarás características, beneficios, datos de interés, tips y mucho más.</p>
                <li><strong>¿Cuál es el costo de envío?</strong></li>
                <p>Además del importe total de los productos que elijas, hay un costo de $250,00 por el valor de nuestro servicio. El mismo refleja los costos del servicio personalizado, el acondicionamiento y packaging de los productos, el armado del pedido
                    y el envío a domicilio (a excepción de los pedidos que superen los $1500).</p>
            </ol>
        </section>
        </div>
    )
}

export default Ayuda