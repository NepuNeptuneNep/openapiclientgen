import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** AMP URL response for a requested URL. */
	export interface AmpUrl {

		/** The AMP URL pointing to the publisher's web server. */
		ampUrl?: string | null;

		/**
		 * The [AMP Cache URL](/amp/cache/overview#amp-cache-url-format) pointing to
		 * the cached document in the Google AMP Cache.
		 */
		cdnAmpUrl?: string | null;

		/** The original non-AMP URL. */
		originalUrl?: string | null;
	}

	/** AMP URL response for a requested URL. */
	export interface AmpUrlFormProperties {

		/** The AMP URL pointing to the publisher's web server. */
		ampUrl: FormControl<string | null | undefined>,

		/**
		 * The [AMP Cache URL](/amp/cache/overview#amp-cache-url-format) pointing to
		 * the cached document in the Google AMP Cache.
		 */
		cdnAmpUrl: FormControl<string | null | undefined>,

		/** The original non-AMP URL. */
		originalUrl: FormControl<string | null | undefined>,
	}
	export function CreateAmpUrlFormGroup() {
		return new FormGroup<AmpUrlFormProperties>({
			ampUrl: new FormControl<string | null | undefined>(undefined),
			cdnAmpUrl: new FormControl<string | null | undefined>(undefined),
			originalUrl: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** AMP URL Error resource for a requested URL that couldn't be found. */
	export interface AmpUrlError {

		/** The error code of an API call. */
		errorCode?: AmpUrlErrorErrorCode | null;

		/** An optional descriptive error message. */
		errorMessage?: string | null;

		/** The original non-AMP URL. */
		originalUrl?: string | null;
	}

	/** AMP URL Error resource for a requested URL that couldn't be found. */
	export interface AmpUrlErrorFormProperties {

		/** The error code of an API call. */
		errorCode: FormControl<AmpUrlErrorErrorCode | null | undefined>,

		/** An optional descriptive error message. */
		errorMessage: FormControl<string | null | undefined>,

		/** The original non-AMP URL. */
		originalUrl: FormControl<string | null | undefined>,
	}
	export function CreateAmpUrlErrorFormGroup() {
		return new FormGroup<AmpUrlErrorFormProperties>({
			errorCode: new FormControl<AmpUrlErrorErrorCode | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			originalUrl: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum AmpUrlErrorErrorCode { ERROR_CODE_UNSPECIFIED = 0, INPUT_URL_NOT_FOUND = 1, NO_AMP_URL = 2, APPLICATION_ERROR = 3, URL_IS_VALID_AMP = 4, URL_IS_INVALID_AMP = 5 }


	/** AMP URL request for a batch of URLs. */
	export interface BatchGetAmpUrlsRequest {

		/** The lookup_strategy being requested. */
		lookupStrategy?: BatchGetAmpUrlsRequestLookupStrategy | null;

		/**
		 * List of URLs to look up for the paired AMP URLs.
		 * The URLs are case-sensitive. Up to 50 URLs per lookup
		 * (see [Usage Limits](/amp/cache/reference/limits)).
		 */
		urls?: Array<string>;
	}

	/** AMP URL request for a batch of URLs. */
	export interface BatchGetAmpUrlsRequestFormProperties {

		/** The lookup_strategy being requested. */
		lookupStrategy: FormControl<BatchGetAmpUrlsRequestLookupStrategy | null | undefined>,
	}
	export function CreateBatchGetAmpUrlsRequestFormGroup() {
		return new FormGroup<BatchGetAmpUrlsRequestFormProperties>({
			lookupStrategy: new FormControl<BatchGetAmpUrlsRequestLookupStrategy | null | undefined>(undefined),
		});

	}

	export enum BatchGetAmpUrlsRequestLookupStrategy { FETCH_LIVE_DOC = 0, IN_INDEX_DOC = 1 }


	/** Batch AMP URL response. */
	export interface BatchGetAmpUrlsResponse {

		/**
		 * For each URL in BatchAmpUrlsRequest, the URL response. The response might
		 * not be in the same order as URLs in the batch request.
		 * If BatchAmpUrlsRequest contains duplicate URLs, AmpUrl is generated
		 * only once.
		 */
		ampUrls?: Array<AmpUrl>;

		/** The errors for requested URLs that have no AMP URL. */
		urlErrors?: Array<AmpUrlError>;
	}

	/** Batch AMP URL response. */
	export interface BatchGetAmpUrlsResponseFormProperties {
	}
	export function CreateBatchGetAmpUrlsResponseFormGroup() {
		return new FormGroup<BatchGetAmpUrlsResponseFormProperties>({
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns AMP URL(s) and equivalent
		 * [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).
		 * Post v1/ampUrls:batchGet
		 * @return {void} Successful response
		 */
		Acceleratedmobilepageurl_ampUrls_batchGet(requestBody: BatchGetAmpUrlsRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1/ampUrls:batchGet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

