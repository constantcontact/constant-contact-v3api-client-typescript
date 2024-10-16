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
 * @interface ForwardsTrackingActivity
 */
export interface ForwardsTrackingActivity {
    /**
     * The ID that uniquely identifies a contact.
     * @type {string}
     * @memberof ForwardsTrackingActivity
     */
    'contact_id': string;
    /**
     * The ID that uniquely identifies the email campaign activity.
     * @type {string}
     * @memberof ForwardsTrackingActivity
     */
    'campaign_activity_id': string;
    /**
     * The type of report tracking activity that is associated with the specified <code>campaign_activity_id</code>.
     * @type {string}
     * @memberof ForwardsTrackingActivity
     */
    'tracking_activity_type': string;
    /**
     * The contact\'s email address.
     * @type {string}
     * @memberof ForwardsTrackingActivity
     */
    'email_address': string;
    /**
     * The first name of the contact.
     * @type {string}
     * @memberof ForwardsTrackingActivity
     */
    'first_name'?: string;
    /**
     * The last name of the contact.
     * @type {string}
     * @memberof ForwardsTrackingActivity
     */
    'last_name'?: string;
    /**
     * The time that the contact forwarded the email campaign activity.
     * @type {string}
     * @memberof ForwardsTrackingActivity
     */
    'created_time': string;
    /**
     * If applicable, displays the date that the contact was deleted.
     * @type {string}
     * @memberof ForwardsTrackingActivity
     */
    'deleted_at'?: string;
}

