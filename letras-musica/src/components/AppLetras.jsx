import Formulario from './Formulario';
import useLetras from '../hooks/useLetras';
import Alerta from './Alerta';
import Letra from './Letra';

const AppLetras = () => {
    const { alerta, letra, cargando } = useLetras();
    return (
        <>
            <header>Busqueda de letras de canciones</header>
            <Formulario />
            <main>
                {alerta ? <Alerta>{alerta}</Alerta> :
                    letra ? <Letra></Letra> :
                        cargando ? <p className='text-center'>Cargando...</p> :
                            <p className="text-center">Busca letras de tus artistas favoritos</p>
                }
            </main>
        </>
    )
}

export default AppLetras