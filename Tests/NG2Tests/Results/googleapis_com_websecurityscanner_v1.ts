import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Scan authentication configuration. */
	export interface Authentication {

		/** Describes authentication configuration that uses a custom account. */
		customAccount?: CustomAccount;

		/** Describes authentication configuration that uses a Google account. */
		googleAccount?: GoogleAccount;

		/** Describes authentication configuration for Identity-Aware-Proxy (IAP). */
		iapCredential?: IapCredential;
	}

	/** Scan authentication configuration. */
	export interface AuthenticationFormProperties {
	}
	export function CreateAuthenticationFormGroup() {
		return new FormGroup<AuthenticationFormProperties>({
		});

	}


	/** Describes authentication configuration that uses a custom account. */
	export interface CustomAccount {

		/** Required. The login form URL of the website. */
		loginUrl?: string | null;

		/**
		 * Required. Input only. The password of the custom account. The credential is stored encrypted
		 * and not returned in any response nor included in audit logs.
		 */
		password?: string | null;

		/** Required. The user name of the custom account. */
		username?: string | null;
	}

	/** Describes authentication configuration that uses a custom account. */
	export interface CustomAccountFormProperties {

		/** Required. The login form URL of the website. */
		loginUrl: FormControl<string | null | undefined>,

		/**
		 * Required. Input only. The password of the custom account. The credential is stored encrypted
		 * and not returned in any response nor included in audit logs.
		 */
		password: FormControl<string | null | undefined>,

		/** Required. The user name of the custom account. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateCustomAccountFormGroup() {
		return new FormGroup<CustomAccountFormProperties>({
			loginUrl: new FormControl<string | null | undefined>(undefined),
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes authentication configuration that uses a Google account. */
	export interface GoogleAccount {

		/**
		 * Required. Input only. The password of the Google account. The credential is stored encrypted
		 * and not returned in any response nor included in audit logs.
		 */
		password?: string | null;

		/** Required. The user name of the Google account. */
		username?: string | null;
	}

	/** Describes authentication configuration that uses a Google account. */
	export interface GoogleAccountFormProperties {

		/**
		 * Required. Input only. The password of the Google account. The credential is stored encrypted
		 * and not returned in any response nor included in audit logs.
		 */
		password: FormControl<string | null | undefined>,

		/** Required. The user name of the Google account. */
		username: FormControl<string | null | undefined>,
	}
	export function CreateGoogleAccountFormGroup() {
		return new FormGroup<GoogleAccountFormProperties>({
			password: new FormControl<string | null | undefined>(undefined),
			username: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Describes authentication configuration for Identity-Aware-Proxy (IAP). */
	export interface IapCredential {

		/**
		 * Describes authentication configuration when Web-Security-Scanner
		 * service account is added in Identity-Aware-Proxy (IAP) access policies.
		 */
		iapTestServiceAccountInfo?: IapTestServiceAccountInfo;
	}

	/** Describes authentication configuration for Identity-Aware-Proxy (IAP). */
	export interface IapCredentialFormProperties {
	}
	export function CreateIapCredentialFormGroup() {
		return new FormGroup<IapCredentialFormProperties>({
		});

	}


	/**
	 * Describes authentication configuration when Web-Security-Scanner
	 * service account is added in Identity-Aware-Proxy (IAP) access policies.
	 */
	export interface IapTestServiceAccountInfo {

		/**
		 * Required. Describes OAuth2 client id of resources protected by
		 * Identity-Aware-Proxy (IAP).
		 */
		targetAudienceClientId?: string | null;
	}

	/**
	 * Describes authentication configuration when Web-Security-Scanner
	 * service account is added in Identity-Aware-Proxy (IAP) access policies.
	 */
	export interface IapTestServiceAccountInfoFormProperties {

		/**
		 * Required. Describes OAuth2 client id of resources protected by
		 * Identity-Aware-Proxy (IAP).
		 */
		targetAudienceClientId: FormControl<string | null | undefined>,
	}
	export function CreateIapTestServiceAccountInfoFormGroup() {
		return new FormGroup<IapTestServiceAccountInfoFormProperties>({
			targetAudienceClientId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A CrawledUrl resource represents a URL that was crawled during a ScanRun. Web
	 * Security Scanner Service crawls the web applications, following all links
	 * within the scope of sites, to find the URLs to test against.
	 */
	export interface CrawledUrl {

		/** Output only. The body of the request that was used to visit the URL. */
		body?: string | null;

		/**
		 * Output only. The http method of the request that was used to visit the URL, in
		 * uppercase.
		 */
		httpMethod?: string | null;

		/** Output only. The URL that was crawled. */
		url?: string | null;
	}

	/**
	 * A CrawledUrl resource represents a URL that was crawled during a ScanRun. Web
	 * Security Scanner Service crawls the web applications, following all links
	 * within the scope of sites, to find the URLs to test against.
	 */
	export interface CrawledUrlFormProperties {

		/** Output only. The body of the request that was used to visit the URL. */
		body: FormControl<string | null | undefined>,

		/**
		 * Output only. The http method of the request that was used to visit the URL, in
		 * uppercase.
		 */
		httpMethod: FormControl<string | null | undefined>,

		/** Output only. The URL that was crawled. */
		url: FormControl<string | null | undefined>,
	}
	export function CreateCrawledUrlFormGroup() {
		return new FormGroup<CrawledUrlFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			httpMethod: new FormControl<string | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface Empty {
	}

	/**
	 * A generic empty message that you can re-use to avoid defining duplicated
	 * empty messages in your APIs. A typical example is to use it as the request
	 * or the response type of an API method. For instance:
	 *     service Foo {
	 *       rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
	 *     }
	 * The JSON representation for `Empty` is empty JSON object `{}`.
	 */
	export interface EmptyFormProperties {
	}
	export function CreateEmptyFormGroup() {
		return new FormGroup<EmptyFormProperties>({
		});

	}


	/**
	 * A Finding resource represents a vulnerability instance identified during a
	 * ScanRun.
	 */
	export interface Finding {

		/** Output only. The body of the request that triggered the vulnerability. */
		body?: string | null;

		/** Output only. The description of the vulnerability. */
		description?: string | null;

		/** Output only. The URL where the browser lands when the vulnerability is detected. */
		finalUrl?: string | null;

		/**
		 * Output only. The type of the Finding.
		 * Detailed and up-to-date information on findings can be found here:
		 * https://cloud.google.com/security-scanner/docs/scan-result-details
		 */
		findingType?: string | null;

		/** ! Information about a vulnerability with an HTML. */
		form?: Form;

		/**
		 * Output only. If the vulnerability was originated from nested IFrame, the immediate
		 * parent IFrame is reported.
		 */
		frameUrl?: string | null;

		/**
		 * Output only. The URL produced by the server-side fuzzer and used in the request that
		 * triggered the vulnerability.
		 */
		fuzzedUrl?: string | null;

		/**
		 * Output only. The http method of the request that triggered the vulnerability, in
		 * uppercase.
		 */
		httpMethod?: string | null;

		/**
		 * Output only. The resource name of the Finding. The name follows the format of
		 * 'projects/{projectId}/scanConfigs/{scanConfigId}/scanruns/{scanRunId}/findings/{findingId}'.
		 * The finding IDs are generated by the system.
		 */
		name?: string | null;

		/** Information reported for an outdated library. */
		outdatedLibrary?: OutdatedLibrary;

		/**
		 * Output only. The URL containing human-readable payload that user can leverage to
		 * reproduce the vulnerability.
		 */
		reproductionUrl?: string | null;

		/** Output only. The severity level of the reported vulnerability. */
		severity?: FindingSeverity | null;

		/**
		 * Output only. The tracking ID uniquely identifies a vulnerability instance across
		 * multiple ScanRuns.
		 */
		trackingId?: string | null;

		/**
		 * Information regarding any resource causing the vulnerability such
		 * as JavaScript sources, image, audio files, etc.
		 */
		violatingResource?: ViolatingResource;

		/** Information about vulnerable or missing HTTP Headers. */
		vulnerableHeaders?: VulnerableHeaders;

		/** Information about vulnerable request parameters. */
		vulnerableParameters?: VulnerableParameters;

		/** Information reported for an XSS. */
		xss?: Xss;
	}

	/**
	 * A Finding resource represents a vulnerability instance identified during a
	 * ScanRun.
	 */
	export interface FindingFormProperties {

		/** Output only. The body of the request that triggered the vulnerability. */
		body: FormControl<string | null | undefined>,

		/** Output only. The description of the vulnerability. */
		description: FormControl<string | null | undefined>,

		/** Output only. The URL where the browser lands when the vulnerability is detected. */
		finalUrl: FormControl<string | null | undefined>,

		/**
		 * Output only. The type of the Finding.
		 * Detailed and up-to-date information on findings can be found here:
		 * https://cloud.google.com/security-scanner/docs/scan-result-details
		 */
		findingType: FormControl<string | null | undefined>,

		/**
		 * Output only. If the vulnerability was originated from nested IFrame, the immediate
		 * parent IFrame is reported.
		 */
		frameUrl: FormControl<string | null | undefined>,

		/**
		 * Output only. The URL produced by the server-side fuzzer and used in the request that
		 * triggered the vulnerability.
		 */
		fuzzedUrl: FormControl<string | null | undefined>,

		/**
		 * Output only. The http method of the request that triggered the vulnerability, in
		 * uppercase.
		 */
		httpMethod: FormControl<string | null | undefined>,

		/**
		 * Output only. The resource name of the Finding. The name follows the format of
		 * 'projects/{projectId}/scanConfigs/{scanConfigId}/scanruns/{scanRunId}/findings/{findingId}'.
		 * The finding IDs are generated by the system.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Output only. The URL containing human-readable payload that user can leverage to
		 * reproduce the vulnerability.
		 */
		reproductionUrl: FormControl<string | null | undefined>,

		/** Output only. The severity level of the reported vulnerability. */
		severity: FormControl<FindingSeverity | null | undefined>,

		/**
		 * Output only. The tracking ID uniquely identifies a vulnerability instance across
		 * multiple ScanRuns.
		 */
		trackingId: FormControl<string | null | undefined>,
	}
	export function CreateFindingFormGroup() {
		return new FormGroup<FindingFormProperties>({
			body: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			finalUrl: new FormControl<string | null | undefined>(undefined),
			findingType: new FormControl<string | null | undefined>(undefined),
			frameUrl: new FormControl<string | null | undefined>(undefined),
			fuzzedUrl: new FormControl<string | null | undefined>(undefined),
			httpMethod: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			reproductionUrl: new FormControl<string | null | undefined>(undefined),
			severity: new FormControl<FindingSeverity | null | undefined>(undefined),
			trackingId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** ! Information about a vulnerability with an HTML. */
	export interface Form {

		/** ! The URI where to send the form when it's submitted. */
		actionUri?: string | null;

		/** ! The names of form fields related to the vulnerability. */
		fields?: Array<string>;
	}

	/** ! Information about a vulnerability with an HTML. */
	export interface FormFormProperties {

		/** ! The URI where to send the form when it's submitted. */
		actionUri: FormControl<string | null | undefined>,
	}
	export function CreateFormFormGroup() {
		return new FormGroup<FormFormProperties>({
			actionUri: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information reported for an outdated library. */
	export interface OutdatedLibrary {

		/** URLs to learn more information about the vulnerabilities in the library. */
		learnMoreUrls?: Array<string>;

		/** The name of the outdated library. */
		libraryName?: string | null;

		/** The version number. */
		version?: string | null;
	}

	/** Information reported for an outdated library. */
	export interface OutdatedLibraryFormProperties {

		/** The name of the outdated library. */
		libraryName: FormControl<string | null | undefined>,

		/** The version number. */
		version: FormControl<string | null | undefined>,
	}
	export function CreateOutdatedLibraryFormGroup() {
		return new FormGroup<OutdatedLibraryFormProperties>({
			libraryName: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum FindingSeverity { SEVERITY_UNSPECIFIED = 0, CRITICAL = 1, HIGH = 2, MEDIUM = 3, LOW = 4 }


	/**
	 * Information regarding any resource causing the vulnerability such
	 * as JavaScript sources, image, audio files, etc.
	 */
	export interface ViolatingResource {

		/** The MIME type of this resource. */
		contentType?: string | null;

		/** URL of this violating resource. */
		resourceUrl?: string | null;
	}

	/**
	 * Information regarding any resource causing the vulnerability such
	 * as JavaScript sources, image, audio files, etc.
	 */
	export interface ViolatingResourceFormProperties {

		/** The MIME type of this resource. */
		contentType: FormControl<string | null | undefined>,

		/** URL of this violating resource. */
		resourceUrl: FormControl<string | null | undefined>,
	}
	export function CreateViolatingResourceFormGroup() {
		return new FormGroup<ViolatingResourceFormProperties>({
			contentType: new FormControl<string | null | undefined>(undefined),
			resourceUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about vulnerable or missing HTTP Headers. */
	export interface VulnerableHeaders {

		/** List of vulnerable headers. */
		headers?: Array<Header>;

		/** List of missing headers. */
		missingHeaders?: Array<Header>;
	}

	/** Information about vulnerable or missing HTTP Headers. */
	export interface VulnerableHeadersFormProperties {
	}
	export function CreateVulnerableHeadersFormGroup() {
		return new FormGroup<VulnerableHeadersFormProperties>({
		});

	}


	/** Describes a HTTP Header. */
	export interface Header {

		/** Header name. */
		name?: string | null;

		/** Header value. */
		value?: string | null;
	}

	/** Describes a HTTP Header. */
	export interface HeaderFormProperties {

		/** Header name. */
		name: FormControl<string | null | undefined>,

		/** Header value. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateHeaderFormGroup() {
		return new FormGroup<HeaderFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information about vulnerable request parameters. */
	export interface VulnerableParameters {

		/** The vulnerable parameter names. */
		parameterNames?: Array<string>;
	}

	/** Information about vulnerable request parameters. */
	export interface VulnerableParametersFormProperties {
	}
	export function CreateVulnerableParametersFormGroup() {
		return new FormGroup<VulnerableParametersFormProperties>({
		});

	}


	/** Information reported for an XSS. */
	export interface Xss {

		/** The attack vector of the payload triggering this XSS. */
		attackVector?: XssAttackVector | null;

		/** An error message generated by a javascript breakage. */
		errorMessage?: string | null;

		/** Stack traces leading to the point where the XSS occurred. */
		stackTraces?: Array<string>;

		/** The reproduction url for the seeding POST request of a Stored XSS. */
		storedXssSeedingUrl?: string | null;
	}

	/** Information reported for an XSS. */
	export interface XssFormProperties {

		/** The attack vector of the payload triggering this XSS. */
		attackVector: FormControl<XssAttackVector | null | undefined>,

		/** An error message generated by a javascript breakage. */
		errorMessage: FormControl<string | null | undefined>,

		/** The reproduction url for the seeding POST request of a Stored XSS. */
		storedXssSeedingUrl: FormControl<string | null | undefined>,
	}
	export function CreateXssFormGroup() {
		return new FormGroup<XssFormProperties>({
			attackVector: new FormControl<XssAttackVector | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			storedXssSeedingUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum XssAttackVector { ATTACK_VECTOR_UNSPECIFIED = 0, LOCAL_STORAGE = 1, SESSION_STORAGE = 2, WINDOW_NAME = 3, REFERRER = 4, FORM_INPUT = 5, COOKIE = 6, POST_MESSAGE = 7, GET_PARAMETERS = 8, URL_FRAGMENT = 9, HTML_COMMENT = 10, POST_PARAMETERS = 11, PROTOCOL = 12, STORED_XSS = 13, SAME_ORIGIN = 14, USER_CONTROLLABLE_URL = 15 }


	/**
	 * A FindingTypeStats resource represents stats regarding a specific FindingType
	 * of Findings under a given ScanRun.
	 */
	export interface FindingTypeStats {

		/** Output only. The count of findings belonging to this finding type. */
		findingCount?: number | null;

		/** Output only. The finding type associated with the stats. */
		findingType?: string | null;
	}

	/**
	 * A FindingTypeStats resource represents stats regarding a specific FindingType
	 * of Findings under a given ScanRun.
	 */
	export interface FindingTypeStatsFormProperties {

		/** Output only. The count of findings belonging to this finding type. */
		findingCount: FormControl<number | null | undefined>,

		/** Output only. The finding type associated with the stats. */
		findingType: FormControl<string | null | undefined>,
	}
	export function CreateFindingTypeStatsFormGroup() {
		return new FormGroup<FindingTypeStatsFormProperties>({
			findingCount: new FormControl<number | null | undefined>(undefined),
			findingType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListCrawledUrls` method. */
	export interface ListCrawledUrlsResponse {

		/** The list of CrawledUrls returned. */
		crawledUrls?: Array<CrawledUrl>;

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string | null;
	}

	/** Response for the `ListCrawledUrls` method. */
	export interface ListCrawledUrlsResponseFormProperties {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListCrawledUrlsResponseFormGroup() {
		return new FormGroup<ListCrawledUrlsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListFindingTypeStats` method. */
	export interface ListFindingTypeStatsResponse {

		/** The list of FindingTypeStats returned. */
		findingTypeStats?: Array<FindingTypeStats>;
	}

	/** Response for the `ListFindingTypeStats` method. */
	export interface ListFindingTypeStatsResponseFormProperties {
	}
	export function CreateListFindingTypeStatsResponseFormGroup() {
		return new FormGroup<ListFindingTypeStatsResponseFormProperties>({
		});

	}


	/** Response for the `ListFindings` method. */
	export interface ListFindingsResponse {

		/** The list of Findings returned. */
		findings?: Array<Finding>;

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string | null;
	}

	/** Response for the `ListFindings` method. */
	export interface ListFindingsResponseFormProperties {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListFindingsResponseFormGroup() {
		return new FormGroup<ListFindingsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response for the `ListScanConfigs` method. */
	export interface ListScanConfigsResponse {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string | null;

		/** The list of ScanConfigs returned. */
		scanConfigs?: Array<ScanConfig>;
	}

	/** Response for the `ListScanConfigs` method. */
	export interface ListScanConfigsResponseFormProperties {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListScanConfigsResponseFormGroup() {
		return new FormGroup<ListScanConfigsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A ScanConfig resource contains the configurations to launch a scan. */
	export interface ScanConfig {

		/** Scan authentication configuration. */
		authentication?: Authentication;

		/**
		 * The blacklist URL patterns as described in
		 * https://cloud.google.com/security-scanner/docs/excluded-urls
		 */
		blacklistPatterns?: Array<string>;

		/** Required. The user provided display name of the ScanConfig. */
		displayName?: string | null;

		/**
		 * Controls export of scan configurations and results to Cloud Security
		 * Command Center.
		 */
		exportToSecurityCommandCenter?: ScanConfigExportToSecurityCommandCenter | null;

		/**
		 * Whether the scan config is managed by Cloud Web Security Scanner, output
		 * only.
		 */
		managedScan?: boolean | null;

		/**
		 * The maximum QPS during scanning. A valid value ranges from 5 to 20
		 * inclusively. If the field is unspecified or its value is set 0, server will
		 * default to 15. Other values outside of [5, 20] range will be rejected with
		 * INVALID_ARGUMENT error.
		 */
		maxQps?: number | null;

		/**
		 * The resource name of the ScanConfig. The name follows the format of
		 * 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are
		 * generated by the system.
		 */
		name?: string | null;

		/** The risk level selected for the scan */
		riskLevel?: ScanConfigRiskLevel | null;

		/** Scan schedule configuration. */
		schedule?: Schedule;

		/** Required. The starting URLs from which the scanner finds site pages. */
		startingUrls?: Array<string>;

		/**
		 * Whether the scan configuration has enabled static IP address scan feature.
		 * If enabled, the scanner will access applications from static IP addresses.
		 */
		staticIpScan?: boolean | null;

		/** The user agent used during scanning. */
		userAgent?: ScanConfigUserAgent | null;
	}

	/** A ScanConfig resource contains the configurations to launch a scan. */
	export interface ScanConfigFormProperties {

		/** Required. The user provided display name of the ScanConfig. */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Controls export of scan configurations and results to Cloud Security
		 * Command Center.
		 */
		exportToSecurityCommandCenter: FormControl<ScanConfigExportToSecurityCommandCenter | null | undefined>,

		/**
		 * Whether the scan config is managed by Cloud Web Security Scanner, output
		 * only.
		 */
		managedScan: FormControl<boolean | null | undefined>,

		/**
		 * The maximum QPS during scanning. A valid value ranges from 5 to 20
		 * inclusively. If the field is unspecified or its value is set 0, server will
		 * default to 15. Other values outside of [5, 20] range will be rejected with
		 * INVALID_ARGUMENT error.
		 */
		maxQps: FormControl<number | null | undefined>,

		/**
		 * The resource name of the ScanConfig. The name follows the format of
		 * 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are
		 * generated by the system.
		 */
		name: FormControl<string | null | undefined>,

		/** The risk level selected for the scan */
		riskLevel: FormControl<ScanConfigRiskLevel | null | undefined>,

		/**
		 * Whether the scan configuration has enabled static IP address scan feature.
		 * If enabled, the scanner will access applications from static IP addresses.
		 */
		staticIpScan: FormControl<boolean | null | undefined>,

		/** The user agent used during scanning. */
		userAgent: FormControl<ScanConfigUserAgent | null | undefined>,
	}
	export function CreateScanConfigFormGroup() {
		return new FormGroup<ScanConfigFormProperties>({
			displayName: new FormControl<string | null | undefined>(undefined),
			exportToSecurityCommandCenter: new FormControl<ScanConfigExportToSecurityCommandCenter | null | undefined>(undefined),
			managedScan: new FormControl<boolean | null | undefined>(undefined),
			maxQps: new FormControl<number | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			riskLevel: new FormControl<ScanConfigRiskLevel | null | undefined>(undefined),
			staticIpScan: new FormControl<boolean | null | undefined>(undefined),
			userAgent: new FormControl<ScanConfigUserAgent | null | undefined>(undefined),
		});

	}

	export enum ScanConfigExportToSecurityCommandCenter { EXPORT_TO_SECURITY_COMMAND_CENTER_UNSPECIFIED = 0, ENABLED = 1, DISABLED = 2 }

	export enum ScanConfigRiskLevel { RISK_LEVEL_UNSPECIFIED = 0, NORMAL = 1, LOW = 2 }


	/** Scan schedule configuration. */
	export interface Schedule {

		/** Required. The duration of time between executions in days. */
		intervalDurationDays?: number | null;

		/**
		 * A timestamp indicates when the next run will be scheduled. The value is
		 * refreshed by the server after each run. If unspecified, it will default
		 * to current server time, which means the scan will be scheduled to start
		 * immediately.
		 */
		scheduleTime?: string | null;
	}

	/** Scan schedule configuration. */
	export interface ScheduleFormProperties {

		/** Required. The duration of time between executions in days. */
		intervalDurationDays: FormControl<number | null | undefined>,

		/**
		 * A timestamp indicates when the next run will be scheduled. The value is
		 * refreshed by the server after each run. If unspecified, it will default
		 * to current server time, which means the scan will be scheduled to start
		 * immediately.
		 */
		scheduleTime: FormControl<string | null | undefined>,
	}
	export function CreateScheduleFormGroup() {
		return new FormGroup<ScheduleFormProperties>({
			intervalDurationDays: new FormControl<number | null | undefined>(undefined),
			scheduleTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScanConfigUserAgent { USER_AGENT_UNSPECIFIED = 0, CHROME_LINUX = 1, CHROME_ANDROID = 2, SAFARI_IPHONE = 3 }


	/** Response for the `ListScanRuns` method. */
	export interface ListScanRunsResponse {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken?: string | null;

		/** The list of ScanRuns returned. */
		scanRuns?: Array<ScanRun>;
	}

	/** Response for the `ListScanRuns` method. */
	export interface ListScanRunsResponseFormProperties {

		/**
		 * Token to retrieve the next page of results, or empty if there are no
		 * more results in the list.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateListScanRunsResponseFormGroup() {
		return new FormGroup<ListScanRunsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A ScanRun is a output-only resource representing an actual run of the scan.
	 * Next id: 12
	 */
	export interface ScanRun {

		/**
		 * Output only. The time at which the ScanRun reached termination state - that the ScanRun
		 * is either finished or stopped by user.
		 */
		endTime?: string | null;

		/**
		 * Output only.
		 * Defines an error trace message for a ScanRun.
		 */
		errorTrace?: ScanRunErrorTrace;

		/** Output only. The execution state of the ScanRun. */
		executionState?: ScanRunExecutionState | null;

		/** Output only. Whether the scan run has found any vulnerabilities. */
		hasVulnerabilities?: boolean | null;

		/**
		 * Output only. The resource name of the ScanRun. The name follows the format of
		 * 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
		 * The ScanRun IDs are generated by the system.
		 */
		name?: string | null;

		/**
		 * Output only. The percentage of total completion ranging from 0 to 100.
		 * If the scan is in queue, the value is 0.
		 * If the scan is running, the value ranges from 0 to 100.
		 * If the scan is finished, the value is 100.
		 */
		progressPercent?: number | null;

		/**
		 * Output only. The result state of the ScanRun. This field is only available after the
		 * execution state reaches "FINISHED".
		 */
		resultState?: ScanRunResultState | null;

		/** Output only. The time at which the ScanRun started. */
		startTime?: string | null;

		/**
		 * Output only. The number of URLs crawled during this ScanRun. If the scan is in progress,
		 * the value represents the number of URLs crawled up to now.
		 */
		urlsCrawledCount?: string | null;

		/**
		 * Output only. The number of URLs tested during this ScanRun. If the scan is in progress,
		 * the value represents the number of URLs tested up to now. The number of
		 * URLs tested is usually larger than the number URLS crawled because
		 * typically a crawled URL is tested with multiple test payloads.
		 */
		urlsTestedCount?: string | null;

		/** Output only. A list of warnings, if such are encountered during this scan run. */
		warningTraces?: Array<ScanRunWarningTrace>;
	}

	/**
	 * A ScanRun is a output-only resource representing an actual run of the scan.
	 * Next id: 12
	 */
	export interface ScanRunFormProperties {

		/**
		 * Output only. The time at which the ScanRun reached termination state - that the ScanRun
		 * is either finished or stopped by user.
		 */
		endTime: FormControl<string | null | undefined>,

		/** Output only. The execution state of the ScanRun. */
		executionState: FormControl<ScanRunExecutionState | null | undefined>,

		/** Output only. Whether the scan run has found any vulnerabilities. */
		hasVulnerabilities: FormControl<boolean | null | undefined>,

		/**
		 * Output only. The resource name of the ScanRun. The name follows the format of
		 * 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
		 * The ScanRun IDs are generated by the system.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * Output only. The percentage of total completion ranging from 0 to 100.
		 * If the scan is in queue, the value is 0.
		 * If the scan is running, the value ranges from 0 to 100.
		 * If the scan is finished, the value is 100.
		 */
		progressPercent: FormControl<number | null | undefined>,

		/**
		 * Output only. The result state of the ScanRun. This field is only available after the
		 * execution state reaches "FINISHED".
		 */
		resultState: FormControl<ScanRunResultState | null | undefined>,

		/** Output only. The time at which the ScanRun started. */
		startTime: FormControl<string | null | undefined>,

		/**
		 * Output only. The number of URLs crawled during this ScanRun. If the scan is in progress,
		 * the value represents the number of URLs crawled up to now.
		 */
		urlsCrawledCount: FormControl<string | null | undefined>,

		/**
		 * Output only. The number of URLs tested during this ScanRun. If the scan is in progress,
		 * the value represents the number of URLs tested up to now. The number of
		 * URLs tested is usually larger than the number URLS crawled because
		 * typically a crawled URL is tested with multiple test payloads.
		 */
		urlsTestedCount: FormControl<string | null | undefined>,
	}
	export function CreateScanRunFormGroup() {
		return new FormGroup<ScanRunFormProperties>({
			endTime: new FormControl<string | null | undefined>(undefined),
			executionState: new FormControl<ScanRunExecutionState | null | undefined>(undefined),
			hasVulnerabilities: new FormControl<boolean | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			progressPercent: new FormControl<number | null | undefined>(undefined),
			resultState: new FormControl<ScanRunResultState | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			urlsCrawledCount: new FormControl<string | null | undefined>(undefined),
			urlsTestedCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Output only.
	 * Defines an error trace message for a ScanRun.
	 */
	export interface ScanRunErrorTrace {

		/** Output only. Indicates the error reason code. */
		code?: ScanRunErrorTraceCode | null;

		/**
		 * Output only. If the scan encounters TOO_MANY_HTTP_ERRORS, this field indicates the most
		 * common HTTP error code, if such is available. For example, if this code is
		 * 404, the scan has encountered too many NOT_FOUND responses.
		 */
		mostCommonHttpErrorCode?: number | null;

		/**
		 * Defines a custom error message used by CreateScanConfig and UpdateScanConfig
		 * APIs when scan configuration validation fails. It is also reported as part of
		 * a ScanRunErrorTrace message if scan validation fails due to a scan
		 * configuration error.
		 */
		scanConfigError?: ScanConfigError;
	}

	/**
	 * Output only.
	 * Defines an error trace message for a ScanRun.
	 */
	export interface ScanRunErrorTraceFormProperties {

		/** Output only. Indicates the error reason code. */
		code: FormControl<ScanRunErrorTraceCode | null | undefined>,

		/**
		 * Output only. If the scan encounters TOO_MANY_HTTP_ERRORS, this field indicates the most
		 * common HTTP error code, if such is available. For example, if this code is
		 * 404, the scan has encountered too many NOT_FOUND responses.
		 */
		mostCommonHttpErrorCode: FormControl<number | null | undefined>,
	}
	export function CreateScanRunErrorTraceFormGroup() {
		return new FormGroup<ScanRunErrorTraceFormProperties>({
			code: new FormControl<ScanRunErrorTraceCode | null | undefined>(undefined),
			mostCommonHttpErrorCode: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum ScanRunErrorTraceCode { CODE_UNSPECIFIED = 0, INTERNAL_ERROR = 1, SCAN_CONFIG_ISSUE = 2, AUTHENTICATION_CONFIG_ISSUE = 3, TIMED_OUT_WHILE_SCANNING = 4, TOO_MANY_REDIRECTS = 5, TOO_MANY_HTTP_ERRORS = 6 }


	/**
	 * Defines a custom error message used by CreateScanConfig and UpdateScanConfig
	 * APIs when scan configuration validation fails. It is also reported as part of
	 * a ScanRunErrorTrace message if scan validation fails due to a scan
	 * configuration error.
	 */
	export interface ScanConfigError {

		/** Output only. Indicates the reason code for a configuration failure. */
		code?: ScanConfigErrorCode | null;

		/**
		 * Output only. Indicates the full name of the ScanConfig field that triggers this error,
		 * for example "scan_config.max_qps". This field is provided for
		 * troubleshooting purposes only and its actual value can change in the
		 * future.
		 */
		fieldName?: string | null;
	}

	/**
	 * Defines a custom error message used by CreateScanConfig and UpdateScanConfig
	 * APIs when scan configuration validation fails. It is also reported as part of
	 * a ScanRunErrorTrace message if scan validation fails due to a scan
	 * configuration error.
	 */
	export interface ScanConfigErrorFormProperties {

		/** Output only. Indicates the reason code for a configuration failure. */
		code: FormControl<ScanConfigErrorCode | null | undefined>,

		/**
		 * Output only. Indicates the full name of the ScanConfig field that triggers this error,
		 * for example "scan_config.max_qps". This field is provided for
		 * troubleshooting purposes only and its actual value can change in the
		 * future.
		 */
		fieldName: FormControl<string | null | undefined>,
	}
	export function CreateScanConfigErrorFormGroup() {
		return new FormGroup<ScanConfigErrorFormProperties>({
			code: new FormControl<ScanConfigErrorCode | null | undefined>(undefined),
			fieldName: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum ScanConfigErrorCode { CODE_UNSPECIFIED = 0, OK = 1, INTERNAL_ERROR = 2, APPENGINE_API_BACKEND_ERROR = 3, APPENGINE_API_NOT_ACCESSIBLE = 4, APPENGINE_DEFAULT_HOST_MISSING = 5, CANNOT_USE_GOOGLE_COM_ACCOUNT = 6, CANNOT_USE_OWNER_ACCOUNT = 7, COMPUTE_API_BACKEND_ERROR = 8, COMPUTE_API_NOT_ACCESSIBLE = 9, CUSTOM_LOGIN_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT = 10, CUSTOM_LOGIN_URL_MALFORMED = 11, CUSTOM_LOGIN_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS = 12, CUSTOM_LOGIN_URL_MAPPED_TO_UNRESERVED_ADDRESS = 13, CUSTOM_LOGIN_URL_HAS_NON_ROUTABLE_IP_ADDRESS = 14, CUSTOM_LOGIN_URL_HAS_UNRESERVED_IP_ADDRESS = 15, DUPLICATE_SCAN_NAME = 16, INVALID_FIELD_VALUE = 17, FAILED_TO_AUTHENTICATE_TO_TARGET = 18, FINDING_TYPE_UNSPECIFIED = 19, FORBIDDEN_TO_SCAN_COMPUTE = 20, FORBIDDEN_UPDATE_TO_MANAGED_SCAN = 21, MALFORMED_FILTER = 22, MALFORMED_RESOURCE_NAME = 23, PROJECT_INACTIVE = 24, REQUIRED_FIELD = 25, RESOURCE_NAME_INCONSISTENT = 26, SCAN_ALREADY_RUNNING = 27, SCAN_NOT_RUNNING = 28, SEED_URL_DOES_NOT_BELONG_TO_CURRENT_PROJECT = 29, SEED_URL_MALFORMED = 30, SEED_URL_MAPPED_TO_NON_ROUTABLE_ADDRESS = 31, SEED_URL_MAPPED_TO_UNRESERVED_ADDRESS = 32, SEED_URL_HAS_NON_ROUTABLE_IP_ADDRESS = 33, SEED_URL_HAS_UNRESERVED_IP_ADDRESS = 34, SERVICE_ACCOUNT_NOT_CONFIGURED = 35, TOO_MANY_SCANS = 36, UNABLE_TO_RESOLVE_PROJECT_INFO = 37, UNSUPPORTED_BLACKLIST_PATTERN_FORMAT = 38, UNSUPPORTED_FILTER = 39, UNSUPPORTED_FINDING_TYPE = 40, UNSUPPORTED_URL_SCHEME = 41 }

	export enum ScanRunExecutionState { EXECUTION_STATE_UNSPECIFIED = 0, QUEUED = 1, SCANNING = 2, FINISHED = 3 }

	export enum ScanRunResultState { RESULT_STATE_UNSPECIFIED = 0, SUCCESS = 1, ERROR = 2, KILLED = 3 }


	/**
	 * Output only.
	 * Defines a warning trace message for ScanRun. Warning traces provide customers
	 * with useful information that helps make the scanning process more effective.
	 */
	export interface ScanRunWarningTrace {

		/** Output only. Indicates the warning code. */
		code?: ScanRunWarningTraceCode | null;
	}

	/**
	 * Output only.
	 * Defines a warning trace message for ScanRun. Warning traces provide customers
	 * with useful information that helps make the scanning process more effective.
	 */
	export interface ScanRunWarningTraceFormProperties {

		/** Output only. Indicates the warning code. */
		code: FormControl<ScanRunWarningTraceCode | null | undefined>,
	}
	export function CreateScanRunWarningTraceFormGroup() {
		return new FormGroup<ScanRunWarningTraceFormProperties>({
			code: new FormControl<ScanRunWarningTraceCode | null | undefined>(undefined),
		});

	}

	export enum ScanRunWarningTraceCode { CODE_UNSPECIFIED = 0, INSUFFICIENT_CRAWL_RESULTS = 1, TOO_MANY_CRAWL_RESULTS = 2, TOO_MANY_FUZZ_TASKS = 3, BLOCKED_BY_IAP = 4 }


	/** Request for the `StartScanRun` method. */
	export interface StartScanRunRequest {
	}

	/** Request for the `StartScanRun` method. */
	export interface StartScanRunRequestFormProperties {
	}
	export function CreateStartScanRunRequestFormGroup() {
		return new FormGroup<StartScanRunRequestFormProperties>({
		});

	}


	/** Request for the `StopScanRun` method. */
	export interface StopScanRunRequest {
	}

	/** Request for the `StopScanRun` method. */
	export interface StopScanRunRequestFormProperties {
	}
	export function CreateStopScanRunRequestFormGroup() {
		return new FormGroup<StopScanRunRequestFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Deletes an existing ScanConfig and its child resources.
		 * Delete v1/{name}
		 * @param {string} name Required. The resource name of the ScanConfig to be deleted. The name follows the
		 * format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
		 * @return {void} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a Finding.
		 * Get v1/{name}
		 * @param {string} name Required. The resource name of the Finding to be returned. The name follows the
		 * format of
		 * 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}/findings/{findingId}'.
		 * @return {void} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_scanRuns_findings_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a ScanConfig. This method support partial update of a ScanConfig.
		 * Patch v1/{name}
		 * @param {string} name The resource name of the ScanConfig. The name follows the format of
		 * 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are
		 * generated by the system.
		 * @param {string} updateMask Required. The update mask applies to the resource. For the `FieldMask` definition,
		 * see
		 * https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
		 * @return {void} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_patch(name: string, updateMask: string | null | undefined, requestBody: ScanConfig): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + '&updateMask=' + (updateMask == null ? '' : encodeURIComponent(updateMask)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Start a ScanRun according to the given ScanConfig.
		 * Post v1/{name}:start
		 * @param {string} name Required. The resource name of the ScanConfig to be used. The name follows the
		 * format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
		 * @return {void} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_start(name: string, requestBody: StartScanRunRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':start', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Stops a ScanRun. The stopped ScanRun is returned.
		 * Post v1/{name}:stop
		 * @param {string} name Required. The resource name of the ScanRun to be stopped. The name follows the
		 * format of
		 * 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
		 * @return {void} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_scanRuns_stop(name: string, requestBody: StopScanRunRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (name == null ? '' : encodeURIComponent(name)) + ':stop', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * List CrawledUrls under a given ScanRun.
		 * Get v1/{parent}/crawledUrls
		 * @param {string} parent Required. The parent resource name, which should be a scan run resource name in the
		 * format
		 * 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
		 * @param {number} pageSize The maximum number of CrawledUrls to return, can be limited by server.
		 * If not specified or not positive, the implementation will select a
		 * reasonable value.
		 * @param {string} pageToken A token identifying a page of results to be returned. This should be a
		 * `next_page_token` value returned from a previous List request.
		 * If unspecified, the first page of results is returned.
		 * @return {void} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_scanRuns_crawledUrls_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/crawledUrls&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * List all FindingTypeStats under a given ScanRun.
		 * Get v1/{parent}/findingTypeStats
		 * @param {string} parent Required. The parent resource name, which should be a scan run resource name in the
		 * format
		 * 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
		 * @return {void} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_scanRuns_findingTypeStats_list(parent: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/findingTypeStats', { observe: 'response', responseType: 'text' });
		}

		/**
		 * List Findings under a given ScanRun.
		 * Get v1/{parent}/findings
		 * @param {string} parent Required. The parent resource name, which should be a scan run resource name in the
		 * format
		 * 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
		 * @param {string} filter The filter expression. The expression must be in the format: <field>
		 * <operator> <value>.
		 * Supported field: 'finding_type'.
		 * Supported operator: '='.
		 * @param {number} pageSize The maximum number of Findings to return, can be limited by server.
		 * If not specified or not positive, the implementation will select a
		 * reasonable value.
		 * @param {string} pageToken A token identifying a page of results to be returned. This should be a
		 * `next_page_token` value returned from a previous List request.
		 * If unspecified, the first page of results is returned.
		 * @return {void} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_scanRuns_findings_list(parent: string, filter: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/findings&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists ScanConfigs under a given project.
		 * Get v1/{parent}/scanConfigs
		 * @param {string} parent Required. The parent resource name, which should be a project resource name in the
		 * format 'projects/{projectId}'.
		 * @param {number} pageSize The maximum number of ScanConfigs to return, can be limited by server.
		 * If not specified or not positive, the implementation will select a
		 * reasonable value.
		 * @param {string} pageToken A token identifying a page of results to be returned. This should be a
		 * `next_page_token` value returned from a previous List request.
		 * If unspecified, the first page of results is returned.
		 * @return {void} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/scanConfigs&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new ScanConfig.
		 * Post v1/{parent}/scanConfigs
		 * @param {string} parent Required. The parent resource name where the scan is created, which should be a
		 * project resource name in the format 'projects/{projectId}'.
		 * @return {void} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_create(parent: string, requestBody: ScanConfig): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/scanConfigs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists ScanRuns under a given ScanConfig, in descending order of ScanRun
		 * stop time.
		 * Get v1/{parent}/scanRuns
		 * @param {string} parent Required. The parent resource name, which should be a scan resource name in the
		 * format 'projects/{projectId}/scanConfigs/{scanConfigId}'.
		 * @param {number} pageSize The maximum number of ScanRuns to return, can be limited by server.
		 * If not specified or not positive, the implementation will select a
		 * reasonable value.
		 * @param {string} pageToken A token identifying a page of results to be returned. This should be a
		 * `next_page_token` value returned from a previous List request.
		 * If unspecified, the first page of results is returned.
		 * @return {void} Successful response
		 */
		Websecurityscanner_projects_scanConfigs_scanRuns_list(parent: string, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1/' + (parent == null ? '' : encodeURIComponent(parent)) + '/scanRuns&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}
	}

}
