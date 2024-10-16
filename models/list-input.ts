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
 * @interface ListInput
 */
export interface ListInput {
    /**
     * The name given to the contact list
     * @type {string}
     * @memberof ListInput
     */
    'name': string;
    /**
     * Identifies whether or not the account has favorited the contact list.
     * @type {boolean}
     * @memberof ListInput
     */
    'favorite'?: boolean;
    /**
     * Text describing the list.
     * @type {string}
     * @memberof ListInput
     */
    'description'?: string;
}

