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



/**
 * 
 * @export
 * @interface GetContactById200ResponseStreetAddressesInner
 */
export interface GetContactById200ResponseStreetAddressesInner {
    /**
     * Unique ID for the street address
     * @type {string}
     * @memberof GetContactById200ResponseStreetAddressesInner
     */
    'street_address_id'?: string;
    /**
     * Describes the type of address; valid values are home, work, or other.
     * @type {string}
     * @memberof GetContactById200ResponseStreetAddressesInner
     */
    'kind': string;
    /**
     * Number and street of the address.
     * @type {string}
     * @memberof GetContactById200ResponseStreetAddressesInner
     */
    'street'?: string;
    /**
     * The name of the city where the contact lives.
     * @type {string}
     * @memberof GetContactById200ResponseStreetAddressesInner
     */
    'city'?: string;
    /**
     * The name of the state or province where the contact lives.
     * @type {string}
     * @memberof GetContactById200ResponseStreetAddressesInner
     */
    'state'?: string;
    /**
     * The zip or postal code of the contact.
     * @type {string}
     * @memberof GetContactById200ResponseStreetAddressesInner
     */
    'postal_code'?: string;
    /**
     * The name of the country where the contact lives.
     * @type {string}
     * @memberof GetContactById200ResponseStreetAddressesInner
     */
    'country'?: string;
    /**
     * Date and time that the street address was created, in ISO-8601 format. System generated.
     * @type {string}
     * @memberof GetContactById200ResponseStreetAddressesInner
     */
    'created_at'?: string;
    /**
     * Date and time that the street address was last updated, in ISO-8601 format. System generated.
     * @type {string}
     * @memberof GetContactById200ResponseStreetAddressesInner
     */
    'updated_at'?: string;
}

