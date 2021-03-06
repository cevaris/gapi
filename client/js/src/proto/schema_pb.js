/* eslint-disable */
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.com.github.cevaris.gapi.CreateApiKeyRequest', null, global);
goog.exportSymbol('proto.com.github.cevaris.gapi.CreateApiKeyResponse', null, global);
goog.exportSymbol('proto.com.github.cevaris.gapi.Identification', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.github.cevaris.gapi.Identification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.github.cevaris.gapi.Identification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.github.cevaris.gapi.Identification.displayName = 'proto.com.github.cevaris.gapi.Identification';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.github.cevaris.gapi.Identification.prototype.toObject = function(opt_includeInstance) {
  return proto.com.github.cevaris.gapi.Identification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.github.cevaris.gapi.Identification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.github.cevaris.gapi.Identification.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.github.cevaris.gapi.Identification}
 */
proto.com.github.cevaris.gapi.Identification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.github.cevaris.gapi.Identification;
  return proto.com.github.cevaris.gapi.Identification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.github.cevaris.gapi.Identification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.github.cevaris.gapi.Identification}
 */
proto.com.github.cevaris.gapi.Identification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.github.cevaris.gapi.Identification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.github.cevaris.gapi.Identification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.github.cevaris.gapi.Identification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.github.cevaris.gapi.Identification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.com.github.cevaris.gapi.Identification.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.com.github.cevaris.gapi.Identification.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.com.github.cevaris.gapi.Identification.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.com.github.cevaris.gapi.Identification.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.github.cevaris.gapi.CreateApiKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.github.cevaris.gapi.CreateApiKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.github.cevaris.gapi.CreateApiKeyRequest.displayName = 'proto.com.github.cevaris.gapi.CreateApiKeyRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.github.cevaris.gapi.CreateApiKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.com.github.cevaris.gapi.CreateApiKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.github.cevaris.gapi.CreateApiKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.github.cevaris.gapi.CreateApiKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    identification: (f = msg.getIdentification()) && proto.com.github.cevaris.gapi.Identification.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.github.cevaris.gapi.CreateApiKeyRequest}
 */
proto.com.github.cevaris.gapi.CreateApiKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.github.cevaris.gapi.CreateApiKeyRequest;
  return proto.com.github.cevaris.gapi.CreateApiKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.github.cevaris.gapi.CreateApiKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.github.cevaris.gapi.CreateApiKeyRequest}
 */
proto.com.github.cevaris.gapi.CreateApiKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.com.github.cevaris.gapi.Identification;
      reader.readMessage(value,proto.com.github.cevaris.gapi.Identification.deserializeBinaryFromReader);
      msg.setIdentification(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.github.cevaris.gapi.CreateApiKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.github.cevaris.gapi.CreateApiKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.github.cevaris.gapi.CreateApiKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.github.cevaris.gapi.CreateApiKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentification();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.com.github.cevaris.gapi.Identification.serializeBinaryToWriter
    );
  }
};


/**
 * optional Identification identification = 1;
 * @return {?proto.com.github.cevaris.gapi.Identification}
 */
proto.com.github.cevaris.gapi.CreateApiKeyRequest.prototype.getIdentification = function() {
  return /** @type{?proto.com.github.cevaris.gapi.Identification} */ (
    jspb.Message.getWrapperField(this, proto.com.github.cevaris.gapi.Identification, 1));
};


/** @param {?proto.com.github.cevaris.gapi.Identification|undefined} value */
proto.com.github.cevaris.gapi.CreateApiKeyRequest.prototype.setIdentification = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.com.github.cevaris.gapi.CreateApiKeyRequest.prototype.clearIdentification = function() {
  this.setIdentification(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.com.github.cevaris.gapi.CreateApiKeyRequest.prototype.hasIdentification = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.com.github.cevaris.gapi.CreateApiKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.com.github.cevaris.gapi.CreateApiKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.com.github.cevaris.gapi.CreateApiKeyResponse.displayName = 'proto.com.github.cevaris.gapi.CreateApiKeyResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.com.github.cevaris.gapi.CreateApiKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.com.github.cevaris.gapi.CreateApiKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.com.github.cevaris.gapi.CreateApiKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.github.cevaris.gapi.CreateApiKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.com.github.cevaris.gapi.CreateApiKeyResponse}
 */
proto.com.github.cevaris.gapi.CreateApiKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.com.github.cevaris.gapi.CreateApiKeyResponse;
  return proto.com.github.cevaris.gapi.CreateApiKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.com.github.cevaris.gapi.CreateApiKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.com.github.cevaris.gapi.CreateApiKeyResponse}
 */
proto.com.github.cevaris.gapi.CreateApiKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.com.github.cevaris.gapi.CreateApiKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.com.github.cevaris.gapi.CreateApiKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.com.github.cevaris.gapi.CreateApiKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.com.github.cevaris.gapi.CreateApiKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.com.github.cevaris.gapi.CreateApiKeyResponse.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.com.github.cevaris.gapi.CreateApiKeyResponse.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


goog.object.extend(exports, proto.com.github.cevaris.gapi);
