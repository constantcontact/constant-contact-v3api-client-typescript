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
 * @interface CreateDeleteActivity201ResponseStatus
 */
export interface CreateDeleteActivity201ResponseStatus {
    /**
     * The number of lists if request specifies contacts to delete by list_ids.
     * @type {number}
     * @memberof CreateDeleteActivity201ResponseStatus
     */
    'list_count'?: number;
    /**
     * The total number of contacts to delete.
     * @type {number}
     * @memberof CreateDeleteActivity201ResponseStatus
     */
    'items_total_count'?: number;
    /**
     * The number of contacts deleted.
     * @type {number}
     * @memberof CreateDeleteActivity201ResponseStatus
     */
    'items_completed_count'?: number;
}

