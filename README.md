# Anethum

Create React App frontend app which talks to an express backend and postgres database.

## Development

Run the API and WebApp:

```bash
# Build
docker-compose up --build --renew-anon-volumes
# Or just run
docker-compose up
```

By default the local application directories are mounted as volumes in the containers, with support for hot reload in both.

> Because we want to use the container's `node_modules` folder we mount it as an anonymous volume.  This causes problems when you install a new dependency (`yarn add xx` in the source project) as Docker will _reuse_ the previous anonymous volume.  `renew-anon-volumes` takes care of that for us.

### Run individual images

The images expect the source to be mounted as a volume in the container - mainly to support hot reload.

```bash
## WebApp
docker build -t anethum-api .
docker run -v ${PWD}:/app -v /app/node_modules -p8881:8881 --rm anethum-api

## Api
docker build -t anethum-webapp .
docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm anethum-webapp
```

### Resetting the DB data/config

```bash
docker-compose down # or trash from the docker dashboard

docker volume rm anethum_pgdata
```

## Production

The production image builds the webapp and places it in the `/public` folder of the api image, hosting a single image only.

### Deploy to Heroku

Uses the `heroku.yml` file and expects the stack to be `container`.

> DB deployment not yet configured for production!
