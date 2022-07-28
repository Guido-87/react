import Image from 'next/image';
import styles from '../../styles/Figura.module.css';
import Layout from '../../components/Layout';
import { useState } from 'react';

const Producto = ({ figura, agregarCarrito }) => {
    const [cantidad, setCantidad] = useState(1);
    const { id, descripcion, imagen, nombre, precio } = figura[0];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cantidad < 1) {
            alert("Cantidad no valida");
            return;
        }
        const figuraSeleccionada = {
            id,
            imagen: imagen.url,
            nombre,
            precio,
            cantidad,
        };
        agregarCarrito(figuraSeleccionada);
    };

    return (
        <Layout
            pagina={`Figura de ${nombre}`}>
            <div className={styles.figura}>
                <Image layout='responsive' width={100} height={130} src={imagen.url} alt={`Imagen figura ${nombre}`} />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>
                    <form
                        className={styles.formulario}
                        onSubmit={handleSubmit}
                    >
                        <label>Cantidad:</label>
                        <select
                            value={cantidad}
                            onChange={e => setCantidad(parseInt(e.target.value))}
                        >
                            <option value="">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                        </select>
                        <input
                            type="submit"
                            value="Agregar al carrito"
                        />
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ query: { url } }) {
    const urlFigura = `${process.env.API_URL}/figurines?url=${url}`;
    const respuesta = await fetch(urlFigura);
    const figura = await respuesta.json();
    return {
        props: {
            figura
        }
    }
};

export default Producto