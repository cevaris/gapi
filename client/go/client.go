package main

import (
	"flag"
	pb "github.com/cevaris/gapi/proto"
	log "github.com/sirupsen/logrus"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"time"
)

var (
	serverAddr = flag.String("server_addr", ":10000", "The server address in the format of host:port")
)

func main() {
	log.SetFormatter(&log.JSONFormatter{})

	flag.Parse()
	var opts []grpc.DialOption
	opts = append(opts, grpc.WithInsecure())

	conn, err := grpc.Dial(*serverAddr, opts...)
	if err != nil {
		log.Fatalf("fail to dial: %v", err)
	}
	defer conn.Close()
	client := pb.NewGapiServiceClient(conn)

	// Looking for a valid response
	request := &pb.CreateApiKeyRequest{
		Identification: &pb.Identification{
			Email:    "example@email.com",
			Password: "pass",
		},
	}

	log.Info("Getting response for point", request)
	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)

	defer cancel()
	response, err := client.CreateApiKey(ctx, request)
	if err != nil {
		log.Fatalf("%v.CreateApiKey(_) = _, %v: ", client, err)
	}
	log.Println(response)

	log.Info("client done")
}
