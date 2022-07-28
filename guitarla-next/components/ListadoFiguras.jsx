import Figura from "./Figura";
import styles from '../styles/Listado.module.css';

const ListadoFiguras = ({ figuras }) => {
    return (
        <div className={styles.listado}>
            {figuras.map(figura => (
                <Figura
                    key={figura.url}
                    figura={figura}
                />
            ))}
        </div>
    )
}

export default ListadoFiguras