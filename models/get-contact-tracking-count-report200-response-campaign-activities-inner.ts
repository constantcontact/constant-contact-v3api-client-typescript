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
 * 
 * @export
 * @interface GetContactTrackingCountReport200ResponseCampaignActivitiesInner
 */
export interface GetContactTrackingCountReport200ResponseCampaignActivitiesInner {
    /**
     * The unique id of the activity for an e-mail campaign.
     * @type {string}
     * @memberof GetContactTrackingCountReport200ResponseCampaignActivitiesInner
     */
    'campaign_activity_id': string;
    /**
     * The last date at which the email was sent to this contact.
     * @type {string}
     * @memberof GetContactTrackingCountReport200ResponseCampaignActivitiesInner
     */
    'start_on': string;
    /**
     * The number of times the email has bounced for this contact.
     * @type {number}
     * @memberof GetContactTrackingCountReport200ResponseCampaignActivitiesInner
     */
    'em_bounces': number;
    /**
     * The number of times this contact has clicked a link in this email.
     * @type {number}
     * @memberof GetContactTrackingCountReport200ResponseCampaignActivitiesInner
     */
    'em_clicks': number;
    /**
     * The number of times this contact has forwarded this email.
     * @type {number}
     * @memberof GetContactTrackingCountReport200ResponseCampaignActivitiesInner
     */
    'em_forwards': number;
    /**
     * The number of times this contact has opened this email.
     * @type {number}
     * @memberof GetContactTrackingCountReport200ResponseCampaignActivitiesInner
     */
    'em_opens': number;
    /**
     * The number of times the email was sent to this contact.
     * @type {number}
     * @memberof GetContactTrackingCountReport200ResponseCampaignActivitiesInner
     */
    'em_sends': number;
    /**
     * The number of times this contact has opted out.
     * @type {number}
     * @memberof GetContactTrackingCountReport200ResponseCampaignActivitiesInner
     */
    'em_unsubscribes': number;
}

