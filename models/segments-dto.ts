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
import { GetAllSegments200ResponseLinks } from './get-all-segments200-response-links';
// May contain unused imports in some cases
// @ts-ignore
import { GetAllSegments200ResponseSegmentsInner } from './get-all-segments200-response-segments-inner';

/**
 * 
 * @export
 * @interface SegmentsDTO
 */
export interface SegmentsDTO {
    /**
     * Lists all segments for the account.
     * @type {Array<GetAllSegments200ResponseSegmentsInner>}
     * @memberof SegmentsDTO
     */
    'segments': Array<GetAllSegments200ResponseSegmentsInner>;
    /**
     * 
     * @type {GetAllSegments200ResponseLinks}
     * @memberof SegmentsDTO
     */
    '_links'?: GetAllSegments200ResponseLinks;
}

