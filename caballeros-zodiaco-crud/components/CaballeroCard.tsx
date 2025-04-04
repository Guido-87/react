import { Card, CardContent, CardActions, Typography, Button, Box } from '@mui/material';

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
    <Card
      sx={{
        height: 'auto',
        width: '200px', // Reduce el ancho de la tarjeta
        display: 'flex',
        flexDirection: 'column',
        border: `2px solid ${getRangoColor(caballero.rango)}`,
        mx: 'auto',
        mb: 2,
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
              width: '200px !important', // Fuerza el ancho de la tarjeta
              height: '100px !important', // Fuerza la altura de la imagen
              objectFit: 'cover',
              mt: 2,
              borderRadius: 1,
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
  );
};

const getRangoColor = (rango: string) => {
  switch (rango) {
    case 'Bronce':
      return 'bronze';
    case 'Plata':
      return 'silver';
    case 'Oro':
      return 'gold';
    default:
      return 'grey';
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