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
import { GetClicksReport200ResponseLinks } from './get-clicks-report200-response-links';
// May contain unused imports in some cases
// @ts-ignore
import { GetClicksReport200ResponseTrackingActivitiesInner } from './get-clicks-report200-response-tracking-activities-inner';

/**
 * 
 * @export
 * @interface GetClicksReport200Response
 */
export interface GetClicksReport200Response {
    /**
     * The list of click tracking activities
     * @type {Array<GetClicksReport200ResponseTrackingActivitiesInner>}
     * @memberof GetClicksReport200Response
     */
    'tracking_activities': Array<GetClicksReport200ResponseTrackingActivitiesInner>;
    /**
     * 
     * @type {GetClicksReport200ResponseLinks}
     * @memberof GetClicksReport200Response
     */
    '_links'?: GetClicksReport200ResponseLinks;
}

