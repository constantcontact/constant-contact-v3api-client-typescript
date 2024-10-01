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
 * @interface GetEmailSendsReport200ResponseTrackingActivitiesInner
 */
export interface GetEmailSendsReport200ResponseTrackingActivitiesInner {
    /**
     * The ID that uniquely identifies a contact.
     * @type {string}
     * @memberof GetEmailSendsReport200ResponseTrackingActivitiesInner
     */
    'contact_id': string;
    /**
     * The ID that uniquely identifies an email campaign activity.
     * @type {string}
     * @memberof GetEmailSendsReport200ResponseTrackingActivitiesInner
     */
    'campaign_activity_id': string;
    /**
     * The type of tracking activity that is associated with this <code>campaign_activity_id</code> and used for reporting purposes.
     * @type {string}
     * @memberof GetEmailSendsReport200ResponseTrackingActivitiesInner
     */
    'tracking_activity_type': string;
    /**
     * The email address used to send the email campaign activity to a contact.
     * @type {string}
     * @memberof GetEmailSendsReport200ResponseTrackingActivitiesInner
     */
    'email_address': string;
    /**
     * The first name of the contact.
     * @type {string}
     * @memberof GetEmailSendsReport200ResponseTrackingActivitiesInner
     */
    'first_name'?: string;
    /**
     * The last name of the contact.
     * @type {string}
     * @memberof GetEmailSendsReport200ResponseTrackingActivitiesInner
     */
    'last_name'?: string;
    /**
     * The date and time that you sent the email campaign to the contact.
     * @type {string}
     * @memberof GetEmailSendsReport200ResponseTrackingActivitiesInner
     */
    'created_time': string;
    /**
     * If applicable, displays the date that the contact was deleted.
     * @type {string}
     * @memberof GetEmailSendsReport200ResponseTrackingActivitiesInner
     */
    'deleted_at'?: string;
}

