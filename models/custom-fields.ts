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


// May contain unused imports in some cases
// @ts-ignore
import { GetAllActivities200ResponseLinks } from './get-all-activities200-response-links';
// May contain unused imports in some cases
// @ts-ignore
import { GetCustomField200Response } from './get-custom-field200-response';

/**
 * Use this endpoint to retrieve (GET) all custom_fields in the user\'s account, or to create (POST) a new custom_field.
 * @export
 * @interface CustomFields
 */
export interface CustomFields {
    /**
     * 
     * @type {Array<GetCustomField200Response>}
     * @memberof CustomFields
     */
    'custom_fields'?: Array<GetCustomField200Response>;
    /**
     * 
     * @type {GetAllActivities200ResponseLinks}
     * @memberof CustomFields
     */
    '_links'?: GetAllActivities200ResponseLinks;
}

