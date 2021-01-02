# TODO Backend API

Este proyecto se realizo con la finalidad de crear una **API** para la prueba de **Addika**.

## PreRequisitos

Para correr el servidor es necesario tener instalado:

- **NodeJS** en su versión **12.18.x** [NodeJs](https://nodejs.org/en/blog/release/v12.18.4/).
- **NPM** en su versión **6.14.x**
- **PostgreSQL** en su versión **13** [PostgreSQL](https://www.postgresql.org/download/)

## Configuraciones ⚙

### Base de datos

Es necesario ingresar al archivo **config.json** que se encuentra dentro de la carpeta config en la raiz del proyecto, posteriormente configurar en ese archivo sus credenciales de postgres("nombre de base de datos, nombre de usuario y contraseña").
Por default se necesita tener una base de datos llamada **"todo"**, un usuario llamado postgres con la contraseña **root**

### Variables de entorno

En la raiz del proyecto existe un archivo **.env** con la posibilidad de configurar el puerto en la cual el proyecto corre.
Por default es: 4000

## Running the server

Una vez instalado lo anterior, se deberá correr el siguiente comando:

```
npm install
```

Una vez instalado todo, se deberá correr las migraciones con el siguiente comando:

```
npm run migrate
```

Este proyecto utiliza nodemon para facilitar la inicialización del proyecto en modo desarrollo, de la siguiente manera:

```
npm run start:dev
```

Si no es requerido inicializar el proyecto con nodemon, se puede hacer de la siguiente manera:

```
npm run start
```

## Documentación

En la raiz del proyecto se encuentra una carpeta con el nombre de **doc** en la cual hay una collección de [Postman](https://www.postman.com/downloads/) que contiene todos los endpoints con su respectivos ejemplos.

## Dependencias

| Package   | Info                                    |
| --------- | --------------------------------------- |
| dotenv    | https://www.npmjs.com/package/dotenv    |
| express   | https://www.npmjs.com/package/express   |
| pg        | https://www.npmjs.com/package/pg        |
| pg-hstore | https://www.npmjs.com/package/pg-hstore |
| sequelize | https://www.npmjs.com/package/sequelize |

## Unit test

Para las pruebas unitarias se utilizo [Jest](https://jestjs.io/docs/en/getting-started) y para ejecutar dichas pruebas es necesario:

```
npm install
```

```
npm run test
```

## License

El proyecto usa una licencia de tipo [ISC](https://opensource.org/licenses/ISC)

## Autor

[Alberto Ochoa](https://www.linkedin.com/in/alberto-ochoa-de-la-torre-340410171/)

## Comentarios

En los endpoints se cambio el parametro name por description, ya que en el lado del frontend no coincidia con el nombre de las variables.
