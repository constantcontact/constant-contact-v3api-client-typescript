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
import { GetEmailStatsReport200ResponseErrorsInner } from './get-email-stats-report200-response-errors-inner';
// May contain unused imports in some cases
// @ts-ignore
import { GetEmailStatsReport200ResponseResultsInner } from './get-email-stats-report200-response-results-inner';

/**
 * 
 * @export
 * @interface GetEmailStatsReport200Response
 */
export interface GetEmailStatsReport200Response {
    /**
     * An array of errors indicating any partial failures in the query.
     * @type {Array<GetEmailStatsReport200ResponseErrorsInner>}
     * @memberof GetEmailStatsReport200Response
     */
    'errors'?: Array<GetEmailStatsReport200ResponseErrorsInner>;
    /**
     * An array of results listing statistics for each requested <code>campaign_id</code>.
     * @type {Array<GetEmailStatsReport200ResponseResultsInner>}
     * @memberof GetEmailStatsReport200Response
     */
    'results'?: Array<GetEmailStatsReport200ResponseResultsInner>;
}

