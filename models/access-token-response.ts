/* tslint:disable */
/* eslint-disable */
/**
 * Constant Contact API v3
 * Swagger build version 3.0.2475
 *
 * The version of the OpenAPI document: 1.0.116
 * Contact: webservices@constantcontact.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface AccessTokenResponse
 */
export interface AccessTokenResponse {
    /**
     * A JWT bearer access token that can be used to access the public API.
     * @type {string}
     * @memberof AccessTokenResponse
     */
    'access_token'?: string;
    /**
     * The type of token.
     * @type {string}
     * @memberof AccessTokenResponse
     */
    'token_type'?: string;
    /**
     * Timestamp that the token will expire in seconds after the UNIX epoch.
     * @type {number}
     * @memberof AccessTokenResponse
     */
    'expires_in'?: number;
    /**
     * Space delimited list of scopes granted to the access token.
     * @type {string}
     * @memberof AccessTokenResponse
     */
    'scope'?: string;
    /**
     * Contains a token you can use to refresh the bearer access token.
     * @type {string}
     * @memberof AccessTokenResponse
     */
    'refresh_token'?: string;
    /**
     * A JWT token that contains information about user authentication.
     * @type {string}
     * @memberof AccessTokenResponse
     */
    'id_token'?: string;
}

