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
import { GetCampaignActivityLinkReport200ResponseLinkClickCountsInner } from './get-campaign-activity-link-report200-response-link-click-counts-inner';

/**
 * 
 * @export
 * @interface EmailLinks
 */
export interface EmailLinks {
    /**
     * The unique ID for an email campaign activity.
     * @type {string}
     * @memberof EmailLinks
     */
    'campaign_activity_id'?: string;
    /**
     * An array of objects that contain the contact click count and link metadata for each unique link URL in an email campaign activity. By default, this method combines results for duplicate link URLs.
     * @type {Array<GetCampaignActivityLinkReport200ResponseLinkClickCountsInner>}
     * @memberof EmailLinks
     */
    'link_click_counts'?: Array<GetCampaignActivityLinkReport200ResponseLinkClickCountsInner>;
}

