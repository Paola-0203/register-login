# Usa una imagen base oficial de Node.js
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /server

# Copia el archivo package.json y package-lock.json
COPY ["package.json", "package-lock.json", "./"]

# Instala las dependencias
RUN npm install express mongoose bcryptjs dotenv cors --production && npm i nodemon --save-dev

# Copia todo el código del proyecto al contenedor
COPY . .

# Expone el puerto en el que correrá tu backend
EXPOSE 9000

# Comando para ejecutar el servidor
CMD ["npm", "run", "start"]