# Caballeros del Zodiaco CRUD

Este proyecto es una aplicación CRUD desarrollada con React y Next.js para gestionar caballeros del zodiaco. Permite a los usuarios crear, leer, actualizar y eliminar caballeros, así como simular peleas entre ellos.

## Características

- **Gestión de Caballeros**: Agregar, editar y eliminar caballeros con propiedades como nombre, constelación, rango, cosmos, séptimo sentido, técnicas y foto.
- **Interfaz de Usuario**: Utiliza Material UI para un diseño moderno y responsivo.
- **Filtrado**: Permite filtrar caballeros por nombre, constelación y rango.
- **Simulación de Peleas**: Funcionalidad para simular peleas entre caballeros basadas en su fuerza y séptimo sentido.
- **Notificaciones**: Mensajes de confirmación y notificaciones toast para eventos y errores.
- **Validaciones**: Validaciones en los formularios para asegurar que todos los campos requeridos estén completos.

## Estructura del Proyecto

```
caballeros-zodiaco-crud
├── components
│   ├── CaballeroForm.tsx
│   ├── CaballeroList.tsx
│   ├── CaballeroCard.tsx
│   └── Layout.tsx
├── pages
│   ├── api
│   │   └── caballeros.ts
│   ├── index.tsx
│   └── _app.tsx
├── public
│   └── images
├── styles
│   └── globals.css
├── utils
│   ├── constants.ts
│   └── helpers.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Instalación

1. Clona el repositorio:
   ```
   git clone <URL_DEL_REPOSITORIO>
   ```
2. Navega al directorio del proyecto:
   ```
   cd caballeros-zodiaco-crud
   ```
3. Instala las dependencias:
   ```
   npm install
   ```

## Ejecución

Para iniciar la aplicación en modo de desarrollo, ejecuta:
```
npm run dev
```
La aplicación estará disponible en `http://localhost:3000`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT.