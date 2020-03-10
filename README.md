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

## Deploy to Heroku

Uses the `heroku.yml` file and expects the stack to be `container`.

Currently doesn't work!  Needs updating:

- [ ] Create production `Dockerfile` without `EXPOSE` and use the provided `$PORT`

## Individual Images (Dev)

### Webapp

```bash
# Build and tag the api image
docker build -t anethum-api .
# Run the api exposing port 8881
docker run -v ${PWD}:/app -v /app/node_modules -p8881:8881 anethum-api
```

### Api

```bash
docker build -t anethum-webapp .

docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm anethum-webapp
```

## Misc
Following: https://mherman.org/blog/dockerizing-a-react-app/
Also: https://medium.com/swlh/dockerizing-a-react-application-with-docker-and-nginx-19e88ef8e99a
And: https://www.docker.com/blog/keep-nodejs-rockin-in-docker/