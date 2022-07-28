import Layout from '../components/Layout';
import styles from '../styles/Carrito.module.css';
import { useState, useEffect } from "react";
import Image from 'next/image';

const Carrito = ({ carrito, actualizarCantidad, eliminarProducto }) => {
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const calculoTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0);
        setTotal(calculoTotal);
    }, [carrito]);

    return (
        <Layout pagina={"Carrito de Compras"}>
            <h1 className='heading'>Carrito</h1>
            <main className={`${styles.contenido} contenedor`}>
                <div className={styles.carrito}>
                    <h2>Articulos</h2>
                    {carrito.length === 0 ? 'Carrito vacio' : (
                        carrito.map(producto => (
                            <div key={producto._id} className={styles.producto}>
                                <div>
                                    <Image
                                        layout="responsive"
                                        width={400}
                                        height={500}
                                        src={producto.imagen}
                                        alt={producto.nombre}
                                    />
                                </div>
                                <div>
                                    <p className={styles.nombre}>{producto.nombre}</p>
                                    <div className={styles.cantidad}>
                                        <p>
                                            Cantidad: {producto.cantidad}
                                        </p>
                                        <select
                                            value={producto.cantidad}
                                            className={styles.select}
                                            onChange={e => actualizarCantidad({
                                                cantidad: e.target.value,
                                                id: producto._id,
                                            })}
                                        >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                                    <p className={styles.precio}>
                                        $<span>{producto.precio}</span>
                                    </p>
                                    <p className={styles.subtotal}>
                                        Subtotal: ${producto.precio * producto.cantidad}</p>
                                </div>
                                <button
                                    type="button"
                                    className={styles.eliminar}
                                    onClick={() => eliminarProducto(producto._id)}
                                >X</button>
                            </div>
                        ))
                    )}
                </div>
                <div className={styles.resumen}>
                    <h3>Resumen del pedido</h3>
                    {total > 0 ? (
                        <>
                            <p>Resumen del pedido</p>
                            <p>Total a pagar: ${total}</p>
                        </>
                    ) : (
                        <p>No hay productos en el carrito</p>
                    )}
                </div>
            </main>
        </Layout>
    )
}

export default Carrito