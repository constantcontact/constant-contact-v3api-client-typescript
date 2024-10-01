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
import { CreateContactRequestEmailAddress } from './create-contact-request-email-address';
// May contain unused imports in some cases
// @ts-ignore
import { GetContactById200ResponseCustomFieldsInner } from './get-contact-by-id200-response-custom-fields-inner';
// May contain unused imports in some cases
// @ts-ignore
import { GetContactById200ResponseNotesInner } from './get-contact-by-id200-response-notes-inner';
// May contain unused imports in some cases
// @ts-ignore
import { UpdateContactRequestPhoneNumbersInner } from './update-contact-request-phone-numbers-inner';
// May contain unused imports in some cases
// @ts-ignore
import { UpdateContactRequestStreetAddressesInner } from './update-contact-request-street-addresses-inner';

/**
 * 
 * @export
 * @interface CreateContactRequest
 */
export interface CreateContactRequest {
    /**
     * 
     * @type {CreateContactRequestEmailAddress}
     * @memberof CreateContactRequest
     */
    'email_address'?: CreateContactRequestEmailAddress;
    /**
     * The first name of the contact.
     * @type {string}
     * @memberof CreateContactRequest
     */
    'first_name'?: string;
    /**
     * The last name of the contact.
     * @type {string}
     * @memberof CreateContactRequest
     */
    'last_name'?: string;
    /**
     * The job title of the contact.
     * @type {string}
     * @memberof CreateContactRequest
     */
    'job_title'?: string;
    /**
     * The name of the company where the contact works.
     * @type {string}
     * @memberof CreateContactRequest
     */
    'company_name'?: string;
    /**
     * Describes who added the contact; valid values are <code>Contact</code> or <code>Account</code>. Your integration must accurately identify <code>create_source</code> for compliance reasons; value is set on POST, and is read-only going forward.
     * @type {string}
     * @memberof CreateContactRequest
     */
    'create_source'?: string;
    /**
     * The month value for the contact\'s birthday. Valid values are from 1 through 12. The <code>birthday_month</code> property is required if you use <code>birthday_day</code>.
     * @type {number}
     * @memberof CreateContactRequest
     */
    'birthday_month'?: number;
    /**
     * The day value for the contact\'s birthday. Valid values are from 1 through 31. The <code>birthday_day</code> property is required if you use <code>birthday_month</code>.
     * @type {number}
     * @memberof CreateContactRequest
     */
    'birthday_day'?: number;
    /**
     * The anniversary date for the contact. For example, this value could be the date when the contact first became a customer of an organization in Constant Contact. Valid date formats are MM/DD/YYYY, M/D/YYYY, YYYY/MM/DD, YYYY/M/D, YYYY-MM-DD, YYYY-M-D,M-D-YYYY, or M-DD-YYYY.
     * @type {string}
     * @memberof CreateContactRequest
     */
    'anniversary'?: string;
    /**
     * Array of up to 25 <code>custom_field</code> key value pairs.
     * @type {Array<GetContactById200ResponseCustomFieldsInner>}
     * @memberof CreateContactRequest
     */
    'custom_fields'?: Array<GetContactById200ResponseCustomFieldsInner>;
    /**
     * Array of up to 3 phone numbers subresources.
     * @type {Array<UpdateContactRequestPhoneNumbersInner>}
     * @memberof CreateContactRequest
     */
    'phone_numbers'?: Array<UpdateContactRequestPhoneNumbersInner>;
    /**
     * Array of up to 3 street address subresources.
     * @type {Array<UpdateContactRequestStreetAddressesInner>}
     * @memberof CreateContactRequest
     */
    'street_addresses'?: Array<UpdateContactRequestStreetAddressesInner>;
    /**
     * Array of <code>list_id</code>s to which the contact is being subscribed, up to a maximum of 50.
     * @type {Array<string>}
     * @memberof CreateContactRequest
     */
    'list_memberships'?: Array<string>;
    /**
     * Array of tags (<code>tag_id</code>) assigned to the contact, up to a maximum of 50.
     * @type {Array<string>}
     * @memberof CreateContactRequest
     */
    'taggings'?: Array<string>;
    /**
     * An array of notes about the contact.
     * @type {Array<GetContactById200ResponseNotesInner>}
     * @memberof CreateContactRequest
     */
    'notes'?: Array<GetContactById200ResponseNotesInner>;
}

