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
import { GetUniqueContactClicks200ResponseTrackingActivitiesInnerSmsChannel } from './get-unique-contact-clicks200-response-tracking-activities-inner-sms-channel';

/**
 * 
 * @export
 * @interface GetUniqueContactOpens200ResponseTrackingActivitiesInner
 */
export interface GetUniqueContactOpens200ResponseTrackingActivitiesInner {
    /**
     * The unique ID that identifies the contact.
     * @type {string}
     * @memberof GetUniqueContactOpens200ResponseTrackingActivitiesInner
     */
    'contact_id': string;
    /**
     * The unique ID that identifies of the campaign activity to use.
     * @type {string}
     * @memberof GetUniqueContactOpens200ResponseTrackingActivitiesInner
     */
    'campaign_activity_id': string;
    /**
     * The tracked activity event type.
     * @type {string}
     * @memberof GetUniqueContactOpens200ResponseTrackingActivitiesInner
     */
    'tracking_activity_type': string;
    /**
     * The email address for the contact and tracking activity.
     * @type {string}
     * @memberof GetUniqueContactOpens200ResponseTrackingActivitiesInner
     */
    'email_address': string;
    /**
     * The first name of the contact.
     * @type {string}
     * @memberof GetUniqueContactOpens200ResponseTrackingActivitiesInner
     */
    'first_name'?: string;
    /**
     * The last name of the contact.
     * @type {string}
     * @memberof GetUniqueContactOpens200ResponseTrackingActivitiesInner
     */
    'last_name'?: string;
    /**
     * The type of device that was used to open the link.
     * @type {string}
     * @memberof GetUniqueContactOpens200ResponseTrackingActivitiesInner
     */
    'device_type'?: string;
    /**
     * The time the tracking activity occurred.
     * @type {string}
     * @memberof GetUniqueContactOpens200ResponseTrackingActivitiesInner
     */
    'created_time': string;
    /**
     * The time the Contact was deleted
     * @type {string}
     * @memberof GetUniqueContactOpens200ResponseTrackingActivitiesInner
     */
    'deleted_at'?: string;
    /**
     * 
     * @type {GetUniqueContactClicks200ResponseTrackingActivitiesInnerSmsChannel}
     * @memberof GetUniqueContactOpens200ResponseTrackingActivitiesInner
     */
    'sms_channel'?: GetUniqueContactClicks200ResponseTrackingActivitiesInnerSmsChannel;
}

