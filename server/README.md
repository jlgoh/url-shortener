# Getting Started with Express Server

## Available Scripts

In the project directory, you can run:

### `yarn`

Installs the dependencies.

### `yarn dev`

Runs the server in development mode.\
The development server runs on [http://localhost:5000](http://localhost:5000) .

## Setting up Local Database

Set up a PostgreSQL database with the `localDbConfig` specfied in `/queries`.\
Create a table with name `url` with the following attributes:

-   `id`: INTEGER PRIMARY KEY NOT NULL
-   `originalUrl`: TEXT NOT NULL
-   `shortUrl`: TEXT NOT NULL
