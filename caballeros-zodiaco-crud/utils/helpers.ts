export const validateCaballero = (caballero: any) => {
  const errors: string[] = [];
  
  if (!caballero.nombre) {
    errors.push('El nombre es obligatorio.');
  }
  if (!caballero.constelacion) {
    errors.push('La constelación es obligatoria.');
  }
  if (!caballero.rango) {
    errors.push('El rango es obligatorio.');
  }
  if (isNaN(Number(caballero.cosmos)) || Number(caballero.cosmos) < 0) {
    errors.push('El cosmos debe ser un número positivo.');
  }
  if (caballero.tecnicas && typeof caballero.tecnicas !== 'string') {
    errors.push('Las técnicas deben estar en formato de texto.');
  }

  return errors;
};

export const formatCaballeroData = (caballero: any) => {
  return {
    ...caballero,
    cosmos: Number(caballero.cosmos),
    tecnicas: caballero.tecnicas.split(',').map((t: string) => t.trim()),
  };
};