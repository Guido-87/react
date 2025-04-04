import { useState } from 'react';
import {
  TextField, Button, Checkbox, FormControlLabel,
  Dialog, DialogTitle, DialogContent, DialogActions,
  Snackbar, Alert, Slide, Box
} from '@mui/material';
import { CheckCircle, Error as ErrorIcon } from '@mui/icons-material';

function SlideTransition(props: any) {
  return <Slide {...props} direction="down" />;
}

const initialFormState = {
  nombre: '',
  constelacion: '',
  rango: '',
  cosmos: 0,
  septimoSentido: false,
  tecnicas: '',
  foto: ''
};

export default function CaballeroForm({ onSave, onClose, caballero }: any) {
  const [form, setForm] = useState(caballero || initialFormState);
  const [toast, setToast] = useState({ open: false, message: '', severity: 'success' });

  const showToast = (message: string, severity: 'success' | 'error' = 'success') => {
    setToast({ open: true, message, severity });
  };

  const handleChange = (e: any) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setForm({ ...form, [name]: checked });
    } else if (type === 'file') {
      const reader = new FileReader();
      reader.onload = () => {
        setForm((prev) => ({ ...prev, foto: reader.result as string }));
        showToast('Imagen cargada correctamente.', 'success');
      };
      if (files && files[0]) {
        reader.readAsDataURL(files[0]);
      } else {
        showToast('No se seleccionó ninguna imagen.', 'warning');
      }
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = () => {
    if (!form.nombre || !form.constelacion || !form.rango || isNaN(Number(form.cosmos))) {
      showToast('Por favor completa todos los campos obligatorios.', 'error');
      return;
    }
    onSave(form);
    showToast('Caballero guardado con éxito.', 'success');
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>{caballero ? 'Editar Caballero' : 'Agregar Caballero'}</DialogTitle>
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField label="Nombre" name="nombre" fullWidth value={form.nombre} onChange={handleChange} required />
        <TextField label="Constelación" name="constelacion" fullWidth value={form.constelacion} onChange={handleChange} required />
        <TextField label="Rango" name="rango" fullWidth value={form.rango} onChange={handleChange} required />
        <TextField label="Cosmos" name="cosmos" type="number" fullWidth value={form.cosmos} onChange={handleChange} required />
        <FormControlLabel control={<Checkbox name="septimoSentido" checked={form.septimoSentido} onChange={handleChange} />} label="Séptimo Sentido" />
        <TextField label="Técnicas (separadas por coma)" name="tecnicas" fullWidth value={form.tecnicas} onChange={handleChange} />
        <input name="foto" type="file" accept="image/*" onChange={handleChange} />
        {form.foto && <Box component="img" src={form.foto} alt="preview" sx={{ width: '100%', height: 150, objectFit: 'cover', mt: 1, borderRadius: 1 }} />}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleSubmit} variant="contained" color="primary">Guardar</Button>
      </DialogActions>

      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast({ ...toast, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={SlideTransition}
      >
        <Alert
          onClose={() => setToast({ ...toast, open: false })}
          severity={toast.severity}
          sx={{ width: '100%' }}
          icon={toast.severity === 'success' ? <CheckCircle fontSize="inherit" /> : <ErrorIcon fontSize="inherit" />}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Dialog>
  );
}