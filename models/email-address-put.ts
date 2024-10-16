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
 * The contact\'s email address and related properties.
 * @export
 * @interface EmailAddressPut
 */
export interface EmailAddressPut {
    /**
     * The email address of the contact. The email address must be unique for each contact.
     * @type {string}
     * @memberof EmailAddressPut
     */
    'address': string;
    /**
     * Identifies the type of permission that the Constant Contact account has to send email to the contact. Types of permission: explicit, implicit, not_set, pending_confirmation, temp_hold, unsubscribed.
     * @type {string}
     * @memberof EmailAddressPut
     */
    'permission_to_send'?: string;
    /**
     * Date and time that the email_address was created, in ISO-8601 format. System generated.
     * @type {string}
     * @memberof EmailAddressPut
     */
    'created_at'?: string;
    /**
     * Date and time that the email_address was last updated, in ISO-8601 format. System generated.
     * @type {string}
     * @memberof EmailAddressPut
     */
    'updated_at'?: string;
    /**
     * Date and time that the email_address was opted-in to receive email from the account, in ISO-8601 format. System generated.
     * @type {string}
     * @memberof EmailAddressPut
     */
    'opt_in_date'?: string;
    /**
     * Describes the source of the unsubscribed/opt-out action: either Account or Contact. If the Contact opted-out, then the account cannot send any campaigns to this contact until the contact opts back in. If the Account, then the account can add the contact back to any lists and send to them. Displayed only if contact has been unsubscribed/opt-out.
     * @type {string}
     * @memberof EmailAddressPut
     */
    'opt_out_source'?: string;
    /**
     * Date and time that the contact unsubscribed/opted-out of receiving email from the account, in ISO-8601 format. Displayed only if contact has been unsubscribed/opt-out. System generated.
     * @type {string}
     * @memberof EmailAddressPut
     */
    'opt_out_date'?: string;
    /**
     * The reason, as provided by the contact, that they unsubscribed/opted-out of receiving email campaigns.
     * @type {string}
     * @memberof EmailAddressPut
     */
    'opt_out_reason'?: string;
    /**
     * Indicates if the contact confirmed their email address after they subscribed to receive emails. Possible values: pending, confirmed, off.
     * @type {string}
     * @memberof EmailAddressPut
     */
    'confirm_status'?: string;
}

