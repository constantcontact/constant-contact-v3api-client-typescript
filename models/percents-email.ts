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
 * @interface PercentsEmail
 */
export interface PercentsEmail {
    /**
     * Percentage of emails sent to unique recipients that bounced.
     * @type {number}
     * @memberof PercentsEmail
     */
    'bounce'?: number;
    /**
     * Percentage of recipients who opened the email who also clicked one or more links in it.
     * @type {number}
     * @memberof PercentsEmail
     */
    'click'?: number;
    /**
     * Percentage of clicks that came from a standard desktop or laptop computer.
     * @type {number}
     * @memberof PercentsEmail
     */
    'desktop_click'?: number;
    /**
     * Percentage of opens that came from a standard desktop or laptop computer.
     * @type {number}
     * @memberof PercentsEmail
     */
    'desktop_open'?: number;
    /**
     * Percentage of recipients that received the email (did not bounce) but did not open it.
     * @type {number}
     * @memberof PercentsEmail
     */
    'did_not_open'?: number;
    /**
     * Percentage of clicks that came from a mobile phone, tablet computer, or similar small mobile device (e.g. iPhone or iPad).
     * @type {number}
     * @memberof PercentsEmail
     */
    'mobile_click'?: number;
    /**
     * Percentage of opens that came from a mobile phone, tablet computer, or similar small mobile device (e.g. iPhone or iPad).
     * @type {number}
     * @memberof PercentsEmail
     */
    'mobile_open'?: number;
    /**
     * Percentage of recipients that received the email (did not bounce) and opened it.
     * @type {number}
     * @memberof PercentsEmail
     */
    'open'?: number;
    /**
     * Percentage of recipients that received the email (did not bounce) and chose to unsubscribe.
     * @type {number}
     * @memberof PercentsEmail
     */
    'unsubscribe'?: number;
}

