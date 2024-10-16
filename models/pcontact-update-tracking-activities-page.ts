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
import { GetUniqueContactClicks200ResponseLinks } from './get-unique-contact-clicks200-response-links';
// May contain unused imports in some cases
// @ts-ignore
import { GetUniqueContactUpdates200ResponseTrackingActivitiesInner } from './get-unique-contact-updates200-response-tracking-activities-inner';

/**
 * 
 * @export
 * @interface PContactUpdateTrackingActivitiesPage
 */
export interface PContactUpdateTrackingActivitiesPage {
    /**
     * The list of landing page contact update tracking activities.
     * @type {Array<GetUniqueContactUpdates200ResponseTrackingActivitiesInner>}
     * @memberof PContactUpdateTrackingActivitiesPage
     */
    'tracking_activities': Array<GetUniqueContactUpdates200ResponseTrackingActivitiesInner>;
    /**
     * 
     * @type {GetUniqueContactClicks200ResponseLinks}
     * @memberof PContactUpdateTrackingActivitiesPage
     */
    '_links': GetUniqueContactClicks200ResponseLinks;
}

