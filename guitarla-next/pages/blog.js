import Layout from '../components/Layout';
import ListadoBlog from '../components/ListadoBlog';

const Blog = ({ entradas }) => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/blogs`;
    return (
        <Layout
            pagina='Blog'
        >
            <main className='contenedor'>
                <ListadoBlog
                    entradas={entradas}
                />
            </main>
        </Layout>
    )
}

export async function getStaticProps() {
    const url = `${process.env.API_URL}/blogs?_sort=created_at:desc`;
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();
    return {
        props: {
            entradas
        }
    };
};

export default Blog