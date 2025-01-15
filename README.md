# Proyecto: Aplicación Fullstack con Backend y Frontend

Este proyecto es una aplicación fullstack que incluye un backend con Express y MongoDB, y un frontend con Next.js. También incluye configuraciones para Docker.

---

## **Requerimientos Previos**
node.js (versión 18 o superior)
Docker y Docker compose
Mongodb atlas

### **Dependencias Globales**
- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/) (para ejecutar con contenedores)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) o una instancia local de MongoDB.

### **Variables de Entorno**
Crea un archivo `.env` en la carpeta del backend (`server`) con las siguientes variables:
MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@<cluster>.mongodb.net/<base_de_datos>
PORT=9000

### **Pasos para ejecutar este proyecto localmente**
1.-clonar el repositorio:
    git clone https://github.com/tu_usuario/tu_repositorio.git
    cd tu_repositorio

2.-configurar el backend:
    -entrar al directorio del servidor
        cd server
    -intalar dependencias
        npm install express mongoose bcryptjs dotenv cors --production
        npm i nodemon --save-dev
    -iniciar el servidor
        npm run start
El backend estará disponible en http://localhost:9000.

3.-configurar el Frontend:
    -entrar al directorio del frontend
        cd ../client
    -intalar dependencias
        npm install axios next react react-dom --production
    -iniciar el servidor
        npm run dev
Abre el navegador en http://localhost:3000.

### **Ejecutar aplicación con docker**
    -entrar a la raíz del proyecto
        cd tu_repositorio
    -construir imagen y ejecutar contenedores
        docker-compose up --build
    -docker creará el cliente y el servidor
    Backend: Disponible en http://localhost:9000
    Frontend: Disponible en http://localhost:3000

### **Endpoint de la API**
POST /api/users: Crear un nuevo usuario.
POST /api/users/login: Iniciar sesión.
GET /api/users: Obtener todos los usuarios.
GET /api/users/:id: Obtener un usuario por ID.
PUT /api/users/:id: Actualizar un usuario por ID.
DELETE /api/users/:id: Eliminar un usuario por ID.


### **Autor**
Este proyecto fue creado por [Tu Nombre]. 
