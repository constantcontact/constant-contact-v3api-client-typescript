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
import { CreateListAddActivityRequestExclude } from './create-list-add-activity-request-exclude';
// May contain unused imports in some cases
// @ts-ignore
import { CreateListAddActivityRequestSource } from './create-list-add-activity-request-source';

/**
 * 
 * @export
 * @interface ListActivityAddContacts
 */
export interface ListActivityAddContacts {
    /**
     * 
     * @type {CreateListAddActivityRequestSource}
     * @memberof ListActivityAddContacts
     */
    'source': CreateListAddActivityRequestSource;
    /**
     * 
     * @type {CreateListAddActivityRequestExclude}
     * @memberof ListActivityAddContacts
     */
    'exclude'?: CreateListAddActivityRequestExclude;
    /**
     * Specifies which lists (up to 50) you are adding your source contacts to.
     * @type {Array<string>}
     * @memberof ListActivityAddContacts
     */
    'list_ids': Array<string>;
}

