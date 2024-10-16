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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import { GetAllCustomFields200Response } from '../models';
// @ts-ignore
import { GetCustomField200Response } from '../models';
// @ts-ignore
import { UpdateCustomFieldRequest } from '../models';
/**
 * ContactsCustomFieldsApi - axios parameter creator
 * @export
 */
export const ContactsCustomFieldsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This POST request adds a new `custom_field` to the user\'s account. A user can configure up to 100 `custom_fields` in their account.
         * @summary POST (create) a custom_field
         * @param {UpdateCustomFieldRequest} updateCustomFieldRequest The JSON payload required to create a new &#x60;custom_field&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomFields: async (updateCustomFieldRequest: UpdateCustomFieldRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'updateCustomFieldRequest' is not null or undefined
            assertParamExists('createCustomFields', 'updateCustomFieldRequest', updateCustomFieldRequest)
            const localVarPath = `/contact_custom_fields`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2_access_code required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2_access_code", ["contact_data"], configuration)

            // authentication oauth2_implicit required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2_implicit", ["contact_data"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateCustomFieldRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This DELETE request deletes a custom_field from the user\'s account
         * @summary DELETE a custom_field
         * @param {string} customFieldId Unique ID of the custom_field on which to operate.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomField: async (customFieldId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'customFieldId' is not null or undefined
            assertParamExists('deleteCustomField', 'customFieldId', customFieldId)
            const localVarPath = `/contact_custom_fields/{custom_field_id}`
                .replace(`{${"custom_field_id"}}`, encodeURIComponent(String(customFieldId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2_access_code required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2_access_code", ["contact_data"], configuration)

            // authentication oauth2_implicit required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2_implicit", ["contact_data"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This GET request returns all `custom_fields` defined in the user\'s account. <div class=\"Msg\"><p class=\"note-text\">This method does not currently support filtering results using the custom field update date.</p></div>
         * @summary GET custom_fields Collection
         * @param {number} [limit] Specifies the number of results displayed per page of output, from 1 - 100, default &#x3D; 50.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCustomFields: async (limit?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/contact_custom_fields`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2_access_code required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2_access_code", ["contact_data"], configuration)

            // authentication oauth2_implicit required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2_implicit", ["contact_data"], configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This GET call retrieves a `custom_field` resource, specified by `custom_field_id`.
         * @summary GET a custom_field
         * @param {string} customFieldId Unique ID of the &#x60;custom_field&#x60; on which to operate.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomField: async (customFieldId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'customFieldId' is not null or undefined
            assertParamExists('getCustomField', 'customFieldId', customFieldId)
            const localVarPath = `/contact_custom_fields/{custom_field_id}`
                .replace(`{${"custom_field_id"}}`, encodeURIComponent(String(customFieldId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2_access_code required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2_access_code", ["contact_data"], configuration)

            // authentication oauth2_implicit required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2_implicit", ["contact_data"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * This PUT request updates an existing `custom_field` object.
         * @summary PUT (update) a custom_field
         * @param {string} customFieldId Unique ID of the &#x60;custom_field&#x60; on which to operate.
         * @param {UpdateCustomFieldRequest} updateCustomFieldRequest The JSON payload used to update an existing custom field. Any properties omitted in the PUT request are overwritten with a null value.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCustomField: async (customFieldId: string, updateCustomFieldRequest: UpdateCustomFieldRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'customFieldId' is not null or undefined
            assertParamExists('updateCustomField', 'customFieldId', customFieldId)
            // verify required parameter 'updateCustomFieldRequest' is not null or undefined
            assertParamExists('updateCustomField', 'updateCustomFieldRequest', updateCustomFieldRequest)
            const localVarPath = `/contact_custom_fields/{custom_field_id}`
                .replace(`{${"custom_field_id"}}`, encodeURIComponent(String(customFieldId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication oauth2_access_code required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2_access_code", ["contact_data"], configuration)

            // authentication oauth2_implicit required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2_implicit", ["contact_data"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updateCustomFieldRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ContactsCustomFieldsApi - functional programming interface
 * @export
 */
export const ContactsCustomFieldsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ContactsCustomFieldsApiAxiosParamCreator(configuration)
    return {
        /**
         * This POST request adds a new `custom_field` to the user\'s account. A user can configure up to 100 `custom_fields` in their account.
         * @summary POST (create) a custom_field
         * @param {UpdateCustomFieldRequest} updateCustomFieldRequest The JSON payload required to create a new &#x60;custom_field&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createCustomFields(updateCustomFieldRequest: UpdateCustomFieldRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCustomField200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createCustomFields(updateCustomFieldRequest, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContactsCustomFieldsApi.createCustomFields']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * This DELETE request deletes a custom_field from the user\'s account
         * @summary DELETE a custom_field
         * @param {string} customFieldId Unique ID of the custom_field on which to operate.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteCustomField(customFieldId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteCustomField(customFieldId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContactsCustomFieldsApi.deleteCustomField']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * This GET request returns all `custom_fields` defined in the user\'s account. <div class=\"Msg\"><p class=\"note-text\">This method does not currently support filtering results using the custom field update date.</p></div>
         * @summary GET custom_fields Collection
         * @param {number} [limit] Specifies the number of results displayed per page of output, from 1 - 100, default &#x3D; 50.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllCustomFields(limit?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAllCustomFields200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllCustomFields(limit, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContactsCustomFieldsApi.getAllCustomFields']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * This GET call retrieves a `custom_field` resource, specified by `custom_field_id`.
         * @summary GET a custom_field
         * @param {string} customFieldId Unique ID of the &#x60;custom_field&#x60; on which to operate.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCustomField(customFieldId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCustomField200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCustomField(customFieldId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContactsCustomFieldsApi.getCustomField']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * This PUT request updates an existing `custom_field` object.
         * @summary PUT (update) a custom_field
         * @param {string} customFieldId Unique ID of the &#x60;custom_field&#x60; on which to operate.
         * @param {UpdateCustomFieldRequest} updateCustomFieldRequest The JSON payload used to update an existing custom field. Any properties omitted in the PUT request are overwritten with a null value.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCustomField(customFieldId: string, updateCustomFieldRequest: UpdateCustomFieldRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetCustomField200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCustomField(customFieldId, updateCustomFieldRequest, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContactsCustomFieldsApi.updateCustomField']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * ContactsCustomFieldsApi - factory interface
 * @export
 */
export const ContactsCustomFieldsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ContactsCustomFieldsApiFp(configuration)
    return {
        /**
         * This POST request adds a new `custom_field` to the user\'s account. A user can configure up to 100 `custom_fields` in their account.
         * @summary POST (create) a custom_field
         * @param {UpdateCustomFieldRequest} updateCustomFieldRequest The JSON payload required to create a new &#x60;custom_field&#x60;
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createCustomFields(updateCustomFieldRequest: UpdateCustomFieldRequest, options?: any): AxiosPromise<GetCustomField200Response> {
            return localVarFp.createCustomFields(updateCustomFieldRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * This DELETE request deletes a custom_field from the user\'s account
         * @summary DELETE a custom_field
         * @param {string} customFieldId Unique ID of the custom_field on which to operate.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteCustomField(customFieldId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteCustomField(customFieldId, options).then((request) => request(axios, basePath));
        },
        /**
         * This GET request returns all `custom_fields` defined in the user\'s account. <div class=\"Msg\"><p class=\"note-text\">This method does not currently support filtering results using the custom field update date.</p></div>
         * @summary GET custom_fields Collection
         * @param {number} [limit] Specifies the number of results displayed per page of output, from 1 - 100, default &#x3D; 50.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllCustomFields(limit?: number, options?: any): AxiosPromise<GetAllCustomFields200Response> {
            return localVarFp.getAllCustomFields(limit, options).then((request) => request(axios, basePath));
        },
        /**
         * This GET call retrieves a `custom_field` resource, specified by `custom_field_id`.
         * @summary GET a custom_field
         * @param {string} customFieldId Unique ID of the &#x60;custom_field&#x60; on which to operate.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCustomField(customFieldId: string, options?: any): AxiosPromise<GetCustomField200Response> {
            return localVarFp.getCustomField(customFieldId, options).then((request) => request(axios, basePath));
        },
        /**
         * This PUT request updates an existing `custom_field` object.
         * @summary PUT (update) a custom_field
         * @param {string} customFieldId Unique ID of the &#x60;custom_field&#x60; on which to operate.
         * @param {UpdateCustomFieldRequest} updateCustomFieldRequest The JSON payload used to update an existing custom field. Any properties omitted in the PUT request are overwritten with a null value.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCustomField(customFieldId: string, updateCustomFieldRequest: UpdateCustomFieldRequest, options?: any): AxiosPromise<GetCustomField200Response> {
            return localVarFp.updateCustomField(customFieldId, updateCustomFieldRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ContactsCustomFieldsApi - object-oriented interface
 * @export
 * @class ContactsCustomFieldsApi
 * @extends {BaseAPI}
 */
export class ContactsCustomFieldsApi extends BaseAPI {
    /**
     * This POST request adds a new `custom_field` to the user\'s account. A user can configure up to 100 `custom_fields` in their account.
     * @summary POST (create) a custom_field
     * @param {UpdateCustomFieldRequest} updateCustomFieldRequest The JSON payload required to create a new &#x60;custom_field&#x60;
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsCustomFieldsApi
     */
    public createCustomFields(updateCustomFieldRequest: UpdateCustomFieldRequest, options?: RawAxiosRequestConfig) {
        return ContactsCustomFieldsApiFp(this.configuration).createCustomFields(updateCustomFieldRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This DELETE request deletes a custom_field from the user\'s account
     * @summary DELETE a custom_field
     * @param {string} customFieldId Unique ID of the custom_field on which to operate.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsCustomFieldsApi
     */
    public deleteCustomField(customFieldId: string, options?: RawAxiosRequestConfig) {
        return ContactsCustomFieldsApiFp(this.configuration).deleteCustomField(customFieldId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This GET request returns all `custom_fields` defined in the user\'s account. <div class=\"Msg\"><p class=\"note-text\">This method does not currently support filtering results using the custom field update date.</p></div>
     * @summary GET custom_fields Collection
     * @param {number} [limit] Specifies the number of results displayed per page of output, from 1 - 100, default &#x3D; 50.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsCustomFieldsApi
     */
    public getAllCustomFields(limit?: number, options?: RawAxiosRequestConfig) {
        return ContactsCustomFieldsApiFp(this.configuration).getAllCustomFields(limit, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This GET call retrieves a `custom_field` resource, specified by `custom_field_id`.
     * @summary GET a custom_field
     * @param {string} customFieldId Unique ID of the &#x60;custom_field&#x60; on which to operate.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsCustomFieldsApi
     */
    public getCustomField(customFieldId: string, options?: RawAxiosRequestConfig) {
        return ContactsCustomFieldsApiFp(this.configuration).getCustomField(customFieldId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * This PUT request updates an existing `custom_field` object.
     * @summary PUT (update) a custom_field
     * @param {string} customFieldId Unique ID of the &#x60;custom_field&#x60; on which to operate.
     * @param {UpdateCustomFieldRequest} updateCustomFieldRequest The JSON payload used to update an existing custom field. Any properties omitted in the PUT request are overwritten with a null value.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactsCustomFieldsApi
     */
    public updateCustomField(customFieldId: string, updateCustomFieldRequest: UpdateCustomFieldRequest, options?: RawAxiosRequestConfig) {
        return ContactsCustomFieldsApiFp(this.configuration).updateCustomField(customFieldId, updateCustomFieldRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

