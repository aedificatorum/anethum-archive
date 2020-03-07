# docker info

```bash
# Build and tag the api image
docker build -t anethum-api .
# Run the api exposing port 8881
docker run -p8881:8881 anethum-api
```