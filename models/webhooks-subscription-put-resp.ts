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
 * @interface WebhooksSubscriptionPutResp
 */
export interface WebhooksSubscriptionPutResp {
    /**
     * Identifies the topic using an integer to indicate the type of topic.
     * @type {number}
     * @memberof WebhooksSubscriptionPutResp
     */
    'topic_id'?: number;
    /**
     * Your webhook callback URI. Constant Contact automatically sends POST requests to this URI to notify you about the topic.
     * @type {string}
     * @memberof WebhooksSubscriptionPutResp
     */
    'hook_uri'?: string;
}

