import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Text annotation with a set of attributes. */
	export interface Annotation {

		/** A set of attributes, each in the format `[KEY]:[VALUE]`. */
		attributes?: Attributes;

		/** Represents a string that might be shortened to a specified length. */
		description?: TruncatableString;
	}

	/** Text annotation with a set of attributes. */
	export interface AnnotationFormProperties {
	}
	export function CreateAnnotationFormGroup() {
		return new FormGroup<AnnotationFormProperties>({
		});

	}


	/** A set of attributes, each in the format `[KEY]:[VALUE]`. */
	export interface Attributes {

		/**
		 * The set of attributes. Each attribute's key can be up to 128 bytes
		 * long. The value can be a string up to 256 bytes, a signed 64-bit integer,
		 * or the Boolean values `true` and `false`. For example:
		 * "/instance_id": "my-instance"
		 * "/http/user_agent": ""
		 * "/http/request_bytes": 300
		 * "abc.com/myattribute": true
		 */
		attributeMap?: {[id: string]: AttributeValue };

		/**
		 * The number of attributes that were discarded. Attributes can be discarded
		 * because their keys are too long or because there are too many attributes.
		 * If this value is 0 then all attributes are valid.
		 */
		droppedAttributesCount?: number | null;
	}

	/** A set of attributes, each in the format `[KEY]:[VALUE]`. */
	export interface AttributesFormProperties {

		/**
		 * The set of attributes. Each attribute's key can be up to 128 bytes
		 * long. The value can be a string up to 256 bytes, a signed 64-bit integer,
		 * or the Boolean values `true` and `false`. For example:
		 * "/instance_id": "my-instance"
		 * "/http/user_agent": ""
		 * "/http/request_bytes": 300
		 * "abc.com/myattribute": true
		 */
		attributeMap: FormControl<{[id: string]: AttributeValue } | null | undefined>,

		/**
		 * The number of attributes that were discarded. Attributes can be discarded
		 * because their keys are too long or because there are too many attributes.
		 * If this value is 0 then all attributes are valid.
		 */
		droppedAttributesCount: FormControl<number | null | undefined>,
	}
	export function CreateAttributesFormGroup() {
		return new FormGroup<AttributesFormProperties>({
			attributeMap: new FormControl<{[id: string]: AttributeValue } | null | undefined>(undefined),
			droppedAttributesCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** The allowed types for [VALUE] in a `[KEY]:[VALUE]` attribute. */
	export interface AttributeValue {

		/** A Boolean value represented by `true` or `false`. */
		boolValue?: boolean | null;

		/** A 64-bit signed integer. */
		intValue?: string | null;

		/** Represents a string that might be shortened to a specified length. */
		stringValue?: TruncatableString;
	}

	/** The allowed types for [VALUE] in a `[KEY]:[VALUE]` attribute. */
	export interface AttributeValueFormProperties {

		/** A Boolean value represented by `true` or `false`. */
		boolValue: FormControl<boolean | null | undefined>,

		/** A 64-bit signed integer. */
		intValue: FormControl<string | null | undefined>,
	}
	export function CreateAttributeValueFormGroup() {
		return new FormGroup<AttributeValueFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			intValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a string that might be shortened to a specified length. */
	export interface TruncatableString {

		/**
		 * The number of bytes removed from the original string. If this
		 * value is 0, then the string was not shortened.
		 */
		truncatedByteCount?: number | null;

		/**
		 * The shortened string. For example, if the original string is 500
		 * bytes long and the limit of the string is 128 bytes, then
		 * `value` contains the first 128 bytes of the 500-byte string.
		 * Truncation always happens on a UTF8 character boundary. If there
		 * are multi-byte characters in the string, then the length of the
		 * shortened string might be less than the size limit.
		 */
		value?: string | null;
	}

	/** Represents a string that might be shortened to a specified length. */
	export interface TruncatableStringFormProperties {

		/**
		 * The number of bytes removed from the original string. If this
		 * value is 0, then the string was not shortened.
		 */
		truncatedByteCount: FormControl<number | null | undefined>,

		/**
		 * The shortened string. For example, if the original string is 500
		 * bytes long and the limit of the string is 128 bytes, then
		 * `value` contains the first 128 bytes of the 500-byte string.
		 * Truncation always happens on a UTF8 character boundary. If there
		 * are multi-byte characters in the string, then the length of the
		 * shortened string might be less than the size limit.
		 */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTruncatableStringFormGroup() {
		return new FormGroup<TruncatableStringFormProperties>({
			truncatedByteCount: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The request message for the `BatchWriteSpans` method. */
	export interface BatchWriteSpansRequest {

		/**
		 * Required. A list of new spans. The span names must not match existing
		 * spans, or the results are undefined.
		 */
		spans?: Array<Span>;
	}

	/** The request message for the `BatchWriteSpans` method. */
	export interface BatchWriteSpansRequestFormProperties {
	}
	export function CreateBatchWriteSpansRequestFormGroup() {
		return new FormGroup<BatchWriteSpansRequestFormProperties>({
		});

	}


	/**
	 * A span represents a single operation within a trace. Spans can be
	 * nested to form a trace tree. Often, a trace contains a root span
	 * that describes the end-to-end latency, and one or more subspans for
	 * its sub-operations. A trace can also contain multiple root spans,
	 * or none at all. Spans do not need to be contiguous&mdash;there may be
	 * gaps or overlaps between spans in a trace.
	 */
	export interface Span {

		/** A set of attributes, each in the format `[KEY]:[VALUE]`. */
		attributes?: Attributes;

		/**
		 * Optional. The number of child spans that were generated while this span
		 * was active. If set, allows implementation to detect missing child spans.
		 */
		childSpanCount?: number | null;

		/** Represents a string that might be shortened to a specified length. */
		displayName?: TruncatableString;

		/**
		 * Required. The end time of the span. On the client side, this is the time kept by
		 * the local machine where the span execution ends. On the server side, this
		 * is the time when the server application handler stops running.
		 */
		endTime?: string | null;

		/**
		 * A collection of links, which are references from this span to a span
		 * in the same or different trace.
		 */
		links?: Links;

		/**
		 * The resource name of the span in the following format:
		 * projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project;
		 * it is a 32-character hexadecimal encoding of a 16-byte array.
		 * [SPAN_ID] is a unique identifier for a span within a trace; it
		 * is a 16-character hexadecimal encoding of an 8-byte array.
		 */
		name?: string | null;

		/**
		 * The [SPAN_ID] of this span's parent span. If this is a root span,
		 * then this field must be empty.
		 */
		parentSpanId?: string | null;

		/**
		 * Optional. Set this parameter to indicate whether this span is in
		 * the same process as its parent. If you do not set this parameter,
		 * Stackdriver Trace is unable to take advantage of this helpful
		 * information.
		 */
		sameProcessAsParentSpan?: boolean | null;

		/** Required. The [SPAN_ID] portion of the span's resource name. */
		spanId?: string | null;

		/**
		 * Distinguishes between spans generated in a particular context. For example,
		 * two spans with the same name may be distinguished using `CLIENT` (caller)
		 * and `SERVER` (callee) to identify an RPC call.
		 */
		spanKind?: SpanSpanKind | null;

		/** A call stack appearing in a trace. */
		stackTrace?: StackTrace;

		/**
		 * Required. The start time of the span. On the client side, this is the time kept by
		 * the local machine where the span execution starts. On the server side, this
		 * is the time when the server's application handler starts running.
		 */
		startTime?: string | null;

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		status?: Status;

		/**
		 * A collection of `TimeEvent`s. A `TimeEvent` is a time-stamped annotation
		 * on the span, consisting of either user-supplied key:value pairs, or
		 * details of a message sent/received between Spans.
		 */
		timeEvents?: TimeEvents;
	}

	/**
	 * A span represents a single operation within a trace. Spans can be
	 * nested to form a trace tree. Often, a trace contains a root span
	 * that describes the end-to-end latency, and one or more subspans for
	 * its sub-operations. A trace can also contain multiple root spans,
	 * or none at all. Spans do not need to be contiguous&mdash;there may be
	 * gaps or overlaps between spans in a trace.
	 */
	export interface SpanFormProperties {

		/**
		 * Optional. The number of child spans that were generated while this span
		 * was active. If set, allows implementation to detect missing child spans.
		 */
		childSpanCount: FormControl<number | null | undefined>,

		/**
		 * Required. The end time of the span. On the client side, this is the time kept by
		 * the local machine where the span execution ends. On the server side, this
		 * is the time when the server application handler stops running.
		 */
		endTime: FormControl<string | null | undefined>,

		/**
		 * The resource name of the span in the following format:
		 * projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project;
		 * it is a 32-character hexadecimal encoding of a 16-byte array.
		 * [SPAN_ID] is a unique identifier for a span within a trace; it
		 * is a 16-character hexadecimal encoding of an 8-byte array.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The [SPAN_ID] of this span's parent span. If this is a root span,
		 * then this field must be empty.
		 */
		parentSpanId: FormControl<string | null | undefined>,

		/**
		 * Optional. Set this parameter to indicate whether this span is in
		 * the same process as its parent. If you do not set this parameter,
		 * Stackdriver Trace is unable to take advantage of this helpful
		 * information.
		 */
		sameProcessAsParentSpan: FormControl<boolean | null | undefined>,

		/** Required. The [SPAN_ID] portion of the span's resource name. */
		spanId: FormControl<string | null | undefined>,

		/**
		 * Distinguishes between spans generated in a particular context. For example,
		 * two spans with the same name may be distinguished using `CLIENT` (caller)
		 * and `SERVER` (callee) to identify an RPC call.
		 */
		spanKind: FormControl<SpanSpanKind | null | undefined>,

		/**
		 * Required. The start time of the span. On the client side, this is the time kept by
		 * the local machine where the span execution starts. On the server side, this
		 * is the time when the server's application handler starts running.
		 */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateSpanFormGroup() {
		return new FormGroup<SpanFormProperties>({
			childSpanCount: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentSpanId: new FormControl<string | null | undefined>(undefined),
			sameProcessAsParentSpan: new FormControl<boolean | null | undefined>(undefined),
			spanId: new FormControl<string | null | undefined>(undefined),
			spanKind: new FormControl<SpanSpanKind | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A collection of links, which are references from this span to a span
	 * in the same or different trace.
	 */
	export interface Links {

		/**
		 * The number of dropped links after the maximum size was enforced. If
		 * this value is 0, then no links were dropped.
		 */
		droppedLinksCount?: number | null;

		/** A collection of links. */
		link?: Array<Link>;
	}

	/**
	 * A collection of links, which are references from this span to a span
	 * in the same or different trace.
	 */
	export interface LinksFormProperties {

		/**
		 * The number of dropped links after the maximum size was enforced. If
		 * this value is 0, then no links were dropped.
		 */
		droppedLinksCount: FormControl<number | null | undefined>,
	}
	export function CreateLinksFormGroup() {
		return new FormGroup<LinksFormProperties>({
			droppedLinksCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * A pointer from the current span to another span in the same trace or in a
	 * different trace. For example, this can be used in batching operations,
	 * where a single batch handler processes multiple requests from different
	 * traces or when the handler receives a request from a different project.
	 */
	export interface Link {

		/** A set of attributes, each in the format `[KEY]:[VALUE]`. */
		attributes?: Attributes;

		/** The [SPAN_ID] for a span within a trace. */
		spanId?: string | null;

		/** The [TRACE_ID] for a trace within a project. */
		traceId?: string | null;

		/** The relationship of the current span relative to the linked span. */
		type?: LinkType | null;
	}

	/**
	 * A pointer from the current span to another span in the same trace or in a
	 * different trace. For example, this can be used in batching operations,
	 * where a single batch handler processes multiple requests from different
	 * traces or when the handler receives a request from a different project.
	 */
	export interface LinkFormProperties {

		/** The [SPAN_ID] for a span within a trace. */
		spanId: FormControl<string | null | undefined>,

		/** The [TRACE_ID] for a trace within a project. */
		traceId: FormControl<string | null | undefined>,

		/** The relationship of the current span relative to the linked span. */
		type: FormControl<LinkType | null | undefined>,
	}
	export function CreateLinkFormGroup() {
		return new FormGroup<LinkFormProperties>({
			spanId: new FormControl<string | null | undefined>(undefined),
			traceId: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<LinkType | null | undefined>(undefined),
		});

	}

	export enum LinkType { TYPE_UNSPECIFIED = 0, CHILD_LINKED_SPAN = 1, PARENT_LINKED_SPAN = 2 }

	export enum SpanSpanKind { SPAN_KIND_UNSPECIFIED = 0, INTERNAL = 1, SERVER = 2, CLIENT = 3, PRODUCER = 4, CONSUMER = 5 }


	/** A call stack appearing in a trace. */
	export interface StackTrace {

		/** A collection of stack frames, which can be truncated. */
		stackFrames?: StackFrames;

		/**
		 * The hash ID is used to conserve network bandwidth for duplicate
		 * stack traces within a single trace.
		 * Often multiple spans will have identical stack traces.
		 * The first occurrence of a stack trace should contain both the
		 * `stackFrame` content and a value in `stackTraceHashId`.
		 * Subsequent spans within the same request can refer
		 * to that stack trace by only setting `stackTraceHashId`.
		 */
		stackTraceHashId?: string | null;
	}

	/** A call stack appearing in a trace. */
	export interface StackTraceFormProperties {

		/**
		 * The hash ID is used to conserve network bandwidth for duplicate
		 * stack traces within a single trace.
		 * Often multiple spans will have identical stack traces.
		 * The first occurrence of a stack trace should contain both the
		 * `stackFrame` content and a value in `stackTraceHashId`.
		 * Subsequent spans within the same request can refer
		 * to that stack trace by only setting `stackTraceHashId`.
		 */
		stackTraceHashId: FormControl<string | null | undefined>,
	}
	export function CreateStackTraceFormGroup() {
		return new FormGroup<StackTraceFormProperties>({
			stackTraceHashId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A collection of stack frames, which can be truncated. */
	export interface StackFrames {

		/**
		 * The number of stack frames that were dropped because there
		 * were too many stack frames.
		 * If this value is 0, then no stack frames were dropped.
		 */
		droppedFramesCount?: number | null;

		/** Stack frames in this call stack. */
		frame?: Array<StackFrame>;
	}

	/** A collection of stack frames, which can be truncated. */
	export interface StackFramesFormProperties {

		/**
		 * The number of stack frames that were dropped because there
		 * were too many stack frames.
		 * If this value is 0, then no stack frames were dropped.
		 */
		droppedFramesCount: FormControl<number | null | undefined>,
	}
	export function CreateStackFramesFormGroup() {
		return new FormGroup<StackFramesFormProperties>({
			droppedFramesCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents a single stack frame in a stack trace. */
	export interface StackFrame {

		/**
		 * The column number where the function call appears, if available.
		 * This is important in JavaScript because of its anonymous functions.
		 */
		columnNumber?: string | null;

		/** Represents a string that might be shortened to a specified length. */
		fileName?: TruncatableString;

		/** Represents a string that might be shortened to a specified length. */
		functionName?: TruncatableString;

		/** The line number in `file_name` where the function call appears. */
		lineNumber?: string | null;

		/** Binary module. */
		loadModule?: Module;

		/** Represents a string that might be shortened to a specified length. */
		originalFunctionName?: TruncatableString;

		/** Represents a string that might be shortened to a specified length. */
		sourceVersion?: TruncatableString;
	}

	/** Represents a single stack frame in a stack trace. */
	export interface StackFrameFormProperties {

		/**
		 * The column number where the function call appears, if available.
		 * This is important in JavaScript because of its anonymous functions.
		 */
		columnNumber: FormControl<string | null | undefined>,

		/** The line number in `file_name` where the function call appears. */
		lineNumber: FormControl<string | null | undefined>,
	}
	export function CreateStackFrameFormGroup() {
		return new FormGroup<StackFrameFormProperties>({
			columnNumber: new FormControl<string | null | undefined>(undefined),
			lineNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Binary module. */
	export interface Module {

		/** Represents a string that might be shortened to a specified length. */
		buildId?: TruncatableString;

		/** Represents a string that might be shortened to a specified length. */
		module?: TruncatableString;
	}

	/** Binary module. */
	export interface ModuleFormProperties {
	}
	export function CreateModuleFormGroup() {
		return new FormGroup<ModuleFormProperties>({
		});

	}


	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface Status {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code?: number | null;

		/**
		 * A list of messages that carry the error details.  There is a common set of
		 * message types for APIs to use.
		 */
		details?: Array<string>;

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message?: string | null;
	}

	/**
	 * The `Status` type defines a logical error model that is suitable for
	 * different programming environments, including REST APIs and RPC APIs. It is
	 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
	 * three pieces of data: error code, error message, and error details.
	 * You can find out more about this error model and how to work with it in the
	 * [API Design Guide](https://cloud.google.com/apis/design/errors).
	 */
	export interface StatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A collection of `TimeEvent`s. A `TimeEvent` is a time-stamped annotation
	 * on the span, consisting of either user-supplied key:value pairs, or
	 * details of a message sent/received between Spans.
	 */
	export interface TimeEvents {

		/**
		 * The number of dropped annotations in all the included time events.
		 * If the value is 0, then no annotations were dropped.
		 */
		droppedAnnotationsCount?: number | null;

		/**
		 * The number of dropped message events in all the included time events.
		 * If the value is 0, then no message events were dropped.
		 */
		droppedMessageEventsCount?: number | null;

		/** A collection of `TimeEvent`s. */
		timeEvent?: Array<TimeEvent>;
	}

	/**
	 * A collection of `TimeEvent`s. A `TimeEvent` is a time-stamped annotation
	 * on the span, consisting of either user-supplied key:value pairs, or
	 * details of a message sent/received between Spans.
	 */
	export interface TimeEventsFormProperties {

		/**
		 * The number of dropped annotations in all the included time events.
		 * If the value is 0, then no annotations were dropped.
		 */
		droppedAnnotationsCount: FormControl<number | null | undefined>,

		/**
		 * The number of dropped message events in all the included time events.
		 * If the value is 0, then no message events were dropped.
		 */
		droppedMessageEventsCount: FormControl<number | null | undefined>,
	}
	export function CreateTimeEventsFormGroup() {
		return new FormGroup<TimeEventsFormProperties>({
			droppedAnnotationsCount: new FormControl<number | null | undefined>(undefined),
			droppedMessageEventsCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A time-stamped annotation or message event in the Span. */
	export interface TimeEvent {

		/** Text annotation with a set of attributes. */
		annotation?: Annotation;

		/** An event describing a message sent/received between Spans. */
		messageEvent?: MessageEvent;

		/** The timestamp indicating the time the event occurred. */
		time?: string | null;
	}

	/** A time-stamped annotation or message event in the Span. */
	export interface TimeEventFormProperties {

		/** The timestamp indicating the time the event occurred. */
		time: FormControl<string | null | undefined>,
	}
	export function CreateTimeEventFormGroup() {
		return new FormGroup<TimeEventFormProperties>({
			time: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An event describing a message sent/received between Spans. */
	export interface MessageEvent {

		/**
		 * The number of compressed bytes sent or received. If missing assumed to
		 * be the same size as uncompressed.
		 */
		compressedSizeBytes?: string | null;

		/**
		 * An identifier for the MessageEvent's message that can be used to match
		 * SENT and RECEIVED MessageEvents. It is recommended to be unique within
		 * a Span.
		 */
		id?: string | null;

		/**
		 * Type of MessageEvent. Indicates whether the message was sent or
		 * received.
		 */
		type?: MessageEventType | null;

		/** The number of uncompressed bytes sent or received. */
		uncompressedSizeBytes?: string | null;
	}

	/** An event describing a message sent/received between Spans. */
	export interface MessageEventFormProperties {

		/**
		 * The number of compressed bytes sent or received. If missing assumed to
		 * be the same size as uncompressed.
		 */
		compressedSizeBytes: FormControl<string | null | undefined>,

		/**
		 * An identifier for the MessageEvent's message that can be used to match
		 * SENT and RECEIVED MessageEvents. It is recommended to be unique within
		 * a Span.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * Type of MessageEvent. Indicates whether the message was sent or
		 * received.
		 */
		type: FormControl<MessageEventType | null | undefined>,

		/** The number of uncompressed bytes sent or received. */
		uncompressedSizeBytes: FormControl<string | null | undefined>,
	}
	export function CreateMessageEventFormGroup() {
		return new FormGroup<MessageEventFormProperties>({
			compressedSizeBytes: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<MessageEventType | null | undefined>(undefined),
			uncompressedSizeBytes: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum MessageEventType { TYPE_UNSPECIFIED = 0, SENT = 1, RECEIVED = 2 }


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

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Creates a new span.
		 * In this case, writing traces is not considered an active developer
		 * method since traces are machine generated.
		 * Post v2/{name}
		 * @param {string} name The resource name of the span in the following format:
		 *     projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project;
		 * it is a 32-character hexadecimal encoding of a 16-byte array.
		 * [SPAN_ID] is a unique identifier for a span within a trace; it
		 * is a 16-character hexadecimal encoding of an 8-byte array.
		 * @return {void} Successful response
		 */
		Cloudtrace_projects_traces_spans_createSpan(name: string, requestBody: Span): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Sends new spans to new or existing traces. You cannot update
		 * existing spans.
		 * In this case, writing traces is not considered an active developer
		 * method since traces are machine generated.
		 * Post v2/{name}/traces:batchWrite
		 * @param {string} name Required. The name of the project where the spans belong. The format is
		 * `projects/[PROJECT_ID]`.
		 * @return {void} Successful response
		 */
		Cloudtrace_projects_traces_batchWrite(name: string, requestBody: BatchWriteSpansRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + '/traces:batchWrite', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

