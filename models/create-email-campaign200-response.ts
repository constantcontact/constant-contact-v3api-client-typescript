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
import { CreateEmailCampaign200ResponseCampaignActivitiesInner } from './create-email-campaign200-response-campaign-activities-inner';

/**
 * 
 * @export
 * @interface CreateEmailCampaign200Response
 */
export interface CreateEmailCampaign200Response {
    /**
     * Lists the role and unique activity ID of each campaign activity that is associated with an Email Campaign.
     * @type {Array<CreateEmailCampaign200ResponseCampaignActivitiesInner>}
     * @memberof CreateEmailCampaign200Response
     */
    'campaign_activities'?: Array<CreateEmailCampaign200ResponseCampaignActivitiesInner>;
    /**
     * The unique ID used to identify the email campaign (UUID format).
     * @type {string}
     * @memberof CreateEmailCampaign200Response
     */
    'campaign_id'?: string;
    /**
     * The system generated date and time that this email campaign was created. This string is readonly and is in ISO-8601 format.
     * @type {string}
     * @memberof CreateEmailCampaign200Response
     */
    'created_at'?: string;
    /**
     * The current status of the email campaign. Valid values are: <ul>   <li>Draft — An email campaign that you have created but have not sent to contacts.</li>   <li>Scheduled — An email campaign that you have scheduled for Constant Contact to send to contacts.</li>   <li>Executing — An email campaign that Constant Contact is currently sending to contacts. Email campaign activities are only in this status briefly.</li>   <li>Done — An email campaign that you successfully sent to contacts.</li>   <li>Error — An email campaign activity that encountered an error.</li>   <li>Removed — An email campaign that a user deleted. Users can view and restore deleted emails through the UI.</li> </ul> 
     * @type {string}
     * @memberof CreateEmailCampaign200Response
     */
    'current_status'?: string;
    /**
     * The descriptive name the user provides to identify this campaign. Campaign names must be unique for each account ID.
     * @type {string}
     * @memberof CreateEmailCampaign200Response
     */
    'name'?: string;
    /**
     * Identifies the type of campaign that you select when creating the campaign. Newsletter and Custom Code email campaigns are the primary types.
     * @type {string}
     * @memberof CreateEmailCampaign200Response
     */
    'type'?: string;
    /**
     * The code used to identify the email campaign `type`. <ul>   <li> 1  (Default) </li>   <li> 2  (Bulk Email) </li>   <li> 10 (Newsletter) </li>   <li> 11 (Announcement) </li>   <li> 12 (Product/Service News) </li>   <li> 14 (Business Letter) </li>   <li> 15 (Card) </li>   <li> 16 (Press release)</li>   <li> 17 (Flyer) </li>   <li> 18 (Feedback Request) </li>   <li> 19 (Ratings and Reviews) </li>   <li> 20 (Event Announcement) </li>   <li> 21 (Simple Coupon) </li>   <li> 22 (Sale Promotion) </li>   <li> 23 (Product Promotion) </li>   <li> 24 (Membership Drive) </li>   <li> 25 (Fundraiser) </li>   <li> 26 (Custom Code Email)</li>   <li> 57 (A/B Test)</li> </ul> 
     * @type {number}
     * @memberof CreateEmailCampaign200Response
     */
    'type_code'?: number;
    /**
     * The system generated date and time showing when the campaign was last updated. This string is read only and is in ISO-8601 format.
     * @type {string}
     * @memberof CreateEmailCampaign200Response
     */
    'updated_at'?: string;
}

