# TODO Backend API

This project was carried out in order to create an **API** for the **Addika** test.

## Prerequisites

To run the server it is necessary to have installed:

- **NodeJS** in the version **12.18.x** [NodeJs](https://nodejs.org/en/blog/release/v12.18.4/).
- **NPM** in the version **6.14.x**
- **PostgreSQL** in the version **13** [PostgreSQL](https://www.postgresql.org/download/)

## Settings ⚙

### Database

It is necessary to enter the **config.json** file that is inside the config folder at the root of the project,
later configure in this file your postgres credentials ("database name, username and password").
By default you need to have a database called **"todo"**, a username called postgres with the password **root**

### Environment Variables

In the root of the project there is a file **.env** with the possibility of configuring the port in which the project runs.
Default is: 4000

## Running the server

Once the above is installed and configured, the following command should be run:

```
npm install
```

Once everything is installed, the migrations must be run with the following command:

```
npm run migrate
```

This project uses nodemon to facilitate the initialization of the project in development mode, as follows:

```
npm run start:dev
```

If it is not required to initialize the project with nodemon, it can be done as follows:

```
npm run start
```

## Documentation

At the root of the project there is a folder with the name of **doc** in which there is a collection of [Postman](https://www.postman.com/downloads/) It contains all the endpoints with their respective examples.

## Dependencies

| Package   | Info                                    |
| --------- | --------------------------------------- |
| dotenv    | https://www.npmjs.com/package/dotenv    |
| express   | https://www.npmjs.com/package/express   |
| pg        | https://www.npmjs.com/package/pg        |
| pg-hstore | https://www.npmjs.com/package/pg-hstore |
| sequelize | https://www.npmjs.com/package/sequelize |

## Unit test

For the unit tests i use [Jest](https://jestjs.io/docs/en/getting-started) and to run these tests it is necessary:

```
npm install
```

```
npm run test
```

## License

The project uses a license of type [ISC](https://opensource.org/licenses/ISC)

## Author

[Alberto Ochoa](https://www.linkedin.com/in/alberto-ochoa-de-la-torre-340410171/)

## Additional Comments

In the endpoints, the name parameter was changed to description, since on the frontend side it does not match the name of the variables.
