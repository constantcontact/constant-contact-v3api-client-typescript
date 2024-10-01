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
 * @interface CreateResendEmailCampaign201Response
 */
export interface CreateResendEmailCampaign201Response {
    /**
     * The subject line for the resend email.
     * @type {string}
     * @memberof CreateResendEmailCampaign201Response
     */
    'resend_subject'?: string;
    /**
     * The number of days to wait before Constant Contact resends the email. Valid values include <code>1</code> to <code>10</code> days. This property is mutually exclusive with <code>delay_minutes</code>. This value is only returned in the response results if the resend activity was created with <code>delay_days</code> or the <code>delay_minutes</code> equal to an exact day value.
     * @type {number}
     * @memberof CreateResendEmailCampaign201Response
     */
    'delay_days'?: number;
    /**
     * The number of minutes to wait before Constant Contact resends the email. There are 1,440 minutes in a day. Valid values includes a minimum of <code>720</code> (12 hours) and a maximum of <code>14,400</code> minutes (10 days). This property is mutually exclusive with <code>delay_days</code>.
     * @type {number}
     * @memberof CreateResendEmailCampaign201Response
     */
    'delay_minutes'?: number;
    /**
     * The system generated ISO-8601 format date and time that Constant Contact resent the email to non-openers.
     * @type {string}
     * @memberof CreateResendEmailCampaign201Response
     */
    'resend_date'?: string;
    /**
     * For scheduled or sent resend to non-opener emails, this property is a unique identifier for the resend. For draft email campaign resend activities, the value of this property is <code>DRAFT</code>.
     * @type {string}
     * @memberof CreateResendEmailCampaign201Response
     */
    'resend_request_id'?: string;
}

