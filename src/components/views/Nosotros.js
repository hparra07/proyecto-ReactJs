import './Nosotros.css'

const Nosotros = () => {
    return(
    <div>
        <h1 style={{display:'flex', justifyContent:'center'}}>¿Quienes somos?</h1>
        <section className="feature">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text center margen">
                        <img src="../assets/images/verduras_uno.jpg" alt="" className="img-fluid"></img>
                    </div>
                    <div className="col-md-6 verdur">
                        <p>Somos una familia que decidimos trabajar en el rubro de las frutas y verduras dedicándonos a la producción y venta mayorista además de querer brindar los mejores alimentos naturales, frescos, de primera calidad y fundamentales
                            en una sana alimentación.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="explore">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 verdu">
                        <p>Garantizamos la máxima calidad de tus productos desde el origen hasta la entrega final. Comenzando desde el abastecimiento, siempre en contacto con diferentes productores, pasando luego por procesos rigurosos de higiene y seguridad,
                            hasta la entrega final.</p>
                    </div>
                    <div className="col-md-6 margen">
                        <img src="../assets/images/verduras_dos.jpg" alt="" className="img-fluid"></img>
                    </div>
                </div>
            </div>
        </section>
        <section className="feature">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text center margen">
                        <img src="../assets/images/verduras_tres.jpeg" alt="" className="img-fluid"></img>
                    </div>
                    <div className="col-md-6 verdur">
                        <p>Queremos hacer tu vida más simple, por eso, con todo nuestro amor y delicadeza nos encargamos de seleccionar la materia prima para asegurar la calidad de tus productos los cuales son preparados y listos para consumir. Así mismo,
                            por este medio podrá encontrar funciones prácticas para poder generar tu compra, solicitando tu pedido y generando una cuenta personal. Vive la innovadora experiencia de un servicio personalizado y diferenciado.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="explore">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 verdu">
                        <p>Ante esta nueva situación ofrecemos delivery, tienda online y también descuentos y promociones en toda nuestra línea de venta para brindarte mas comodidad.</p>
                    </div>
                    <div className="col-md-6 margen">
                        <img src="../assets/images/delivery.jpg" alt="" className="img-fluid"></img>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
}

export default Nosotros