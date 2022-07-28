import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente, handleEliminar }) => {
    const { nombre, empresa, email, telefono, id } = cliente;
    const navigate = useNavigate();

    return (
        <tr className='border-b hover:bg-gray-50'>
            <td className='p-3'>{nombre}</td>
            <td className='p-3'>
                <p><span className='text-gray-800 uppercase font-bold'>Email: </span>{email}</p>
                <p><span className='text-gray-800 uppercase font-bold'>Tel: </span>{telefono}</p>
            </td>
            <td className='p-3'>{empresa}</td>
            <td className='p-3'>
                <button
                    type="button"
                    className='bg-yellow-600 hover:bg-yellow-700 block w-full text-white p-2 uppercase font-bold text-xs'
                    onClick={() => navigate(`/clientes/${id}`)}
                >
                    Ver
                </button>
                <button
                    type="button"
                    className='bg-slate-500 hover:bg-slate-600 block w-full text-white p-2 uppercase font-bold text-xs mt-3'
                    onClick={() => navigate(`/clientes/editar/${id}`)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className='bg-yellow-700 hover:bg-yellow-800 block w-full text-white p-2 uppercase font-bold text-xs mt-3'
                    onClick={() => handleEliminar(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Cliente