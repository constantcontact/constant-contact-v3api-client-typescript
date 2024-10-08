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
import { GetABTestEmailCampaign200Response } from '../models';
/**
 * EmailCampaignsABTestsApi - axios parameter creator
 * @export
 */
export const EmailCampaignsABTestsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Use this method to create a new A/B test for a primary email campaign activity. You must specify an alternative subject line, the percentage of contact to use for the A/B test, and the number of hours to wait after the A/B test is sent before determining the winning subject line. To create an A/B test, the campaign must have a `current_status` of `DRAFT`. When you create an A/B test, the `type` changes from Newsletter (code= `10`) to A/B Test (code= `57`).
         * @summary POST (Create) an A/B Test for an Email Campaign Activity
         * @param {string} campaignActivityId The unique ID for the primary email campaign activity.
         * @param {GetABTestEmailCampaign200Response} getABTestEmailCampaign200Response Specify the &#x60;alternative_subject&#x60; line, &#x60;test_size&#x60; percentage of contacts (value must from &#x60;5&#x60; to &#x60;50&#x60; inclusively), and the &#x60;winner_wait_duration&#x60; (value must be &#x60;6&#x60;, &#x60;12&#x60;, &#x60;24&#x60;, or &#x60;48&#x60; hours).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createABTestEmailCampaign: async (campaignActivityId: string, getABTestEmailCampaign200Response: GetABTestEmailCampaign200Response, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'campaignActivityId' is not null or undefined
            assertParamExists('createABTestEmailCampaign', 'campaignActivityId', campaignActivityId)
            // verify required parameter 'getABTestEmailCampaign200Response' is not null or undefined
            assertParamExists('createABTestEmailCampaign', 'getABTestEmailCampaign200Response', getABTestEmailCampaign200Response)
            const localVarPath = `/emails/activities/{campaign_activity_id}/abtest`
                .replace(`{${"campaign_activity_id"}}`, encodeURIComponent(String(campaignActivityId)));
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2_access_code", ["campaign_data"], configuration)

            // authentication oauth2_implicit required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2_implicit", ["campaign_data"], configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(getABTestEmailCampaign200Response, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes an A/B Test on an primary email campaign activity. You can only delete A/B tests that have a `current_status` of `Draft`. Deleting an A/B tests reverts the email campaign activity `type` from A/B Test (code= `57`) back to NewsLetter (code= `10`). Constant Contact uses the original subject line, rather than the alternate A/B test subject line, when an A/B test is deleted.
         * @summary DELETE an A/B Test for an Email Campaign Activity
         * @param {string} campaignActivityId The unique ID for the primary email campaign activity.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteABTestEmailCampaign: async (campaignActivityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'campaignActivityId' is not null or undefined
            assertParamExists('deleteABTestEmailCampaign', 'campaignActivityId', campaignActivityId)
            const localVarPath = `/emails/activities/{campaign_activity_id}/abtest`
                .replace(`{${"campaign_activity_id"}}`, encodeURIComponent(String(campaignActivityId)));
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2_access_code", ["campaign_data"], configuration)

            // authentication oauth2_implicit required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2_implicit", ["campaign_data"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Use this method to get A/B test details for a primary email campaign activity, such as the alternate email subject line, the contact test percentage size, and the number of hours to wait to determine the winning subject line to use. Currently, A/B tests support subject line only.
         * @summary GET A/B Test Details for an Email Campaign Activity
         * @param {string} campaignActivityId The unique ID for the primary email campaign activity.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getABTestEmailCampaign: async (campaignActivityId: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'campaignActivityId' is not null or undefined
            assertParamExists('getABTestEmailCampaign', 'campaignActivityId', campaignActivityId)
            const localVarPath = `/emails/activities/{campaign_activity_id}/abtest`
                .replace(`{${"campaign_activity_id"}}`, encodeURIComponent(String(campaignActivityId)));
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
            await setOAuthToObject(localVarHeaderParameter, "oauth2_access_code", ["campaign_data"], configuration)

            // authentication oauth2_implicit required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "oauth2_implicit", ["campaign_data"], configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EmailCampaignsABTestsApi - functional programming interface
 * @export
 */
export const EmailCampaignsABTestsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EmailCampaignsABTestsApiAxiosParamCreator(configuration)
    return {
        /**
         * Use this method to create a new A/B test for a primary email campaign activity. You must specify an alternative subject line, the percentage of contact to use for the A/B test, and the number of hours to wait after the A/B test is sent before determining the winning subject line. To create an A/B test, the campaign must have a `current_status` of `DRAFT`. When you create an A/B test, the `type` changes from Newsletter (code= `10`) to A/B Test (code= `57`).
         * @summary POST (Create) an A/B Test for an Email Campaign Activity
         * @param {string} campaignActivityId The unique ID for the primary email campaign activity.
         * @param {GetABTestEmailCampaign200Response} getABTestEmailCampaign200Response Specify the &#x60;alternative_subject&#x60; line, &#x60;test_size&#x60; percentage of contacts (value must from &#x60;5&#x60; to &#x60;50&#x60; inclusively), and the &#x60;winner_wait_duration&#x60; (value must be &#x60;6&#x60;, &#x60;12&#x60;, &#x60;24&#x60;, or &#x60;48&#x60; hours).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createABTestEmailCampaign(campaignActivityId: string, getABTestEmailCampaign200Response: GetABTestEmailCampaign200Response, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetABTestEmailCampaign200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createABTestEmailCampaign(campaignActivityId, getABTestEmailCampaign200Response, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['EmailCampaignsABTestsApi.createABTestEmailCampaign']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Deletes an A/B Test on an primary email campaign activity. You can only delete A/B tests that have a `current_status` of `Draft`. Deleting an A/B tests reverts the email campaign activity `type` from A/B Test (code= `57`) back to NewsLetter (code= `10`). Constant Contact uses the original subject line, rather than the alternate A/B test subject line, when an A/B test is deleted.
         * @summary DELETE an A/B Test for an Email Campaign Activity
         * @param {string} campaignActivityId The unique ID for the primary email campaign activity.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteABTestEmailCampaign(campaignActivityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteABTestEmailCampaign(campaignActivityId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['EmailCampaignsABTestsApi.deleteABTestEmailCampaign']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
        /**
         * Use this method to get A/B test details for a primary email campaign activity, such as the alternate email subject line, the contact test percentage size, and the number of hours to wait to determine the winning subject line to use. Currently, A/B tests support subject line only.
         * @summary GET A/B Test Details for an Email Campaign Activity
         * @param {string} campaignActivityId The unique ID for the primary email campaign activity.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getABTestEmailCampaign(campaignActivityId: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetABTestEmailCampaign200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getABTestEmailCampaign(campaignActivityId, options);
            const index = configuration?.serverIndex ?? 0;
            const operationBasePath = operationServerMap['EmailCampaignsABTestsApi.getABTestEmailCampaign']?.[index]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, operationBasePath || basePath);
        },
    }
};

/**
 * EmailCampaignsABTestsApi - factory interface
 * @export
 */
export const EmailCampaignsABTestsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EmailCampaignsABTestsApiFp(configuration)
    return {
        /**
         * Use this method to create a new A/B test for a primary email campaign activity. You must specify an alternative subject line, the percentage of contact to use for the A/B test, and the number of hours to wait after the A/B test is sent before determining the winning subject line. To create an A/B test, the campaign must have a `current_status` of `DRAFT`. When you create an A/B test, the `type` changes from Newsletter (code= `10`) to A/B Test (code= `57`).
         * @summary POST (Create) an A/B Test for an Email Campaign Activity
         * @param {string} campaignActivityId The unique ID for the primary email campaign activity.
         * @param {GetABTestEmailCampaign200Response} getABTestEmailCampaign200Response Specify the &#x60;alternative_subject&#x60; line, &#x60;test_size&#x60; percentage of contacts (value must from &#x60;5&#x60; to &#x60;50&#x60; inclusively), and the &#x60;winner_wait_duration&#x60; (value must be &#x60;6&#x60;, &#x60;12&#x60;, &#x60;24&#x60;, or &#x60;48&#x60; hours).
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createABTestEmailCampaign(campaignActivityId: string, getABTestEmailCampaign200Response: GetABTestEmailCampaign200Response, options?: any): AxiosPromise<GetABTestEmailCampaign200Response> {
            return localVarFp.createABTestEmailCampaign(campaignActivityId, getABTestEmailCampaign200Response, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes an A/B Test on an primary email campaign activity. You can only delete A/B tests that have a `current_status` of `Draft`. Deleting an A/B tests reverts the email campaign activity `type` from A/B Test (code= `57`) back to NewsLetter (code= `10`). Constant Contact uses the original subject line, rather than the alternate A/B test subject line, when an A/B test is deleted.
         * @summary DELETE an A/B Test for an Email Campaign Activity
         * @param {string} campaignActivityId The unique ID for the primary email campaign activity.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteABTestEmailCampaign(campaignActivityId: string, options?: any): AxiosPromise<void> {
            return localVarFp.deleteABTestEmailCampaign(campaignActivityId, options).then((request) => request(axios, basePath));
        },
        /**
         * Use this method to get A/B test details for a primary email campaign activity, such as the alternate email subject line, the contact test percentage size, and the number of hours to wait to determine the winning subject line to use. Currently, A/B tests support subject line only.
         * @summary GET A/B Test Details for an Email Campaign Activity
         * @param {string} campaignActivityId The unique ID for the primary email campaign activity.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getABTestEmailCampaign(campaignActivityId: string, options?: any): AxiosPromise<GetABTestEmailCampaign200Response> {
            return localVarFp.getABTestEmailCampaign(campaignActivityId, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EmailCampaignsABTestsApi - object-oriented interface
 * @export
 * @class EmailCampaignsABTestsApi
 * @extends {BaseAPI}
 */
export class EmailCampaignsABTestsApi extends BaseAPI {
    /**
     * Use this method to create a new A/B test for a primary email campaign activity. You must specify an alternative subject line, the percentage of contact to use for the A/B test, and the number of hours to wait after the A/B test is sent before determining the winning subject line. To create an A/B test, the campaign must have a `current_status` of `DRAFT`. When you create an A/B test, the `type` changes from Newsletter (code= `10`) to A/B Test (code= `57`).
     * @summary POST (Create) an A/B Test for an Email Campaign Activity
     * @param {string} campaignActivityId The unique ID for the primary email campaign activity.
     * @param {GetABTestEmailCampaign200Response} getABTestEmailCampaign200Response Specify the &#x60;alternative_subject&#x60; line, &#x60;test_size&#x60; percentage of contacts (value must from &#x60;5&#x60; to &#x60;50&#x60; inclusively), and the &#x60;winner_wait_duration&#x60; (value must be &#x60;6&#x60;, &#x60;12&#x60;, &#x60;24&#x60;, or &#x60;48&#x60; hours).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailCampaignsABTestsApi
     */
    public createABTestEmailCampaign(campaignActivityId: string, getABTestEmailCampaign200Response: GetABTestEmailCampaign200Response, options?: RawAxiosRequestConfig) {
        return EmailCampaignsABTestsApiFp(this.configuration).createABTestEmailCampaign(campaignActivityId, getABTestEmailCampaign200Response, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes an A/B Test on an primary email campaign activity. You can only delete A/B tests that have a `current_status` of `Draft`. Deleting an A/B tests reverts the email campaign activity `type` from A/B Test (code= `57`) back to NewsLetter (code= `10`). Constant Contact uses the original subject line, rather than the alternate A/B test subject line, when an A/B test is deleted.
     * @summary DELETE an A/B Test for an Email Campaign Activity
     * @param {string} campaignActivityId The unique ID for the primary email campaign activity.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailCampaignsABTestsApi
     */
    public deleteABTestEmailCampaign(campaignActivityId: string, options?: RawAxiosRequestConfig) {
        return EmailCampaignsABTestsApiFp(this.configuration).deleteABTestEmailCampaign(campaignActivityId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Use this method to get A/B test details for a primary email campaign activity, such as the alternate email subject line, the contact test percentage size, and the number of hours to wait to determine the winning subject line to use. Currently, A/B tests support subject line only.
     * @summary GET A/B Test Details for an Email Campaign Activity
     * @param {string} campaignActivityId The unique ID for the primary email campaign activity.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EmailCampaignsABTestsApi
     */
    public getABTestEmailCampaign(campaignActivityId: string, options?: RawAxiosRequestConfig) {
        return EmailCampaignsABTestsApiFp(this.configuration).getABTestEmailCampaign(campaignActivityId, options).then((request) => request(this.axios, this.basePath));
    }
}

