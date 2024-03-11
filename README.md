# backEnd StoryDots!

este es la parte front end del desafio, para esto use nodejs con express, jwtoken, bcrypt entre otras
desarrolado con la version 20.11
necesario tener docker

# como correrlo

1.  clonar el repositorio `git@github.com:nicolasBakanowski/be_storyDots.git`
2.  parece dentro de la carpeta del proyecto `cd be_storyDocs`
3.  levantamos el servicio de mysql con el compose de docker con el siguiente comando `docker-compose up`
4.  ahora es necesario correr las migraciones para eso necesitamos tener la cadena o datos de conexion con el servicio de la bd la tenemos que configurar en `src/config/config.json` si levantaste el servicio de docker, esta es uri`mysql://myuser:mypassword@localhost:3306/mydb`
5.  ahora para correr las migraciones y generar las tablas nos tenemos que parar en src `cd src `
6.  en esta carpeta podemos tirar los comandos de migracion y sedders`sequelize db:migrate`y `npx sequelize-cli db:seed:all` con estos comandos la bd va a tener algunos datos.
7.  no nos tenemos que olvidar de instalar las dependencias, si estas parado en src `cd .. ` y `npm run install`
8.  listo ya podes correr el backend `npm run start `
