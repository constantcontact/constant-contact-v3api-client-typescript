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
import { GetAllEmailCampaigns200ResponseCampaignsInner } from './get-all-email-campaigns200-response-campaigns-inner';
// May contain unused imports in some cases
// @ts-ignore
import { GetAllEmailCampaigns200ResponseLinks } from './get-all-email-campaigns200-response-links';

/**
 * 
 * @export
 * @interface GetAllEmailCampaigns200Response
 */
export interface GetAllEmailCampaigns200Response {
    /**
     * 
     * @type {GetAllEmailCampaigns200ResponseLinks}
     * @memberof GetAllEmailCampaigns200Response
     */
    '_links'?: GetAllEmailCampaigns200ResponseLinks;
    /**
     * 
     * @type {Array<GetAllEmailCampaigns200ResponseCampaignsInner>}
     * @memberof GetAllEmailCampaigns200Response
     */
    'campaigns'?: Array<GetAllEmailCampaigns200ResponseCampaignsInner>;
}

