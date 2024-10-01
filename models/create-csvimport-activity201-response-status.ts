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
 * @interface CreateCSVImportActivity201ResponseStatus
 */
export interface CreateCSVImportActivity201ResponseStatus {
    /**
     * The total number of rows, including the header row, in the import file.
     * @type {number}
     * @memberof CreateCSVImportActivity201ResponseStatus
     */
    'items_total_count'?: number;
    /**
     * The total number of contacts in the import file.
     * @type {number}
     * @memberof CreateCSVImportActivity201ResponseStatus
     */
    'person_count'?: number;
    /**
     * The number of non-correctable errors encountered during the file import.
     * @type {number}
     * @memberof CreateCSVImportActivity201ResponseStatus
     */
    'error_count'?: number;
    /**
     * The number of correctable errors. Correctable errors are: invalid email address format, birthday or anniversary format error, or does not have minimal contact information (no name or email address). Correctable errors are available in the product UI to correct.
     * @type {number}
     * @memberof CreateCSVImportActivity201ResponseStatus
     */
    'correctable_count'?: number;
    /**
     * The number of previously unsubscribed contacts in the import - they cannot be added to a list.
     * @type {number}
     * @memberof CreateCSVImportActivity201ResponseStatus
     */
    'cannot_add_to_list_count'?: number;
}

