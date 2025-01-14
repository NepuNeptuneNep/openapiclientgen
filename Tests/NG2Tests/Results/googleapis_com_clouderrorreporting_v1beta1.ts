import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Response message for deleting error events. */
	export interface DeleteEventsResponse {
	}

	/** Response message for deleting error events. */
	export interface DeleteEventsResponseFormProperties {
	}
	export function CreateDeleteEventsResponseFormGroup() {
		return new FormGroup<DeleteEventsResponseFormProperties>({
		});

	}


	/**
	 * A description of the context in which an error occurred.
	 * This data should be provided by the application when reporting an error,
	 * unless the
	 * error report has been generated automatically from Google App Engine logs.
	 */
	export interface ErrorContext {

		/**
		 * HTTP request data that is related to a reported error.
		 * This data should be provided by the application when reporting an error,
		 * unless the
		 * error report has been generated automatically from Google App Engine logs.
		 */
		httpRequest?: HttpRequestContext;

		/**
		 * Indicates a location in the source code of the service for which errors are
		 * reported. `functionName` must be provided by the application when reporting
		 * an error, unless the error report contains a `message` with a supported
		 * exception stack trace. All fields are optional for the later case.
		 */
		reportLocation?: SourceLocation;

		/**
		 * Source code that was used to build the executable which has
		 * caused the given error message.
		 */
		sourceReferences?: Array<SourceReference>;

		/**
		 * The user who caused or was affected by the crash.
		 * This can be a user ID, an email address, or an arbitrary token that
		 * uniquely identifies the user.
		 * When sending an error report, leave this field empty if the user was not
		 * logged in. In this case the
		 * Error Reporting system will use other data, such as remote IP address, to
		 * distinguish affected users. See `affected_users_count` in
		 * `ErrorGroupStats`.
		 */
		user?: string | null;
	}

	/**
	 * A description of the context in which an error occurred.
	 * This data should be provided by the application when reporting an error,
	 * unless the
	 * error report has been generated automatically from Google App Engine logs.
	 */
	export interface ErrorContextFormProperties {

		/**
		 * The user who caused or was affected by the crash.
		 * This can be a user ID, an email address, or an arbitrary token that
		 * uniquely identifies the user.
		 * When sending an error report, leave this field empty if the user was not
		 * logged in. In this case the
		 * Error Reporting system will use other data, such as remote IP address, to
		 * distinguish affected users. See `affected_users_count` in
		 * `ErrorGroupStats`.
		 */
		user: FormControl<string | null | undefined>,
	}
	export function CreateErrorContextFormGroup() {
		return new FormGroup<ErrorContextFormProperties>({
			user: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * HTTP request data that is related to a reported error.
	 * This data should be provided by the application when reporting an error,
	 * unless the
	 * error report has been generated automatically from Google App Engine logs.
	 */
	export interface HttpRequestContext {

		/** The type of HTTP request, such as `GET`, `POST`, etc. */
		method?: string | null;

		/** The referrer information that is provided with the request. */
		referrer?: string | null;

		/**
		 * The IP address from which the request originated.
		 * This can be IPv4, IPv6, or a token which is derived from the
		 * IP address, depending on the data that has been provided
		 * in the error report.
		 */
		remoteIp?: string | null;

		/** The HTTP response status code for the request. */
		responseStatusCode?: number | null;

		/** The URL of the request. */
		url?: string | null;

		/** The user agent information that is provided with the request. */
		userAgent?: string | null;
	}

	/**
	 * HTTP request data that is related to a reported error.
	 * This data should be provided by the application when reporting an error,
	 * unless the
	 * error report has been generated automatically from Google App Engine logs.
	 */
	export interface HttpRequestContextFormProperties {

		/** The type of HTTP request, such as `GET`, `POST`, etc. */
		method: FormControl<string | null | undefined>,

		/** The referrer information that is provided with the request. */
		referrer: FormControl<string | null | undefined>,

		/**
		 * The IP address from which the request originated.
		 * This can be IPv4, IPv6, or a token which is derived from the
		 * IP address, depending on the data that has been provided
		 * in the error report.
		 */
		remoteIp: FormControl<string | null | undefined>,

		/** The HTTP response status code for the request. */
		responseStatusCode: FormControl<number | null | undefined>,

		/** The URL of the request. */
		url: FormControl<string | null | undefined>,

		/** The user agent information that is provided with the request. */
		userAgent: FormControl<string | null | undefined>,
	}
	export function CreateHttpRequestContextFormGroup() {
		return new FormGroup<HttpRequestContextFormProperties>({
			method: new FormControl<string | null | undefined>(undefined),
			referrer: new FormControl<string | null | undefined>(undefined),
			remoteIp: new FormControl<string | null | undefined>(undefined),
			responseStatusCode: new FormControl<number | null | undefined>(undefined),
			url: new FormControl<string | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Indicates a location in the source code of the service for which errors are
	 * reported. `functionName` must be provided by the application when reporting
	 * an error, unless the error report contains a `message` with a supported
	 * exception stack trace. All fields are optional for the later case.
	 */
	export interface SourceLocation {

		/**
		 * The source code filename, which can include a truncated relative
		 * path, or a full path from a production machine.
		 */
		filePath?: string | null;

		/**
		 * Human-readable name of a function or method.
		 * The value can include optional context like the class or package name.
		 * For example, `my.package.MyClass.method` in case of Java.
		 */
		functionName?: string | null;

		/** 1-based. 0 indicates that the line number is unknown. */
		lineNumber?: number | null;
	}

	/**
	 * Indicates a location in the source code of the service for which errors are
	 * reported. `functionName` must be provided by the application when reporting
	 * an error, unless the error report contains a `message` with a supported
	 * exception stack trace. All fields are optional for the later case.
	 */
	export interface SourceLocationFormProperties {

		/**
		 * The source code filename, which can include a truncated relative
		 * path, or a full path from a production machine.
		 */
		filePath: FormControl<string | null | undefined>,

		/**
		 * Human-readable name of a function or method.
		 * The value can include optional context like the class or package name.
		 * For example, `my.package.MyClass.method` in case of Java.
		 */
		functionName: FormControl<string | null | undefined>,

		/** 1-based. 0 indicates that the line number is unknown. */
		lineNumber: FormControl<number | null | undefined>,
	}
	export function CreateSourceLocationFormGroup() {
		return new FormGroup<SourceLocationFormProperties>({
			filePath: new FormControl<string | null | undefined>(undefined),
			functionName: new FormControl<string | null | undefined>(undefined),
			lineNumber: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * A reference to a particular snapshot of the source tree used to build and
	 * deploy an application.
	 */
	export interface SourceReference {

		/**
		 * Optional. A URI string identifying the repository.
		 * Example: "https://github.com/GoogleCloudPlatform/kubernetes.git"
		 */
		repository?: string | null;

		/**
		 * The canonical and persistent identifier of the deployed revision.
		 * Example (git): "0035781c50ec7aa23385dc841529ce8a4b70db1b"
		 */
		revisionId?: string | null;
	}

	/**
	 * A reference to a particular snapshot of the source tree used to build and
	 * deploy an application.
	 */
	export interface SourceReferenceFormProperties {

		/**
		 * Optional. A URI string identifying the repository.
		 * Example: "https://github.com/GoogleCloudPlatform/kubernetes.git"
		 */
		repository: FormControl<string | null | undefined>,

		/**
		 * The canonical and persistent identifier of the deployed revision.
		 * Example (git): "0035781c50ec7aa23385dc841529ce8a4b70db1b"
		 */
		revisionId: FormControl<string | null | undefined>,
	}
	export function CreateSourceReferenceFormGroup() {
		return new FormGroup<SourceReferenceFormProperties>({
			repository: new FormControl<string | null | undefined>(undefined),
			revisionId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An error event which is returned by the Error Reporting system. */
	export interface ErrorEvent {

		/**
		 * A description of the context in which an error occurred.
		 * This data should be provided by the application when reporting an error,
		 * unless the
		 * error report has been generated automatically from Google App Engine logs.
		 */
		context?: ErrorContext;

		/**
		 * Time when the event occurred as provided in the error report.
		 * If the report did not contain a timestamp, the time the error was received
		 * by the Error Reporting system is used.
		 */
		eventTime?: string | null;

		/** The stack trace that was reported or logged by the service. */
		message?: string | null;

		/**
		 * Describes a running service that sends errors.
		 * Its version changes over time and multiple versions can run in parallel.
		 */
		serviceContext?: ServiceContext;
	}

	/** An error event which is returned by the Error Reporting system. */
	export interface ErrorEventFormProperties {

		/**
		 * Time when the event occurred as provided in the error report.
		 * If the report did not contain a timestamp, the time the error was received
		 * by the Error Reporting system is used.
		 */
		eventTime: FormControl<string | null | undefined>,

		/** The stack trace that was reported or logged by the service. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateErrorEventFormGroup() {
		return new FormGroup<ErrorEventFormProperties>({
			eventTime: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Describes a running service that sends errors.
	 * Its version changes over time and multiple versions can run in parallel.
	 */
	export interface ServiceContext {

		/**
		 * Type of the MonitoredResource. List of possible values:
		 * https://cloud.google.com/monitoring/api/resources
		 * Value is set automatically for incoming errors and must not be set when
		 * reporting errors.
		 */
		resourceType?: string | null;

		/**
		 * An identifier of the service, such as the name of the
		 * executable, job, or Google App Engine service name. This field is expected
		 * to have a low number of values that are relatively stable over time, as
		 * opposed to `version`, which can be changed whenever new code is deployed.
		 * Contains the service name for error reports extracted from Google
		 * App Engine logs or `default` if the App Engine default service is used.
		 */
		service?: string | null;

		/**
		 * Represents the source code version that the developer provided,
		 * which could represent a version label or a Git SHA-1 hash, for example.
		 * For App Engine standard environment, the version is set to the version of
		 * the app.
		 */
		version?: string | null;
	}

	/**
	 * Describes a running service that sends errors.
	 * Its version changes over time and multiple versions can run in parallel.
	 */
	export interface ServiceContextFormProperties {

		/**
		 * Type of the MonitoredResource. List of possible values:
		 * https://cloud.google.com/monitoring/api/resources
		 * Value is set automatically for incoming errors and must not be set when
		 * reporting errors.
		 */
		resourceType: FormControl<string | null | undefined>,

		/**
		 * An identifier of the service, such as the name of the
		 * executable, job, or Google App Engine service name. This field is expected
		 * to have a low number of values that are relatively stable over time, as
		 * opposed to `version`, which can be changed whenever new code is deployed.
		 * Contains the service name for error reports extracted from Google
		 * App Engine logs or `default` if the App Engine default service is used.
		 */
		service: FormControl<string | null | undefined>,

		/**
		 * Represents the source code version that the developer provided,
		 * which could represent a version label or a Git SHA-1 hash, for example.
		 * For App Engine standard environment, the version is set to the version of
		 * the app.
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateServiceContextFormGroup() {
		return new FormGroup<ServiceContextFormProperties>({
			resourceType: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Description of a group of similar error events. */
	export interface ErrorGroup {

		/**
		 * Group IDs are unique for a given project. If the same kind of error
		 * occurs in different service contexts, it will receive the same group ID.
		 */
		groupId?: string | null;

		/**
		 * The group resource name.
		 * Example: <code>projects/my-project-123/groups/CNSgkpnppqKCUw</code>
		 */
		name?: string | null;

		/** Associated tracking issues. */
		trackingIssues?: Array<TrackingIssue>;
	}

	/** Description of a group of similar error events. */
	export interface ErrorGroupFormProperties {

		/**
		 * Group IDs are unique for a given project. If the same kind of error
		 * occurs in different service contexts, it will receive the same group ID.
		 */
		groupId: FormControl<string | null | undefined>,

		/**
		 * The group resource name.
		 * Example: <code>projects/my-project-123/groups/CNSgkpnppqKCUw</code>
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateErrorGroupFormGroup() {
		return new FormGroup<ErrorGroupFormProperties>({
			groupId: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information related to tracking the progress on resolving the error. */
	export interface TrackingIssue {

		/**
		 * A URL pointing to a related entry in an issue tracking system.
		 * Example: https://github.com/user/project/issues/4
		 */
		url?: string | null;
	}

	/** Information related to tracking the progress on resolving the error. */
	export interface TrackingIssueFormProperties {

		/**
		 * A URL pointing to a related entry in an issue tracking system.
		 * Example: https://github.com/user/project/issues/4
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateTrackingIssueFormGroup() {
		return new FormGroup<TrackingIssueFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Data extracted for a specific group based on certain filter criteria,
	 * such as a given time period and/or service filter.
	 */
	export interface ErrorGroupStats {

		/**
		 * Service contexts with a non-zero error count for the given filter
		 * criteria. This list can be truncated if multiple services are affected.
		 * Refer to `num_affected_services` for the total count.
		 */
		affectedServices?: Array<ServiceContext>;

		/**
		 * Approximate number of affected users in the given group that
		 * match the filter criteria.
		 * Users are distinguished by data in the `ErrorContext` of the
		 * individual error events, such as their login name or their remote
		 * IP address in case of HTTP requests.
		 * The number of affected users can be zero even if the number of
		 * errors is non-zero if no data was provided from which the
		 * affected user could be deduced.
		 * Users are counted based on data in the request
		 * context that was provided in the error report. If more users are
		 * implicitly affected, such as due to a crash of the whole service,
		 * this is not reflected here.
		 */
		affectedUsersCount?: string | null;

		/**
		 * Approximate total number of events in the given group that match
		 * the filter criteria.
		 */
		count?: string | null;

		/**
		 * Approximate first occurrence that was ever seen for this group
		 * and which matches the given filter criteria, ignoring the
		 * time_range that was specified in the request.
		 */
		firstSeenTime?: string | null;

		/** Description of a group of similar error events. */
		group?: ErrorGroup;

		/**
		 * Approximate last occurrence that was ever seen for this group and
		 * which matches the given filter criteria, ignoring the time_range
		 * that was specified in the request.
		 */
		lastSeenTime?: string | null;

		/**
		 * The total number of services with a non-zero error count for the given
		 * filter criteria.
		 */
		numAffectedServices?: number | null;

		/** An error event which is returned by the Error Reporting system. */
		representative?: ErrorEvent;

		/**
		 * Approximate number of occurrences over time.
		 * Timed counts returned by ListGroups are guaranteed to be:
		 * - Inside the requested time interval
		 * - Non-overlapping, and
		 * - Ordered by ascending time.
		 */
		timedCounts?: Array<TimedCount>;
	}

	/**
	 * Data extracted for a specific group based on certain filter criteria,
	 * such as a given time period and/or service filter.
	 */
	export interface ErrorGroupStatsFormProperties {

		/**
		 * Approximate number of affected users in the given group that
		 * match the filter criteria.
		 * Users are distinguished by data in the `ErrorContext` of the
		 * individual error events, such as their login name or their remote
		 * IP address in case of HTTP requests.
		 * The number of affected users can be zero even if the number of
		 * errors is non-zero if no data was provided from which the
		 * affected user could be deduced.
		 * Users are counted based on data in the request
		 * context that was provided in the error report. If more users are
		 * implicitly affected, such as due to a crash of the whole service,
		 * this is not reflected here.
		 */
		affectedUsersCount: FormControl<string | null | undefined>,

		/**
		 * Approximate total number of events in the given group that match
		 * the filter criteria.
		 */
		count: FormControl<string | null | undefined>,

		/**
		 * Approximate first occurrence that was ever seen for this group
		 * and which matches the given filter criteria, ignoring the
		 * time_range that was specified in the request.
		 */
		firstSeenTime: FormControl<string | null | undefined>,

		/**
		 * Approximate last occurrence that was ever seen for this group and
		 * which matches the given filter criteria, ignoring the time_range
		 * that was specified in the request.
		 */
		lastSeenTime: FormControl<string | null | undefined>,

		/**
		 * The total number of services with a non-zero error count for the given
		 * filter criteria.
		 */
		numAffectedServices: FormControl<number | null | undefined>,
	}
	export function CreateErrorGroupStatsFormGroup() {
		return new FormGroup<ErrorGroupStatsFormProperties>({
			affectedUsersCount: new FormControl<string | null | undefined>(undefined),
			count: new FormControl<string | null | undefined>(undefined),
			firstSeenTime: new FormControl<string | null | undefined>(undefined),
			lastSeenTime: new FormControl<string | null | undefined>(undefined),
			numAffectedServices: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * The number of errors in a given time period.
	 * All numbers are approximate since the error events are sampled
	 * before counting them.
	 */
	export interface TimedCount {

		/** Approximate number of occurrences in the given time period. */
		count?: string | null;

		/** End of the time period to which `count` refers (excluded). */
		endTime?: string | null;

		/** Start of the time period to which `count` refers (included). */
		startTime?: string | null;
	}

	/**
	 * The number of errors in a given time period.
	 * All numbers are approximate since the error events are sampled
	 * before counting them.
	 */
	export interface TimedCountFormProperties {

		/** Approximate number of occurrences in the given time period. */
		count: FormControl<string | null | undefined>,

		/** End of the time period to which `count` refers (excluded). */
		endTime: FormControl<string | null | undefined>,

		/** Start of the time period to which `count` refers (included). */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTimedCountFormGroup() {
		return new FormGroup<TimedCountFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a set of requested error events. */
	export interface ListEventsResponse {

		/** The error events which match the given request. */
		errorEvents?: Array<ErrorEvent>;

		/**
		 * If non-empty, more results are available.
		 * Pass this token, along with the same query parameters as the first
		 * request, to view the next page of results.
		 */
		nextPageToken?: string | null;

		/** The timestamp specifies the start time to which the request was restricted. */
		timeRangeBegin?: string | null;
	}

	/** Contains a set of requested error events. */
	export interface ListEventsResponseFormProperties {

		/**
		 * If non-empty, more results are available.
		 * Pass this token, along with the same query parameters as the first
		 * request, to view the next page of results.
		 */
		nextPageToken: FormControl<string | null | undefined>,

		/** The timestamp specifies the start time to which the request was restricted. */
		timeRangeBegin: FormControl<string | null | undefined>,
	}
	export function CreateListEventsResponseFormGroup() {
		return new FormGroup<ListEventsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			timeRangeBegin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains a set of requested error group stats. */
	export interface ListGroupStatsResponse {

		/** The error group stats which match the given request. */
		errorGroupStats?: Array<ErrorGroupStats>;

		/**
		 * If non-empty, more results are available.
		 * Pass this token, along with the same query parameters as the first
		 * request, to view the next page of results.
		 */
		nextPageToken?: string | null;

		/**
		 * The timestamp specifies the start time to which the request was restricted.
		 * The start time is set based on the requested time range. It may be adjusted
		 * to a later time if a project has exceeded the storage quota and older data
		 * has been deleted.
		 */
		timeRangeBegin?: string | null;
	}

	/** Contains a set of requested error group stats. */
	export interface ListGroupStatsResponseFormProperties {

		/**
		 * If non-empty, more results are available.
		 * Pass this token, along with the same query parameters as the first
		 * request, to view the next page of results.
		 */
		nextPageToken: FormControl<string | null | undefined>,

		/**
		 * The timestamp specifies the start time to which the request was restricted.
		 * The start time is set based on the requested time range. It may be adjusted
		 * to a later time if a project has exceeded the storage quota and older data
		 * has been deleted.
		 */
		timeRangeBegin: FormControl<string | null | undefined>,
	}
	export function CreateListGroupStatsResponseFormGroup() {
		return new FormGroup<ListGroupStatsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
			timeRangeBegin: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Response for reporting an individual error event.
	 * Data may be added to this message in the future.
	 */
	export interface ReportErrorEventResponse {
	}

	/**
	 * Response for reporting an individual error event.
	 * Data may be added to this message in the future.
	 */
	export interface ReportErrorEventResponseFormProperties {
	}
	export function CreateReportErrorEventResponseFormGroup() {
		return new FormGroup<ReportErrorEventResponseFormProperties>({
		});

	}


	/** An error event which is reported to the Error Reporting system. */
	export interface ReportedErrorEvent {

		/**
		 * A description of the context in which an error occurred.
		 * This data should be provided by the application when reporting an error,
		 * unless the
		 * error report has been generated automatically from Google App Engine logs.
		 */
		context?: ErrorContext;

		/**
		 * Optional. Time when the event occurred.
		 * If not provided, the time when the event was received by the
		 * Error Reporting system will be used.
		 */
		eventTime?: string | null;

		/**
		 * Required. The error message.
		 * If no `context.reportLocation` is provided, the message must contain a
		 * header (typically consisting of the exception type name and an error
		 * message) and an exception stack trace in one of the supported programming
		 * languages and formats.
		 * Supported languages are Java, Python, JavaScript, Ruby, C#, PHP, and Go.
		 * Supported stack trace formats are:
		 * * **Java**: Must be the return value of
		 * [`Throwable.printStackTrace()`](https://docs.oracle.com/javase/7/docs/api/java/lang/Throwable.html#printStackTrace%28%29).
		 * * **Python**: Must be the return value of
		 * [`traceback.format_exc()`](https://docs.python.org/2/library/traceback.html#traceback.format_exc).
		 * * **JavaScript**: Must be the value of
		 * [`error.stack`](https://github.com/v8/v8/wiki/Stack-Trace-API) as returned
		 * by V8.
		 * * **Ruby**: Must contain frames returned by
		 * [`Exception.backtrace`](https://ruby-doc.org/core-2.2.0/Exception.html#method-i-backtrace).
		 * * **C#**: Must be the return value of
		 * [`Exception.ToString()`](https://msdn.microsoft.com/en-us/library/system.exception.tostring.aspx).
		 * * **PHP**: Must start with `PHP (Notice|Parse error|Fatal error|Warning)`
		 * and contain the result of
		 * [`(string)$exception`](http://php.net/manual/en/exception.tostring.php).
		 * * **Go**: Must be the return value of
		 * [`runtime.Stack()`](https://golang.org/pkg/runtime/debug/#Stack).
		 */
		message?: string | null;

		/**
		 * Describes a running service that sends errors.
		 * Its version changes over time and multiple versions can run in parallel.
		 */
		serviceContext?: ServiceContext;
	}

	/** An error event which is reported to the Error Reporting system. */
	export interface ReportedErrorEventFormProperties {

		/**
		 * Optional. Time when the event occurred.
		 * If not provided, the time when the event was received by the
		 * Error Reporting system will be used.
		 */
		eventTime: FormControl<string | null | undefined>,

		/**
		 * Required. The error message.
		 * If no `context.reportLocation` is provided, the message must contain a
		 * header (typically consisting of the exception type name and an error
		 * message) and an exception stack trace in one of the supported programming
		 * languages and formats.
		 * Supported languages are Java, Python, JavaScript, Ruby, C#, PHP, and Go.
		 * Supported stack trace formats are:
		 * * **Java**: Must be the return value of
		 * [`Throwable.printStackTrace()`](https://docs.oracle.com/javase/7/docs/api/java/lang/Throwable.html#printStackTrace%28%29).
		 * * **Python**: Must be the return value of
		 * [`traceback.format_exc()`](https://docs.python.org/2/library/traceback.html#traceback.format_exc).
		 * * **JavaScript**: Must be the value of
		 * [`error.stack`](https://github.com/v8/v8/wiki/Stack-Trace-API) as returned
		 * by V8.
		 * * **Ruby**: Must contain frames returned by
		 * [`Exception.backtrace`](https://ruby-doc.org/core-2.2.0/Exception.html#method-i-backtrace).
		 * * **C#**: Must be the return value of
		 * [`Exception.ToString()`](https://msdn.microsoft.com/en-us/library/system.exception.tostring.aspx).
		 * * **PHP**: Must start with `PHP (Notice|Parse error|Fatal error|Warning)`
		 * and contain the result of
		 * [`(string)$exception`](http://php.net/manual/en/exception.tostring.php).
		 * * **Go**: Must be the return value of
		 * [`runtime.Stack()`](https://golang.org/pkg/runtime/debug/#Stack).
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateReportedErrorEventFormGroup() {
		return new FormGroup<ReportedErrorEventFormProperties>({
			eventTime: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Get the specified group.
		 * Get v1beta1/{groupName}
		 * @param {string} groupName Required. The group resource name. Written as
		 * <code>projects/<var>projectID</var>/groups/<var>group_name</var></code>.
		 * Call
		 * <a href="/error-reporting/reference/rest/v1beta1/projects.groupStats/list">
		 * <code>groupStats.list</code></a> to return a list of groups belonging to
		 * this project.
		 * Example: <code>projects/my-project-123/groups/my-group</code>
		 * @return {void} Successful response
		 */
		Clouderrorreporting_projects_groups_get(groupName: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (groupName == null ? '' : encodeURIComponent(groupName)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Replace the data for the specified group.
		 * Fails if the group does not exist.
		 * Put v1beta1/{name}
		 * @param {string} name The group resource name.
		 * Example: <code>projects/my-project-123/groups/CNSgkpnppqKCUw</code>
		 * @return {void} Successful response
		 */
		Clouderrorreporting_projects_groups_update(name: string, requestBody: ErrorGroup): Observable<HttpResponse<string>> {
			return this.http.put(this.baseUri + 'v1beta1/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes all error events of a given project.
		 * Delete v1beta1/{projectName}/events
		 * @param {string} projectName Required. The resource name of the Google Cloud Platform project. Written
		 * as `projects/{projectID}`, where `{projectID}` is the
		 * [Google Cloud Platform project
		 * ID](https://support.google.com/cloud/answer/6158840).
		 * Example: `projects/my-project-123`.
		 * @return {void} Successful response
		 */
		Clouderrorreporting_projects_deleteEvents(projectName: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v1beta1/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/events', { observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the specified events.
		 * Get v1beta1/{projectName}/events
		 * @param {string} projectName Required. The resource name of the Google Cloud Platform project. Written
		 * as `projects/{projectID}`, where `{projectID}` is the
		 * [Google Cloud Platform project
		 * ID](https://support.google.com/cloud/answer/6158840).
		 * Example: `projects/my-project-123`.
		 * @param {string} groupId Required. The group for which events shall be returned.
		 * @param {number} pageSize Optional. The maximum number of results to return per response.
		 * @param {string} pageToken Optional. A `next_page_token` provided by a previous response.
		 * @param {string} serviceFilter_resourceType Optional. The exact value to match against
		 * [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type).
		 * @param {string} serviceFilter_service Optional. The exact value to match against
		 * [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service).
		 * @param {string} serviceFilter_version Optional. The exact value to match against
		 * [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version).
		 * @param {Clouderrorreporting_projects_events_listTimeRange_period} timeRange_period Restricts the query to the specified time range.
		 * @return {void} Successful response
		 */
		Clouderrorreporting_projects_events_list(projectName: string, groupId: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, serviceFilter_resourceType: string | null | undefined, serviceFilter_service: string | null | undefined, serviceFilter_version: string | null | undefined, timeRange_period: Clouderrorreporting_projects_events_listTimeRange_period | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/events&groupId=' + (groupId == null ? '' : encodeURIComponent(groupId)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&serviceFilter_resourceType=' + (serviceFilter_resourceType == null ? '' : encodeURIComponent(serviceFilter_resourceType)) + '&serviceFilter_service=' + (serviceFilter_service == null ? '' : encodeURIComponent(serviceFilter_service)) + '&serviceFilter_version=' + (serviceFilter_version == null ? '' : encodeURIComponent(serviceFilter_version)) + '&timeRange_period=' + timeRange_period, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Report an individual error event.
		 * This endpoint accepts **either** an OAuth token,
		 * **or** an [API key](https://support.google.com/cloud/answer/6158862)
		 * for authentication. To use an API key, append it to the URL as the value of
		 * a `key` parameter. For example:
		 * `POST
		 * https://clouderrorreporting.googleapis.com/v1beta1/{projectName}/events:report?key=123ABC456`
		 * Post v1beta1/{projectName}/events:report
		 * @param {string} projectName Required. The resource name of the Google Cloud Platform project. Written
		 * as `projects/{projectId}`, where `{projectId}` is the
		 * [Google Cloud Platform project
		 * ID](https://support.google.com/cloud/answer/6158840).
		 * Example: // `projects/my-project-123`.
		 * @return {void} Successful response
		 */
		Clouderrorreporting_projects_events_report(projectName: string, requestBody: ReportedErrorEvent): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v1beta1/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/events:report', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists the specified groups.
		 * Get v1beta1/{projectName}/groupStats
		 * @param {string} projectName Required. The resource name of the Google Cloud Platform project. Written
		 * as `projects/{projectID}`, where `{projectID}` is the
		 * [Google Cloud Platform project
		 * ID](https://support.google.com/cloud/answer/6158840).
		 * Example: `projects/my-project-123`.
		 * @param {Clouderrorreporting_projects_groupStats_listAlignment} alignment Optional. The alignment of the timed counts to be returned.
		 * Default is `ALIGNMENT_EQUAL_AT_END`.
		 * @param {string} alignmentTime Optional. Time where the timed counts shall be aligned if rounded
		 * alignment is chosen. Default is 00:00 UTC.
		 * @param {Array<string>} groupId Optional. List all <code>ErrorGroupStats</code> with these IDs.
		 * @param {Clouderrorreporting_projects_groupStats_listOrder} order Optional. The sort order in which the results are returned.
		 * Default is `COUNT_DESC`.
		 * @param {number} pageSize Optional. The maximum number of results to return per response.
		 * Default is 20.
		 * @param {string} pageToken Optional. A `next_page_token` provided by a previous response. To view
		 * additional results, pass this token along with the identical query
		 * parameters as the first request.
		 * @param {string} serviceFilter_resourceType Optional. The exact value to match against
		 * [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type).
		 * @param {string} serviceFilter_service Optional. The exact value to match against
		 * [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service).
		 * @param {string} serviceFilter_version Optional. The exact value to match against
		 * [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version).
		 * @param {Clouderrorreporting_projects_events_listTimeRange_period} timeRange_period Restricts the query to the specified time range.
		 * @param {string} timedCountDuration Optional. The preferred duration for a single returned `TimedCount`.
		 * If not set, no timed counts are returned.
		 * @return {void} Successful response
		 */
		Clouderrorreporting_projects_groupStats_list(projectName: string, alignment: Clouderrorreporting_projects_groupStats_listAlignment | null | undefined, alignmentTime: string | null | undefined, groupId: Array<string> | null | undefined, order: Clouderrorreporting_projects_groupStats_listOrder | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, serviceFilter_resourceType: string | null | undefined, serviceFilter_service: string | null | undefined, serviceFilter_version: string | null | undefined, timeRange_period: Clouderrorreporting_projects_events_listTimeRange_period | null | undefined, timedCountDuration: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v1beta1/' + (projectName == null ? '' : encodeURIComponent(projectName)) + '/groupStats&alignment=' + alignment + '&alignmentTime=' + (alignmentTime == null ? '' : encodeURIComponent(alignmentTime)) + '&' + groupId?.map(z => `groupId=${encodeURIComponent(z)}`).join('&') + '&order=' + order + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&serviceFilter_resourceType=' + (serviceFilter_resourceType == null ? '' : encodeURIComponent(serviceFilter_resourceType)) + '&serviceFilter_service=' + (serviceFilter_service == null ? '' : encodeURIComponent(serviceFilter_service)) + '&serviceFilter_version=' + (serviceFilter_version == null ? '' : encodeURIComponent(serviceFilter_version)) + '&timeRange_period=' + timeRange_period + '&timedCountDuration=' + (timedCountDuration == null ? '' : encodeURIComponent(timedCountDuration)), { observe: 'response', responseType: 'text' });
		}
	}

	export enum Clouderrorreporting_projects_events_listTimeRange_period { PERIOD_UNSPECIFIED = 0, PERIOD_1_HOUR = 1, PERIOD_6_HOURS = 2, PERIOD_1_DAY = 3, PERIOD_1_WEEK = 4, PERIOD_30_DAYS = 5 }

	export enum Clouderrorreporting_projects_groupStats_listAlignment { ERROR_COUNT_ALIGNMENT_UNSPECIFIED = 0, ALIGNMENT_EQUAL_ROUNDED = 1, ALIGNMENT_EQUAL_AT_END = 2 }

	export enum Clouderrorreporting_projects_groupStats_listOrder { GROUP_ORDER_UNSPECIFIED = 0, COUNT_DESC = 1, LAST_SEEN_DESC = 2, CREATED_DESC = 3, AFFECTED_USERS_DESC = 4 }

}

