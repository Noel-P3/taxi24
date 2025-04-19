# Taxi24 API

Taxi24 es una API diseñada para gestionar flotas de conductores y pasajeros, permitiendo la creación de viajes, la asignación de conductores y la consulta de datos relacionados.

## Características

- Gestión de conductores y pasajeros.
- Creación y finalización de viajes.
- Cálculo de conductores más cercanos a un pasajero.
- Uso de Prisma como ORM para la interacción con la base de datos.
- Documentación de la API generada automáticamente con Swagger.

---

## Requisitos previos

Antes de ejecutar el proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/) o [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (o Docker para ejecutar la base de datos en un contenedor)

---

## Configuración inicial

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/Noel-P3/taxi24.git
   cd taxi24
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Configurar el archivo .env:** 
   Crea un archivo .env en la raíz del proyecto con las siguientes variables de entorno:
   ```
   DATABASE_URL="postgresql://postgres:admin@localhost:5432/taxi24db?schema=public"
   PORT=3000
   ```

4. **Generar el cliente Prisma**:
   ```bash
   npx prisma generate
   ```

5. **Ejecutar las migraciones de Prisma**:
   ```bash
   npx prisma migrate dev
   ```

6. **Ejecutar los archivos .sql en tu base de datos de Postgress**
  ```bash
  prisma/
  ├── sql/ # Scripts de inicializacion de data
  ```

7. **Iniciar el servidor en modo desarrollo**:
   ```bash
   npm run start:dev
   ```

8. **Construir el proyecto**:
   ```bash
   npm run build
   ```

9. **Iniciar el servidor en modo producción**:
   ```bash
   npm run start:prod
   ```

10. **Ejecutar set de pruebas en POSTMAN**:
   ```bash
   Ejecutar en POSTMAN la coleccion del set de pruebas creado.
   Set de pruebas ubicados en la carpeta "Tests"
   ```

---

## Estructura del proyecto

```bash
src/
├── conductor/         # Módulo para la gestión de conductores
├── pasajeros/         # Módulo para la gestión de pasajeros
├── viajes/            # Módulo para la gestión de viajes
├── prisma/            # Configuración de Prisma
├── main.ts            # Punto de entrada de la aplicación
```

---

## URL de la API

La API estará disponible en la siguiente URL:

http://localhost:3000/api

## Notas adicionales

Base de datos: Este proyecto utiliza PostgreSQL como base de datos. Asegúrate de que esté configurada y en ejecución antes de iniciar la aplicación.

Prisma: Prisma se utiliza como ORM para interactuar con la base de datos. Puedes personalizar el esquema en schema.prisma.