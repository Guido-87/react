import Head from 'next/head'; // Importa el componente Head
import { useState, useEffect } from 'react';
import CaballeroForm from '../components/CaballeroForm';
import CaballeroList from '../components/CaballeroList';
import { Box, Typography, Button } from '@mui/material';

export default function Home() {
  const [caballeros, setCaballeros] = useState([]);
  const [showForm, setShowForm] = useState(false); // Estado para controlar la visibilidad del formulario

  const fetchCaballeros = async () => {
    const response = await fetch('/api/caballeros');
    const data = await response.json();
    setCaballeros(data);
  };

  useEffect(() => {
    fetchCaballeros();
  }, []);

  const handleUpdate = async (index, updatedCaballero) => {
    const response = await fetch(`/api/caballeros/${caballeros[index].id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCaballero),
    });
    if (response.ok) {
      const newCaballeros = [...caballeros];
      newCaballeros[index] = updatedCaballero;
      setCaballeros(newCaballeros);
    }
  };

  const handleDelete = async (index) => {
    const response = await fetch(`/api/caballeros/${caballeros[index].id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      const newCaballeros = caballeros.filter((_, i) => i !== index);
      setCaballeros(newCaballeros);
    }
  };

  const handleSaveCaballero = async (newCaballero) => {
    const response = await fetch('/api/caballeros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCaballero),
    });
  
    if (response.ok) {
      const savedCaballero = await response.json();
      setCaballeros((prevCaballeros) => [...prevCaballeros, savedCaballero]);
      setShowForm(false); // Cierra el formulario después de guardar
    } else {
      console.error('Error al guardar el caballero');
    }
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <Head>
        <title>Caballeros del Zodíaco</title>
      </Head>
      <Box
        sx={{
          minHeight: '100vh', // Asegura que el fondo cubra toda la pantalla
          backgroundColor: 'background.default', // Usa el fondo definido en el tema
          color: 'text.primary', // Usa el color de texto definido en el tema
          p: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          Los Caballeros del Zodíaco
        </Typography>
        <Box sx={{ mb: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Ocultar Formulario' : 'Mostrar Formulario'}
          </Button>
        </Box>
        {showForm && (
          <CaballeroForm
            onSave={handleSaveCaballero}
            onClose={handleCloseForm} // Asegúrate de pasar esta función
          />
        )}
        <CaballeroList caballeros={caballeros} onUpdate={handleUpdate} onDelete={handleDelete} />
      </Box>
    </>
  );
}