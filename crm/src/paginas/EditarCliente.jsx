import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Alerta from '../components/Alerta';
import Formulario from '../components/Formulario';

const EditarCliente = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState(null);
  const [cargando, setCargando] = useState(false);

  useEffect(() => {
    const obtenerClienteAPI = async () => {
      try {
        setCargando(!cargando);
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }
      setCargando(false);
    };
    obtenerClienteAPI();
  }, []);

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
      <p className='mt-3 mb-10'>Utilizá este formulario para editar un cliente</p>
      {cliente?.nombre ? (
        <Formulario
          cliente={cliente}
          cargando={cargando}
        />
      ) : cliente && <Alerta>Cliente ID no válido</Alerta>}
    </>
  )
}

export default EditarCliente