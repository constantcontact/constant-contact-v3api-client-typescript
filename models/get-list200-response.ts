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
 * @interface GetList200Response
 */
export interface GetList200Response {
    /**
     * Unique ID for the contact list
     * @type {string}
     * @memberof GetList200Response
     */
    'list_id': string;
    /**
     * The name given to the contact list
     * @type {string}
     * @memberof GetList200Response
     */
    'name': string;
    /**
     * Text describing the list.
     * @type {string}
     * @memberof GetList200Response
     */
    'description'?: string;
    /**
     * Identifies whether or not the account has favorited the contact list.
     * @type {boolean}
     * @memberof GetList200Response
     */
    'favorite'?: boolean;
    /**
     * System generated date and time that the resource was created, in ISO-8601 format.
     * @type {string}
     * @memberof GetList200Response
     */
    'created_at'?: string;
    /**
     * Date and time that the list was last updated, in ISO-8601 format. System generated.
     * @type {string}
     * @memberof GetList200Response
     */
    'updated_at'?: string;
    /**
     * If the list was deleted, this property shows the date and time it was deleted, in ISO-8601 format. System generated.
     * @type {string}
     * @memberof GetList200Response
     */
    'deleted_at'?: string;
    /**
     * The total number of contacts that are members in a list. Does not apply to segment type lists.
     * @type {number}
     * @memberof GetList200Response
     */
    'membership_count'?: number;
}

