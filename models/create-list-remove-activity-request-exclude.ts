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
 * @interface CreateListRemoveActivityRequestExclude
 */
export interface CreateListRemoveActivityRequestExclude {
    /**
     * Excludes specified contacts (<code>contact_id</code>) from being deleted from the target list and only applicable if using either the <code>all_active_contacts</code> (billable) or <code>list_ids</code> as the source.
     * @type {Array<string>}
     * @memberof CreateListRemoveActivityRequestExclude
     */
    'contact_ids'?: Array<string>;
}

