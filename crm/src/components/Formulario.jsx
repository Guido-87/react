import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Alerta from './Alerta';
import { useNavigate } from 'react-router-dom';
import Spinner from './Spinner';

const Formulario = ({ cliente, cargando }) => {
    const TELEFONO_INVALIDO = 'El teléfono no es válido';
    const navigate = useNavigate();

    const nuevoClienteSchema = Yup.object().shape({
        nombre: Yup.string()
            .required('El nombre del cliente es obligatorio')
            .min(3, 'El nombre es muy corto')
            .max(20, 'El nombre es muy largo'),
        empresa: Yup.string()
            .required('El nombre de la empresa es obligatorio'),
        email: Yup.string()
            .required('El email es obligatorio')
            .email('El email no es válido'),
        telefono: Yup.number()
            .integer(TELEFONO_INVALIDO)
            .positive(TELEFONO_INVALIDO)
            .typeError(TELEFONO_INVALIDO),
        notas: '',
    });

    const handleSubmit = async (valores) => {
        try {
            let respuesta;
            // TODO: Parametrizar
            if (cliente.id) {
                const url = `${import.meta.env.VITE_API_URL}/${valores.id}`;
                respuesta = await fetch(url, {
                    method: 'PUT',
                    body: JSON.stringify(valores),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            } else {
                const url = import.meta.env.VITE_API_URL;
                respuesta = await fetch(url, {
                    method: 'POST',
                    body: JSON.stringify(valores),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            }
            await respuesta.json();
            navigate('/clientes');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        cargando ? <Spinner /> : (
            <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md md:w-3/4 mx-auto'>
                <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>
                    {cliente?.id ? 'Editar Cliente' : 'Agregar Cliente'}</h1>
                <Formik
                    initialValues={{
                        nombre: cliente?.nombre ?? "",
                        empresa: cliente?.empresa ?? "",
                        email: cliente?.email ?? "",
                        telefono: cliente?.telefono ?? "",
                        notas: cliente?.notas ?? "",
                        id: cliente?.id ?? "",
                    }}
                    onSubmit={async (values, { resetForm }) => {
                        await handleSubmit(values);
                        resetForm();
                    }}
                    validationSchema={nuevoClienteSchema}
                    enableReinitialize
                >
                    {({ errors, touched }) => {
                        return (
                            <Form
                                className="mt-10">
                                <div className="mb-4">
                                    <label
                                        className="text-gray-800"
                                        htmlFor="nombre">
                                        Nombre:</label>
                                    <Field
                                        id="nombre"
                                        type="text"
                                        className="mt-2 block w-full p-3 bg-gray-50"
                                        placeholder="Nombre del Cliente"
                                        name="nombre"
                                    />
                                    {errors.nombre && touched.nombre ? (
                                        <Alerta>{errors.nombre}</Alerta>
                                    ) : null}
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="text-gray-800"
                                        htmlFor="empresa">
                                        Empresa:</label>
                                    <Field
                                        id="empresa"
                                        type="text"
                                        className="mt-2 block w-full p-3 bg-gray-50"
                                        placeholder="Empresa del Cliente"
                                        name="empresa"
                                    />
                                    {errors.empresa && touched.empresa ? (
                                        <Alerta>{errors.empresa}</Alerta>
                                    ) : null}
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="text-gray-800"
                                        htmlFor="email">
                                        Email:</label>
                                    <Field
                                        id="email"
                                        type="email"
                                        className="mt-2 block w-full p-3 bg-gray-50"
                                        placeholder="Email del Cliente"
                                        name="email"
                                    />
                                    {errors.email && touched.email ? (
                                        <Alerta>{errors.email}</Alerta>
                                    ) : null}
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="text-gray-800"
                                        htmlFor="telefono">
                                        Teléfono:</label>
                                    <Field
                                        id="tel"
                                        type="tel"
                                        className="mt-2 block w-full p-3 bg-gray-50"
                                        placeholder="Teléfono del Cliente"
                                        name="telefono"
                                    />
                                    {errors.telefono && touched.telefono ? (
                                        <Alerta>{errors.telefono}</Alerta>
                                    ) : null}
                                </div>
                                <div className="mb-4">
                                    <label
                                        className="text-gray-800"
                                        htmlFor="notas">
                                        Notas:</label>
                                    <Field
                                        as="textarea"
                                        id="notas"
                                        type="text"
                                        className="mt-2 block w-full p-3 bg-gray-50 h-40"
                                        placeholder="Notas del Cliente"
                                        name="notas"
                                    />
                                </div>
                                <input
                                    type="submit"
                                    value={cliente?.id ? 'Editar Cliente' : 'Agregar Cliente'}
                                    className="mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg"
                                />
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        )
    )
}

Formulario.defaultProps = {
    cliente: {},
    cargando: false,
};

export default Formulario