import Layout from '../components/Layout';
import ListadoFiguras from '../components/ListadoFiguras';

const Tienda = ({figuras}) => {
    return (
        <Layout
            pagina='Tienda Virtual'
        >
            <main className='contenedor'>
                <h1 className='heading'>Nuestra Colección</h1>
            </main>
            <ListadoFiguras
                figuras={figuras}
            />
        </Layout>
    )
}

export async function getServerSideProps() {
    const url = `${process.env.API_URL}/figurines`;
    const respuesta = await fetch(url);
    const figuras = await respuesta.json();
    return {
        props: {
            figuras
        }
    }
};

export default Tienda