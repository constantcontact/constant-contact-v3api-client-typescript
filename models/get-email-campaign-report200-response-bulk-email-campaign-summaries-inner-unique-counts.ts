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
 * The total number of times each unique contact interacted with a tracked email campaign activity.
 * @export
 * @interface GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInnerUniqueCounts
 */
export interface GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInnerUniqueCounts {
    /**
     * The total number of unique sends.
     * @type {number}
     * @memberof GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInnerUniqueCounts
     */
    'sends': number;
    /**
     * The total number of unique opens.
     * @type {number}
     * @memberof GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInnerUniqueCounts
     */
    'opens': number;
    /**
     * The total number of unique clicks.
     * @type {number}
     * @memberof GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInnerUniqueCounts
     */
    'clicks': number;
    /**
     * The total number of unique forwards.
     * @type {number}
     * @memberof GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInnerUniqueCounts
     */
    'forwards': number;
    /**
     * The total number of unique optouts (unsubscribes).
     * @type {number}
     * @memberof GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInnerUniqueCounts
     */
    'optouts': number;
    /**
     * The total number of unique abuse count (spam).
     * @type {number}
     * @memberof GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInnerUniqueCounts
     */
    'abuse': number;
    /**
     * The total number of unique bounce count.
     * @type {number}
     * @memberof GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInnerUniqueCounts
     */
    'bounces': number;
    /**
     * The total number of unique non-opens
     * @type {number}
     * @memberof GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInnerUniqueCounts
     */
    'not_opened': number;
}

