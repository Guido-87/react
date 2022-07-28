import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, pagina, figura }) => {
    return (
        <div>
            <Head>
                <title>Los Caballeros del Zodiaco - {pagina}</title>
                <meta name="description" content="Sitio web de venta de guitarras" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet" />
            </Head>
            <Header
                figura={figura}
            />
            {children}
            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    figura: null
};

export default Layout