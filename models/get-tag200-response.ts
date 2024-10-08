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
 * @interface GetTag200Response
 */
export interface GetTag200Response {
    /**
     * The ID that uniquely identifies a tag (UUID format)
     * @type {string}
     * @memberof GetTag200Response
     */
    'tag_id'?: string;
    /**
     * The unique tag name.
     * @type {string}
     * @memberof GetTag200Response
     */
    'name'?: string;
    /**
     * The total number of contacts who are assigned this tag.
     * @type {number}
     * @memberof GetTag200Response
     */
    'contacts_count'?: number;
    /**
     * The system generated date and time when the tag was created (ISO-8601 format).
     * @type {string}
     * @memberof GetTag200Response
     */
    'created_at'?: string;
    /**
     * The system generated date and time when the tag was last updated (ISO-8601 format).
     * @type {string}
     * @memberof GetTag200Response
     */
    'updated_at'?: string;
    /**
     * The source used to tag contacts.
     * @type {string}
     * @memberof GetTag200Response
     */
    'tag_source'?: string;
}

