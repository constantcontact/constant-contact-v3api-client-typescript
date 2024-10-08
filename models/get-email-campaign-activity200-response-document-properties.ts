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
 * An object that contains optional properties for legacy format type emails (<code>format_type</code> 1 and 2). If you attempt to add a property that does apply to the email <code>format_type</code>, the API will ignore the property.
 * @export
 * @interface GetEmailCampaignActivity200ResponseDocumentProperties
 */
export interface GetEmailCampaignActivity200ResponseDocumentProperties {
    /**
     * Contains style sheet elements for XHTML letter format emails. This property applies only to <code>format_type</code> 1.
     * @type {string}
     * @memberof GetEmailCampaignActivity200ResponseDocumentProperties
     */
    'style_content'?: string;
    /**
     * Email message format. Valid values are <code>HTML</code> and <code>XHTML</code>. By default, the value is <code>HTML</code>. For more information, see the <a href=\"http://www.constantcontact.com/display_media.jsp?id=87\" target=\"_blank\">Advanced Editor User\'s Guide</a>. This property applies only to <code>format_type</code> 1. You cannot change this property after you create an email. 
     * @type {string}
     * @memberof GetEmailCampaignActivity200ResponseDocumentProperties
     */
    'letter_format'?: string;
    /**
     * The greeting used in the email message. This property applies only to <code>format_type</code> 1.
     * @type {string}
     * @memberof GetEmailCampaignActivity200ResponseDocumentProperties
     */
    'greeting_salutation'?: string;
    /**
     * The type of name the campaign uses to greet the contact. Valid values are <code>F</code> (First Name), <code>L</code> (Last Name), <code>B</code> (First and Last Name), or <code>N</code> (No greeting). By default, the value is <code>N</code>. This property applies only to <code>format_type</code> 1.
     * @type {string}
     * @memberof GetEmailCampaignActivity200ResponseDocumentProperties
     */
    'greeting_name_type'?: string;
    /**
     * A fallback text string the campaign uses to greet the contact when the <code>greeting_name_type</code> is not available or set to <code>N</code>. This property applies only to <code>format_type</code> 1.
     * @type {string}
     * @memberof GetEmailCampaignActivity200ResponseDocumentProperties
     */
    'greeting_secondary'?: string;
    /**
     * If <code>true</code>, the email footer includes a link for subscribing to the list. If <code>false</code>, the message footer does not include a link for subscribing to the list. By default, the value is <code>false</code>. This property applies only to <code>format_type</code> 1. 
     * @type {string}
     * @memberof GetEmailCampaignActivity200ResponseDocumentProperties
     */
    'subscribe_link_enabled'?: string;
    /**
     * The text displayed as the name for the subscribe link in the email footer. This property applies only to <code>format_type</code> 1.
     * @type {string}
     * @memberof GetEmailCampaignActivity200ResponseDocumentProperties
     */
    'subscribe_link_name'?: string;
    /**
     * Contains the text content that Constant Contact displays to contacts when their email client cannot display HTML email. If you do not specify text content, Constant Contact displays \"Greetings!\" as the text content. This property applies only to <code>format_type</code> 1. 
     * @type {string}
     * @memberof GetEmailCampaignActivity200ResponseDocumentProperties
     */
    'text_content'?: string;
    /**
     * If <code>true</code>, Constant Contact displays your <code>permission_reminder</code> message to contacts at top of the email. If <code>false</code>, Constant Contact does not display the message. By default, the value is <code>false</code>. This property applies to <code>format_type</code> 1 and 2. 
     * @type {string}
     * @memberof GetEmailCampaignActivity200ResponseDocumentProperties
     */
    'permission_reminder_enabled'?: string;
    /**
     * The message text Constant Contact displays at the top of the email message to remind users that they are subscribed to an email list. This property applies to <code>format_type</code> 1 and 2.
     * @type {string}
     * @memberof GetEmailCampaignActivity200ResponseDocumentProperties
     */
    'permission_reminder'?: string;
    /**
     * If <code>true</code>, Constant Contact displays the view as web page email message. If <code>false</code> Constant Contact does not display the message. By default, the value is <code>false</code>. This property applies to <code>format_type</code> 1 and 2. 
     * @type {string}
     * @memberof GetEmailCampaignActivity200ResponseDocumentProperties
     */
    'view_as_webpage_enabled'?: string;
    /**
     * The text Constant Contact displays before the view as web page link at the top of the email. This property applies to <code>format_type</code> 1 and 2.
     * @type {string}
     * @memberof GetEmailCampaignActivity200ResponseDocumentProperties
     */
    'view_as_webpage_text'?: string;
    /**
     * The name of the link that users can click to view the email as a web page. This property applies to <code>format_type</code> 1 and 2.
     * @type {string}
     * @memberof GetEmailCampaignActivity200ResponseDocumentProperties
     */
    'view_as_webpage_link_name'?: string;
    /**
     * If <code>true</code>, when the user forwards an email message the footer includes a link for subscribing to the list. If <code>false</code>, when a user forwards an email message the footer does not include a link for subscribing to the list. By default, the value is <code>false</code>. This property applies to <code>format_type</code> 1 and 2. 
     * @type {string}
     * @memberof GetEmailCampaignActivity200ResponseDocumentProperties
     */
    'forward_email_link_enabled'?: string;
    /**
     * The text displayed as the name for the forward email link in the footer when a user forwards an email. This property applies to <code>format_type</code> 1 and 2.
     * @type {string}
     * @memberof GetEmailCampaignActivity200ResponseDocumentProperties
     */
    'forward_email_link_name'?: string;
}

