import { NextApiRequest, NextApiResponse } from 'next';

let caballeros = [
  // Ejemplo de datos iniciales
  {
    id: 1,
    nombre: 'Seiya',
    constelacion: 'Pegaso',
    rango: 'Bronce',
    cosmos: 100,
    septimoSentido: true,
    tecnicas: ['Meteoros de Pegaso'],
    foto: '/images/seiya.webp'
  },
  {
    id: 2,
    nombre: 'Shiryu',
    constelacion: 'Dragón',
    rango: 'Bronce',
    cosmos: 90,
    septimoSentido: true,
    tecnicas: ['Dragón Shiryu'],
    foto: '/images/shiryu.jpeg'
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET':
      res.status(200).json(caballeros);
      break;
    case 'POST':
      const newCaballero = { id: Date.now(), ...req.body };
      caballeros.push(newCaballero);
      res.status(201).json(newCaballero);
      break;
    case 'PUT':
      const { id } = req.body;
      caballeros = caballeros.map(c => (c.id === id ? { ...c, ...req.body } : c));
      res.status(200).json({ message: 'Caballero actualizado' });
      break;
    case 'DELETE':
      const { id: deleteId } = req.body;
      caballeros = caballeros.filter(c => c.id !== deleteId);
      res.status(200).json({ message: 'Caballero eliminado' });
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}