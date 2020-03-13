# Anethum

Create React App frontend app which talks to an express backend.  Database coming soon.

## Development

Run the API and WebApp:

```bash
# Build
docker-compose up --build
# Or just run
docker-compose up
```

By default the local application directories are mounted as volumes in the containers, with support for hot reload in both.

> To install any additional packages make sure you skip the cache!  One of either `--nocache` or removing all the existing images should get it to work.

### Run individual images

```bash
## WebApp
docker build -t anethum-api .
docker run -v ${PWD}:/app -v /app/node_modules -p8881:8881 anethum-api

## Api
docker build -t anethum-webapp .
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm anethum-webapp
```

## Production

The production image builds the webapp and places it in the `/public` folder of the api container, hosting a single image only.

### Deploy to Heroku

Uses the `heroku.yml` file and expects the stack to be `container`.

## What's Missing?

The database.  Aim to use Hasura/Postgres for heroku in production (deployed to a different heroku upp), and additional containers for development.
