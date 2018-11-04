# gapi
GRPC API playground


### Generate proto files
protoc -I=./proto/ --go_out=plugins=grpc:./proto ./proto/schema.proto
protoc -I=./proto/ --js_out=import_style=commonjs:./client/js/src/proto ./proto/schema.proto
protoc -I=./proto/ --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./client/js/src/proto ./proto/schema.proto

# docker setup
docker build -t gapi/server -f server/Dockerfile .
docker run -i -t -p 9090:9090 --rm --name gapi-server gapi/server

docker build -t gapi/envoy -f envoy/Dockerfile .
docker run -i -t -p 8080:8080 --rm --link gapi-server:gapi-server --name gapi-envoy gapi/envoy

### JS setup
cd client/js
yarn
yarn start


### Bug
- [Need to add `/* eslint-disable */` to generated JS files](https://github.com/improbable-eng/grpc-web/issues/96)
