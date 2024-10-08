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
import { PartnerAccountLinks } from './partner-account-links';
// May contain unused imports in some cases
// @ts-ignore
import { PartnerAccountSiteOwnerListInner } from './partner-account-site-owner-list-inner';

/**
 * 
 * @export
 * @interface PartnerAccount
 */
export interface PartnerAccount {
    /**
     * Lists all Constant Contact client accounts that are managed under a partner account.
     * @type {Array<PartnerAccountSiteOwnerListInner>}
     * @memberof PartnerAccount
     */
    'site_owner_list': Array<PartnerAccountSiteOwnerListInner>;
    /**
     * 
     * @type {PartnerAccountLinks}
     * @memberof PartnerAccount
     */
    '_links'?: PartnerAccountLinks;
}

