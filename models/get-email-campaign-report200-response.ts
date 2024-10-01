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
import { GetBouncesReport200ResponseLinks } from './get-bounces-report200-response-links';
// May contain unused imports in some cases
// @ts-ignore
import { GetEmailCampaignReport200ResponseAggregatePercents } from './get-email-campaign-report200-response-aggregate-percents';
// May contain unused imports in some cases
// @ts-ignore
import { GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInner } from './get-email-campaign-report200-response-bulk-email-campaign-summaries-inner';

/**
 * 
 * @export
 * @interface GetEmailCampaignReport200Response
 */
export interface GetEmailCampaignReport200Response {
    /**
     * Lists and provides details about each bulk email campaign activity including total unique counts for tracked activities.
     * @type {Array<GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInner>}
     * @memberof GetEmailCampaignReport200Response
     */
    'bulk_email_campaign_summaries': Array<GetEmailCampaignReport200ResponseBulkEmailCampaignSummariesInner>;
    /**
     * 
     * @type {GetEmailCampaignReport200ResponseAggregatePercents}
     * @memberof GetEmailCampaignReport200Response
     */
    'aggregate_percents'?: GetEmailCampaignReport200ResponseAggregatePercents;
    /**
     * 
     * @type {GetBouncesReport200ResponseLinks}
     * @memberof GetEmailCampaignReport200Response
     */
    '_links': GetBouncesReport200ResponseLinks;
}

