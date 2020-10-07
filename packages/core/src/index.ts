/**
 * FoalTS
 * Copyright(c) 2017-2020 Loïc Poullain <loic.poullain@centraliens.net>
 * Released under the MIT License.
 */

try {
  const version = process.versions.node;
  const NODE_MAJOR_VERSION = parseInt(version.split('.')[0], 10);
  if (NODE_MAJOR_VERSION < 10) {
    console.warn(`[Warning] You are using version ${version} of Node. FoalTS requires at least version 10.`);
  }
} finally {}

export {
  Log,
  LogOptions,
  UserRequired,
  ValidateBody,
  ValidateCookie,
  ValidateHeader,
  ValidatePathParam,
  ValidateQueryParam,
  controller,
  convertBase64ToBase64url,
  escape,
  escapeProp,
  generateSignedToken,
  generateToken,
  getAjvInstance,
  hashPassword,
  isInFile,
  render,
  renderError,
  signToken,
  verifyPassword,
  verifySignedToken,
} from './common';
export {
  ApiCallback,
  ApiDefineCallback,
  ApiDefineExample,
  ApiDefineHeader,
  ApiDefineLink,
  ApiDefineParameter,
  ApiDefineRequestBody,
  ApiDefineResponse,
  ApiDefineSchema,
  ApiDefineSecurityScheme,
  ApiDefineTag,
  ApiDeprecated,
  ApiExternalDoc,
  ApiInfo,
  ApiOperation,
  ApiOperationDescription,
  ApiOperationId,
  ApiOperationSummary,
  ApiParameter,
  ApiRequestBody,
  ApiResponse,
  ApiSecurityRequirement,
  ApiServer,
  ApiUseTag,

  Class,
  ClassOrAbstractClass,
  Config,
  ConfigNotFoundError,
  ConfigTypeError,
  Context,
  CookieOptions,
  Delete,
  Dependency,
  Env,
  Get,
  Head,
  Hook,
  HookDecorator,
  HookFunction,
  HookPostFunction,
  HttpMethod,

  HttpResponse,
  HttpResponseBadRequest,
  HttpResponseClientError,
  HttpResponseConflict,
  HttpResponseCreated,
  HttpResponseForbidden,
  HttpResponseInternalServerError,
  HttpResponseMethodNotAllowed,
  HttpResponseMovedPermanently,
  HttpResponseNoContent,
  HttpResponseNotFound,
  HttpResponseNotImplemented,
  HttpResponseOK,
  HttpResponseRedirect,
  HttpResponseRedirection,
  HttpResponseServerError,
  HttpResponseSuccess,
  HttpResponseTooManyRequests,
  HttpResponseUnauthorized,

  IApiAbstractParameter,
  IApiAbstractSecurityScheme,
  IApiApiKeySecurityScheme,
  IApiAuthorizationCodeOAuthFlow,
  IApiCallback,
  IApiClientCredentialsOAuthFlow,
  IApiComponents,
  IApiContact,
  IApiCookieParameter,
  IApiDiscriminator,
  IApiEncoding,
  IApiExample,
  IApiExternalDocumentation,
  IApiHeader,
  IApiHeaderParameter,
  IApiHttpSecurityScheme,
  IApiImplicitOAuthFlow,
  IApiInfo,
  IApiLicense,
  IApiLink,
  IApiMediaType,
  IApiOAuth2SecurityScheme,
  IApiOAuthFlow,
  IApiOAuthFlows,
  IApiOpenIdConnectSecurityScheme,
  IApiOperation,
  IApiParameter,
  IApiPasswordOAuthFlow,
  IApiPathItem,
  IApiPathParameter,
  IApiPaths,
  IApiQueryParameter,
  IApiReference,
  IApiRequestBody,
  IApiResponse,
  IApiResponses,
  IApiSchema,
  IApiSecurityRequirement,
  IApiSecurityScheme,
  IApiServer,
  IApiServerVariable,
  IApiTag,
  IApiXML,

  IAppController,
  IController,

  IOpenAPI,
  MergeHooks,
  OpenApi,
  OpenApiDecorator,
  Options,
  Patch,
  Post,
  Put,
  ServiceManager,
  createController,
  createOpenApiDocument,
  createService,
  dependency,

  getApiCallbacks,
  getApiCompleteOperation,
  getApiComponents,
  getApiDeprecated,
  getApiExternalDocs,
  getApiInfo,
  getApiOperation,
  getApiOperationDescription,
  getApiOperationId,
  getApiOperationSummary,
  getApiParameters,
  getApiRequestBody,
  getApiResponses,
  getApiSecurity,
  getApiServers,
  getApiTags,
  getApiUsedTags,

  getHookFunction,
  getHookFunctions,
  getHttpMethod,
  getPath,

  isHttpResponse,
  isHttpResponseBadRequest,
  isHttpResponseClientError,
  isHttpResponseConflict,
  isHttpResponseCreated,
  isHttpResponseForbidden,
  isHttpResponseInternalServerError,
  isHttpResponseMethodNotAllowed,
  isHttpResponseMovedPermanently,
  isHttpResponseNoContent,
  isHttpResponseNotFound,
  isHttpResponseNotImplemented,
  isHttpResponseOK,
  isHttpResponseRedirect,
  isHttpResponseRedirection,
  isHttpResponseServerError,
  isHttpResponseSuccess,
  isHttpResponseTooManyRequests,
  isHttpResponseUnauthorized,
} from './core';
export {
  OPENAPI_SERVICE_ID,
  createApp,
} from './express';
export {
  Session,
  SessionAlreadyExists,
  SessionState,
  SessionStore,
  Store,
  TokenOptional,
  TokenRequired,
  createSession,
  readSession,
} from './sessions';
