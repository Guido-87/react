import styles from '../styles/Blog.module.css';
import dynamic from 'next/dynamic';

const Entrada = dynamic(
    () => import('./Entrada'),
    { ssr: false });

const ListadoBlog = ({ entradas }) => {
    return (
        <>
            <h2 className='heading'>Blog</h2>
            <div className={styles.blog}>
                {entradas.map(entrada => (
                    <Entrada
                        key={entrada._id}
                        entrada={entrada}
                    />
                ))}
            </div>
        </>
    )
}

export default ListadoBlog