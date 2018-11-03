package main

import (
	"flag"
	"fmt"
	pb "github.com/cevaris/gapi/proto"
	"github.com/satori/go.uuid"
	log "github.com/sirupsen/logrus"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"net"
)

var (
	port = flag.Int("port", 9090, "The server port")
)

type gapiServiceServer struct {
}

func (*gapiServiceServer) CreateApiKey(context.Context, *pb.CreateApiKeyRequest) (*pb.CreateApiKeyResponse, error) {
	key := uuid.NewV4()
	response := &pb.CreateApiKeyResponse{Key: key.String()}
	return response, nil
}

func main() {
	log.SetFormatter(&log.JSONFormatter{})

	flag.Parse()
	lis, err := net.Listen("tcp", fmt.Sprintf("0.0.0.0:%d", *port))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	var opts []grpc.ServerOption
	grpcServer := grpc.NewServer(opts...)

	pb.RegisterGapiServiceServer(grpcServer, &gapiServiceServer{})
	log.Info("server listening")

	grpcServer.Serve(lis)

}
