Following: https://mherman.org/blog/dockerizing-a-react-app/

```bash
docker build -t anethum-webapp .

docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm anethum-webapp
```

## Current Status
- Works for dev (hot reload)
- Proxying does not work