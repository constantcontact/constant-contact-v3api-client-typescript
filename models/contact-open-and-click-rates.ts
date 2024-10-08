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
 * The average click and open rates for a provided contact. The basic information provided is contact id, open rate, click rate, and emails included in the calculation.
 * @export
 * @interface ContactOpenAndClickRates
 */
export interface ContactOpenAndClickRates {
    /**
     * The unique ID of the contact for which the report is being generated.
     * @type {string}
     * @memberof ContactOpenAndClickRates
     */
    'contact_id': string;
    /**
     * The number of activities included in the calculation.
     * @type {number}
     * @memberof ContactOpenAndClickRates
     */
    'included_activities_count': number;
    /**
     * The average rate the contact opened emails sent to them.
     * @type {number}
     * @memberof ContactOpenAndClickRates
     */
    'average_open_rate': number;
    /**
     * The average rate the contact clicked on links in emails sent to them.
     * @type {number}
     * @memberof ContactOpenAndClickRates
     */
    'average_click_rate': number;
}

