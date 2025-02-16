import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface Account {

		/** Unique identifier of this account. */
		id?: string | null;

		/** Kind of resource this is, in this case adsensehost#account. */
		kind?: string | null;

		/** Name of this account. */
		name?: string | null;

		/** Approval status of this account. One of: PENDING, APPROVED, DISABLED. */
		status?: string | null;
	}
	export interface AccountFormProperties {

		/** Unique identifier of this account. */
		id: FormControl<string | null | undefined>,

		/** Kind of resource this is, in this case adsensehost#account. */
		kind: FormControl<string | null | undefined>,

		/** Name of this account. */
		name: FormControl<string | null | undefined>,

		/** Approval status of this account. One of: PENDING, APPROVED, DISABLED. */
		status: FormControl<string | null | undefined>,
	}
	export function CreateAccountFormGroup() {
		return new FormGroup<AccountFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Accounts {

		/** ETag of this response for caching purposes. */
		etag?: string | null;

		/** The accounts returned in this list response. */
		items?: Array<Account>;

		/** Kind of list this is, in this case adsensehost#accounts. */
		kind?: string | null;
	}
	export interface AccountsFormProperties {

		/** ETag of this response for caching purposes. */
		etag: FormControl<string | null | undefined>,

		/** Kind of list this is, in this case adsensehost#accounts. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAccountsFormGroup() {
		return new FormGroup<AccountsFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdClient {

		/** Whether this ad client is opted in to ARC. */
		arcOptIn?: boolean | null;

		/** Unique identifier of this ad client. */
		id?: string | null;

		/** Kind of resource this is, in this case adsensehost#adClient. */
		kind?: string | null;

		/** This ad client's product code, which corresponds to the PRODUCT_CODE report dimension. */
		productCode?: string | null;

		/** Whether this ad client supports being reported on. */
		supportsReporting?: boolean | null;
	}
	export interface AdClientFormProperties {

		/** Whether this ad client is opted in to ARC. */
		arcOptIn: FormControl<boolean | null | undefined>,

		/** Unique identifier of this ad client. */
		id: FormControl<string | null | undefined>,

		/** Kind of resource this is, in this case adsensehost#adClient. */
		kind: FormControl<string | null | undefined>,

		/** This ad client's product code, which corresponds to the PRODUCT_CODE report dimension. */
		productCode: FormControl<string | null | undefined>,

		/** Whether this ad client supports being reported on. */
		supportsReporting: FormControl<boolean | null | undefined>,
	}
	export function CreateAdClientFormGroup() {
		return new FormGroup<AdClientFormProperties>({
			arcOptIn: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			productCode: new FormControl<string | null | undefined>(undefined),
			supportsReporting: new FormControl<boolean | null | undefined>(undefined),
		});

	}

	export interface AdClients {

		/** ETag of this response for caching purposes. */
		etag?: string | null;

		/** The ad clients returned in this list response. */
		items?: Array<AdClient>;

		/** Kind of list this is, in this case adsensehost#adClients. */
		kind?: string | null;

		/** Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken?: string | null;
	}
	export interface AdClientsFormProperties {

		/** ETag of this response for caching purposes. */
		etag: FormControl<string | null | undefined>,

		/** Kind of list this is, in this case adsensehost#adClients. */
		kind: FormControl<string | null | undefined>,

		/** Continuation token used to page through ad clients. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAdClientsFormGroup() {
		return new FormGroup<AdClientsFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdCode {

		/** The ad code snippet. */
		adCode?: string | null;

		/** Kind this is, in this case adsensehost#adCode. */
		kind?: string | null;
	}
	export interface AdCodeFormProperties {

		/** The ad code snippet. */
		adCode: FormControl<string | null | undefined>,

		/** Kind this is, in this case adsensehost#adCode. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAdCodeFormGroup() {
		return new FormGroup<AdCodeFormProperties>({
			adCode: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdStyle {

		/** The colors included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash. */
		colors?: AdStyleColors;

		/** The style of the corners in the ad (deprecated: never populated, ignored). */
		corners?: string | null;

		/** The font which is included in the style. */
		font?: AdStyleFont;

		/** Kind this is, in this case adsensehost#adStyle. */
		kind?: string | null;
	}
	export interface AdStyleFormProperties {

		/** The style of the corners in the ad (deprecated: never populated, ignored). */
		corners: FormControl<string | null | undefined>,

		/** Kind this is, in this case adsensehost#adStyle. */
		kind: FormControl<string | null | undefined>,
	}
	export function CreateAdStyleFormGroup() {
		return new FormGroup<AdStyleFormProperties>({
			corners: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdStyleColors {

		/** The color of the ad background. */
		background?: string | null;

		/** The color of the ad border. */
		border?: string | null;

		/** The color of the ad text. */
		text?: string | null;

		/** The color of the ad title. */
		title?: string | null;

		/** The color of the ad url. */
		url?: string | null;
	}
	export interface AdStyleColorsFormProperties {

		/** The color of the ad background. */
		background: FormControl<string | null | undefined>,

		/** The color of the ad border. */
		border: FormControl<string | null | undefined>,

		/** The color of the ad text. */
		text: FormControl<string | null | undefined>,

		/** The color of the ad title. */
		title: FormControl<string | null | undefined>,

		/** The color of the ad url. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAdStyleColorsFormGroup() {
		return new FormGroup<AdStyleColorsFormProperties>({
			background: new FormControl<string | null | undefined>(undefined),
			border: new FormControl<string | null | undefined>(undefined),
			text: new FormControl<string | null | undefined>(undefined),
			title: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdStyleFont {

		/** The family of the font. Possible values are: ACCOUNT_DEFAULT_FAMILY, ADSENSE_DEFAULT_FAMILY, ARIAL, TIMES and VERDANA. */
		family?: string | null;

		/** The size of the font. Possible values are: ACCOUNT_DEFAULT_SIZE, ADSENSE_DEFAULT_SIZE, SMALL, MEDIUM and LARGE. */
		size?: string | null;
	}
	export interface AdStyleFontFormProperties {

		/** The family of the font. Possible values are: ACCOUNT_DEFAULT_FAMILY, ADSENSE_DEFAULT_FAMILY, ARIAL, TIMES and VERDANA. */
		family: FormControl<string | null | undefined>,

		/** The size of the font. Possible values are: ACCOUNT_DEFAULT_SIZE, ADSENSE_DEFAULT_SIZE, SMALL, MEDIUM and LARGE. */
		size: FormControl<string | null | undefined>,
	}
	export function CreateAdStyleFontFormGroup() {
		return new FormGroup<AdStyleFontFormProperties>({
			family: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdUnit {

		/** Identity code of this ad unit, not necessarily unique across ad clients. */
		code?: string | null;

		/** Settings specific to content ads (AFC) and highend mobile content ads (AFMC - deprecated). */
		contentAdsSettings?: AdUnitContentAdsSettings;
		customStyle?: AdStyle;

		/** Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. */
		id?: string | null;

		/** Kind of resource this is, in this case adsensehost#adUnit. */
		kind?: string | null;

		/** Settings specific to WAP mobile content ads (AFMC - deprecated). */
		mobileContentAdsSettings?: AdUnitMobileContentAdsSettings;

		/** Name of this ad unit. */
		name?: string | null;

		/**
		 * Status of this ad unit. Possible values are:
		 * NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.
		 * ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.
		 * INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.
		 */
		status?: string | null;
	}
	export interface AdUnitFormProperties {

		/** Identity code of this ad unit, not necessarily unique across ad clients. */
		code: FormControl<string | null | undefined>,

		/** Unique identifier of this ad unit. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. */
		id: FormControl<string | null | undefined>,

		/** Kind of resource this is, in this case adsensehost#adUnit. */
		kind: FormControl<string | null | undefined>,

		/** Name of this ad unit. */
		name: FormControl<string | null | undefined>,

		/**
		 * Status of this ad unit. Possible values are:
		 * NEW: Indicates that the ad unit was created within the last seven days and does not yet have any activity associated with it.
		 * ACTIVE: Indicates that there has been activity on this ad unit in the last seven days.
		 * INACTIVE: Indicates that there has been no activity on this ad unit in the last seven days.
		 */
		status: FormControl<string | null | undefined>,
	}
	export function CreateAdUnitFormGroup() {
		return new FormGroup<AdUnitFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdUnitContentAdsSettings {

		/** The backup option to be used in instances where no ad is available. */
		backupOption?: AdUnitContentAdsSettingsBackupOption;

		/** Size of this ad unit. Size values are in the form SIZE_{width}_{height}. */
		size?: string | null;

		/** Type of this ad unit. Possible values are TEXT, TEXT_IMAGE, IMAGE and LINK. */
		type?: string | null;
	}
	export interface AdUnitContentAdsSettingsFormProperties {

		/** Size of this ad unit. Size values are in the form SIZE_{width}_{height}. */
		size: FormControl<string | null | undefined>,

		/** Type of this ad unit. Possible values are TEXT, TEXT_IMAGE, IMAGE and LINK. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAdUnitContentAdsSettingsFormGroup() {
		return new FormGroup<AdUnitContentAdsSettingsFormProperties>({
			size: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdUnitContentAdsSettingsBackupOption {

		/** Color to use when type is set to COLOR. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash. */
		color?: string | null;

		/** Type of the backup option. Possible values are BLANK, COLOR and URL. */
		type?: string | null;

		/** URL to use when type is set to URL. */
		url?: string | null;
	}
	export interface AdUnitContentAdsSettingsBackupOptionFormProperties {

		/** Color to use when type is set to COLOR. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash. */
		color: FormControl<string | null | undefined>,

		/** Type of the backup option. Possible values are BLANK, COLOR and URL. */
		type: FormControl<string | null | undefined>,

		/** URL to use when type is set to URL. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateAdUnitContentAdsSettingsBackupOptionFormGroup() {
		return new FormGroup<AdUnitContentAdsSettingsBackupOptionFormProperties>({
			color: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdUnitMobileContentAdsSettings {

		/** The markup language to use for this ad unit. */
		markupLanguage?: string | null;

		/** The scripting language to use for this ad unit. */
		scriptingLanguage?: string | null;

		/** Size of this ad unit. */
		size?: string | null;

		/** Type of this ad unit. */
		type?: string | null;
	}
	export interface AdUnitMobileContentAdsSettingsFormProperties {

		/** The markup language to use for this ad unit. */
		markupLanguage: FormControl<string | null | undefined>,

		/** The scripting language to use for this ad unit. */
		scriptingLanguage: FormControl<string | null | undefined>,

		/** Size of this ad unit. */
		size: FormControl<string | null | undefined>,

		/** Type of this ad unit. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateAdUnitMobileContentAdsSettingsFormGroup() {
		return new FormGroup<AdUnitMobileContentAdsSettingsFormProperties>({
			markupLanguage: new FormControl<string | null | undefined>(undefined),
			scriptingLanguage: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AdUnits {

		/** ETag of this response for caching purposes. */
		etag?: string | null;

		/** The ad units returned in this list response. */
		items?: Array<AdUnit>;

		/** Kind of list this is, in this case adsensehost#adUnits. */
		kind?: string | null;

		/** Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken?: string | null;
	}
	export interface AdUnitsFormProperties {

		/** ETag of this response for caching purposes. */
		etag: FormControl<string | null | undefined>,

		/** Kind of list this is, in this case adsensehost#adUnits. */
		kind: FormControl<string | null | undefined>,

		/** Continuation token used to page through ad units. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateAdUnitsFormGroup() {
		return new FormGroup<AdUnitsFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface AssociationSession {

		/** Hosted account id of the associated publisher after association. Present if status is ACCEPTED. */
		accountId?: string | null;

		/** Unique identifier of this association session. */
		id?: string | null;

		/** Kind of resource this is, in this case adsensehost#associationSession. */
		kind?: string | null;

		/** The products to associate with the user. Options: AFC, AFG, AFV, AFS (deprecated), AFMC (deprecated) */
		productCodes?: Array<string>;

		/** Redirect URL of this association session. Used to redirect users into the AdSense association flow. */
		redirectUrl?: string | null;

		/** Status of the completed association, available once the association callback token has been verified. One of ACCEPTED, REJECTED, or ERROR. */
		status?: string | null;

		/** The preferred locale of the user themselves when going through the AdSense association flow. */
		userLocale?: string | null;

		/** The locale of the user's hosted website. */
		websiteLocale?: string | null;

		/** The URL of the user's hosted website. */
		websiteUrl?: string | null;
	}
	export interface AssociationSessionFormProperties {

		/** Hosted account id of the associated publisher after association. Present if status is ACCEPTED. */
		accountId: FormControl<string | null | undefined>,

		/** Unique identifier of this association session. */
		id: FormControl<string | null | undefined>,

		/** Kind of resource this is, in this case adsensehost#associationSession. */
		kind: FormControl<string | null | undefined>,

		/** Redirect URL of this association session. Used to redirect users into the AdSense association flow. */
		redirectUrl: FormControl<string | null | undefined>,

		/** Status of the completed association, available once the association callback token has been verified. One of ACCEPTED, REJECTED, or ERROR. */
		status: FormControl<string | null | undefined>,

		/** The preferred locale of the user themselves when going through the AdSense association flow. */
		userLocale: FormControl<string | null | undefined>,

		/** The locale of the user's hosted website. */
		websiteLocale: FormControl<string | null | undefined>,

		/** The URL of the user's hosted website. */
		websiteUrl: FormControl<string | null | undefined>,
	}
	export function CreateAssociationSessionFormGroup() {
		return new FormGroup<AssociationSessionFormProperties>({
			accountId: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			redirectUrl: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<string | null | undefined>(undefined),
			userLocale: new FormControl<string | null | undefined>(undefined),
			websiteLocale: new FormControl<string | null | undefined>(undefined),
			websiteUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomChannel {

		/** Code of this custom channel, not necessarily unique across ad clients. */
		code?: string | null;

		/** Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. */
		id?: string | null;

		/** Kind of resource this is, in this case adsensehost#customChannel. */
		kind?: string | null;

		/** Name of this custom channel. */
		name?: string | null;
	}
	export interface CustomChannelFormProperties {

		/** Code of this custom channel, not necessarily unique across ad clients. */
		code: FormControl<string | null | undefined>,

		/** Unique identifier of this custom channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. */
		id: FormControl<string | null | undefined>,

		/** Kind of resource this is, in this case adsensehost#customChannel. */
		kind: FormControl<string | null | undefined>,

		/** Name of this custom channel. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateCustomChannelFormGroup() {
		return new FormGroup<CustomChannelFormProperties>({
			code: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface CustomChannels {

		/** ETag of this response for caching purposes. */
		etag?: string | null;

		/** The custom channels returned in this list response. */
		items?: Array<CustomChannel>;

		/** Kind of list this is, in this case adsensehost#customChannels. */
		kind?: string | null;

		/** Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken?: string | null;
	}
	export interface CustomChannelsFormProperties {

		/** ETag of this response for caching purposes. */
		etag: FormControl<string | null | undefined>,

		/** Kind of list this is, in this case adsensehost#customChannels. */
		kind: FormControl<string | null | undefined>,

		/** Continuation token used to page through custom channels. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateCustomChannelsFormGroup() {
		return new FormGroup<CustomChannelsFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface Report {

		/** The averages of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty. */
		averages?: Array<string>;

		/** The header information of the columns requested in the report. This is a list of headers; one for each dimension in the request, followed by one for each metric in the request. */
		ReportHeaders?: Array<ReportHeaders>;

		/** Kind this is, in this case adsensehost#report. */
		kind?: string | null;

		/** The output rows of the report. Each row is a list of cells; one for each dimension in the request, followed by one for each metric in the request. The dimension cells contain strings, and the metric cells contain numbers. */
		rows?: Array<string>;

		/** The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit. */
		totalMatchedRows?: string | null;

		/** The totals of the report. This is the same length as any other row in the report; cells corresponding to dimension columns are empty. */
		totals?: Array<string>;

		/** Any warnings associated with generation of the report. */
		warnings?: Array<string>;
	}
	export interface ReportFormProperties {

		/** Kind this is, in this case adsensehost#report. */
		kind: FormControl<string | null | undefined>,

		/** The total number of rows matched by the report request. Fewer rows may be returned in the response due to being limited by the row count requested or the report row limit. */
		totalMatchedRows: FormControl<string | null | undefined>,
	}
	export function CreateReportFormGroup() {
		return new FormGroup<ReportFormProperties>({
			kind: new FormControl<string | null | undefined>(undefined),
			totalMatchedRows: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface ReportHeaders {

		/** The currency of this column. Only present if the header type is METRIC_CURRENCY. */
		currency?: string | null;

		/** The name of the header. */
		name?: string | null;

		/** The type of the header; one of DIMENSION, METRIC_TALLY, METRIC_RATIO, or METRIC_CURRENCY. */
		type?: string | null;
	}
	export interface ReportHeadersFormProperties {

		/** The currency of this column. Only present if the header type is METRIC_CURRENCY. */
		currency: FormControl<string | null | undefined>,

		/** The name of the header. */
		name: FormControl<string | null | undefined>,

		/** The type of the header; one of DIMENSION, METRIC_TALLY, METRIC_RATIO, or METRIC_CURRENCY. */
		type: FormControl<string | null | undefined>,
	}
	export function CreateReportHeadersFormGroup() {
		return new FormGroup<ReportHeadersFormProperties>({
			currency: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UrlChannel {

		/** Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. */
		id?: string | null;

		/** Kind of resource this is, in this case adsensehost#urlChannel. */
		kind?: string | null;

		/** URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home */
		urlPattern?: string | null;
	}
	export interface UrlChannelFormProperties {

		/** Unique identifier of this URL channel. This should be considered an opaque identifier; it is not safe to rely on it being in any particular format. */
		id: FormControl<string | null | undefined>,

		/** Kind of resource this is, in this case adsensehost#urlChannel. */
		kind: FormControl<string | null | undefined>,

		/** URL Pattern of this URL channel. Does not include "http://" or "https://". Example: www.example.com/home */
		urlPattern: FormControl<string | null | undefined>,
	}
	export function CreateUrlChannelFormGroup() {
		return new FormGroup<UrlChannelFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			urlPattern: new FormControl<string | null | undefined>(undefined),
		});

	}

	export interface UrlChannels {

		/** ETag of this response for caching purposes. */
		etag?: string | null;

		/** The URL channels returned in this list response. */
		items?: Array<UrlChannel>;

		/** Kind of list this is, in this case adsensehost#urlChannels. */
		kind?: string | null;

		/** Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken?: string | null;
	}
	export interface UrlChannelsFormProperties {

		/** ETag of this response for caching purposes. */
		etag: FormControl<string | null | undefined>,

		/** Kind of list this is, in this case adsensehost#urlChannels. */
		kind: FormControl<string | null | undefined>,

		/** Continuation token used to page through URL channels. To retrieve the next page of results, set the next request's "pageToken" value to this. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateUrlChannelsFormGroup() {
		return new FormGroup<UrlChannelsFormProperties>({
			etag: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * List hosted accounts associated with this AdSense account by ad client id.
		 * Get accounts
		 * @param {Array<string>} filterAdClientId Ad clients to list accounts for.
		 * @return {Accounts} Successful response
		 */
		Adsensehost_accounts_list(filterAdClientId: Array<string>): Observable<Accounts> {
			return this.http.get<Accounts>(this.baseUri + 'accounts?' + filterAdClientId.map(z => `filterAdClientId=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Get information about the selected associated AdSense account.
		 * Get accounts/{accountId}
		 * @param {string} accountId Account to get information about.
		 * @return {Account} Successful response
		 */
		Adsensehost_accounts_get(accountId: string): Observable<Account> {
			return this.http.get<Account>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)), {});
		}

		/**
		 * List all hosted ad clients in the specified hosted account.
		 * Get accounts/{accountId}/adclients
		 * @param {string} accountId Account for which to list ad clients.
		 * @param {number} maxResults The maximum number of ad clients to include in the response, used for paging.
		 *     Minimum: 0    Maximum: 10000
		 * @param {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {AdClients} Successful response
		 */
		Adsensehost_accounts_adclients_list(accountId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<AdClients> {
			return this.http.get<AdClients>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Get information about one of the ad clients in the specified publisher's AdSense account.
		 * Get accounts/{accountId}/adclients/{adClientId}
		 * @param {string} accountId Account which contains the ad client.
		 * @param {string} adClientId Ad client to get.
		 * @return {AdClient} Successful response
		 */
		Adsensehost_accounts_adclients_get(accountId: string, adClientId: string): Observable<AdClient> {
			return this.http.get<AdClient>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)), {});
		}

		/**
		 * List all ad units in the specified publisher's AdSense account.
		 * Get accounts/{accountId}/adclients/{adClientId}/adunits
		 * @param {string} accountId Account which contains the ad client.
		 * @param {string} adClientId Ad client for which to list ad units.
		 * @param {boolean} includeInactive Whether to include inactive ad units. Default: true.
		 * @param {number} maxResults The maximum number of ad units to include in the response, used for paging.
		 *     Minimum: 0    Maximum: 10000
		 * @param {string} pageToken A continuation token, used to page through ad units. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {AdUnits} Successful response
		 */
		Adsensehost_accounts_adunits_list(accountId: string, adClientId: string, includeInactive: boolean | null | undefined, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<AdUnits> {
			return this.http.get<AdUnits>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits&includeInactive=' + includeInactive + '&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Update the supplied ad unit in the specified publisher AdSense account. This method supports patch semantics.
		 * Patch accounts/{accountId}/adclients/{adClientId}/adunits
		 * @param {string} accountId Account which contains the ad client.
		 * @param {string} adClientId Ad client which contains the ad unit.
		 * @param {string} adUnitId Ad unit to get.
		 * @return {AdUnit} Successful response
		 */
		Adsensehost_accounts_adunits_patch(accountId: string, adClientId: string, adUnitId: string, requestBody: AdUnit): Observable<AdUnit> {
			return this.http.patch<AdUnit>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits&adUnitId=' + (adUnitId == null ? '' : encodeURIComponent(adUnitId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Insert the supplied ad unit into the specified publisher AdSense account.
		 * Post accounts/{accountId}/adclients/{adClientId}/adunits
		 * @param {string} accountId Account which will contain the ad unit.
		 * @param {string} adClientId Ad client into which to insert the ad unit.
		 * @return {AdUnit} Successful response
		 */
		Adsensehost_accounts_adunits_insert(accountId: string, adClientId: string, requestBody: AdUnit): Observable<AdUnit> {
			return this.http.post<AdUnit>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update the supplied ad unit in the specified publisher AdSense account.
		 * Put accounts/{accountId}/adclients/{adClientId}/adunits
		 * @param {string} accountId Account which contains the ad client.
		 * @param {string} adClientId Ad client which contains the ad unit.
		 * @return {AdUnit} Successful response
		 */
		Adsensehost_accounts_adunits_update(accountId: string, adClientId: string, requestBody: AdUnit): Observable<AdUnit> {
			return this.http.put<AdUnit>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete the specified ad unit from the specified publisher AdSense account.
		 * Delete accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}
		 * @param {string} accountId Account which contains the ad unit.
		 * @param {string} adClientId Ad client for which to get ad unit.
		 * @param {string} adUnitId Ad unit to delete.
		 * @return {AdUnit} Successful response
		 */
		Adsensehost_accounts_adunits_delete(accountId: string, adClientId: string, adUnitId: string): Observable<AdUnit> {
			return this.http.delete<AdUnit>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits/' + (adUnitId == null ? '' : encodeURIComponent(adUnitId)), {});
		}

		/**
		 * Get the specified host ad unit in this AdSense account.
		 * Get accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}
		 * @param {string} accountId Account which contains the ad unit.
		 * @param {string} adClientId Ad client for which to get ad unit.
		 * @param {string} adUnitId Ad unit to get.
		 * @return {AdUnit} Successful response
		 */
		Adsensehost_accounts_adunits_get(accountId: string, adClientId: string, adUnitId: string): Observable<AdUnit> {
			return this.http.get<AdUnit>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits/' + (adUnitId == null ? '' : encodeURIComponent(adUnitId)), {});
		}

		/**
		 * Get ad code for the specified ad unit, attaching the specified host custom channels.
		 * Get accounts/{accountId}/adclients/{adClientId}/adunits/{adUnitId}/adcode
		 * @param {string} accountId Account which contains the ad client.
		 * @param {string} adClientId Ad client with contains the ad unit.
		 * @param {string} adUnitId Ad unit to get the code for.
		 * @param {Array<string>} hostCustomChannelId Host custom channel to attach to the ad code.
		 * @return {AdCode} Successful response
		 */
		Adsensehost_accounts_adunits_getAdCode(accountId: string, adClientId: string, adUnitId: string, hostCustomChannelId: Array<string> | null | undefined): Observable<AdCode> {
			return this.http.get<AdCode>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/adunits/' + (adUnitId == null ? '' : encodeURIComponent(adUnitId)) + '/adcode&' + hostCustomChannelId?.map(z => `hostCustomChannelId=${encodeURIComponent(z)}`).join('&'), {});
		}

		/**
		 * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
		 * Get accounts/{accountId}/reports
		 * @param {string} accountId Hosted account upon which to report.
		 * @param {string} startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
		 * @param {string} endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
		 * @param {Array<string>} dimension Dimensions to base the report on.
		 * @param {Array<string>} filter Filters to be run on the report.
		 * @param {string} locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
		 * @param {number} maxResults The maximum number of rows of report data to return.
		 *     Minimum: 0    Maximum: 50000
		 * @param {Array<string>} metric Numeric columns to include in the report.
		 * @param {Array<string>} sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
		 * @param {number} startIndex Index of the first row of report data to return.
		 *     Minimum: 0    Maximum: 5000
		 * @return {Report} Successful response
		 */
		Adsensehost_accounts_reports_generate(accountId: string, startDate: string, endDate: string, dimension: Array<string> | null | undefined, filter: Array<string> | null | undefined, locale: string | null | undefined, maxResults: number | null | undefined, metric: Array<string> | null | undefined, sort: Array<string> | null | undefined, startIndex: number | null | undefined): Observable<Report> {
			return this.http.get<Report>(this.baseUri + 'accounts/' + (accountId == null ? '' : encodeURIComponent(accountId)) + '/reports&startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&' + dimension?.map(z => `dimension=${encodeURIComponent(z)}`).join('&') + '&' + filter?.map(z => `filter=${encodeURIComponent(z)}`).join('&') + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxResults=' + maxResults + '&' + metric?.map(z => `metric=${encodeURIComponent(z)}`).join('&') + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&startIndex=' + startIndex, {});
		}

		/**
		 * List all host ad clients in this AdSense account.
		 * Get adclients
		 * @param {number} maxResults The maximum number of ad clients to include in the response, used for paging.
		 *     Minimum: 0    Maximum: 10000
		 * @param {string} pageToken A continuation token, used to page through ad clients. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {AdClients} Successful response
		 */
		Adsensehost_adclients_list(maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<AdClients> {
			return this.http.get<AdClients>(this.baseUri + 'adclients?maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Get information about one of the ad clients in the Host AdSense account.
		 * Get adclients/{adClientId}
		 * @param {string} adClientId Ad client to get.
		 * @return {AdClient} Successful response
		 */
		Adsensehost_adclients_get(adClientId: string): Observable<AdClient> {
			return this.http.get<AdClient>(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)), {});
		}

		/**
		 * List all host custom channels in this AdSense account.
		 * Get adclients/{adClientId}/customchannels
		 * @param {string} adClientId Ad client for which to list custom channels.
		 * @param {number} maxResults The maximum number of custom channels to include in the response, used for paging.
		 *     Minimum: 0    Maximum: 10000
		 * @param {string} pageToken A continuation token, used to page through custom channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {CustomChannels} Successful response
		 */
		Adsensehost_customchannels_list(adClientId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<CustomChannels> {
			return this.http.get<CustomChannels>(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Update a custom channel in the host AdSense account. This method supports patch semantics.
		 * Patch adclients/{adClientId}/customchannels
		 * @param {string} adClientId Ad client in which the custom channel will be updated.
		 * @param {string} customChannelId Custom channel to get.
		 * @return {CustomChannel} Successful response
		 */
		Adsensehost_customchannels_patch(adClientId: string, customChannelId: string, requestBody: CustomChannel): Observable<CustomChannel> {
			return this.http.patch<CustomChannel>(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels&customChannelId=' + (customChannelId == null ? '' : encodeURIComponent(customChannelId)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Add a new custom channel to the host AdSense account.
		 * Post adclients/{adClientId}/customchannels
		 * @param {string} adClientId Ad client to which the new custom channel will be added.
		 * @return {CustomChannel} Successful response
		 */
		Adsensehost_customchannels_insert(adClientId: string, requestBody: CustomChannel): Observable<CustomChannel> {
			return this.http.post<CustomChannel>(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Update a custom channel in the host AdSense account.
		 * Put adclients/{adClientId}/customchannels
		 * @param {string} adClientId Ad client in which the custom channel will be updated.
		 * @return {CustomChannel} Successful response
		 */
		Adsensehost_customchannels_update(adClientId: string, requestBody: CustomChannel): Observable<CustomChannel> {
			return this.http.put<CustomChannel>(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a specific custom channel from the host AdSense account.
		 * Delete adclients/{adClientId}/customchannels/{customChannelId}
		 * @param {string} adClientId Ad client from which to delete the custom channel.
		 * @param {string} customChannelId Custom channel to delete.
		 * @return {CustomChannel} Successful response
		 */
		Adsensehost_customchannels_delete(adClientId: string, customChannelId: string): Observable<CustomChannel> {
			return this.http.delete<CustomChannel>(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels/' + (customChannelId == null ? '' : encodeURIComponent(customChannelId)), {});
		}

		/**
		 * Get a specific custom channel from the host AdSense account.
		 * Get adclients/{adClientId}/customchannels/{customChannelId}
		 * @param {string} adClientId Ad client from which to get the custom channel.
		 * @param {string} customChannelId Custom channel to get.
		 * @return {CustomChannel} Successful response
		 */
		Adsensehost_customchannels_get(adClientId: string, customChannelId: string): Observable<CustomChannel> {
			return this.http.get<CustomChannel>(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/customchannels/' + (customChannelId == null ? '' : encodeURIComponent(customChannelId)), {});
		}

		/**
		 * List all host URL channels in the host AdSense account.
		 * Get adclients/{adClientId}/urlchannels
		 * @param {string} adClientId Ad client for which to list URL channels.
		 * @param {number} maxResults The maximum number of URL channels to include in the response, used for paging.
		 *     Minimum: 0    Maximum: 10000
		 * @param {string} pageToken A continuation token, used to page through URL channels. To retrieve the next page, set this parameter to the value of "nextPageToken" from the previous response.
		 * @return {UrlChannels} Successful response
		 */
		Adsensehost_urlchannels_list(adClientId: string, maxResults: number | null | undefined, pageToken: string | null | undefined): Observable<UrlChannels> {
			return this.http.get<UrlChannels>(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/urlchannels&maxResults=' + maxResults + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), {});
		}

		/**
		 * Add a new URL channel to the host AdSense account.
		 * Post adclients/{adClientId}/urlchannels
		 * @param {string} adClientId Ad client to which the new URL channel will be added.
		 * @return {UrlChannel} Successful response
		 */
		Adsensehost_urlchannels_insert(adClientId: string, requestBody: UrlChannel): Observable<UrlChannel> {
			return this.http.post<UrlChannel>(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/urlchannels', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Delete a URL channel from the host AdSense account.
		 * Delete adclients/{adClientId}/urlchannels/{urlChannelId}
		 * @param {string} adClientId Ad client from which to delete the URL channel.
		 * @param {string} urlChannelId URL channel to delete.
		 * @return {UrlChannel} Successful response
		 */
		Adsensehost_urlchannels_delete(adClientId: string, urlChannelId: string): Observable<UrlChannel> {
			return this.http.delete<UrlChannel>(this.baseUri + 'adclients/' + (adClientId == null ? '' : encodeURIComponent(adClientId)) + '/urlchannels/' + (urlChannelId == null ? '' : encodeURIComponent(urlChannelId)), {});
		}

		/**
		 * Create an association session for initiating an association with an AdSense user.
		 * Get associationsessions/start
		 * @param {Array<string>} productCode Products to associate with the user.
		 * @param {string} websiteUrl The URL of the user's hosted website.
		 * @param {string} callbackUrl The URL to redirect the user to once association is completed. It receives a token parameter that can then be used to retrieve the associated account.
		 * @param {string} userLocale The preferred locale of the user.
		 * @param {string} websiteLocale The locale of the user's hosted website.
		 * @return {AssociationSession} Successful response
		 */
		Adsensehost_associationsessions_start(productCode: Array<string>, websiteUrl: string, callbackUrl: string | null | undefined, userLocale: string | null | undefined, websiteLocale: string | null | undefined): Observable<AssociationSession> {
			return this.http.get<AssociationSession>(this.baseUri + 'associationsessions/start?' + productCode.map(z => `productCode=${encodeURIComponent(z)}`).join('&') + '&websiteUrl=' + (websiteUrl == null ? '' : encodeURIComponent(websiteUrl)) + '&callbackUrl=' + (callbackUrl == null ? '' : encodeURIComponent(callbackUrl)) + '&userLocale=' + (userLocale == null ? '' : encodeURIComponent(userLocale)) + '&websiteLocale=' + (websiteLocale == null ? '' : encodeURIComponent(websiteLocale)), {});
		}

		/**
		 * Verify an association session after the association callback returns from AdSense signup.
		 * Get associationsessions/verify
		 * @param {string} token The token returned to the association callback URL.
		 * @return {AssociationSession} Successful response
		 */
		Adsensehost_associationsessions_verify(token: string): Observable<AssociationSession> {
			return this.http.get<AssociationSession>(this.baseUri + 'associationsessions/verify?token=' + (token == null ? '' : encodeURIComponent(token)), {});
		}

		/**
		 * Generate an AdSense report based on the report request sent in the query parameters. Returns the result as JSON; to retrieve output in CSV format specify "alt=csv" as a query parameter.
		 * Get reports
		 * @param {string} startDate Start of the date range to report on in "YYYY-MM-DD" format, inclusive.
		 * @param {string} endDate End of the date range to report on in "YYYY-MM-DD" format, inclusive.
		 * @param {Array<string>} dimension Dimensions to base the report on.
		 * @param {Array<string>} filter Filters to be run on the report.
		 * @param {string} locale Optional locale to use for translating report output to a local language. Defaults to "en_US" if not specified.
		 * @param {number} maxResults The maximum number of rows of report data to return.
		 *     Minimum: 0    Maximum: 50000
		 * @param {Array<string>} metric Numeric columns to include in the report.
		 * @param {Array<string>} sort The name of a dimension or metric to sort the resulting report on, optionally prefixed with "+" to sort ascending or "-" to sort descending. If no prefix is specified, the column is sorted ascending.
		 * @param {number} startIndex Index of the first row of report data to return.
		 *     Minimum: 0    Maximum: 5000
		 * @return {Report} Successful response
		 */
		Adsensehost_reports_generate(startDate: string, endDate: string, dimension: Array<string> | null | undefined, filter: Array<string> | null | undefined, locale: string | null | undefined, maxResults: number | null | undefined, metric: Array<string> | null | undefined, sort: Array<string> | null | undefined, startIndex: number | null | undefined): Observable<Report> {
			return this.http.get<Report>(this.baseUri + 'reports?startDate=' + (startDate == null ? '' : encodeURIComponent(startDate)) + '&endDate=' + (endDate == null ? '' : encodeURIComponent(endDate)) + '&' + dimension?.map(z => `dimension=${encodeURIComponent(z)}`).join('&') + '&' + filter?.map(z => `filter=${encodeURIComponent(z)}`).join('&') + '&locale=' + (locale == null ? '' : encodeURIComponent(locale)) + '&maxResults=' + maxResults + '&' + metric?.map(z => `metric=${encodeURIComponent(z)}`).join('&') + '&' + sort?.map(z => `sort=${encodeURIComponent(z)}`).join('&') + '&startIndex=' + startIndex, {});
		}
	}

}

