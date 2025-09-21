# Backend API - Tasks Manager

API desarrollada con NestJS, TypeORM, MySQL y JWT para la gestión de tareas.

## 🚀 Características

- ✅ Autenticación JWT
- ✅ CRUD completo para tareas
- ✅ Relación usuario-tareas
- ✅ Validaciones con class-validator
- ✅ Manejo de errores global
- ✅ Base de datos MySQL con Docker
- ✅ Migraciones de TypeORM

## 📋 Requisitos

- Node.js (v16 o superior)
- Docker y Docker Compose
- npm o yarn

## 🛠️ Instalación

1. **Clonar y navegar al directorio:**

   ```bash
   cd Backend
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**

   ```bash
   cp .env.example .env
   ```

4. **Levantar la base de datos con Docker:**

   ```bash
   docker-compose up -d
   ```

5. **Ejecutar migraciones:**

   ```bash
   npm run migration:run
   ```

6. **Iniciar la aplicación:** ```

7. **Iniciar la aplicación:**

   ```bash
   # Desarrollo
   npm run start:dev

   # Producción
   npm run build
   npm run start:prod
   ```

## 🐳 Docker

El proyecto incluye un `docker-compose.yml` que configura:

- **MySQL 8.0** en puerto 3307

```bash
# Levantar servicios
docker-compose up -d

# Ver logs
docker-compose logs -f

# Detener servicios
docker-compose down
```

## 📚 API Endpoints

### Autenticación

#### Registro

```http
POST /auth/register
Content-Type: application/json

{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "password": "password123"
}
```

#### Login

```http
POST /auth/login
Content-Type: application/json

{
  "email": "juan@example.com",
  "password": "password123"
}
```

**Respuesta:**

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "juan@example.com",
    "name": "Juan Pérez"
  }
}
```

### Tasks (Requieren Authorization Header)

#### Crear tarea

```http
POST /tasks
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Mi primera tarea",
  "description": "Descripción opcional"
}
```

#### Obtener todas las tareas del usuario

```http
GET /tasks
Authorization: Bearer {token}
```

#### Obtener tarea específica

```http
GET /tasks/1
Authorization: Bearer {token}
```

#### Actualizar tarea

```http
PATCH /tasks/1
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Título actualizado",
  "description": "Nueva descripción",
  "done": true
}
```

#### Alternar estado de completado

```http
PATCH /tasks/1/toggle
Authorization: Bearer {token}
```

#### Eliminar tarea

```http
DELETE /tasks/1
Authorization: Bearer {token}
```

## 🗄️ Base de Datos

### Entidad User

- `id` (PK, autoincremental)
- `email` (único, requerido)
- `password` (hash, requerido)
- `name` (requerido)
- `createdAt` (timestamp)
- `updatedAt` (timestamp)

### Entidad Task

- `id` (PK, autoincremental)
- `title` (requerido)
- `description` (opcional)
- `done` (boolean, default: false)
- `userId` (FK a User)
- `createdAt` (timestamp)
- `updatedAt` (timestamp)

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run start:dev          # Inicia con nodemon
npm run build              # Compila TypeScript
npm run start              # Inicia en producción

# Migraciones
npm run migration:create   # Crear nueva migración
npm run migration:run      # Ejecutar migraciones pendientes
npm run migration:revert   # Revertir última migración
```

## 🛡️ Seguridad

- Contraseñas hasheadas con bcryptjs
- JWT para autenticación stateless
- Validación de entrada con class-validator
- Protección de rutas con guards
- Manejo seguro de errores

## 📁 Estructura del Proyecto

```
src/
├── auth/               # Módulo de autenticación
│   ├── decorators/     # Decoradores personalizados
│   ├── dto/           # DTOs de autenticación
│   ├── entities/      # Entidad User
│   ├── guards/        # Guards JWT
│   └── strategies/    # Estrategias Passport
├── tasks/             # Módulo de tareas
│   ├── dto/          # DTOs de tareas
│   └── entities/     # Entidad Task
├── database/          # Configuración DB y migraciones
├── common/           # Filtros y utilidades comunes
└── main.ts          # Punto de entrada
```

## 🧪 Testing

Para probar la API puedes usar:

1. **Postman/Insomnia:** Importa la colección de endpoints
2. **curl:** Ejemplos en la documentación
3. **phpMyAdmin:** 4. **Acceso a phpMyAdmin:** http://localhost:8081 (usuario: `root`, contraseña: `password`)

## 🔧 Configuración de Entorno

Variables en `.env`:

```env
# Base de datos
DB_HOST=localhost
DB_PORT=3307
DB_USERNAME=nestjs
DB_PASSWORD=nestjs123
DB_NAME=tasks_db

# JWT
JWT_SECRET=tu_clave_secreta_super_segura
JWT_EXPIRES_IN=24h

# App
PORT=3000
NODE_ENV=development
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de uso educativo.
