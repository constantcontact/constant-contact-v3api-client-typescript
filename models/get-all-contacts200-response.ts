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
import { GetAllActivities200ResponseLinks } from './get-all-activities200-response-links';
// May contain unused imports in some cases
// @ts-ignore
import { GetContactById200Response } from './get-contact-by-id200-response';

/**
 * Use this endpoint to retrieve (GET) a collection of existing contacts, or to create (POST) a new contact.
 * @export
 * @interface GetAllContacts200Response
 */
export interface GetAllContacts200Response {
    /**
     * 
     * @type {Array<GetContactById200Response>}
     * @memberof GetAllContacts200Response
     */
    'contacts'?: Array<GetContactById200Response>;
    /**
     * Total number of contacts in the response.
     * @type {number}
     * @memberof GetAllContacts200Response
     */
    'contacts_count'?: number;
    /**
     * 
     * @type {GetAllActivities200ResponseLinks}
     * @memberof GetAllContacts200Response
     */
    '_links'?: GetAllActivities200ResponseLinks;
    /**
     * If you use the <code>segment_id</code> query parameter to filter results based on a segment, this property indicates that the V3 API accepted your request and is still processing it.
     * @type {string}
     * @memberof GetAllContacts200Response
     */
    'status'?: string;
}

