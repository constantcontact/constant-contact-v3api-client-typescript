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
import { GetAllEmailCampaigns200ResponseCampaignsInner } from './get-all-email-campaigns200-response-campaigns-inner';
// May contain unused imports in some cases
// @ts-ignore
import { GetAllEmailCampaigns200ResponseLinks } from './get-all-email-campaigns200-response-links';

/**
 * 
 * @export
 * @interface PagedEmailCampaignResponse
 */
export interface PagedEmailCampaignResponse {
    /**
     * 
     * @type {GetAllEmailCampaigns200ResponseLinks}
     * @memberof PagedEmailCampaignResponse
     */
    '_links'?: GetAllEmailCampaigns200ResponseLinks;
    /**
     * 
     * @type {Array<GetAllEmailCampaigns200ResponseCampaignsInner>}
     * @memberof PagedEmailCampaignResponse
     */
    'campaigns'?: Array<GetAllEmailCampaigns200ResponseCampaignsInner>;
}

