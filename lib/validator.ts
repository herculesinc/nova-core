// IMPORTS
// ================================================================================================
import { ClientError, ServerError } from './Errors';
import { HttpStatusCode } from './util';
import { isError } from 'util';

// INTERFACES
// ================================================================================================
export interface BaseValidator {
    (condition: any, message: string): void;
    from?: (error: Error) => void;
}

export interface Validator extends BaseValidator {
    request?    : BaseValidator;
    authorized? : BaseValidator;
    inputs?     : BaseValidator;
    exists?     : BaseValidator;
    content?    : BaseValidator;
    accepts?    : BaseValidator;
    allowed?    : BaseValidator;
    ready?      : BaseValidator;
}

// VALIDATORS
// ================================================================================================
export const validate: Validator = function(condition: any, message?: string) {
    if (!condition) throw new ServerError(message);
} 

validate.from = function(error: Error) {
    if (isError(error)) {
        throw (error instanceof ServerError) ? error : new ServerError(error.message, error);
    }
}

// REQUEST
// ------------------------------------------------------------------------------------------------
validate.request = function (condition: any, message?: string) {
    if (!condition) throw new ClientError(message, HttpStatusCode.BadRequest);
}

validate.request.from = function (error: Error) {
    if (isError(error)) throw new ClientError(error.message, HttpStatusCode.BadRequest);
}

// AUTOHRIZED
// ------------------------------------------------------------------------------------------------
validate.authorized = function (condition: any, message?: string) {
    if (!condition) throw new ClientError(message, HttpStatusCode.Unauthorized);
}

validate.authorized.from = function (error: Error) {
    if (isError(error)) throw new ClientError(error.message, HttpStatusCode.Unauthorized);
}

// INPUTS
// ------------------------------------------------------------------------------------------------
validate.inputs = function (condition: any, message?: string) {
    if (!condition) throw new ClientError(message, HttpStatusCode.InvalidInputs);
}

validate.inputs.from = function (error: Error) {
    if (isError(error)) throw new ClientError(error.message, HttpStatusCode.InvalidInputs);
}

// EXISTS
// ------------------------------------------------------------------------------------------------
validate.exists = function (condition: any, message?: string) {
    if (!condition) throw new ClientError(message, HttpStatusCode.NotFound);
}

validate.exists.from = function (error: Error) {
    if (isError(error)) throw new ClientError(error.message, HttpStatusCode.NotFound);
}

// CONTENT
// ------------------------------------------------------------------------------------------------
validate.content = function (condition: any, message?: string) {
    if (!condition) throw new ClientError(message, HttpStatusCode.UnsupportedContent);
}

validate.content.from = function (error: Error) {
    if (isError(error)) throw new ClientError(error.message, HttpStatusCode.UnsupportedContent);
}

// ACCEPTS
// ------------------------------------------------------------------------------------------------
validate.accepts = function (condition: any, message?: string) {
    if (!condition) throw new ClientError(message, HttpStatusCode.NotAcceptable);
}

validate.accepts.from = function (error: Error) {
    if (isError(error)) throw new ClientError(error.message, HttpStatusCode.NotAcceptable);
}

// ALLOWED
// ------------------------------------------------------------------------------------------------
validate.allowed = function (condition: any, message?: string) {
    if (!condition) throw new ClientError(message, HttpStatusCode.NotAllowed);
}

validate.allowed.from = function (error: Error) {
    if (isError(error)) throw new ClientError(error.message, HttpStatusCode.NotAllowed);
}

// READY
// ------------------------------------------------------------------------------------------------
validate.ready = function (condition: any, message?: string) {
    if (!condition) throw new ClientError(message, HttpStatusCode.NotReady);
}

validate.ready.from = function (error: Error) {
    if (isError(error)) throw new ClientError(error.message, HttpStatusCode.NotReady);
}