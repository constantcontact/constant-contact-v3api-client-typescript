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
import { CreateTagRemoveActivityRequestExclude } from './create-tag-remove-activity-request-exclude';
// May contain unused imports in some cases
// @ts-ignore
import { CreateTagRemoveActivityRequestSource } from './create-tag-remove-activity-request-source';

/**
 * 
 * @export
 * @interface CreateTagRemoveActivityRequest
 */
export interface CreateTagRemoveActivityRequest {
    /**
     * 
     * @type {CreateTagRemoveActivityRequestSource}
     * @memberof CreateTagRemoveActivityRequest
     */
    'source': CreateTagRemoveActivityRequestSource;
    /**
     * 
     * @type {CreateTagRemoveActivityRequestExclude}
     * @memberof CreateTagRemoveActivityRequest
     */
    'exclude'?: CreateTagRemoveActivityRequestExclude;
    /**
     * An array of tags (<code>tag_id</code>) to add to all contacts meeting the specified source criteria.
     * @type {Array<string>}
     * @memberof CreateTagRemoveActivityRequest
     */
    'tag_ids': Array<string>;
}

