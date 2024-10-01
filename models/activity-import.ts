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
import { CreateCSVImportActivity201ResponseLinks } from './create-csvimport-activity201-response-links';
// May contain unused imports in some cases
// @ts-ignore
import { CreateCSVImportActivity201ResponseStatus } from './create-csvimport-activity201-response-status';

/**
 * Activity status for contacts_json_import and contacts_file_import activities
 * @export
 * @interface ActivityImport
 */
export interface ActivityImport {
    /**
     * Unique ID for the activity.
     * @type {string}
     * @memberof ActivityImport
     */
    'activity_id'?: string;
    /**
     * The state of the request:  <p><ul>    <li>initialized - request has been received</li>   <li>processing - request is being processed</li>   <li>completed - job completed</li>   <li>cancelled - request was cancelled</li>   <li>failed - job failed to complete</li>   <li>timed_out - the request timed out before completing\"</li> </ul> </p>
     * @type {string}
     * @memberof ActivityImport
     */
    'state'?: string;
    /**
     * Timestamp showing when we began processing the activity request, in ISO-8601 format.
     * @type {string}
     * @memberof ActivityImport
     */
    'started_at'?: string;
    /**
     * Timestamp showing when we completed processing the activity, in ISO-8601 format.
     * @type {string}
     * @memberof ActivityImport
     */
    'completed_at'?: string;
    /**
     * Timestamp showing when we created the activity, in ISO-8601 format.
     * @type {string}
     * @memberof ActivityImport
     */
    'created_at'?: string;
    /**
     * Timestamp showing when we last updated the activity, in ISO-8601 format.
     * @type {string}
     * @memberof ActivityImport
     */
    'updated_at'?: string;
    /**
     * Name of the file used for an file_import activity.
     * @type {string}
     * @memberof ActivityImport
     */
    'source_file_name'?: string;
    /**
     * Shows the percent done for an activity that we are still processing.
     * @type {number}
     * @memberof ActivityImport
     */
    'percent_done'?: number;
    /**
     * Array of messages describing the errors that occurred.
     * @type {Array<string>}
     * @memberof ActivityImport
     */
    'activity_errors'?: Array<string>;
    /**
     * 
     * @type {CreateCSVImportActivity201ResponseStatus}
     * @memberof ActivityImport
     */
    'status'?: CreateCSVImportActivity201ResponseStatus;
    /**
     * 
     * @type {CreateCSVImportActivity201ResponseLinks}
     * @memberof ActivityImport
     */
    '_links'?: CreateCSVImportActivity201ResponseLinks;
}

