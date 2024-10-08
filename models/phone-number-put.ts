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
 * @interface PhoneNumberPut
 */
export interface PhoneNumberPut {
    /**
     * The contact\'s phone number.
     * @type {string}
     * @memberof PhoneNumberPut
     */
    'phone_number'?: string;
    /**
     * Identifies the type of phone number; valid values are home, work, mobile, or other.
     * @type {string}
     * @memberof PhoneNumberPut
     */
    'kind'?: string;
}

