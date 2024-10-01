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
 * 
 * @export
 * @interface CreateEmailCampaign200ResponseCampaignActivitiesInner
 */
export interface CreateEmailCampaign200ResponseCampaignActivitiesInner {
    /**
     * The ID (UUID) that uniquely identifies a campaign activity.
     * @type {string}
     * @memberof CreateEmailCampaign200ResponseCampaignActivitiesInner
     */
    'campaign_activity_id'?: string;
    /**
     * The purpose of the individual campaign activity in the larger email campaign effort. Valid values are: <ul>   <li>primary_email — The main email marketing campaign that you send to contacts. The <code>primary_email</code> contains the complete email content.</li>   <li>permalink — A permanent link to a web accessible version of the <code>primary_email</code> content without any personalized email information. For example, permalinks do not contain any of the contact details that you add to the <code>primary_email</code> email content. </li>   <li>resend — An email campaign that you resend to contacts that did not open the email campaign.</li> </ul> Constant Contact creates a <code>primary_email</code> and a <code>permalink</code> role campaign activity when you create an email campaign. 
     * @type {string}
     * @memberof CreateEmailCampaign200ResponseCampaignActivitiesInner
     */
    'role'?: string;
}

