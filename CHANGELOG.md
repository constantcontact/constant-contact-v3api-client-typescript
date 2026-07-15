# Constant Contact Typescript API Client
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/) and this project adheres to [Semantic Versioning](https://semver.org/).

## 1.23.0 - 2026-07-15
### Added
- GET /contact_tags - the response property '_links/next/next/href' became optional for the status '200'
- GET /contacts - removed the enum value 'sms_channel' from the 'query' request parameter 'include'
- GET /contacts - the response property 'contacts/items/custom_fields/items/value' became optional for the status '200'
- GET /contacts - the response property 'contacts/items/custom_fields/items/value' became optional for the status '202'
- POST /contacts - the response property 'custom_fields/items/value' became optional for the status '201'
- GET /contacts/{contact_id} - the response property 'custom_fields/items/value' became optional for the status '200'
- PUT /contacts/{contact_id} - the response property 'custom_fields/items/value' became optional for the status '200'
- GET /reports/contact_reports/{contact_id}/activity_details - the response property '_links/next' became optional for the status '200'
- GET /reports/contact_reports/{contact_id}/activity_details - the response property '_links/next/href' became optional for the status '200'
- GET /reports/contact_reports/{contact_id}/activity_summary - the response property '_links/next' became optional for the status '200'
- GET /reports/contact_reports/{contact_id}/activity_summary - the response property '_links/next/href' became optional for the status '200'
- GET /reports/email_reports/{campaign_activity_id}/tracking/bounces - the response property '_links/next' became optional for the status '200'
- GET /reports/email_reports/{campaign_activity_id}/tracking/bounces - the response property '_links/next/href' became optional for the status '200'
- GET /reports/email_reports/{campaign_activity_id}/tracking/clicks - the response property '_links/next' became optional for the status '200'
- GET /reports/email_reports/{campaign_activity_id}/tracking/clicks - the response property '_links/next/href' became optional for the status '200'
- GET /reports/email_reports/{campaign_activity_id}/tracking/didnotopens - the response property '_links/next' became optional for the status '200'
- GET /reports/email_reports/{campaign_activity_id}/tracking/didnotopens - the response property '_links/next/href' became optional for the status '200'
- GET /reports/email_reports/{campaign_activity_id}/tracking/forwards - the response property '_links/next' became optional for the status '200'
- GET /reports/email_reports/{campaign_activity_id}/tracking/forwards - the response property '_links/next/href' became optional for the status '200'
- GET /reports/email_reports/{campaign_activity_id}/tracking/opens - the response property '_links/next' became optional for the status '200'
- GET /reports/email_reports/{campaign_activity_id}/tracking/opens - the response property '_links/next/href' became optional for the status '200'
- GET /reports/email_reports/{campaign_activity_id}/tracking/optouts - the response property '_links/next' became optional for the status '200'
- GET /reports/email_reports/{campaign_activity_id}/tracking/optouts - the response property '_links/next/href' became optional for the status '200'
- GET /reports/email_reports/{campaign_activity_id}/tracking/sends - the response property '_links/next' became optional for the status '200'
- GET /reports/email_reports/{campaign_activity_id}/tracking/sends - the response property '_links/next/href' became optional for the status '200'
- GET /reports/email_reports/{campaign_activity_id}/tracking/unique_opens - the response property '_links/next' became optional for the status '200'
- GET /reports/email_reports/{campaign_activity_id}/tracking/unique_opens - the response property '_links/next/href' became optional for the status '200'
- GET /reports/summary_reports/email_campaign_summaries - the response property '_links' became optional for the status '200'
- GET /reports/summary_reports/email_campaign_summaries - the response property '_links/next' became optional for the status '200'
- GET /reports/summary_reports/email_campaign_summaries - the response property '_links/next/href' became optional for the status '200'
- GET /reports/summary_reports/email_campaign_summaries - the response property 'bulk_email_campaign_summaries' became optional for the status '200'
- GET /reports/summary_reports/email_campaign_summaries - the response property 'bulk_email_campaign_summaries/items/campaign_type' became optional for the status '200'
- GET /reports/summary_reports/email_campaign_summaries - the response property 'bulk_email_campaign_summaries/items/last_sent_date' became optional for the status '200'
- GET /reports/summary_reports/email_campaign_summaries - the response property 'bulk_email_campaign_summaries/items/unique_counts' became optional for the status '200'
- GET /reports/summary_reports/email_campaign_summaries - the response property 'bulk_email_campaign_summaries/items/unique_counts/abuse' became optional for the status '200'
- GET /reports/summary_reports/email_campaign_summaries - the response property 'bulk_email_campaign_summaries/items/unique_counts/bounces' became optional for the status '200'
- GET /reports/summary_reports/email_campaign_summaries - the response property 'bulk_email_campaign_summaries/items/unique_counts/clicks' became optional for the status '200'
- GET /reports/summary_reports/email_campaign_summaries - the response property 'bulk_email_campaign_summaries/items/unique_counts/forwards' became optional for the status '200'
- GET /reports/summary_reports/email_campaign_summaries - the response property 'bulk_email_campaign_summaries/items/unique_counts/not_opened' became optional for the status '200'
- GET /reports/summary_reports/email_campaign_summaries - the response property 'bulk_email_campaign_summaries/items/unique_counts/opens' became optional for the status '200'
- GET /reports/summary_reports/email_campaign_summaries - the response property 'bulk_email_campaign_summaries/items/unique_counts/optouts' became optional for the status '200'
- GET /reports/summary_reports/email_campaign_summaries - the response property 'bulk_email_campaign_summaries/items/unique_counts/sends' became optional for the status '200'
- POST /contact_custom_fields - the 'type' request property's maxLength was set to '20'
- PUT /contact_custom_fields/{custom_field_id} - removed the request property 'type'
- GET /contacts/sms_engagement_history/{contact_id} - removed the optional property '/items/history_details/source_ip' from the response with the '200' status
- POST /emails - the 'email_campaign_activities/items/preheader' request property's maxLength was set to '200'
- undefined undefined - removed the schema 'CustomFieldInput'
- undefined undefined - removed the schema 'CustomFieldResource'
- GET /account/summary - added the optional property 'encoded_partner_id' to the response with the '200' status
- POST /account/summary/physical_address - removed the non-success response with the status '404'
- POST /activities/contact_exports - added the new optional request property 'exclude'
- POST /activities/contact_exports - added the new optional request property 'new_subscriber'
- POST /activities/contact_exports - added the new optional request property 'tag_ids'
- POST /activities/contacts_file_import - added the new optional request property 'sms_permission_to_send'
- POST /activities/contacts_file_import - the 'list_ids' request property type/format changed from 'array'/'' to 'string'/'csv'
- POST /activities/contacts_json_import - the request property 'import_data/items/email' became optional
- GET /contact_custom_fields - added the optional property 'custom_fields/items/choices' to the response with the '200' status
- GET /contact_custom_fields - added the optional property 'custom_fields/items/metadata' to the response with the '200' status
- GET /contact_custom_fields - added the optional property 'custom_fields/items/version' to the response with the '200' status
- POST /contact_custom_fields - added the new optional request property 'choices'
- POST /contact_custom_fields - added the new optional request property 'metadata'
- POST /contact_custom_fields - added the new optional request property 'version'
- POST /contact_custom_fields - the request property 'label' became optional
- POST /contact_custom_fields - the request property 'type' became optional
- POST /contact_custom_fields - added the optional property 'choices' to the response with the '201' status
- POST /contact_custom_fields - added the optional property 'metadata' to the response with the '201' status
- POST /contact_custom_fields - added the optional property 'version' to the response with the '201' status
- GET /contact_custom_fields/{custom_field_id} - added the optional property 'choices' to the response with the '200' status
- GET /contact_custom_fields/{custom_field_id} - added the optional property 'metadata' to the response with the '200' status
- GET /contact_custom_fields/{custom_field_id} - added the optional property 'version' to the response with the '200' status
- PUT /contact_custom_fields/{custom_field_id} - added the new optional request property 'choices'
- PUT /contact_custom_fields/{custom_field_id} - the request property 'label' became optional
- PUT /contact_custom_fields/{custom_field_id} - added the optional property 'choices' to the response with the '200' status
- PUT /contact_custom_fields/{custom_field_id} - added the optional property 'metadata' to the response with the '200' status
- PUT /contact_custom_fields/{custom_field_id} - added the optional property 'version' to the response with the '200' status
- GET /contact_lists - added the new optional 'query' request parameter 'channel_type'
- GET /contact_lists - added the new optional 'query' request parameter 'include_sms_membership_count'
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags - the endpoint scheme security 'oauth2_implicit' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- GET /contacts - added the optional property 'contacts/items/custom_fields/items/choice_ids' to the response with the '200' status
- GET /contacts - added the optional property 'contacts/items/custom_fields/items/choice_ids' to the response with the '202' status
- POST /contacts - added the new optional request property 'custom_fields/items/choice_ids'
- POST /contacts - added the new optional request property 'sms_channel'
- POST /contacts - the request property 'custom_fields/items/value' became optional
- POST /contacts - added the optional property 'custom_fields/items/choice_ids' to the response with the '201' status
- PUT /contacts/resubscribe/{contact_id} - endpoint added
- POST /contacts/sign_up_form - added the new optional request property 'sms_channel'
- POST /contacts/sign_up_form - the request property 'email_address' became optional
- GET /contacts/{contact_id} - added the optional property 'custom_fields/items/choice_ids' to the response with the '200' status
- PUT /contacts/{contact_id} - added the new optional request property 'custom_fields/items/choice_ids'
- PUT /contacts/{contact_id} - added the new optional request property 'sms_channel'
- PUT /contacts/{contact_id} - the request property 'custom_fields/items/value' became optional
- PUT /contacts/{contact_id} - added the optional property 'custom_fields/items/choice_ids' to the response with the '200' status
- GET /events - endpoint added
- POST /events/default - endpoint added
- GET /events/{event_id} - endpoint added
- PATCH /events/{event_id} - endpoint added
- POST /events/{event_id}/check_in/tickets - endpoint added
- POST /events/{event_id}/copy - endpoint added
- GET /events/{event_id}/tracks/{track_id}/registrations - endpoint added
- PUT /events/{event_id}/tracks/{track_id}/registrations - endpoint added
- PUT /events/{event_id}/tracks/{track_id}/registrations/payment_status - endpoint added
- GET /events/{event_id}/tracks/{track_id}/registrations/{registration_id} - endpoint added
- POST /events/{event_id}/undo_check_in/tickets - endpoint added
- GET /reports/summary_reports/sms_campaign_summaries - endpoint added
- GET /social/connections - endpoint added
- GET /social/hashtags/groups - endpoint added
- POST /social/posts - endpoint added
- GET /social/profiles - endpoint added

## 1.9.0 - 2024-11-19
### Added
- PUT /contacts/resubscribe/{contact_id} - endpoint added
- GET /reports/summary_reports/sms_campaign_summaries - endpoint added

## 1.9.0 - 2025-07-10
### Added
- GET /contacts - removed the enum value 'sms_channel' from the 'query' request parameter 'include'
- GET /contacts/sms_engagement_history/{contact_id} - removed the optional property '/items/history_details/source_ip' from the response with the '200' status
- POST /account/summary/physical_address - removed the non-success response with the status '404'
- POST /activities/contact_exports - added the new optional request property 'exclude'
- POST /activities/contact_exports - added the new optional request property 'new_subscriber'
- POST /activities/contact_exports - added the new optional request property 'tag_ids'
- POST /activities/contacts_file_import - added the new optional request property 'sms_permission_to_send'
- POST /activities/contacts_file_import - the 'list_ids' request property type/format changed from 'array'/'' to 'string'/'csv'
- POST /activities/contacts_json_import - the request property 'import_data/items/email' became optional
- GET /contact_tags - the endpoint scheme security 'oauth2_implicit AND oauth2_access_code' was added to the API
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags - the endpoint scheme security 'oauth2_implicit' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- POST /contacts - added the new optional request property 'sms_channel'
- PUT /contacts/resubscribe/{contact_id} - endpoint added
- POST /contacts/sign_up_form - added the new optional request property 'sms_channel'
- POST /contacts/sign_up_form - the request property 'email_address' became optional
- PUT /contacts/{contact_id} - added the new optional request property 'sms_channel'
- GET /reports/summary_reports/sms_campaign_summaries - endpoint added

## 1.8.0 - 2024-11-19

## 1.7.0 - 2024-11-19

## 1.7.0 - 2025-05-12
### Added
- GET /contacts - removed the enum value 'sms_channel' from the 'query' request parameter 'include'
- GET /contacts/sms_engagement_history/{contact_id} - removed the optional property '/items/history_details/source_ip' from the response with the '200' status
- POST /account/summary/physical_address - removed the non-success response with the status '404'
- POST /activities/contact_exports - added the new optional request property 'exclude'
- POST /activities/contact_exports - added the new optional request property 'new_subscriber'
- POST /activities/contact_exports - added the new optional request property 'tag_ids'
- POST /activities/contacts_file_import - added the new optional request property 'sms_permission_to_send'
- POST /activities/contacts_file_import - the 'list_ids' request property type/format changed from 'array'/'' to 'string'/'csv'
- POST /activities/contacts_json_import - the request property 'import_data/items/email' became optional
- GET /contact_tags - the endpoint scheme security 'oauth2_implicit AND oauth2_access_code' was added to the API
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags - the endpoint scheme security 'oauth2_implicit' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- POST /contacts - added the new optional request property 'sms_channel'
- PUT /contacts/resubscribe/{contact_id} - endpoint added
- POST /contacts/sign_up_form - added the new optional request property 'sms_channel'
- POST /contacts/sign_up_form - the request property 'email_address' became optional
- PUT /contacts/{contact_id} - added the new optional request property 'sms_channel'
- GET /reports/summary_reports/sms_campaign_summaries - endpoint added

## 1.6.0 - 2024-11-18

## 1.6.0 - 2025-05-12
### Added
- GET /contacts - removed the enum value 'sms_channel' from the 'query' request parameter 'include'
- GET /contacts/sms_engagement_history/{contact_id} - removed the optional property '/items/history_details/source_ip' from the response with the '200' status
- POST /account/summary/physical_address - removed the non-success response with the status '404'
- POST /activities/contact_exports - added the new optional request property 'exclude'
- POST /activities/contact_exports - added the new optional request property 'new_subscriber'
- POST /activities/contact_exports - added the new optional request property 'tag_ids'
- POST /activities/contacts_file_import - added the new optional request property 'sms_permission_to_send'
- POST /activities/contacts_file_import - the 'list_ids' request property type/format changed from 'array'/'' to 'string'/'csv'
- POST /activities/contacts_json_import - the request property 'import_data/items/email' became optional
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags - the endpoint scheme security 'oauth2_implicit' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- POST /contacts - added the new optional request property 'sms_channel'
- PUT /contacts/resubscribe/{contact_id} - endpoint added
- POST /contacts/sign_up_form - added the new optional request property 'sms_channel'
- POST /contacts/sign_up_form - the request property 'email_address' became optional
- PUT /contacts/{contact_id} - added the new optional request property 'sms_channel'
- GET /reports/summary_reports/sms_campaign_summaries - endpoint added

## 1.6.0 - 2025-07-10
### Added
- GET /contacts - removed the enum value 'sms_channel' from the 'query' request parameter 'include'
- GET /contacts/sms_engagement_history/{contact_id} - removed the optional property '/items/history_details/source_ip' from the response with the '200' status
- POST /account/summary/physical_address - removed the non-success response with the status '404'
- POST /activities/contact_exports - added the new optional request property 'exclude'
- POST /activities/contact_exports - added the new optional request property 'new_subscriber'
- POST /activities/contact_exports - added the new optional request property 'tag_ids'
- POST /activities/contacts_file_import - added the new optional request property 'sms_permission_to_send'
- POST /activities/contacts_file_import - the 'list_ids' request property type/format changed from 'array'/'' to 'string'/'csv'
- POST /activities/contacts_json_import - the request property 'import_data/items/email' became optional
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags - the endpoint scheme security 'oauth2_implicit' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- POST /contacts - added the new optional request property 'sms_channel'
- PUT /contacts/resubscribe/{contact_id} - endpoint added
- POST /contacts/sign_up_form - added the new optional request property 'sms_channel'
- POST /contacts/sign_up_form - the request property 'email_address' became optional
- PUT /contacts/{contact_id} - added the new optional request property 'sms_channel'
- GET /reports/summary_reports/sms_campaign_summaries - endpoint added

## 1.5.0 - 2024-10-08

## 1.5.0 - 2025-05-14
### Added
- GET /contacts - removed the enum value 'sms_channel' from the 'query' request parameter 'include'
- GET /contacts/sms_engagement_history/{contact_id} - removed the optional property '/items/history_details/source_ip' from the response with the '200' status
- POST /account/summary/physical_address - removed the non-success response with the status '404'
- POST /activities/contact_exports - added the new optional request property 'exclude'
- POST /activities/contact_exports - added the new optional request property 'new_subscriber'
- POST /activities/contact_exports - added the new optional request property 'tag_ids'
- POST /activities/contacts_file_import - added the new optional request property 'sms_permission_to_send'
- POST /activities/contacts_file_import - the 'list_ids' request property type/format changed from 'array'/'' to 'string'/'csv'
- POST /activities/contacts_json_import - the request property 'import_data/items/email' became optional
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags - the endpoint scheme security 'oauth2_implicit' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- POST /contacts - added the new optional request property 'sms_channel'
- PUT /contacts/resubscribe/{contact_id} - endpoint added
- POST /contacts/sign_up_form - added the new optional request property 'sms_channel'
- POST /contacts/sign_up_form - the request property 'email_address' became optional
- PUT /contacts/{contact_id} - added the new optional request property 'sms_channel'
- GET /reports/summary_reports/sms_campaign_summaries - endpoint added

## 1.4.0 - 2025-05-08
### Added
- GET /contacts - removed the enum value 'sms_channel' from the 'query' request parameter 'include'
- GET /contacts/sms_engagement_history/{contact_id} - removed the optional property '/items/history_details/source_ip' from the response with the '200' status
- POST /account/summary/physical_address - removed the non-success response with the status '404'
- POST /activities/contact_exports - added the new optional request property 'exclude'
- POST /activities/contact_exports - added the new optional request property 'new_subscriber'
- POST /activities/contact_exports - added the new optional request property 'tag_ids'
- POST /activities/contacts_file_import - added the new optional request property 'sms_permission_to_send'
- POST /activities/contacts_json_import - the request property 'import_data/items/email' became optional
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags - the endpoint scheme security 'oauth2_implicit' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- POST /contacts - added the new optional request property 'sms_channel'
- PUT /contacts/resubscribe/{contact_id} - endpoint added
- POST /contacts/sign_up_form - added the new optional request property 'sms_channel'
- POST /contacts/sign_up_form - the request property 'email_address' became optional
- PUT /contacts/{contact_id} - added the new optional request property 'sms_channel'
- GET /reports/summary_reports/sms_campaign_summaries - endpoint added

## 1.3.0 - 2025-05-08
### Added
- GET /contacts - removed the enum value 'sms_channel' from the 'query' request parameter 'include'
- GET /contacts/sms_engagement_history/{contact_id} - removed the optional property '/items/history_details/source_ip' from the response with the '200' status
- POST /account/summary/physical_address - removed the non-success response with the status '404'
- POST /activities/contact_exports - added the new optional request property 'exclude'
- POST /activities/contact_exports - added the new optional request property 'new_subscriber'
- POST /activities/contact_exports - added the new optional request property 'tag_ids'
- POST /activities/contacts_file_import - added the new optional request property 'sms_permission_to_send'
- POST /activities/contacts_json_import - the request property 'import_data/items/email' became optional
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags - the endpoint scheme security 'oauth2_implicit' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit AND oauth2_access_code' was added to the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- POST /contacts - added the new optional request property 'sms_channel'
- PUT /contacts/resubscribe/{contact_id} - endpoint added
- POST /contacts/sign_up_form - added the new optional request property 'sms_channel'
- POST /contacts/sign_up_form - the request property 'email_address' became optional
- PUT /contacts/{contact_id} - added the new optional request property 'sms_channel'
- GET /reports/summary_reports/sms_campaign_summaries - endpoint added

## 1.3.0 - 2025-05-13
### Added
- GET /contacts - removed the enum value 'sms_channel' from the 'query' request parameter 'include'
- GET /contacts/sms_engagement_history/{contact_id} - removed the optional property '/items/history_details/source_ip' from the response with the '200' status
- POST /account/summary/physical_address - removed the non-success response with the status '404'
- POST /activities/contact_exports - added the new optional request property 'exclude'
- POST /activities/contact_exports - added the new optional request property 'new_subscriber'
- POST /activities/contact_exports - added the new optional request property 'tag_ids'
- POST /activities/contacts_file_import - added the new optional request property 'sms_permission_to_send'
- POST /activities/contacts_file_import - the 'list_ids' request property type/format changed from 'array'/'' to 'string'/'csv'
- POST /activities/contacts_json_import - the request property 'import_data/items/email' became optional
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags - the endpoint scheme security 'oauth2_implicit' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit AND oauth2_access_code' was added to the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- POST /contacts - added the new optional request property 'sms_channel'
- PUT /contacts/resubscribe/{contact_id} - endpoint added
- POST /contacts/sign_up_form - added the new optional request property 'sms_channel'
- POST /contacts/sign_up_form - the request property 'email_address' became optional
- PUT /contacts/{contact_id} - added the new optional request property 'sms_channel'
- GET /reports/summary_reports/sms_campaign_summaries - endpoint added

## 1.2.0 - 2025-05-08
### Added
- GET /contacts - removed the enum value 'sms_channel' from the 'query' request parameter 'include'
- GET /contacts/sms_engagement_history/{contact_id} - removed the optional property '/items/history_details/source_ip' from the response with the '200' status
- POST /account/summary/physical_address - removed the non-success response with the status '404'
- POST /activities/contact_exports - added the new optional request property 'exclude'
- POST /activities/contact_exports - added the new optional request property 'new_subscriber'
- POST /activities/contact_exports - added the new optional request property 'tag_ids'
- POST /activities/contacts_file_import - added the new optional request property 'sms_permission_to_send'
- POST /activities/contacts_json_import - the request property 'import_data/items/email' became optional
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags - the endpoint scheme security 'oauth2_implicit' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- POST /contacts - added the new optional request property 'sms_channel'
- PUT /contacts/resubscribe/{contact_id} - endpoint added
- POST /contacts/sign_up_form - added the new optional request property 'sms_channel'
- POST /contacts/sign_up_form - the request property 'email_address' became optional
- PUT /contacts/{contact_id} - added the new optional request property 'sms_channel'
- GET /reports/summary_reports/sms_campaign_summaries - endpoint added

## 1.2.0 - 2025-05-08
### Added
- GET /contacts - removed the enum value 'sms_channel' from the 'query' request parameter 'include'
- GET /contacts/sms_engagement_history/{contact_id} - removed the optional property '/items/history_details/source_ip' from the response with the '200' status
- POST /account/summary/physical_address - removed the non-success response with the status '404'
- POST /activities/contact_exports - added the new optional request property 'exclude'
- POST /activities/contact_exports - added the new optional request property 'new_subscriber'
- POST /activities/contact_exports - added the new optional request property 'tag_ids'
- POST /activities/contacts_file_import - added the new optional request property 'sms_permission_to_send'
- POST /activities/contacts_json_import - the request property 'import_data/items/email' became optional
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags - the endpoint scheme security 'oauth2_implicit' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- POST /contacts - added the new optional request property 'sms_channel'
- PUT /contacts/resubscribe/{contact_id} - endpoint added
- POST /contacts/sign_up_form - added the new optional request property 'sms_channel'
- POST /contacts/sign_up_form - the request property 'email_address' became optional
- PUT /contacts/{contact_id} - added the new optional request property 'sms_channel'
- GET /reports/summary_reports/sms_campaign_summaries - endpoint added

## 1.1.0 - 2024-10-08

## 1.1.0 - 2025-05-08
### Added
- GET /contacts - removed the enum value 'sms_channel' from the 'query' request parameter 'include'
- GET /contacts/sms_engagement_history/{contact_id} - removed the optional property '/items/history_details/source_ip' from the response with the '200' status
- POST /account/summary/physical_address - removed the non-success response with the status '404'
- POST /activities/contact_exports - added the new optional request property 'exclude'
- POST /activities/contact_exports - added the new optional request property 'new_subscriber'
- POST /activities/contact_exports - added the new optional request property 'tag_ids'
- POST /activities/contacts_file_import - added the new optional request property 'sms_permission_to_send'
- POST /activities/contacts_json_import - the request property 'import_data/items/email' became optional
- GET /contact_tags - the endpoint scheme security 'oauth2_implicit AND oauth2_access_code' was added to the API
- GET /contact_tags - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags - the endpoint scheme security 'oauth2_implicit' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- DELETE /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code AND oauth2_implicit' was added to the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_access_code' was removed from the API
- GET /contact_tags/{tag_id} - the endpoint scheme security 'oauth2_implicit' was removed from the API
- POST /contacts - added the new optional request property 'sms_channel'
- PUT /contacts/resubscribe/{contact_id} - endpoint added
- POST /contacts/sign_up_form - added the new optional request property 'sms_channel'
- POST /contacts/sign_up_form - the request property 'email_address' became optional
- PUT /contacts/{contact_id} - added the new optional request property 'sms_channel'
- GET /reports/summary_reports/sms_campaign_summaries - endpoint added

## 1.0.85 - 2024-10-01
