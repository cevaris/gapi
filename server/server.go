package main

import (
	"github.com/cevaris/gapi/proto"
	log "github.com/sirupsen/logrus"
)

func main() {
	log.SetFormatter(&log.JSONFormatter{})

	msg := com_github_cevaris_gapi.EchoRequest{
		Message: "test",
	}

	log.Info("server created", msg)
}
