FROM alpine:3.8

# GOLANG
ENV GOLANG_VERSION 1.11.1
RUN set -eux; \
	apk add --no-cache --virtual .build-deps \
		autoconf \
		bash \
		curl \
		gcc \
		g++\
		git \
		make \
		musl-dev \
		openssl \
		go \
	; \
	export \
    # set GOROOT_BOOTSTRAP such that we can actually build Go
		GOROOT_BOOTSTRAP="$(go env GOROOT)" \
    # ... and set "cross-building" related vars to the installed system's values so that we create a build targeting the proper arch
    # (for example, if our build host is GOARCH=amd64, but our build env/image is GOARCH=386, our build needs GOARCH=386)
		GOOS="$(go env GOOS)" \
		GOARCH="$(go env GOARCH)" \
		GOHOSTOS="$(go env GOHOSTOS)" \
		GOHOSTARCH="$(go env GOHOSTARCH)" \
	;

ENV GOPATH /go
ENV PATH $GOPATH/bin:/usr/local/go/bin:$PATH
RUN mkdir -p "$GOPATH/src" "$GOPATH/bin" && chmod -R 777 "$GOPATH"
RUN go version


# DEPS
RUN go get -u github.com/golang/protobuf/proto
RUN go get -u github.com/golang/protobuf/protoc-gen-go
RUN go get -u google.golang.org/grpc


ADD . /go/src/github.com/cevaris/gapi
WORKDIR /go/src/github.com/cevaris/gapi

EXPOSE 9090
CMD go run server/server.go
