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
 * @interface StatsEmailActivity
 */
export interface StatsEmailActivity {
    /**
     * Number of unique email bounces.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_bounces'?: number;
    /**
     * Number of unique recipients who clicked any link in the email.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_clicks'?: number;
    /**
     * Total number of non-unique email clicks.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_clicks_all'?: number;
    /**
     * Number of non-unique email clicks on a standard desktop or laptop computer.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_clicks_all_computer'?: number;
    /**
     * Number of non-unique email clicks on a mobile phone or similar small mobile device (e.g. iPhone).
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_clicks_all_mobile'?: number;
    /**
     * Number of non-unique email clicks on a small tablet type computer (e.g. iPad).
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_clicks_all_tablet'?: number;
    /**
     * Number of non-unique email clicks on an unknown device (e.g. Game Console or Wearable).
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_clicks_all_other'?: number;
    /**
     * Number of non-unique email clicks for which the device type was not captured. This will account for any clicks prior to when device type was collected and stored.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_clicks_all_none'?: number;
    /**
     * Number of unique recipients who forwarded the email using the forward to a friend feature (not available for all types of emails).
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_forwards'?: number;
    /**
     * Number of unique recipients who did not open the email. This is calculated as follows: <code>em_not_opened</code> is equal to <code>em_sends - em_opens - em_bounces</code>. This value is reported as zero if the calculation results in a negative value.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_not_opened'?: number;
    /**
     * Number of unique recipients who opened the email.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_opens'?: number;
    /**
     * Total number of non-unique email opens.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_opens_all'?: number;
    /**
     * Number of non-unique email opens on a standard desktop or laptop computer.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_opens_all_computer'?: number;
    /**
     * Number of non-unique email opens on a mobile phone or similar small mobile device (e.g. iPhone).
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_opens_all_mobile'?: number;
    /**
     * Number of non-unique email opens on a small tablet type computer (e.g. iPad).
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_opens_all_tablet'?: number;
    /**
     * Number of non-unique email opens on an unknown device (e.g. Game Console or Wearable).
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_opens_all_other'?: number;
    /**
     * Number of non-unique email opens for which the device type was not captured. This will account for any opens prior to when device type was collected and stored.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_opens_all_none'?: number;
    /**
     * Number of unique recipients who unsubscribed due to this email.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_optouts'?: number;
    /**
     * Number of unique email sends.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_sends'?: number;
    /**
     * Number of abuse (spam) complaints received.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_abuse'?: number;
    /**
     * Unique number bounced because as blocked by the receiving system.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_bounces_blocked'?: number;
    /**
     * Unique number that bounced back with a mailbox full message.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_bounces_mailbox_full'?: number;
    /**
     * Unique number that bounced as a non-existent address.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_bounces_nonexistent_address'?: number;
    /**
     * Unique number that bounced without an identifiable cause.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_bounces_other'?: number;
    /**
     * Unique number that bounced as suspended. Email address bounces as suspended when multiple non-existent bounces have been received for the same address.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_bounces_suspended'?: number;
    /**
     * Unique number that bounced as undeliverable.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_bounces_undeliverable'?: number;
    /**
     * Unique number that bounced back with a vacation or out of office autoreply.
     * @type {number}
     * @memberof StatsEmailActivity
     */
    'em_bounces_vacation'?: number;
}

