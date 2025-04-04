import { Card, CardContent, CardActions, Typography, Button, Box, Grow } from '@mui/material';

interface CaballeroCardProps {
  caballero: {
    nombre: string;
    constelacion: string;
    rango: string;
    cosmos: number;
    septimoSentido: boolean;
    tecnicas: string[];
    foto: string;
  };
  onEdit: () => void;
  onDelete: () => void;
}

const CaballeroCard: React.FC<CaballeroCardProps> = ({ caballero, onEdit, onDelete }) => {
  return (
    <Grow in>
      <Card
        sx={{
          height: 'auto',
          width: '100%', // Ocupa el ancho completo del contenedor
          maxWidth: '250px', // Limita el ancho máximo
          display: 'flex',
          flexDirection: 'column',
          border: `2px solid ${getRangoColor(caballero.rango)}`,
          boxShadow: 3, // Añade una sombra
          borderRadius: 2, // Bordes redondeados
          mx: 'auto',
          mb: 2,
          backgroundColor: 'background.paper', // Usa el color del tema
        }}
      >
        <CardContent sx={{ flexGrow: 1, p: 1 }}> {/* Reduce el padding */}
          <Typography variant="h6" gutterBottom>
            {caballero.nombre}
          </Typography>
          <Typography variant="body2">Constelación: {caballero.constelacion}</Typography>
          <Typography variant="body2">Rango: {caballero.rango}</Typography>
          <Typography variant="body2">Cosmos: {caballero.cosmos}</Typography>
          <Typography variant="body2">
            Séptimo Sentido: {caballero.septimoSentido ? 'Sí' : 'No'}
          </Typography>
          <Typography variant="body2">Técnicas: {caballero.tecnicas.join(', ')}</Typography>
          {caballero.foto && (
            <Box
              component="img"
              src={caballero.foto}
              alt={caballero.nombre}
              sx={{
                width: '100%', // Ocupa el ancho completo del contenedor
                height: '150px', // Altura fija para mantener consistencia
                objectFit: 'cover', // Ajusta la imagen sin distorsión
                mt: 1,
                borderRadius: 2,
              }}
            />
          )}
        </CardContent>
        <CardActions sx={{ justifyContent: 'space-between', p: 1 }}> {/* Reduce el padding */}
          <Button size="small" onClick={onEdit}>
            Editar
          </Button>
          <Button size="small" color="error" onClick={onDelete}>
            Eliminar
          </Button>
        </CardActions>
      </Card>
    </Grow>
  );
};

const getRangoColor = (rango: string) => {
  switch (rango.toLowerCase()) {
    case 'oro':
      return '#FFD700';
    case 'plata':
      return '#C0C0C0';
    case 'bronce':
      return '#CD7F32';
    default:
      return '#FFFFFF';
  }
};

const CaballerosList: React.FC<{ caballeros: CaballeroCardProps['caballero'][]; handleEdit: (index: number) => void; handleDelete: (index: number) => void; }> = ({ caballeros, handleEdit, handleDelete }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center', // Centra las tarjetas
        gap: 2, // Espaciado entre tarjetas
        p: 2, // Padding del contenedor
      }}
    >
      {caballeros.map((caballero, index) => (
        <CaballeroCard
          key={index}
          caballero={caballero}
          onEdit={() => handleEdit(index)}
          onDelete={() => handleDelete(index)}
        />
      ))}
    </Box>
  );
};

export default CaballeroCard;