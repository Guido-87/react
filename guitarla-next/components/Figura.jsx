import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Figura.module.css';

const Figura = ({ figura }) => {
    const { descripcion, imagen, nombre, precio, url } = figura;
    return (
        <div className={styles.figura}>
            <Image layout='responsive' width={100} height={130} src={imagen.url} alt={`Imagen figura ${nombre}`} />
            <div className={styles.contenido}>
                <h3>{nombre}</h3>
                <p className={styles.descripcion}>{descripcion}</p>
                <p className={styles.precio}>${precio}</p>
                <Link href={`/figuras/${url}`}>
                    <a className={styles.enlace}>
                        Ver Figura
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Figura