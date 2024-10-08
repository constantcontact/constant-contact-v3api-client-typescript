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
 * Custom fields allow Constant Contact users to add custom content to a contact that can be used to personalize emails in addition to the standard set of variables available for email personalization.
 * @export
 * @interface ContactCustomField
 */
export interface ContactCustomField {
    /**
     * The custom_field\'s unique ID
     * @type {string}
     * @memberof ContactCustomField
     */
    'custom_field_id': string;
    /**
     * The custom_field value.
     * @type {string}
     * @memberof ContactCustomField
     */
    'value': string;
}

