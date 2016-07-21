"use strict";
// IMPORTS
// ================================================================================================
const util_1 = require('./lib/util');
const errors_1 = require('./lib/errors');
// MODULE VARIABLES
// =================================================================================================
exports.util = {
    since: util_1.since,
    wrap: errors_1.wrapMessage
};
// RE-EXPORTS
// =================================================================================================
var Executor_1 = require('./lib/Executor');
exports.Executor = Executor_1.Executor;
var validator_1 = require('./lib/validator');
exports.validate = validator_1.validate;
var errors_2 = require('./lib/errors');
exports.Exception = errors_2.Exception;
//# sourceMappingURL=index.js.map