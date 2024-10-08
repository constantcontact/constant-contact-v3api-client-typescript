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
import { GetList200Response } from './get-list200-response';

/**
 * 
 * @export
 * @interface GetAllLists200Response
 */
export interface GetAllLists200Response {
    /**
     * 
     * @type {Array<GetList200Response>}
     * @memberof GetAllLists200Response
     */
    'lists'?: Array<GetList200Response>;
    /**
     * The total number of contact lists.
     * @type {number}
     * @memberof GetAllLists200Response
     */
    'lists_count'?: number;
    /**
     * 
     * @type {GetAllActivities200ResponseLinks}
     * @memberof GetAllLists200Response
     */
    '_links'?: GetAllActivities200ResponseLinks;
}

