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
import { GetAllActivities200ResponseActivitiesInnerLinksResults } from './get-all-activities200-response-activities-inner-links-results';
// May contain unused imports in some cases
// @ts-ignore
import { GetAllActivities200ResponseActivitiesInnerLinksSelf } from './get-all-activities200-response-activities-inner-links-self';

/**
 * 
 * @export
 * @interface ActivityStatusExportLink
 */
export interface ActivityStatusExportLink {
    /**
     * 
     * @type {GetAllActivities200ResponseActivitiesInnerLinksSelf}
     * @memberof ActivityStatusExportLink
     */
    'self'?: GetAllActivities200ResponseActivitiesInnerLinksSelf;
    /**
     * 
     * @type {GetAllActivities200ResponseActivitiesInnerLinksResults}
     * @memberof ActivityStatusExportLink
     */
    'results'?: GetAllActivities200ResponseActivitiesInnerLinksResults;
}

