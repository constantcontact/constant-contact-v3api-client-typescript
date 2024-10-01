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
 * You can export contact objects to a CSV file. By default, all contacts in the user\'s account are exported if none of the following properties are included: <br/><li> By contact_id - you can specify up to 500 specific contacts. <li>list_id - you can specify up to 50 lists. You can use the status parameter with list_id<li>status - you can export contacts by status. Status values include unsubscribed, active (billable), and removed. This property can be used with list_ids.
 * @export
 * @interface ContactsExport
 */
export interface ContactsExport {
    /**
     * Exports up to 500 specific contacts. This property is mutually exclusive with <code>list_ids</code>.
     * @type {Array<string>}
     * @memberof ContactsExport
     */
    'contact_ids'?: Array<string>;
    /**
     * Exports all of the contacts inside of up to 50 contact lists. This property is mutually exclusive with <code>contact_ids</code>.
     * @type {Array<string>}
     * @memberof ContactsExport
     */
    'list_ids'?: Array<string>;
    /**
     * Specify the <code>segment_id</code> from which you want to export all contacts that meet the specified <code>segment_criteria</code>. This property is mutually exclusive with <code>contact_ids</code> and <code>list_ids</code>. You can only specify one <code>segment_id</code>.
     * @type {number}
     * @memberof ContactsExport
     */
    'segment_id'?: number;
    /**
     * Use this array to export specific contact fields. You must export <code>email_address</code> to successfully export <code>email_optin_source</code>, <code>email_optin_date</code>, <code>email_optout_source</code>, <code>email_optout_date</code>, or <code>email_optout_reason</code>.
     * @type {Array<string>}
     * @memberof ContactsExport
     */
    'fields'?: Array<string>;
    /**
     * Allows you to export only contacts that have a specific status value. Possible values are <code>active</code> (billable), <code>unsubscribed</code>, or <code>removed</code>. Applicable with either `contact_ids` or `list_ids` as the source.
     * @type {string}
     * @memberof ContactsExport
     */
    'status'?: string;
}

