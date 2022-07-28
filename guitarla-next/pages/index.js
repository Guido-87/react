import Layout from '../components/Layout';
import ListadoFiguras from '../components/ListadoFiguras';
import Pelea from '../components/Pelea';
import ListadoBlog from '../components/ListadoBlog';

export default function Home({ figuras, pelea, entradas }) {
  return (
    <Layout
      pagina='Inicio'
      figura={figuras[0]}
    >
      <main className='contenedor'>
        <h1 className='heading'>Nuestra Colección</h1>
        <ListadoFiguras
          figuras={figuras}
        />
      </main>
      <Pelea
        pelea={pelea}
      />
      <section className='contenedor'>
        <ListadoBlog
          entradas={entradas}
        />
      </section>
    </Layout>
  )
}

export async function getServerSideProps() {
  const urlFiguras = `${process.env.API_URL}/figurines`;
  const urlPeleas = `${process.env.API_URL}/peleas`;
  const urlBlog = `${process.env.API_URL}/blogs?_sort=created_at:desc&_limit=3`;
  const [resFiguras, resPeleas, resBlog] = await Promise.all([
    fetch(urlFiguras),
    fetch(urlPeleas),
    fetch(urlBlog)
  ]);
  const [figuras, pelea, entradas] = await Promise.all([
    resFiguras.json(),
    resPeleas.json(),
    resBlog.json()
  ]);
  return {
    props: {
      figuras,
      pelea,
      entradas
    }
  }
};