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


// May contain unused imports in some cases
// @ts-ignore
import { GetContactById200ResponseSmsChannelSmsChannelConsentsInner } from './get-contact-by-id200-response-sms-channel-sms-channel-consents-inner';

/**
 * Includes SMS channel and consent details.
 * @export
 * @interface GetContactById200ResponseSmsChannel
 */
export interface GetContactById200ResponseSmsChannel {
    /**
     * The unique ID that identifies an SMS channel.
     * @type {string}
     * @memberof GetContactById200ResponseSmsChannel
     */
    'sms_channel_id'?: string;
    /**
     * The phone number of the SMS-capable phone, which does not include the country code.
     * @type {string}
     * @memberof GetContactById200ResponseSmsChannel
     */
    'sms_address'?: string;
    /**
     * The dial code used for the SMS-capable phone. For example, the dial code for the United States is <code>1</code>.
     * @type {string}
     * @memberof GetContactById200ResponseSmsChannel
     */
    'dial_code'?: string;
    /**
     * The two character ISO country code used for the SMS-capable phone. For example, the country code for the United States is <code>US</code>.
     * @type {string}
     * @memberof GetContactById200ResponseSmsChannel
     */
    'country_code'?: string;
    /**
     * Identifies who last updated SMS details for the contact. Valid values are Contact or Account
     * @type {string}
     * @memberof GetContactById200ResponseSmsChannel
     */
    'update_source'?: string;
    /**
     * Identifies who added SMS details for the contact. The value is set when you create SMS details for the contact. Valid values are <code>Contact</code> or <code>Account</code>. 
     * @type {string}
     * @memberof GetContactById200ResponseSmsChannel
     */
    'create_source'?: string;
    /**
     * Identifies SMS channel consent details such as the current permission status for the SMS channel and opt-in date.
     * @type {Array<GetContactById200ResponseSmsChannelSmsChannelConsentsInner>}
     * @memberof GetContactById200ResponseSmsChannel
     */
    'sms_channel_consents'?: Array<GetContactById200ResponseSmsChannelSmsChannelConsentsInner>;
}

