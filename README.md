# gapi
GRPC API playground

docker build -t gapi/server -f server/Dockerfile .
docker run -i -t -p 9090:9090 --rm --name gapi-server gapi/server

docker build -t gapi/envoy -f envoy/Dockerfile .
docker run -d -p 8080:8080 --link gapi-server:gapi-server gapi/envoy
