import Link from 'next/link';
import React from 'react';
import styles from '../styles/Header.module.css';
import Image from 'next/image'
import { useRouter } from 'next/router';

const Header = ({ figura }) => {
    const router = useRouter();
    return (
        <header className={styles.header}>
            <div className='contenedor'>
                <div className={styles.barra}>
                    <Link href="/">
                        <a>
                            <Image src="/img/logo.png" width={300} height={150} alt="Imagen logo" />
                        </a>
                    </Link>
                    <nav className={styles.navegacion}>
                        <Link href="/">Inicio</Link>
                        <Link href="/nosotros">Nosotros</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/tienda">Tienda</Link>
                        <Link href="/carrito">
                            <a>
                                <Image layout='fixed' width={30} height={25} src='/img/carrito.png' alt='Imagen carrito' />
                            </a>
                        </Link>
                    </nav>
                </div>
                {figura && (
                    <div className={styles.modelo}>
                        <h2>{figura.nombre}</h2>
                        <p>{figura.descripcion}</p>
                        <p className={styles.precio}>${figura.precio}</p>
                        <Link href={`/figuras/${figura.url}`}>
                            <a className={styles.enlace}>
                                Ver Figura
                            </a>
                        </Link>
                    </div>
                )}
            </div>
            {router.pathname === '/' && (
                <div className={styles.figura}>
                    <Image src='/img/header_aioria.png' alt="imagen header" layout='fixed' width={450} height={550} />
                </div>
            )}
        </header>
    )
}

export default Header