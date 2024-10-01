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



/**
 * Lists aggregate percents for  `click`, `open`, `did_not_open`, `bounce`, and  `unsubscribe` activities for all campaigns included on a page of results.
 * @export
 * @interface GetEmailCampaignReport200ResponseAggregatePercents
 */
export interface GetEmailCampaignReport200ResponseAggregatePercents {
    /**
     * Aggregated click rate for campaigns on the current page.
     * @type {number}
     * @memberof GetEmailCampaignReport200ResponseAggregatePercents
     */
    'click'?: number;
    /**
     * Aggregated open rate for campaigns on the current page.
     * @type {number}
     * @memberof GetEmailCampaignReport200ResponseAggregatePercents
     */
    'open'?: number;
    /**
     * Aggregated did-not-open rate for campaigns on the current page.
     * @type {number}
     * @memberof GetEmailCampaignReport200ResponseAggregatePercents
     */
    'did_not_open'?: number;
    /**
     * Aggregated bounce rate for campaigns on the current page.
     * @type {number}
     * @memberof GetEmailCampaignReport200ResponseAggregatePercents
     */
    'bounce'?: number;
    /**
     * Aggregated unsubscribe (optout) rate for campaigns on the current page.
     * @type {number}
     * @memberof GetEmailCampaignReport200ResponseAggregatePercents
     */
    'unsubscribe'?: number;
}

