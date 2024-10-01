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



/**
 * 
 * @export
 * @interface JsonImportContact
 */
export interface JsonImportContact {
    /**
     * The email address of the contact. This method identifies each unique contact using their email address.
     * @type {string}
     * @memberof JsonImportContact
     */
    'email': string;
    /**
     * The first name of the contact.
     * @type {string}
     * @memberof JsonImportContact
     */
    'first_name'?: string;
    /**
     * The last name of the contact.
     * @type {string}
     * @memberof JsonImportContact
     */
    'last_name'?: string;
    /**
     * The job title of the contact.
     * @type {string}
     * @memberof JsonImportContact
     */
    'job_title'?: string;
    /**
     * The name of the company where the contact works.
     * @type {string}
     * @memberof JsonImportContact
     */
    'company_name'?: string;
    /**
     * The month value for the contact\'s birthday. Valid values are from 1 through 12. The <code>birthday_month</code> property is required if you use <code>birthday_day</code>.
     * @type {number}
     * @memberof JsonImportContact
     */
    'birthday_month'?: number;
    /**
     * The day value for the contact\'s birthday. Valid values are from 1 through 31. The <code>birthday_day</code> property is required if you use <code>birthday_month</code>.
     * @type {number}
     * @memberof JsonImportContact
     */
    'birthday_day'?: number;
    /**
     * The anniversary date for the contact. For example, this value could be the date when the contact first became a customer of an organization in Constant Contact. Valid date formats are MM/DD/YYYY, M/D/YYYY, YYYY/MM/DD, YYYY/M/D, YYYY-MM-DD, YYYY-M-D,M-D-YYYY, or M-DD-YYYY.
     * @type {string}
     * @memberof JsonImportContact
     */
    'anniversary'?: string;
    /**
     * The primary phone number for the contact. Use this field to add the default kind of phone number to the imported contact\'s phone number. Default <code>kind</code> is <code>other</code>.
     * @type {string}
     * @memberof JsonImportContact
     */
    'phone'?: string;
    /**
     * The home phone number for the contact.
     * @type {string}
     * @memberof JsonImportContact
     */
    'home_phone'?: string;
    /**
     * The work phone number for the contact.
     * @type {string}
     * @memberof JsonImportContact
     */
    'work_phone'?: string;
    /**
     * The mobile phone number for the contact.
     * @type {string}
     * @memberof JsonImportContact
     */
    'mobile_phone'?: string;
    /**
     * A phone number for the contact.
     * @type {string}
     * @memberof JsonImportContact
     */
    'other_phone'?: string;
    /**
     * Line one of the primary street address for the contact. Use this field to add the default kind of street to the imported contact\'s street address. The default <code>kind</code> is <code>home</code>. which maps to the <code>street_addresses</code> array` in the response.
     * @type {string}
     * @memberof JsonImportContact
     */
    'street'?: string;
    /**
     * Line two of the primary street address for the contact. This value is automatically appended to the <code>street</code> value. Use this field to add the default kind for line two of the street address to the imported contact\'s address. The default <code>kind</code> is <code>other</code>.
     * @type {string}
     * @memberof JsonImportContact
     */
    'street2'?: string;
    /**
     * The name of the primary city for the contact. Use this field to add the default kind of city to the imported contact\'s home address. The default <code>kind</code> is <code>home</code>.
     * @type {string}
     * @memberof JsonImportContact
     */
    'city'?: string;
    /**
     * The name of the primary state or province for the contact. Use this field to add the default kind of state to the imported contact\'s home address. The default <code>kind</code> is <code>home</code>.
     * @type {string}
     * @memberof JsonImportContact
     */
    'state'?: string;
    /**
     * The zip or postal code associated with the contact\'s primary address. Use this field to add the default kind of zip to the imported contact\'s street address. The default <code>kind</code> is <code>home</code>.
     * @type {string}
     * @memberof JsonImportContact
     */
    'zip'?: string;
    /**
     * The name of the primary country where the contact is located. Use this field to add the default kind of country to the imported contact\'s street address. The default <code>kind</code> is <code>home</code>.
     * @type {string}
     * @memberof JsonImportContact
     */
    'country'?: string;
    /**
     * Line one of the home street address for the contact.
     * @type {string}
     * @memberof JsonImportContact
     */
    'home_street'?: string;
    /**
     * Line two of the home street address for the contact. This value is automatically appended to the <code>home_street</code> value.
     * @type {string}
     * @memberof JsonImportContact
     */
    'home_street2'?: string;
    /**
     * The name of the city where the contact lives.
     * @type {string}
     * @memberof JsonImportContact
     */
    'home_city'?: string;
    /**
     * The name of the home state or province where the contact lives.
     * @type {string}
     * @memberof JsonImportContact
     */
    'home_state'?: string;
    /**
     * The zip or postal code associated with the contact\'s home address.
     * @type {string}
     * @memberof JsonImportContact
     */
    'home_zip'?: string;
    /**
     * The name of the country where the contact lives.
     * @type {string}
     * @memberof JsonImportContact
     */
    'home country'?: string;
    /**
     * Line one of the work street address for the contact.
     * @type {string}
     * @memberof JsonImportContact
     */
    'work_street'?: string;
    /**
     * Line two of the work street address for the contact. This value is automatically appended to the <code>work_street</code> value.
     * @type {string}
     * @memberof JsonImportContact
     */
    'work_street2'?: string;
    /**
     * The name of the city where the contact works.
     * @type {string}
     * @memberof JsonImportContact
     */
    'work_city'?: string;
    /**
     * The name of the state or province where the contact works.
     * @type {string}
     * @memberof JsonImportContact
     */
    'work_state'?: string;
    /**
     * The zip or postal code associated with the contact\'s work address.
     * @type {string}
     * @memberof JsonImportContact
     */
    'work_zip'?: string;
    /**
     * The name of the country where the contact works.
     * @type {string}
     * @memberof JsonImportContact
     */
    'work_country'?: string;
    /**
     * Line one of the other street address for the contact.
     * @type {string}
     * @memberof JsonImportContact
     */
    'other_street'?: string;
    /**
     * Line two of the other street address for the contact. This value is automatically appended to the <code>other_street</code> value.
     * @type {string}
     * @memberof JsonImportContact
     */
    'other_street2'?: string;
    /**
     * The name of another city where the contact is located.
     * @type {string}
     * @memberof JsonImportContact
     */
    'other_city'?: string;
    /**
     * The name of another state or province where the contact is located.
     * @type {string}
     * @memberof JsonImportContact
     */
    'other_state'?: string;
    /**
     * The zip or postal code associated with the contact\'s other address.
     * @type {string}
     * @memberof JsonImportContact
     */
    'other_zip'?: string;
    /**
     * The name of another country where the contact is located.
     * @type {string}
     * @memberof JsonImportContact
     */
    'other_country'?: string;
    /**
     * The name of this property is dynamic based on the custom fields you want to import. Use a key-value pair where the key is an existing custom field name prefixed with <code>cf:</code>, and the value is a custom field string value. For example, if you have a custom field named <code>first_name</code> you can use <code>\"cf:first_name\":\"Joe\"</code>. Each contact can contain up to 25 different custom fields.
     * @type {string}
     * @memberof JsonImportContact
     */
    'cf:custom_field_name'?: string;
    /**
     * The US phone number to associate with the contact\'s SMS-enabled phone. The country code must be valid. Valid formats are <code>1231231234</code> or <code>123-123-1234</code>.
     * @type {string}
     * @memberof JsonImportContact
     */
    'sms_number'?: string;
    /**
     * Required if the SMS permission is set to `explict`. The date that the contact consented to receiving SMS messages. Valid date formats are MM/DD/YYYY, M/D/YYYY, YYYY/MM/DD, YYYY/M/D, YYYY-MM-DD, YYYY-M-D,M-D-YYYY, or M-DD-YYYY .
     * @type {string}
     * @memberof JsonImportContact
     */
    'sms_consent_date'?: string;
}

