/* tslint:disable */
/* eslint-disable */
/**
 * Constant Contact API v3
 * Swagger build version 3.0.2475
 *
 * The version of the OpenAPI document: 1.0.85
 * Contact: webservices@constantcontact.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { GetAllActivities200ResponseActivitiesInner } from './get-all-activities200-response-activities-inner';
// May contain unused imports in some cases
// @ts-ignore
import { GetAllActivities200ResponseLinks } from './get-all-activities200-response-links';

/**
 * 
 * @export
 * @interface GetAllActivities200Response
 */
export interface GetAllActivities200Response {
    /**
     * A list of bulk activity jobs and status submitted by the account over the past 10 days.
     * @type {Array<GetAllActivities200ResponseActivitiesInner>}
     * @memberof GetAllActivities200Response
     */
    'activities'?: Array<GetAllActivities200ResponseActivitiesInner>;
    /**
     * 
     * @type {GetAllActivities200ResponseLinks}
     * @memberof GetAllActivities200Response
     */
    '_links'?: GetAllActivities200ResponseLinks;
}

