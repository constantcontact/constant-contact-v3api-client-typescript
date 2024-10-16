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
 * @interface EmailCampaignActivityPreview
 */
export interface EmailCampaignActivityPreview {
    /**
     * The unique ID for an email campaign activity.
     * @type {string}
     * @memberof EmailCampaignActivityPreview
     */
    'campaign_activity_id'?: string;
    /**
     * The \"from email\" email header for the email campaign activity.
     * @type {string}
     * @memberof EmailCampaignActivityPreview
     */
    'from_email'?: string;
    /**
     * The \"from name\" email header for the email campaign activity.
     * @type {string}
     * @memberof EmailCampaignActivityPreview
     */
    'from_name'?: string;
    /**
     * The email preheader for the email campaign activity. Only <code>format_type</code> 3, 4, and 5 email campaign activities use the preheader property.
     * @type {string}
     * @memberof EmailCampaignActivityPreview
     */
    'preheader'?: string;
    /**
     * An HTML preview of the email campaign activity.
     * @type {string}
     * @memberof EmailCampaignActivityPreview
     */
    'preview_html_content'?: string;
    /**
     * A plain text preview of the email campaign activity.
     * @type {string}
     * @memberof EmailCampaignActivityPreview
     */
    'preview_text_content'?: string;
    /**
     * The email \"Reply To Email\" field for the email campaign activity.
     * @type {string}
     * @memberof EmailCampaignActivityPreview
     */
    'reply_to_email'?: string;
    /**
     * The email \"Subject\" field for the email campaign activity.
     * @type {string}
     * @memberof EmailCampaignActivityPreview
     */
    'subject'?: string;
}

