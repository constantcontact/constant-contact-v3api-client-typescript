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
import { GetAllTags200ResponseLinks } from './get-all-tags200-response-links';
// May contain unused imports in some cases
// @ts-ignore
import { GetTag200Response } from './get-tag200-response';

/**
 * 
 * @export
 * @interface Tags
 */
export interface Tags {
    /**
     * Lists all tags and provides tag details.
     * @type {Array<GetTag200Response>}
     * @memberof Tags
     */
    'tags'?: Array<GetTag200Response>;
    /**
     * 
     * @type {GetAllTags200ResponseLinks}
     * @memberof Tags
     */
    '_links'?: GetAllTags200ResponseLinks;
}

