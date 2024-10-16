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


// May contain unused imports in some cases
// @ts-ignore
import { CreateExportActivity201ResponseStatus } from './create-export-activity201-response-status';
// May contain unused imports in some cases
// @ts-ignore
import { GetAllActivities200ResponseActivitiesInnerLinks } from './get-all-activities200-response-activities-inner-links';

/**
 * Activity status for contact_exports activity
 * @export
 * @interface CreateExportActivity201Response
 */
export interface CreateExportActivity201Response {
    /**
     * Unique ID for the activity.
     * @type {string}
     * @memberof CreateExportActivity201Response
     */
    'activity_id'?: string;
    /**
     * <p> The state of the request: <ul>  <li>initialized - request has been received</li>  <li>processing - request is being processed</li>  <li>completed - job completed</li>  <li>cancelled - request was cancelled</li>  <li>failed - job failed to complete</li>  <li>timed_out - the request timed out before completing\"</li>  </ul> </p>
     * @type {string}
     * @memberof CreateExportActivity201Response
     */
    'state'?: string;
    /**
     * Timestamp showing when we began processing the activity request, in ISO-8601 format.
     * @type {string}
     * @memberof CreateExportActivity201Response
     */
    'started_at'?: string;
    /**
     * Timestamp showing when we completed processing the activity, in ISO-8601 format.
     * @type {string}
     * @memberof CreateExportActivity201Response
     */
    'completed_at'?: string;
    /**
     * Timestamp showing when we created the activity, in ISO-8601 format.
     * @type {string}
     * @memberof CreateExportActivity201Response
     */
    'created_at'?: string;
    /**
     * Timestamp showing when we last updated the activity, in ISO-8601 format.
     * @type {string}
     * @memberof CreateExportActivity201Response
     */
    'updated_at'?: string;
    /**
     * Shows the percent done for an activity that we are still processing.
     * @type {number}
     * @memberof CreateExportActivity201Response
     */
    'percent_done'?: number;
    /**
     * Array of messages describing the errors that occurred.
     * @type {Array<string>}
     * @memberof CreateExportActivity201Response
     */
    'activity_errors'?: Array<string>;
    /**
     * 
     * @type {CreateExportActivity201ResponseStatus}
     * @memberof CreateExportActivity201Response
     */
    'status'?: CreateExportActivity201ResponseStatus;
    /**
     * 
     * @type {GetAllActivities200ResponseActivitiesInnerLinks}
     * @memberof CreateExportActivity201Response
     */
    '_links'?: GetAllActivities200ResponseActivitiesInnerLinks;
}

