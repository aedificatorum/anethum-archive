Following: https://mherman.org/blog/dockerizing-a-react-app/
Also: https://medium.com/swlh/dockerizing-a-react-application-with-docker-and-nginx-19e88ef8e99a

```bash
docker build -t anethum-webapp .

docker run -v ${PWD}:/app -v /app/node_modules -p 3001:3000 --rm anethum-webapp
```