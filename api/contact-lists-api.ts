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
import { DeleteList202Response } from '../models';
// @ts-ignore
import { GetAllLists200Response } from '../models';
// @ts-ignore
import { GetList200Response } from '../models';
// @ts-ignore
import { GetListIdXrefs200Response } from '../models';
// @ts-ignore
import { UpdateList200Response } from '../models';
// @ts-ignore
import { UpdateListRequest } from '../models';
/**
 * ContactListsApi - axios parameter creator
 * @export
 */
export const ContactListsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new contact list resource
         * @summary POST (create) a List
         * @param {UpdateListRequest} updateListRequest JSON payload defining the new contact list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createList: async (updateListRequest: UpdateListRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'updateListRequest' is not null or undefined
            assertParamExists('createList', 'updateListRequest', updateListRequest)
            const localVarPath = `/contact_lists`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateListRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes the specified contact list and its membership. DELETE List requests are processed asynchronously, and you can track the status of the request by making a GET call to the URI shown in the `_links` property in the response.
         * @summary DELETE a List
         * @param {string} listId Unique ID of the list to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteList: async (listId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'listId' is not null or undefined
            assertParamExists('deleteList', 'listId', listId)
            const localVarPath = `/contact_lists/{list_id}`
                .replace(`{${"list_id"}}`, encodeURIComponent(String(listId)));
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
         * Use this method to return details about all contact lists for the account. <div class=\"Msg\"><p class=\"note-text\">This method does not currently support filtering results using the contact list update date.</p></div>
         * @summary GET Lists Collection
         * @param {number} [limit] Use to specify the number of results displayed per page of output, from 1 - 500, default &#x3D; 50.
         * @param {boolean} [includeCount] Set &#x60;include_count&#x60; to &#x60;true&#x60; to return the total number of contact lists that meet your selection criteria.
         * @param {GetAllListsIncludeMembershipCountEnum} [includeMembershipCount] Use to include the total number of contacts per list. Set to  &#x60;active&#x60;, to count only active (mailable) contacts, or &#x60;all&#x60; to count all contacts.
         * @param {string} [name] Use to get details for a single list by entering the full name of the list.
         * @param {GetAllListsStatusEnum} [status] Use to get lists by status. Accepts comma-separated status values.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllLists: async (limit?: number, includeCount?: boolean, includeMembershipCount?: GetAllListsIncludeMembershipCountEnum, name?: string, status?: GetAllListsStatusEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/contact_lists`;
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

            if (includeCount !== undefined) {
                localVarQueryParameter['include_count'] = includeCount;
            }

            if (includeMembershipCount !== undefined) {
                localVarQueryParameter['include_membership_count'] = includeMembershipCount;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
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
         * Use this method to get details about a specific contact list (`list_id`).
         * @summary GET a List
         * @param {string} listId The system generated ID that uniquely identifies a contact list.
         * @param {GetListIncludeMembershipCountEnum} [includeMembershipCount] Returns the total number of contacts per list that meet your selection criteria. Set the &#x60;include_membership_count&#x60; to &#x60;active&#x60;, to count only active contacts, or &#x60;all&#x60; to include all contacts in the count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList: async (listId: string, includeMembershipCount?: GetListIncludeMembershipCountEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'listId' is not null or undefined
            assertParamExists('getList', 'listId', listId)
            const localVarPath = `/contact_lists/{list_id}`
                .replace(`{${"list_id"}}`, encodeURIComponent(String(listId)));
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

            if (includeMembershipCount !== undefined) {
                localVarQueryParameter['include_membership_count'] = includeMembershipCount;
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
         * <div class=\"Msg Msg--warning\"><p class=\"note-text\">Use this endpoint to migrate your locally stored V2 contact list data to the new V3 format. Developers are expected to use this endpoint sparingly. This endpoint is NOT intended for regular or repeated use. Constant Contact will eventually deprecate and remove this endpoint.</p></div>  This GET call retrieves a collection of cross-referenced list sequence IDs (`id` used in the V2 API) and UUIDs (`list_id` used in the V3 API). This endpoint is intended for developers who have an existing V2 API integration, and are migrating their users to a new V3 API integration. The V2 and V3 APIs use different resource ID formats. Use the `sequence_ids` query parameter to specify a set of comma delimited V2 list ids to cross-reference. See [Migrating Apps and Data to V3](/api_guide/migration_overview.html) to learn more.\"
         * @summary GET a collection of V2 and V3 API List IDs
         * @param {string} sequenceIds Comma delimited list of V2 API list &#x60;ids&#x60; to cross-reference with the V3 API &#x60;list_id&#x60; value. Endpoint accepts a maximum of 500 ids at a time.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getListIdXrefs: async (sequenceIds: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sequenceIds' is not null or undefined
            assertParamExists('getListIdXrefs', 'sequenceIds', sequenceIds)
            const localVarPath = `/contact_lists/list_id_xrefs`;
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

            if (sequenceIds !== undefined) {
                localVarQueryParameter['sequence_ids'] = sequenceIds;
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
         * Updates an existing contact list resource, specified by `list_id`
         * @summary PUT (update) a List
         * @param {string} listId Unique ID of the contact list to update
         * @param {UpdateListRequest} updateListRequest JSON payload containing updates to the specified contact list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateList: async (listId: string, updateListRequest: UpdateListRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'listId' is not null or undefined
            assertParamExists('updateList', 'listId', listId)
            // verify required parameter 'updateListRequest' is not null or undefined
            assertParamExists('updateList', 'updateListRequest', updateListRequest)
            const localVarPath = `/contact_lists/{list_id}`
                .replace(`{${"list_id"}}`, encodeURIComponent(String(listId)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(updateListRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * ContactListsApi - functional programming interface
 * @export
 */
export const ContactListsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ContactListsApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new contact list resource
         * @summary POST (create) a List
         * @param {UpdateListRequest} updateListRequest JSON payload defining the new contact list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createList(updateListRequest: UpdateListRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateList200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createList(updateListRequest, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContactListsApi.createList']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Deletes the specified contact list and its membership. DELETE List requests are processed asynchronously, and you can track the status of the request by making a GET call to the URI shown in the `_links` property in the response.
         * @summary DELETE a List
         * @param {string} listId Unique ID of the list to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteList(listId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<DeleteList202Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteList(listId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContactListsApi.deleteList']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Use this method to return details about all contact lists for the account. <div class=\"Msg\"><p class=\"note-text\">This method does not currently support filtering results using the contact list update date.</p></div>
         * @summary GET Lists Collection
         * @param {number} [limit] Use to specify the number of results displayed per page of output, from 1 - 500, default &#x3D; 50.
         * @param {boolean} [includeCount] Set &#x60;include_count&#x60; to &#x60;true&#x60; to return the total number of contact lists that meet your selection criteria.
         * @param {GetAllListsIncludeMembershipCountEnum} [includeMembershipCount] Use to include the total number of contacts per list. Set to  &#x60;active&#x60;, to count only active (mailable) contacts, or &#x60;all&#x60; to count all contacts.
         * @param {string} [name] Use to get details for a single list by entering the full name of the list.
         * @param {GetAllListsStatusEnum} [status] Use to get lists by status. Accepts comma-separated status values.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllLists(limit?: number, includeCount?: boolean, includeMembershipCount?: GetAllListsIncludeMembershipCountEnum, name?: string, status?: GetAllListsStatusEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetAllLists200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllLists(limit, includeCount, includeMembershipCount, name, status, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContactListsApi.getAllLists']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Use this method to get details about a specific contact list (`list_id`).
         * @summary GET a List
         * @param {string} listId The system generated ID that uniquely identifies a contact list.
         * @param {GetListIncludeMembershipCountEnum} [includeMembershipCount] Returns the total number of contacts per list that meet your selection criteria. Set the &#x60;include_membership_count&#x60; to &#x60;active&#x60;, to count only active contacts, or &#x60;all&#x60; to include all contacts in the count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getList(listId: string, includeMembershipCount?: GetListIncludeMembershipCountEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetList200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getList(listId, includeMembershipCount, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContactListsApi.getList']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * <div class=\"Msg Msg--warning\"><p class=\"note-text\">Use this endpoint to migrate your locally stored V2 contact list data to the new V3 format. Developers are expected to use this endpoint sparingly. This endpoint is NOT intended for regular or repeated use. Constant Contact will eventually deprecate and remove this endpoint.</p></div>  This GET call retrieves a collection of cross-referenced list sequence IDs (`id` used in the V2 API) and UUIDs (`list_id` used in the V3 API). This endpoint is intended for developers who have an existing V2 API integration, and are migrating their users to a new V3 API integration. The V2 and V3 APIs use different resource ID formats. Use the `sequence_ids` query parameter to specify a set of comma delimited V2 list ids to cross-reference. See [Migrating Apps and Data to V3](/api_guide/migration_overview.html) to learn more.\"
         * @summary GET a collection of V2 and V3 API List IDs
         * @param {string} sequenceIds Comma delimited list of V2 API list &#x60;ids&#x60; to cross-reference with the V3 API &#x60;list_id&#x60; value. Endpoint accepts a maximum of 500 ids at a time.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getListIdXrefs(sequenceIds: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetListIdXrefs200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getListIdXrefs(sequenceIds, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContactListsApi.getListIdXrefs']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Updates an existing contact list resource, specified by `list_id`
         * @summary PUT (update) a List
         * @param {string} listId Unique ID of the contact list to update
         * @param {UpdateListRequest} updateListRequest JSON payload containing updates to the specified contact list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateList(listId: string, updateListRequest: UpdateListRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UpdateList200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateList(listId, updateListRequest, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['ContactListsApi.updateList']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * ContactListsApi - factory interface
 * @export
 */
export const ContactListsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ContactListsApiFp(configuration)
    return {
        /**
         * Create a new contact list resource
         * @summary POST (create) a List
         * @param {UpdateListRequest} updateListRequest JSON payload defining the new contact list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createList(updateListRequest: UpdateListRequest, options?: any): AxiosPromise<UpdateList200Response> {
            return localVarFp.createList(updateListRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes the specified contact list and its membership. DELETE List requests are processed asynchronously, and you can track the status of the request by making a GET call to the URI shown in the `_links` property in the response.
         * @summary DELETE a List
         * @param {string} listId Unique ID of the list to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteList(listId: string, options?: any): AxiosPromise<DeleteList202Response> {
            return localVarFp.deleteList(listId, options).then((request) => request(axios, basePath));
        },
        /**
         * Use this method to return details about all contact lists for the account. <div class=\"Msg\"><p class=\"note-text\">This method does not currently support filtering results using the contact list update date.</p></div>
         * @summary GET Lists Collection
         * @param {number} [limit] Use to specify the number of results displayed per page of output, from 1 - 500, default &#x3D; 50.
         * @param {boolean} [includeCount] Set &#x60;include_count&#x60; to &#x60;true&#x60; to return the total number of contact lists that meet your selection criteria.
         * @param {GetAllListsIncludeMembershipCountEnum} [includeMembershipCount] Use to include the total number of contacts per list. Set to  &#x60;active&#x60;, to count only active (mailable) contacts, or &#x60;all&#x60; to count all contacts.
         * @param {string} [name] Use to get details for a single list by entering the full name of the list.
         * @param {GetAllListsStatusEnum} [status] Use to get lists by status. Accepts comma-separated status values.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllLists(limit?: number, includeCount?: boolean, includeMembershipCount?: GetAllListsIncludeMembershipCountEnum, name?: string, status?: GetAllListsStatusEnum, options?: any): AxiosPromise<GetAllLists200Response> {
            return localVarFp.getAllLists(limit, includeCount, includeMembershipCount, name, status, options).then((request) => request(axios, basePath));
        },
        /**
         * Use this method to get details about a specific contact list (`list_id`).
         * @summary GET a List
         * @param {string} listId The system generated ID that uniquely identifies a contact list.
         * @param {GetListIncludeMembershipCountEnum} [includeMembershipCount] Returns the total number of contacts per list that meet your selection criteria. Set the &#x60;include_membership_count&#x60; to &#x60;active&#x60;, to count only active contacts, or &#x60;all&#x60; to include all contacts in the count.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getList(listId: string, includeMembershipCount?: GetListIncludeMembershipCountEnum, options?: any): AxiosPromise<GetList200Response> {
            return localVarFp.getList(listId, includeMembershipCount, options).then((request) => request(axios, basePath));
        },
        /**
         * <div class=\"Msg Msg--warning\"><p class=\"note-text\">Use this endpoint to migrate your locally stored V2 contact list data to the new V3 format. Developers are expected to use this endpoint sparingly. This endpoint is NOT intended for regular or repeated use. Constant Contact will eventually deprecate and remove this endpoint.</p></div>  This GET call retrieves a collection of cross-referenced list sequence IDs (`id` used in the V2 API) and UUIDs (`list_id` used in the V3 API). This endpoint is intended for developers who have an existing V2 API integration, and are migrating their users to a new V3 API integration. The V2 and V3 APIs use different resource ID formats. Use the `sequence_ids` query parameter to specify a set of comma delimited V2 list ids to cross-reference. See [Migrating Apps and Data to V3](/api_guide/migration_overview.html) to learn more.\"
         * @summary GET a collection of V2 and V3 API List IDs
         * @param {string} sequenceIds Comma delimited list of V2 API list &#x60;ids&#x60; to cross-reference with the V3 API &#x60;list_id&#x60; value. Endpoint accepts a maximum of 500 ids at a time.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getListIdXrefs(sequenceIds: string, options?: any): AxiosPromise<GetListIdXrefs200Response> {
            return localVarFp.getListIdXrefs(sequenceIds, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates an existing contact list resource, specified by `list_id`
         * @summary PUT (update) a List
         * @param {string} listId Unique ID of the contact list to update
         * @param {UpdateListRequest} updateListRequest JSON payload containing updates to the specified contact list
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateList(listId: string, updateListRequest: UpdateListRequest, options?: any): AxiosPromise<UpdateList200Response> {
            return localVarFp.updateList(listId, updateListRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ContactListsApi - object-oriented interface
 * @export
 * @class ContactListsApi
 * @extends {BaseAPI}
 */
export class ContactListsApi extends BaseAPI {
    /**
     * Create a new contact list resource
     * @summary POST (create) a List
     * @param {UpdateListRequest} updateListRequest JSON payload defining the new contact list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactListsApi
     */
    public createList(updateListRequest: UpdateListRequest, options?: RawAxiosRequestConfig) {
        return ContactListsApiFp(this.configuration).createList(updateListRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes the specified contact list and its membership. DELETE List requests are processed asynchronously, and you can track the status of the request by making a GET call to the URI shown in the `_links` property in the response.
     * @summary DELETE a List
     * @param {string} listId Unique ID of the list to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactListsApi
     */
    public deleteList(listId: string, options?: RawAxiosRequestConfig) {
        return ContactListsApiFp(this.configuration).deleteList(listId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Use this method to return details about all contact lists for the account. <div class=\"Msg\"><p class=\"note-text\">This method does not currently support filtering results using the contact list update date.</p></div>
     * @summary GET Lists Collection
     * @param {number} [limit] Use to specify the number of results displayed per page of output, from 1 - 500, default &#x3D; 50.
     * @param {boolean} [includeCount] Set &#x60;include_count&#x60; to &#x60;true&#x60; to return the total number of contact lists that meet your selection criteria.
     * @param {GetAllListsIncludeMembershipCountEnum} [includeMembershipCount] Use to include the total number of contacts per list. Set to  &#x60;active&#x60;, to count only active (mailable) contacts, or &#x60;all&#x60; to count all contacts.
     * @param {string} [name] Use to get details for a single list by entering the full name of the list.
     * @param {GetAllListsStatusEnum} [status] Use to get lists by status. Accepts comma-separated status values.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactListsApi
     */
    public getAllLists(limit?: number, includeCount?: boolean, includeMembershipCount?: GetAllListsIncludeMembershipCountEnum, name?: string, status?: GetAllListsStatusEnum, options?: RawAxiosRequestConfig) {
        return ContactListsApiFp(this.configuration).getAllLists(limit, includeCount, includeMembershipCount, name, status, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Use this method to get details about a specific contact list (`list_id`).
     * @summary GET a List
     * @param {string} listId The system generated ID that uniquely identifies a contact list.
     * @param {GetListIncludeMembershipCountEnum} [includeMembershipCount] Returns the total number of contacts per list that meet your selection criteria. Set the &#x60;include_membership_count&#x60; to &#x60;active&#x60;, to count only active contacts, or &#x60;all&#x60; to include all contacts in the count.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactListsApi
     */
    public getList(listId: string, includeMembershipCount?: GetListIncludeMembershipCountEnum, options?: RawAxiosRequestConfig) {
        return ContactListsApiFp(this.configuration).getList(listId, includeMembershipCount, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * <div class=\"Msg Msg--warning\"><p class=\"note-text\">Use this endpoint to migrate your locally stored V2 contact list data to the new V3 format. Developers are expected to use this endpoint sparingly. This endpoint is NOT intended for regular or repeated use. Constant Contact will eventually deprecate and remove this endpoint.</p></div>  This GET call retrieves a collection of cross-referenced list sequence IDs (`id` used in the V2 API) and UUIDs (`list_id` used in the V3 API). This endpoint is intended for developers who have an existing V2 API integration, and are migrating their users to a new V3 API integration. The V2 and V3 APIs use different resource ID formats. Use the `sequence_ids` query parameter to specify a set of comma delimited V2 list ids to cross-reference. See [Migrating Apps and Data to V3](/api_guide/migration_overview.html) to learn more.\"
     * @summary GET a collection of V2 and V3 API List IDs
     * @param {string} sequenceIds Comma delimited list of V2 API list &#x60;ids&#x60; to cross-reference with the V3 API &#x60;list_id&#x60; value. Endpoint accepts a maximum of 500 ids at a time.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactListsApi
     */
    public getListIdXrefs(sequenceIds: string, options?: RawAxiosRequestConfig) {
        return ContactListsApiFp(this.configuration).getListIdXrefs(sequenceIds, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates an existing contact list resource, specified by `list_id`
     * @summary PUT (update) a List
     * @param {string} listId Unique ID of the contact list to update
     * @param {UpdateListRequest} updateListRequest JSON payload containing updates to the specified contact list
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ContactListsApi
     */
    public updateList(listId: string, updateListRequest: UpdateListRequest, options?: RawAxiosRequestConfig) {
        return ContactListsApiFp(this.configuration).updateList(listId, updateListRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const GetAllListsIncludeMembershipCountEnum = {
    All: 'all',
    Active: 'active'
} as const;
export type GetAllListsIncludeMembershipCountEnum = typeof GetAllListsIncludeMembershipCountEnum[keyof typeof GetAllListsIncludeMembershipCountEnum];
/**
 * @export
 */
export const GetAllListsStatusEnum = {
    All: 'all',
    Active: 'active',
    Deleted: 'deleted'
} as const;
export type GetAllListsStatusEnum = typeof GetAllListsStatusEnum[keyof typeof GetAllListsStatusEnum];
/**
 * @export
 */
export const GetListIncludeMembershipCountEnum = {
    All: 'all',
    Active: 'active'
} as const;
export type GetListIncludeMembershipCountEnum = typeof GetListIncludeMembershipCountEnum[keyof typeof GetListIncludeMembershipCountEnum];
