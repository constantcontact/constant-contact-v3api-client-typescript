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
 * @interface BouncesTrackingActivity
 */
export interface BouncesTrackingActivity {
    /**
     * The ID that uniquely identifies a contact.
     * @type {string}
     * @memberof BouncesTrackingActivity
     */
    'contact_id': string;
    /**
     * The ID that uniquely identifies the email campaign activity.
     * @type {string}
     * @memberof BouncesTrackingActivity
     */
    'campaign_activity_id': string;
    /**
     * The type of email tracking activity, <code>em_bounces</code>, that this report includes.
     * @type {string}
     * @memberof BouncesTrackingActivity
     */
    'tracking_activity_type': string;
    /**
     * The contact\'s email address that was used when the email campaign activity bounced.
     * @type {string}
     * @memberof BouncesTrackingActivity
     */
    'email_address': string;
    /**
     * The first name of the contact.
     * @type {string}
     * @memberof BouncesTrackingActivity
     */
    'first_name'?: string;
    /**
     * The last name of the contact.
     * @type {string}
     * @memberof BouncesTrackingActivity
     */
    'last_name'?: string;
    /**
     * The one-character string used to specify the reason for the email bounce. Valid codes include:  <ul><li><code>B</code> - Non-existent address; the contact\'s Internet Service Provider (ISP) indicates that the email address doesn\'t exist.</li>  <li><code>D</code> - Undeliverable; after repeated delivery attempts, no response was received from the contact\'s ISP.</li>  <li><code>F</code> - Full; the contact\'s mailbox is full.</li>  <li><code>S</code> - Suspended; the contact\'s address was reported as non-existent by the ISP and is suspended from delivery.</li>  <li><code>V</code> - Vacation/autoreply; the contact set an autoreply, but the message was delivered.</li>  <li><code>X</code> - Other; the contact\'s ISP specified another reason that the message cannot be delivered.</li>  <li><code>Z</code> - Blocked; the recipient\'s ISP chose not to deliver the email. For example, the ISP may have flagged the email as spam.</li></ul>
     * @type {string}
     * @memberof BouncesTrackingActivity
     */
    'bounce_code': string;
    /**
     * The contact\'s most current email address. If <code>email_address</code> was updated after the email bounce activity occurred, <code>current_ email_address</code> displays the updated address. If updates were not made to <code>email_address</code>, the <code>email_address</code> and <code>current_email_address</code> are the same.
     * @type {string}
     * @memberof BouncesTrackingActivity
     */
    'current_email_address'?: string;
    /**
     * The date and time that the email bounce tracking activity occurred.
     * @type {string}
     * @memberof BouncesTrackingActivity
     */
    'created_time': string;
    /**
     * If applicable, the date when the contact was deleted.
     * @type {string}
     * @memberof BouncesTrackingActivity
     */
    'deleted_at'?: string;
}

