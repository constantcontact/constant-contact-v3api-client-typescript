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
import { GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInnerUniqueCounts } from './get-email-campaign-report200-response-bulk-email-campaign-summaries-inner-unique-counts';

/**
 * 
 * @export
 * @interface GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInner
 */
export interface GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInner {
    /**
     * The ID that uniquely identifies an email campaign.
     * @type {string}
     * @memberof GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInner
     */
    'campaign_id': string;
    /**
     * Identifies the email campaign type.
     * @type {string}
     * @memberof GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInner
     */
    'campaign_type': string;
    /**
     * The date and time that the email campaign was last sent.
     * @type {string}
     * @memberof GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInner
     */
    'last_sent_date': string;
    /**
     * 
     * @type {GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInnerUniqueCounts}
     * @memberof GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInner
     */
    'unique_counts': GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInnerUniqueCounts;
}

