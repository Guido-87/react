import { useState, useEffect } from 'react';
import {
  TextField, Button, Grid, Dialog, DialogTitle,
  DialogContent, DialogActions, Checkbox,
  FormControlLabel, DialogContentText, Snackbar,
  Alert, Slide, AlertTitle, Box
} from '@mui/material';
import { CheckCircle, Error as ErrorIcon, Info, Warning } from '@mui/icons-material';
import CaballeroCard from './CaballeroCard';

function SlideTransition(props: any) {
  return <Slide {...props} direction="down" />;
}

const iconMap: any = {
  success: <CheckCircle fontSize="inherit" sx={{ mr: 1 }} />, 
  error: <ErrorIcon fontSize="inherit" sx={{ mr: 1 }} />, 
  info: <Info fontSize="inherit" sx={{ mr: 1 }} />, 
  warning: <Warning fontSize="inherit" sx={{ mr: 1 }} />
};

const titleMap: any = {
  success: 'Éxito',
  error: 'Error',
  info: 'Información',
  warning: 'Advertencia'
};

export default function CaballeroList({ caballeros, onUpdate, onDelete }: any) {
  const [filtro, setFiltro] = useState('');
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({
    nombre: '', constelacion: '', rango: '', cosmos: 0,
    septimoSentido: false, tecnicas: '', foto: ''
  });
  const [toast, setToast] = useState({ open: false, message: '', severity: 'success' });

  const showToast = (message: string, severity: 'success' | 'error' | 'info' | 'warning' = 'success') => {
    setToast({ open: true, message, severity });
  };

  useEffect(() => {
    if (filtro.trim()) {
      showToast(`Filtro aplicado: "${filtro}"`, 'info');
    }
  }, [filtro]);

  const handleOpen = (index: number) => {
    const c = caballeros[index];
    setEditForm({
      ...c,
      tecnicas: c.tecnicas.join(', ')
    });
    setEditIndex(index);
    setOpen(true);
    showToast(`Editando a ${c.nombre}`, 'info');
  };

  const handleClose = () => {
    setOpen(false);
    setEditIndex(null);
    showToast('Edición cancelada.', 'warning');
  };

  const handleEditChange = (e: any) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setEditForm({ ...editForm, [name]: checked });
    } else if (type === 'file') {
      const reader = new FileReader();
      reader.onload = () => {
        setEditForm((prev) => ({ ...prev, foto: reader.result as string }));
        showToast('Imagen cargada correctamente.', 'success');
      };
      if (files && files[0]) {
        reader.readAsDataURL(files[0]);
      } else {
        showToast('No se seleccionó ninguna imagen.', 'warning');
      }
    } else {
      setEditForm({ ...editForm, [name]: value });
      if (name !== 'tecnicas') {
        showToast(`Campo actualizado: ${name}`, 'info');
      }
    }
  };

  const handleSave = () => {
    if (!editForm.nombre || !editForm.constelacion || !editForm.rango || isNaN(Number(editForm.cosmos))) {
      showToast('Por favor completa todos los campos obligatorios.', 'error');
      return;
    }
    const actualizado = {
      ...editForm,
      cosmos: Number(editForm.cosmos),
      tecnicas: editForm.tecnicas.split(',').map((t: string) => t.trim())
    };
    if (editIndex !== null) {
      onUpdate(editIndex, actualizado);
      showToast('Caballero actualizado con éxito.', 'success');
    } else {
      showToast('Error al actualizar el caballero.', 'error');
    }
    handleClose();
  };

  const handleConfirmDelete = (index: number) => {
    setDeleteIndex(index);
    setConfirmOpen(true);
    showToast('Confirmar eliminación del caballero.', 'warning');
  };

  const confirmDelete = () => {
    if (deleteIndex !== null) {
      onDelete(deleteIndex);
      showToast('Caballero eliminado.', 'info');
    } else {
      showToast('Error al eliminar el caballero.', 'error');
    }
    setDeleteIndex(null);
    setConfirmOpen(false);
  };

  const cancelDelete = () => {
    setDeleteIndex(null);
    setConfirmOpen(false);
    showToast('Eliminación cancelada.', 'info');
  };

  const simulacionPelea = () => {
    if (caballeros.length < 2) {
      showToast('Se necesitan al menos dos caballeros para simular una pelea.', 'warning');
      return;
    }
  
    // Selecciona dos índices aleatorios sin alterar el orden de la lista
    const indexA = Math.floor(Math.random() * caballeros.length);
    let indexB;
    do {
      indexB = Math.floor(Math.random() * caballeros.length);
    } while (indexB === indexA); // Asegúrate de que los índices sean diferentes
  
    const a = caballeros[indexA];
    const b = caballeros[indexB];
  
    let ganador;
  
    if (a.septimoSentido && !b.septimoSentido) {
      ganador = a;
    } else if (!a.septimoSentido && b.septimoSentido) {
      ganador = b;
    } else {
      // Introduce un factor de aleatoriedad basado en la diferencia de cosmos
      const diferenciaCosmos = Math.abs(a.cosmos - b.cosmos);
      const probabilidadA = 0.5 + (a.cosmos - b.cosmos) / (2 * Math.max(a.cosmos, b.cosmos));
  
      // Genera un número aleatorio para determinar el ganador
      ganador = Math.random() < probabilidadA ? a : b;
    }
  
    showToast(`Ganador de la pelea: ${ganador.nombre}`, 'success');
  };

  const filtrados = caballeros.filter((c: any) =>
    c.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
    c.constelacion.toLowerCase().includes(filtro.toLowerCase()) ||
    c.rango.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <Box>
      <TextField label="Filtrar" value={filtro} onChange={(e) => setFiltro(e.target.value)} fullWidth sx={{ mb: 3 }} />
      <Button variant="contained" color="secondary" onClick={simulacionPelea} sx={{ mb: 2 }}>Simular Pelea</Button>
      <Grid container spacing={3} justifyContent="center">
        {filtrados.map((c: any, i: number) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <CaballeroCard
              caballero={c}
              onEdit={() => handleOpen(i)}
              onDelete={() => handleConfirmDelete(i)}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Editar Caballero</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Nombre" name="nombre" fullWidth value={editForm.nombre} onChange={handleEditChange} required />
          <TextField label="Constelación" name="constelacion" fullWidth value={editForm.constelacion} onChange={handleEditChange} required />
          <TextField label="Rango" name="rango" fullWidth value={editForm.rango} onChange={handleEditChange} required />
          <TextField label="Cosmos" name="cosmos" type="number" fullWidth value={editForm.cosmos} onChange={handleEditChange} required />
          <FormControlLabel control={<Checkbox name="septimoSentido" checked={editForm.septimoSentido} onChange={handleEditChange} />} label="Séptimo Sentido" />
          <TextField label="Técnicas (separadas por coma)" name="tecnicas" fullWidth value={editForm.tecnicas} onChange={handleEditChange} />
          <input name="foto" type="file" accept="image/*" onChange={handleEditChange} />
          {editForm.foto && <Box component="img" src={editForm.foto} alt="preview" sx={{ width: '100%', height: 150, objectFit: 'cover', mt: 1, borderRadius: 1 }} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleSave} variant="contained" color="primary">Guardar</Button>
        </DialogActions>
      </Dialog>

      <Dialog open={confirmOpen} onClose={cancelDelete}>
        <DialogTitle>¿Eliminar Caballero?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas eliminar este caballero? Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancelDelete}>Cancelar</Button>
          <Button onClick={confirmDelete} color="error" variant="contained">Eliminar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={SlideTransition}
      >
        <Alert
          onClose={() => setToast({ ...toast, open: false })}
          severity={toast.severity as any}
          sx={{ width: '100%', display: 'flex', alignItems: 'center' }}
          icon={iconMap[toast.severity as string]}
        >
          <AlertTitle>{titleMap[toast.severity]}</AlertTitle>
          {toast.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}