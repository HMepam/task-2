## <p style="color:#1a9cb0;">PREREQUISITES: </p>
The task is a continuation of Homework2and should be done in the same repo.

## <p style="color:#1a9cb0;">TASK 3.1</p>
* Install DB PostgreSQL on your machine or use a free web hosting services for PostgreSQL (https://www.heroku.com/postgresor https://www.elephantsql.com/plans.html).
* Write SQL script which will create Users table in the DB and fillit in with predefined users’collection.
* Configure your REST service to work with PostgreSQL.
  - Use the sequelize package(http://docs.sequelizejs.com/)as ORM to work with PostgreSQL.
  - As an alternative to sequelizeyou can use more low-level query-builderlibrary(http://knexjs.org/).
## <p style="color:#1a9cb0;">TASK 3.2</p>
  
* The service should adhere to 3-layer architecture principles (https://softwareontheroad.com/ideal-nodejs-project-structure/) and contain the following set of directories:
  ```
    |-routers / controllers
    |-services
    |-data-access
    |-models
  ```