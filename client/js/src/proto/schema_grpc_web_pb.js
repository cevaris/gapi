/* eslint-disable */
/**
 * @fileoverview gRPC-Web generated client stub for com.github.cevaris.gapi
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.com = {};
proto.com.github = {};
proto.com.github.cevaris = {};
proto.com.github.cevaris.gapi = require('./schema_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.github.cevaris.gapi.GapiServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.github.cevaris.gapi.GapiServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!proto.com.github.cevaris.gapi.GapiServiceClient} The delegate callback based client
   */
  this.delegateClient_ = new proto.com.github.cevaris.gapi.GapiServiceClient(
      hostname, credentials, options);

};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.github.cevaris.gapi.CreateApiKeyRequest,
 *   !proto.com.github.cevaris.gapi.CreateApiKeyResponse>}
 */
const methodInfo_CreateApiKey = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.github.cevaris.gapi.CreateApiKeyResponse,
  /** @param {!proto.com.github.cevaris.gapi.CreateApiKeyRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.github.cevaris.gapi.CreateApiKeyResponse.deserializeBinary
);


/**
 * @param {!proto.com.github.cevaris.gapi.CreateApiKeyRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.github.cevaris.gapi.CreateApiKeyResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.github.cevaris.gapi.CreateApiKeyResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.github.cevaris.gapi.GapiServiceClient.prototype.createApiKey =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.github.cevaris.gapi.GapiService/CreateApiKey',
      request,
      metadata,
      methodInfo_CreateApiKey,
      callback);
};


/**
 * @param {!proto.com.github.cevaris.gapi.CreateApiKeyRequest} request The
 *     request proto
 * @param {!Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.github.cevaris.gapi.CreateApiKeyResponse>}
 *     The XHR Node Readable Stream
 */
proto.com.github.cevaris.gapi.GapiServicePromiseClient.prototype.createApiKey =
    function(request, metadata) {
  return new Promise((resolve, reject) => {
    this.delegateClient_.createApiKey(
      request, metadata, (error, response) => {
        error ? reject(error) : resolve(response);
      });
  });
};


module.exports = proto.com.github.cevaris.gapi;

