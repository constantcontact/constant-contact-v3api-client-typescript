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
 * @interface CreateDeleteActivityRequest
 */
export interface CreateDeleteActivityRequest {
    /**
     * Specify up to 500 contacts by <code>contact_id</code> to delete; mutually exclusive with <code>list_ids</code>.
     * @type {Array<string>}
     * @memberof CreateDeleteActivityRequest
     */
    'contact_ids'?: Array<string>;
    /**
     * The contacts on the lists (up to 50) specified will be deleted; mutually exclusive with <code>contact_ids</code>.
     * @type {Array<string>}
     * @memberof CreateDeleteActivityRequest
     */
    'list_ids'?: Array<string>;
}

