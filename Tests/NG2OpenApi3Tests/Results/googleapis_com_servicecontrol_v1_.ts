import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {
	export interface AllocateInfo {

		/** A list of label keys that were unused by the server in processing the request. Thus, for similar requests repeated in a certain future time window, the caller can choose to ignore these labels in the requests to achieve better client-side cache hits and quota aggregation for rate quota. This field is not populated for allocation quota checks. */
		unusedArguments?: Array<string>;
	}
	export interface AllocateInfoFormProperties {
	}
	export function CreateAllocateInfoFormGroup() {
		return new FormGroup<AllocateInfoFormProperties>({
		});

	}


	/** Request message for the AllocateQuota method. */
	export interface AllocateQuotaRequest {

		/** Represents information regarding a quota operation. */
		allocateOperation?: QuotaOperation;

		/** Specifies which version of service configuration should be used to process the request. If unspecified or no matching version can be found, the latest one will be used. */
		serviceConfigId?: string | null;
	}

	/** Request message for the AllocateQuota method. */
	export interface AllocateQuotaRequestFormProperties {

		/** Specifies which version of service configuration should be used to process the request. If unspecified or no matching version can be found, the latest one will be used. */
		serviceConfigId: FormControl<string | null | undefined>,
	}
	export function CreateAllocateQuotaRequestFormGroup() {
		return new FormGroup<AllocateQuotaRequestFormProperties>({
			serviceConfigId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents information regarding a quota operation. */
	export interface QuotaOperation {

		/** Identity of the consumer for whom this quota operation is being performed. This can be in one of the following formats: project:, project_number:, api_key:. */
		consumerId?: string | null;

		/** Labels describing the operation. */
		labels?: {[id: string]: string };

		/** Fully qualified name of the API method for which this quota operation is requested. This name is used for matching quota rules or metric rules and billing status rules defined in service configuration. This field should not be set if any of the following is true: (1) the quota operation is performed on non-API resources. (2) quota_metrics is set because the caller is doing quota override. Example of an RPC method name: google.example.library.v1.LibraryService.CreateShelf */
		methodName?: string | null;

		/** Identity of the operation. For Allocation Quota, this is expected to be unique within the scope of the service that generated the operation, and guarantees idempotency in case of retries. In order to ensure best performance and latency in the Quota backends, operation_ids are optimally associated with time, so that related operations can be accessed fast in storage. For this reason, the recommended token for services that intend to operate at a high QPS is Unix time in nanos + UUID */
		operationId?: string | null;

		/** Represents information about this operation. Each MetricValueSet corresponds to a metric defined in the service configuration. The data type used in the MetricValueSet must agree with the data type specified in the metric definition. Within a single operation, it is not allowed to have more than one MetricValue instances that have the same metric names and identical label value combinations. If a request has such duplicated MetricValue instances, the entire request is rejected with an invalid argument error. This field is mutually exclusive with method_name. */
		quotaMetrics?: Array<MetricValueSet>;

		/** Quota mode for this operation. */
		quotaMode?: QuotaOperationQuotaMode | null;
	}

	/** Represents information regarding a quota operation. */
	export interface QuotaOperationFormProperties {

		/** Identity of the consumer for whom this quota operation is being performed. This can be in one of the following formats: project:, project_number:, api_key:. */
		consumerId: FormControl<string | null | undefined>,

		/** Labels describing the operation. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Fully qualified name of the API method for which this quota operation is requested. This name is used for matching quota rules or metric rules and billing status rules defined in service configuration. This field should not be set if any of the following is true: (1) the quota operation is performed on non-API resources. (2) quota_metrics is set because the caller is doing quota override. Example of an RPC method name: google.example.library.v1.LibraryService.CreateShelf */
		methodName: FormControl<string | null | undefined>,

		/** Identity of the operation. For Allocation Quota, this is expected to be unique within the scope of the service that generated the operation, and guarantees idempotency in case of retries. In order to ensure best performance and latency in the Quota backends, operation_ids are optimally associated with time, so that related operations can be accessed fast in storage. For this reason, the recommended token for services that intend to operate at a high QPS is Unix time in nanos + UUID */
		operationId: FormControl<string | null | undefined>,

		/** Quota mode for this operation. */
		quotaMode: FormControl<QuotaOperationQuotaMode | null | undefined>,
	}
	export function CreateQuotaOperationFormGroup() {
		return new FormGroup<QuotaOperationFormProperties>({
			consumerId: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			methodName: new FormControl<string | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			quotaMode: new FormControl<QuotaOperationQuotaMode | null | undefined>(undefined),
		});

	}


	/** Represents a set of metric values in the same metric. Each metric value in the set should have a unique combination of start time, end time, and label values. */
	export interface MetricValueSet {

		/** The metric name defined in the service configuration. */
		metricName?: string | null;

		/** The values in this metric. */
		metricValues?: Array<MetricValue>;
	}

	/** Represents a set of metric values in the same metric. Each metric value in the set should have a unique combination of start time, end time, and label values. */
	export interface MetricValueSetFormProperties {

		/** The metric name defined in the service configuration. */
		metricName: FormControl<string | null | undefined>,
	}
	export function CreateMetricValueSetFormGroup() {
		return new FormGroup<MetricValueSetFormProperties>({
			metricName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a single metric value. */
	export interface MetricValue {

		/** A boolean value. */
		boolValue?: boolean | null;

		/** Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information: * the arithmetic mean of the samples * the minimum and maximum of the samples * the sum-squared-deviation of the samples, used to compute variance * a histogram of the values of the sample points */
		distributionValue?: Distribution;

		/**
		 * A double precision floating point value.
		 * Type: double
		 */
		doubleValue?: number | null;

		/** The end of the time period over which this metric value's measurement applies. If not specified, google.api.servicecontrol.v1.Operation.end_time will be used. */
		endTime?: string | null;

		/** A signed 64-bit integer value. */
		int64Value?: string | null;

		/** The labels describing the metric value. See comments on google.api.servicecontrol.v1.Operation.labels for the overriding relationship. Note that this map must not contain monitored resource labels. */
		labels?: {[id: string]: string };

		/** Represents an amount of money with its currency type. */
		moneyValue?: Money;

		/** The start of the time period over which this metric value's measurement applies. The time period has different semantics for different metric types (cumulative, delta, and gauge). See the metric definition documentation in the service configuration for details. If not specified, google.api.servicecontrol.v1.Operation.start_time will be used. */
		startTime?: string | null;

		/** A text string value. */
		stringValue?: string | null;
	}

	/** Represents a single metric value. */
	export interface MetricValueFormProperties {

		/** A boolean value. */
		boolValue: FormControl<boolean | null | undefined>,

		/**
		 * A double precision floating point value.
		 * Type: double
		 */
		doubleValue: FormControl<number | null | undefined>,

		/** The end of the time period over which this metric value's measurement applies. If not specified, google.api.servicecontrol.v1.Operation.end_time will be used. */
		endTime: FormControl<string | null | undefined>,

		/** A signed 64-bit integer value. */
		int64Value: FormControl<string | null | undefined>,

		/** The labels describing the metric value. See comments on google.api.servicecontrol.v1.Operation.labels for the overriding relationship. Note that this map must not contain monitored resource labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The start of the time period over which this metric value's measurement applies. The time period has different semantics for different metric types (cumulative, delta, and gauge). See the metric definition documentation in the service configuration for details. If not specified, google.api.servicecontrol.v1.Operation.start_time will be used. */
		startTime: FormControl<string | null | undefined>,

		/** A text string value. */
		stringValue: FormControl<string | null | undefined>,
	}
	export function CreateMetricValueFormGroup() {
		return new FormGroup<MetricValueFormProperties>({
			boolValue: new FormControl<boolean | null | undefined>(undefined),
			doubleValue: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			int64Value: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information: * the arithmetic mean of the samples * the minimum and maximum of the samples * the sum-squared-deviation of the samples, used to compute variance * a histogram of the values of the sample points */
	export interface Distribution {

		/** The number of samples in each histogram bucket. `bucket_counts` are optional. If present, they must sum to the `count` value. The buckets are defined below in `bucket_option`. There are N buckets. `bucket_counts[0]` is the number of samples in the underflow bucket. `bucket_counts[1]` to `bucket_counts[N-1]` are the numbers of samples in each of the finite buckets. And `bucket_counts[N] is the number of samples in the overflow bucket. See the comments of `bucket_option` below for more details. Any suffix of trailing zeros may be omitted. */
		bucketCounts?: Array<string>;

		/** The total number of samples in the distribution. Must be >= 0. */
		count?: string | null;

		/** Example points. Must be in increasing order of `value` field. */
		exemplars?: Array<Exemplar>;

		/** Describing buckets with arbitrary user-provided width. */
		explicitBuckets?: ExplicitBuckets;

		/** Describing buckets with exponentially growing width. */
		exponentialBuckets?: ExponentialBuckets;

		/** Describing buckets with constant width. */
		linearBuckets?: LinearBuckets;

		/**
		 * The maximum of the population of values. Ignored if `count` is zero.
		 * Type: double
		 */
		maximum?: number | null;

		/**
		 * The arithmetic mean of the samples in the distribution. If `count` is zero then this field must be zero.
		 * Type: double
		 */
		mean?: number | null;

		/**
		 * The minimum of the population of values. Ignored if `count` is zero.
		 * Type: double
		 */
		minimum?: number | null;

		/**
		 * The sum of squared deviations from the mean: Sum[i=1..count]((x_i - mean)^2) where each x_i is a sample values. If `count` is zero then this field must be zero, otherwise validation of the request fails.
		 * Type: double
		 */
		sumOfSquaredDeviation?: number | null;
	}

	/** Distribution represents a frequency distribution of double-valued sample points. It contains the size of the population of sample points plus additional optional information: * the arithmetic mean of the samples * the minimum and maximum of the samples * the sum-squared-deviation of the samples, used to compute variance * a histogram of the values of the sample points */
	export interface DistributionFormProperties {

		/** The total number of samples in the distribution. Must be >= 0. */
		count: FormControl<string | null | undefined>,

		/**
		 * The maximum of the population of values. Ignored if `count` is zero.
		 * Type: double
		 */
		maximum: FormControl<number | null | undefined>,

		/**
		 * The arithmetic mean of the samples in the distribution. If `count` is zero then this field must be zero.
		 * Type: double
		 */
		mean: FormControl<number | null | undefined>,

		/**
		 * The minimum of the population of values. Ignored if `count` is zero.
		 * Type: double
		 */
		minimum: FormControl<number | null | undefined>,

		/**
		 * The sum of squared deviations from the mean: Sum[i=1..count]((x_i - mean)^2) where each x_i is a sample values. If `count` is zero then this field must be zero, otherwise validation of the request fails.
		 * Type: double
		 */
		sumOfSquaredDeviation: FormControl<number | null | undefined>,
	}
	export function CreateDistributionFormGroup() {
		return new FormGroup<DistributionFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
			maximum: new FormControl<number | null | undefined>(undefined),
			mean: new FormControl<number | null | undefined>(undefined),
			minimum: new FormControl<number | null | undefined>(undefined),
			sumOfSquaredDeviation: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Exemplars are example points that may be used to annotate aggregated distribution values. They are metadata that gives information about a particular value added to a Distribution bucket, such as a trace ID that was active when a value was added. They may contain further information, such as a example values and timestamps, origin, etc. */
	export interface Exemplar {

		/** Contextual information about the example value. Examples are: Trace: type.googleapis.com/google.monitoring.v3.SpanContext Literal string: type.googleapis.com/google.protobuf.StringValue Labels dropped during aggregation: type.googleapis.com/google.monitoring.v3.DroppedLabels There may be only a single attachment of any given message type in a single exemplar, and this is enforced by the system. */
		attachments?: Array<string>;

		/** The observation (sampling) time of the above value. */
		timestamp?: string | null;

		/**
		 * Value of the exemplar point. This value determines to which bucket the exemplar belongs.
		 * Type: double
		 */
		value?: number | null;
	}

	/** Exemplars are example points that may be used to annotate aggregated distribution values. They are metadata that gives information about a particular value added to a Distribution bucket, such as a trace ID that was active when a value was added. They may contain further information, such as a example values and timestamps, origin, etc. */
	export interface ExemplarFormProperties {

		/** The observation (sampling) time of the above value. */
		timestamp: FormControl<string | null | undefined>,

		/**
		 * Value of the exemplar point. This value determines to which bucket the exemplar belongs.
		 * Type: double
		 */
		value: FormControl<number | null | undefined>,
	}
	export function CreateExemplarFormGroup() {
		return new FormGroup<ExemplarFormProperties>({
			timestamp: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describing buckets with arbitrary user-provided width. */
	export interface ExplicitBuckets {

		/** 'bound' is a list of strictly increasing boundaries between buckets. Note that a list of length N-1 defines N buckets because of fenceposting. See comments on `bucket_options` for details. The i'th finite bucket covers the interval [bound[i-1], bound[i]) where i ranges from 1 to bound_size() - 1. Note that there are no finite buckets at all if 'bound' only contains a single element; in that special case the single bound defines the boundary between the underflow and overflow buckets. bucket number lower bound upper bound i == 0 (underflow) -inf bound[i] 0 < i < bound_size() bound[i-1] bound[i] i == bound_size() (overflow) bound[i-1] +inf */
		bounds?: Array<number>;
	}

	/** Describing buckets with arbitrary user-provided width. */
	export interface ExplicitBucketsFormProperties {
	}
	export function CreateExplicitBucketsFormGroup() {
		return new FormGroup<ExplicitBucketsFormProperties>({
		});

	}


	/** Describing buckets with exponentially growing width. */
	export interface ExponentialBuckets {

		/**
		 * The i'th exponential bucket covers the interval [scale * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to num_finite_buckets inclusive. Must be larger than 1.0.
		 * Type: double
		 */
		growthFactor?: number | null;

		/**
		 * The number of finite buckets. With the underflow and overflow buckets, the total number of buckets is `num_finite_buckets` + 2. See comments on `bucket_options` for details.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numFiniteBuckets?: number | null;

		/**
		 * The i'th exponential bucket covers the interval [scale * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to num_finite_buckets inclusive. Must be > 0.
		 * Type: double
		 */
		scale?: number | null;
	}

	/** Describing buckets with exponentially growing width. */
	export interface ExponentialBucketsFormProperties {

		/**
		 * The i'th exponential bucket covers the interval [scale * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to num_finite_buckets inclusive. Must be larger than 1.0.
		 * Type: double
		 */
		growthFactor: FormControl<number | null | undefined>,

		/**
		 * The number of finite buckets. With the underflow and overflow buckets, the total number of buckets is `num_finite_buckets` + 2. See comments on `bucket_options` for details.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numFiniteBuckets: FormControl<number | null | undefined>,

		/**
		 * The i'th exponential bucket covers the interval [scale * growth_factor^(i-1), scale * growth_factor^i) where i ranges from 1 to num_finite_buckets inclusive. Must be > 0.
		 * Type: double
		 */
		scale: FormControl<number | null | undefined>,
	}
	export function CreateExponentialBucketsFormGroup() {
		return new FormGroup<ExponentialBucketsFormProperties>({
			growthFactor: new FormControl<number | null | undefined>(undefined),
			numFiniteBuckets: new FormControl<number | null | undefined>(undefined),
			scale: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Describing buckets with constant width. */
	export interface LinearBuckets {

		/**
		 * The number of finite buckets. With the underflow and overflow buckets, the total number of buckets is `num_finite_buckets` + 2. See comments on `bucket_options` for details.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numFiniteBuckets?: number | null;

		/**
		 * The i'th linear bucket covers the interval [offset + (i-1) * width, offset + i * width) where i ranges from 1 to num_finite_buckets, inclusive.
		 * Type: double
		 */
		offset?: number | null;

		/**
		 * The i'th linear bucket covers the interval [offset + (i-1) * width, offset + i * width) where i ranges from 1 to num_finite_buckets, inclusive. Must be strictly positive.
		 * Type: double
		 */
		width?: number | null;
	}

	/** Describing buckets with constant width. */
	export interface LinearBucketsFormProperties {

		/**
		 * The number of finite buckets. With the underflow and overflow buckets, the total number of buckets is `num_finite_buckets` + 2. See comments on `bucket_options` for details.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		numFiniteBuckets: FormControl<number | null | undefined>,

		/**
		 * The i'th linear bucket covers the interval [offset + (i-1) * width, offset + i * width) where i ranges from 1 to num_finite_buckets, inclusive.
		 * Type: double
		 */
		offset: FormControl<number | null | undefined>,

		/**
		 * The i'th linear bucket covers the interval [offset + (i-1) * width, offset + i * width) where i ranges from 1 to num_finite_buckets, inclusive. Must be strictly positive.
		 * Type: double
		 */
		width: FormControl<number | null | undefined>,
	}
	export function CreateLinearBucketsFormGroup() {
		return new FormGroup<LinearBucketsFormProperties>({
			numFiniteBuckets: new FormControl<number | null | undefined>(undefined),
			offset: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Represents an amount of money with its currency type. */
	export interface Money {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode?: string | null;

		/**
		 * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos?: number | null;

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units?: string | null;
	}

	/** Represents an amount of money with its currency type. */
	export interface MoneyFormProperties {

		/** The three-letter currency code defined in ISO 4217. */
		currencyCode: FormControl<string | null | undefined>,

		/**
		 * Number of nano (10^-9) units of the amount. The value must be between -999,999,999 and +999,999,999 inclusive. If `units` is positive, `nanos` must be positive or zero. If `units` is zero, `nanos` can be positive, zero, or negative. If `units` is negative, `nanos` must be negative or zero. For example $-1.75 is represented as `units`=-1 and `nanos`=-750,000,000.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		nanos: FormControl<number | null | undefined>,

		/** The whole units of the amount. For example if `currencyCode` is `"USD"`, then 1 unit is one US dollar. */
		units: FormControl<string | null | undefined>,
	}
	export function CreateMoneyFormGroup() {
		return new FormGroup<MoneyFormProperties>({
			currencyCode: new FormControl<string | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			units: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QuotaOperationQuotaMode { UNSPECIFIED = 'UNSPECIFIED', NORMAL = 'NORMAL', BEST_EFFORT = 'BEST_EFFORT', CHECK_ONLY = 'CHECK_ONLY', ADJUST_ONLY = 'ADJUST_ONLY' }


	/** Response message for the AllocateQuota method. */
	export interface AllocateQuotaResponse {

		/** Indicates the decision of the allocate. */
		allocateErrors?: Array<QuotaError>;
		allocateInfo?: AllocateInfo;

		/** The same operation_id value used in the AllocateQuotaRequest. Used for logging and diagnostics purposes. */
		operationId?: string | null;

		/** Quota metrics to indicate the result of allocation. Depending on the request, one or more of the following metrics will be included: 1. Per quota group or per quota metric incremental usage will be specified using the following delta metric : "serviceruntime.googleapis.com/api/consumer/quota_used_count" 2. The quota limit reached condition will be specified using the following boolean metric : "serviceruntime.googleapis.com/quota/exceeded" */
		quotaMetrics?: Array<MetricValueSet>;

		/** ID of the actual config used to process the request. */
		serviceConfigId?: string | null;
	}

	/** Response message for the AllocateQuota method. */
	export interface AllocateQuotaResponseFormProperties {

		/** The same operation_id value used in the AllocateQuotaRequest. Used for logging and diagnostics purposes. */
		operationId: FormControl<string | null | undefined>,

		/** ID of the actual config used to process the request. */
		serviceConfigId: FormControl<string | null | undefined>,
	}
	export function CreateAllocateQuotaResponseFormGroup() {
		return new FormGroup<AllocateQuotaResponseFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined),
			serviceConfigId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents error information for QuotaOperation. */
	export interface QuotaError {

		/** Error code. */
		code?: QuotaErrorCode | null;

		/** Free-form text that provides details on the cause of the error. */
		description?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: Status;

		/** Subject to whom this error applies. See the specific enum for more details on this field. For example, "clientip:" or "project:". */
		subject?: string | null;
	}

	/** Represents error information for QuotaOperation. */
	export interface QuotaErrorFormProperties {

		/** Error code. */
		code: FormControl<QuotaErrorCode | null | undefined>,

		/** Free-form text that provides details on the cause of the error. */
		description: FormControl<string | null | undefined>,

		/** Subject to whom this error applies. See the specific enum for more details on this field. For example, "clientip:" or "project:". */
		subject: FormControl<string | null | undefined>,
	}
	export function CreateQuotaErrorFormGroup() {
		return new FormGroup<QuotaErrorFormProperties>({
			code: new FormControl<QuotaErrorCode | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum QuotaErrorCode { UNSPECIFIED = 'UNSPECIFIED', RESOURCE_EXHAUSTED = 'RESOURCE_EXHAUSTED', OUT_OF_RANGE = 'OUT_OF_RANGE', BILLING_NOT_ACTIVE = 'BILLING_NOT_ACTIVE', PROJECT_DELETED = 'PROJECT_DELETED', API_KEY_INVALID = 'API_KEY_INVALID', API_KEY_EXPIRED = 'API_KEY_EXPIRED', SPATULA_HEADER_INVALID = 'SPATULA_HEADER_INVALID', LOAS_ROLE_INVALID = 'LOAS_ROLE_INVALID', NO_LOAS_PROJECT = 'NO_LOAS_PROJECT', PROJECT_STATUS_UNAVAILABLE = 'PROJECT_STATUS_UNAVAILABLE', SERVICE_STATUS_UNAVAILABLE = 'SERVICE_STATUS_UNAVAILABLE', BILLING_STATUS_UNAVAILABLE = 'BILLING_STATUS_UNAVAILABLE', QUOTA_SYSTEM_UNAVAILABLE = 'QUOTA_SYSTEM_UNAVAILABLE' }


	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface Status {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code?: number | null;

		/** A list of messages that carry the error details. There is a common set of message types for APIs to use. */
		details?: Array<string>;

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message?: string | null;
	}

	/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
	export interface StatusFormProperties {

		/**
		 * The status code, which should be an enum value of google.rpc.Code.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		code: FormControl<number | null | undefined>,

		/** A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client. */
		message: FormControl<string | null | undefined>,
	}
	export function CreateStatusFormGroup() {
		return new FormGroup<StatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
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
		 * The number of bytes removed from the original string. If this value is 0, then the string was not shortened.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		truncatedByteCount?: number | null;

		/** The shortened string. For example, if the original string is 500 bytes long and the limit of the string is 128 bytes, then `value` contains the first 128 bytes of the 500-byte string. Truncation always happens on a UTF8 character boundary. If there are multi-byte characters in the string, then the length of the shortened string might be less than the size limit. */
		value?: string | null;
	}

	/** Represents a string that might be shortened to a specified length. */
	export interface TruncatableStringFormProperties {

		/**
		 * The number of bytes removed from the original string. If this value is 0, then the string was not shortened.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		truncatedByteCount: FormControl<number | null | undefined>,

		/** The shortened string. For example, if the original string is 500 bytes long and the limit of the string is 128 bytes, then `value` contains the first 128 bytes of the 500-byte string. Truncation always happens on a UTF8 character boundary. If there are multi-byte characters in the string, then the length of the shortened string might be less than the size limit. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateTruncatableStringFormGroup() {
		return new FormGroup<TruncatableStringFormProperties>({
			truncatedByteCount: new FormControl<number | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A set of attributes, each in the format `[KEY]:[VALUE]`. */
	export interface Attributes {

		/** The set of attributes. Each attribute's key can be up to 128 bytes long. The value can be a string up to 256 bytes, a signed 64-bit integer, or the Boolean values `true` and `false`. For example: "/instance_id": "my-instance" "/http/user_agent": "" "/http/request_bytes": 300 "abc.com/myattribute": true */
		attributeMap?: {[id: string]: AttributeValue };

		/**
		 * The number of attributes that were discarded. Attributes can be discarded because their keys are too long or because there are too many attributes. If this value is 0 then all attributes are valid.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		droppedAttributesCount?: number | null;
	}

	/** A set of attributes, each in the format `[KEY]:[VALUE]`. */
	export interface AttributesFormProperties {

		/** The set of attributes. Each attribute's key can be up to 128 bytes long. The value can be a string up to 256 bytes, a signed 64-bit integer, or the Boolean values `true` and `false`. For example: "/instance_id": "my-instance" "/http/user_agent": "" "/http/request_bytes": 300 "abc.com/myattribute": true */
		attributeMap: FormControl<{[id: string]: AttributeValue } | null | undefined>,

		/**
		 * The number of attributes that were discarded. Attributes can be discarded because their keys are too long or because there are too many attributes. If this value is 0 then all attributes are valid.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		droppedAttributesCount: FormControl<number | null | undefined>,
	}
	export function CreateAttributesFormGroup() {
		return new FormGroup<AttributesFormProperties>({
			attributeMap: new FormControl<{[id: string]: AttributeValue } | null | undefined>(undefined),
			droppedAttributesCount: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Common audit log format for Google Cloud Platform API operations.  */
	export interface AuditLog {

		/** Authentication information for the operation. */
		authenticationInfo?: AuthenticationInfo;

		/** Authorization information. If there are multiple resources or permissions involved, then there is one AuthorizationInfo element for each {resource, permission} tuple. */
		authorizationInfo?: Array<AuthorizationInfo>;

		/** Other service-specific data about the request, response, and other information associated with the current audited event. */
		metadata?: {[id: string]: any };

		/** The name of the service method or operation. For API calls, this should be the name of the API method. For example, "google.cloud.bigquery.v2.TableService.InsertTable" "google.logging.v2.ConfigServiceV2.CreateSink" */
		methodName?: string | null;

		/** The number of items returned from a List or Query API method, if applicable. */
		numResponseItems?: string | null;

		/** Information related to policy violations for this request. */
		policyViolationInfo?: PolicyViolationInfo;

		/** The operation request. This may not include all request parameters, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
		request?: {[id: string]: any };

		/** Metadata about the request. */
		requestMetadata?: RequestMetadata;

		/** Location information about a resource. */
		resourceLocation?: ResourceLocation;

		/** The resource or collection that is the target of the operation. The name is a scheme-less URI, not including the API service name. For example: "projects/PROJECT_ID/zones/us-central1-a/instances" "projects/PROJECT_ID/datasets/DATASET_ID" */
		resourceName?: string | null;

		/** The resource's original state before mutation. Present only for operations which have successfully modified the targeted resource(s). In general, this field should contain all changed fields, except those that are already been included in `request`, `response`, `metadata` or `service_data` fields. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
		resourceOriginalState?: {[id: string]: any };

		/** The operation response. This may not include all response elements, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
		response?: {[id: string]: any };

		/** Deprecated. Use the `metadata` field instead. Other service-specific data about the request, response, and other activities. */
		serviceData?: {[id: string]: any };

		/** The name of the API service performing the operation. For example, `"compute.googleapis.com"`. */
		serviceName?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: Status;
	}

	/** Common audit log format for Google Cloud Platform API operations.  */
	export interface AuditLogFormProperties {

		/** Other service-specific data about the request, response, and other information associated with the current audited event. */
		metadata: FormControl<{[id: string]: any } | null | undefined>,

		/** The name of the service method or operation. For API calls, this should be the name of the API method. For example, "google.cloud.bigquery.v2.TableService.InsertTable" "google.logging.v2.ConfigServiceV2.CreateSink" */
		methodName: FormControl<string | null | undefined>,

		/** The number of items returned from a List or Query API method, if applicable. */
		numResponseItems: FormControl<string | null | undefined>,

		/** The operation request. This may not include all request parameters, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
		request: FormControl<{[id: string]: any } | null | undefined>,

		/** The resource or collection that is the target of the operation. The name is a scheme-less URI, not including the API service name. For example: "projects/PROJECT_ID/zones/us-central1-a/instances" "projects/PROJECT_ID/datasets/DATASET_ID" */
		resourceName: FormControl<string | null | undefined>,

		/** The resource's original state before mutation. Present only for operations which have successfully modified the targeted resource(s). In general, this field should contain all changed fields, except those that are already been included in `request`, `response`, `metadata` or `service_data` fields. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
		resourceOriginalState: FormControl<{[id: string]: any } | null | undefined>,

		/** The operation response. This may not include all response elements, such as those that are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should never include user-generated data, such as file contents. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
		response: FormControl<{[id: string]: any } | null | undefined>,

		/** Deprecated. Use the `metadata` field instead. Other service-specific data about the request, response, and other activities. */
		serviceData: FormControl<{[id: string]: any } | null | undefined>,

		/** The name of the API service performing the operation. For example, `"compute.googleapis.com"`. */
		serviceName: FormControl<string | null | undefined>,
	}
	export function CreateAuditLogFormGroup() {
		return new FormGroup<AuditLogFormProperties>({
			metadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			methodName: new FormControl<string | null | undefined>(undefined),
			numResponseItems: new FormControl<string | null | undefined>(undefined),
			request: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			resourceOriginalState: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			response: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			serviceData: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			serviceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Authentication information for the operation. */
	export interface AuthenticationInfo {

		/** The authority selector specified by the requestor, if any. It is not guaranteed that the principal was allowed to use this authority. */
		authoritySelector?: string | null;

		/** The email address of the authenticated user (or service account on behalf of third party principal) making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id). */
		principalEmail?: string | null;

		/** String representation of identity of requesting party. Populated for both first and third party identities. */
		principalSubject?: string | null;

		/** Identity delegation history of an authenticated service account that makes the request. It contains information on the real authorities that try to access GCP resources by delegating on a service account. When multiple authorities present, they are guaranteed to be sorted based on the original ordering of the identity delegation events. */
		serviceAccountDelegationInfo?: Array<ServiceAccountDelegationInfo>;

		/** The name of the service account key used to create or exchange credentials for authenticating the service account making the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}" */
		serviceAccountKeyName?: string | null;

		/** The history of delegation across multiple services as the result of the original user's action. Such as "service A uses its own account to do something for user B". This differs from ServiceAccountDelegationInfo, which only tracks the history of direct token exchanges (impersonation). */
		serviceDelegationHistory?: ServiceDelegationHistory;

		/** The third party identification (if any) of the authenticated user making the request. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
		thirdPartyPrincipal?: {[id: string]: any };
	}

	/** Authentication information for the operation. */
	export interface AuthenticationInfoFormProperties {

		/** The authority selector specified by the requestor, if any. It is not guaranteed that the principal was allowed to use this authority. */
		authoritySelector: FormControl<string | null | undefined>,

		/** The email address of the authenticated user (or service account on behalf of third party principal) making the request. For third party identity callers, the `principal_subject` field is populated instead of this field. For privacy reasons, the principal email address is sometimes redacted. For more information, see [Caller identities in audit logs](https://cloud.google.com/logging/docs/audit#user-id). */
		principalEmail: FormControl<string | null | undefined>,

		/** String representation of identity of requesting party. Populated for both first and third party identities. */
		principalSubject: FormControl<string | null | undefined>,

		/** The name of the service account key used to create or exchange credentials for authenticating the service account making the request. This is a scheme-less URI full resource name. For example: "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}" */
		serviceAccountKeyName: FormControl<string | null | undefined>,

		/** The third party identification (if any) of the authenticated user making the request. When the JSON object represented here has a proto equivalent, the proto name will be indicated in the `@type` property. */
		thirdPartyPrincipal: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateAuthenticationInfoFormGroup() {
		return new FormGroup<AuthenticationInfoFormProperties>({
			authoritySelector: new FormControl<string | null | undefined>(undefined),
			principalEmail: new FormControl<string | null | undefined>(undefined),
			principalSubject: new FormControl<string | null | undefined>(undefined),
			serviceAccountKeyName: new FormControl<string | null | undefined>(undefined),
			thirdPartyPrincipal: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Identity delegation history of an authenticated service account. */
	export interface ServiceAccountDelegationInfo {

		/** First party identity principal. */
		firstPartyPrincipal?: FirstPartyPrincipal;

		/** A string representing the principal_subject associated with the identity. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subject/{subject)` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]` */
		principalSubject?: string | null;

		/** Third party identity principal. */
		thirdPartyPrincipal?: ThirdPartyPrincipal;
	}

	/** Identity delegation history of an authenticated service account. */
	export interface ServiceAccountDelegationInfoFormProperties {

		/** A string representing the principal_subject associated with the identity. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subject/{subject)` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]` */
		principalSubject: FormControl<string | null | undefined>,
	}
	export function CreateServiceAccountDelegationInfoFormGroup() {
		return new FormGroup<ServiceAccountDelegationInfoFormProperties>({
			principalSubject: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** First party identity principal. */
	export interface FirstPartyPrincipal {

		/** The email address of a Google account. . */
		principalEmail?: string | null;

		/** Metadata about the service that uses the service account. . */
		serviceMetadata?: {[id: string]: any };
	}

	/** First party identity principal. */
	export interface FirstPartyPrincipalFormProperties {

		/** The email address of a Google account. . */
		principalEmail: FormControl<string | null | undefined>,

		/** Metadata about the service that uses the service account. . */
		serviceMetadata: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateFirstPartyPrincipalFormGroup() {
		return new FormGroup<FirstPartyPrincipalFormProperties>({
			principalEmail: new FormControl<string | null | undefined>(undefined),
			serviceMetadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** Third party identity principal. */
	export interface ThirdPartyPrincipal {

		/** Metadata about third party identity. */
		thirdPartyClaims?: {[id: string]: any };
	}

	/** Third party identity principal. */
	export interface ThirdPartyPrincipalFormProperties {

		/** Metadata about third party identity. */
		thirdPartyClaims: FormControl<{[id: string]: any } | null | undefined>,
	}
	export function CreateThirdPartyPrincipalFormGroup() {
		return new FormGroup<ThirdPartyPrincipalFormProperties>({
			thirdPartyClaims: new FormControl<{[id: string]: any } | null | undefined>(undefined),
		});

	}


	/** The history of delegation across multiple services as the result of the original user's action. Such as "service A uses its own account to do something for user B". This differs from ServiceAccountDelegationInfo, which only tracks the history of direct token exchanges (impersonation). */
	export interface ServiceDelegationHistory {

		/** The original end user who initiated the request to GCP. */
		originalPrincipal?: string | null;

		/** Data identifying the service specific jobs or units of work that were involved in a chain of service calls. */
		serviceMetadata?: Array<ServiceMetadata>;
	}

	/** The history of delegation across multiple services as the result of the original user's action. Such as "service A uses its own account to do something for user B". This differs from ServiceAccountDelegationInfo, which only tracks the history of direct token exchanges (impersonation). */
	export interface ServiceDelegationHistoryFormProperties {

		/** The original end user who initiated the request to GCP. */
		originalPrincipal: FormControl<string | null | undefined>,
	}
	export function CreateServiceDelegationHistoryFormGroup() {
		return new FormGroup<ServiceDelegationHistoryFormProperties>({
			originalPrincipal: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Metadata describing the service and additional service specific information used to identify the job or unit of work at hand. */
	export interface ServiceMetadata {

		/** Additional metadata provided by service teams to describe service specific job information that was triggered by the original principal. */
		jobMetadata?: {[id: string]: any };

		/** A string representing the principal_subject associated with the identity. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subject/{subject)` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]` If the identity is a Google account (e.g. workspace user account or service account), this will be the email of the prefixed by `serviceAccount:`. For example: `serviceAccount:my-service-account@project-1.iam.gserviceaccount.com`. If the identity is an individual user, the identity will be formatted as: `user:user_ABC@email.com`. */
		principalSubject?: string | null;

		/** The service's fully qualified domain name, e.g. "dataproc.googleapis.com". */
		serviceDomain?: string | null;
	}

	/** Metadata describing the service and additional service specific information used to identify the job or unit of work at hand. */
	export interface ServiceMetadataFormProperties {

		/** Additional metadata provided by service teams to describe service specific job information that was triggered by the original principal. */
		jobMetadata: FormControl<{[id: string]: any } | null | undefined>,

		/** A string representing the principal_subject associated with the identity. For most identities, the format will be `principal://iam.googleapis.com/{identity pool name}/subject/{subject)` except for some GKE identities (GKE_WORKLOAD, FREEFORM, GKE_HUB_WORKLOAD) that are still in the legacy format `serviceAccount:{identity pool name}[{subject}]` If the identity is a Google account (e.g. workspace user account or service account), this will be the email of the prefixed by `serviceAccount:`. For example: `serviceAccount:my-service-account@project-1.iam.gserviceaccount.com`. If the identity is an individual user, the identity will be formatted as: `user:user_ABC@email.com`. */
		principalSubject: FormControl<string | null | undefined>,

		/** The service's fully qualified domain name, e.g. "dataproc.googleapis.com". */
		serviceDomain: FormControl<string | null | undefined>,
	}
	export function CreateServiceMetadataFormGroup() {
		return new FormGroup<ServiceMetadataFormProperties>({
			jobMetadata: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			principalSubject: new FormControl<string | null | undefined>(undefined),
			serviceDomain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Authorization information for the operation. */
	export interface AuthorizationInfo {

		/** Whether or not authorization for `resource` and `permission` was granted. */
		granted?: boolean | null;

		/** The required IAM permission. */
		permission?: string | null;

		/** The resource being accessed, as a REST-style or cloud resource string. For example: bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID or projects/PROJECTID/datasets/DATASETID */
		resource?: string | null;

		/** This message defines core attributes for a resource. A resource is an addressable (named) entity provided by the destination service. For example, a file stored on a network storage service. */
		resourceAttributes?: Resource;
	}

	/** Authorization information for the operation. */
	export interface AuthorizationInfoFormProperties {

		/** Whether or not authorization for `resource` and `permission` was granted. */
		granted: FormControl<boolean | null | undefined>,

		/** The required IAM permission. */
		permission: FormControl<string | null | undefined>,

		/** The resource being accessed, as a REST-style or cloud resource string. For example: bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID or projects/PROJECTID/datasets/DATASETID */
		resource: FormControl<string | null | undefined>,
	}
	export function CreateAuthorizationInfoFormGroup() {
		return new FormGroup<AuthorizationInfoFormProperties>({
			granted: new FormControl<boolean | null | undefined>(undefined),
			permission: new FormControl<string | null | undefined>(undefined),
			resource: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message defines core attributes for a resource. A resource is an addressable (named) entity provided by the destination service. For example, a file stored on a network storage service. */
	export interface Resource {

		/** Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ */
		annotations?: {[id: string]: string };

		/** Output only. The timestamp when the resource was created. This may be either the time creation was initiated or when it was completed. */
		createTime?: string | null;

		/** Output only. The timestamp when the resource was deleted. If the resource is not deleted, this must be empty. */
		deleteTime?: string | null;

		/** Mutable. The display name set by clients. Must be <= 63 characters. */
		displayName?: string | null;

		/** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
		etag?: string | null;

		/** The labels or tags on the resource, such as AWS resource tags and Kubernetes resource labels. */
		labels?: {[id: string]: string };

		/** Immutable. The location of the resource. The location encoding is specific to the service provider, and new encoding may be introduced as the service evolves. For Google Cloud products, the encoding is what is used by Google Cloud APIs, such as `us-east1`, `aws-us-east-1`, and `azure-eastus2`. The semantics of `location` is identical to the `cloud.googleapis.com/location` label used by some Google Cloud APIs. */
		location?: string | null;

		/** The stable identifier (name) of a resource on the `service`. A resource can be logically identified as "//{resource.service}/{resource.name}". The differences between a resource name and a URI are: * Resource name is a logical identifier, independent of network protocol and API version. For example, `//pubsub.googleapis.com/projects/123/topics/news-feed`. * URI often includes protocol and version information, so it can be used directly by applications. For example, `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`. See https://cloud.google.com/apis/design/resource_names for details. */
		name?: string | null;

		/** The name of the service that this resource belongs to, such as `pubsub.googleapis.com`. The service may be different from the DNS hostname that actually serves the request. */
		service?: string | null;

		/** The type of the resource. The syntax is platform-specific because different platforms define their resources differently. For Google APIs, the type format must be "{service}/{kind}", such as "pubsub.googleapis.com/Topic". */
		type?: string | null;

		/** The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
		uid?: string | null;

		/** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
		updateTime?: string | null;
	}

	/** This message defines core attributes for a resource. A resource is an addressable (named) entity provided by the destination service. For example, a file stored on a network storage service. */
	export interface ResourceFormProperties {

		/** Annotations is an unstructured key-value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ */
		annotations: FormControl<{[id: string]: string } | null | undefined>,

		/** Output only. The timestamp when the resource was created. This may be either the time creation was initiated or when it was completed. */
		createTime: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was deleted. If the resource is not deleted, this must be empty. */
		deleteTime: FormControl<string | null | undefined>,

		/** Mutable. The display name set by clients. Must be <= 63 characters. */
		displayName: FormControl<string | null | undefined>,

		/** Output only. An opaque value that uniquely identifies a version or generation of a resource. It can be used to confirm that the client and server agree on the ordering of a resource being written. */
		etag: FormControl<string | null | undefined>,

		/** The labels or tags on the resource, such as AWS resource tags and Kubernetes resource labels. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Immutable. The location of the resource. The location encoding is specific to the service provider, and new encoding may be introduced as the service evolves. For Google Cloud products, the encoding is what is used by Google Cloud APIs, such as `us-east1`, `aws-us-east-1`, and `azure-eastus2`. The semantics of `location` is identical to the `cloud.googleapis.com/location` label used by some Google Cloud APIs. */
		location: FormControl<string | null | undefined>,

		/** The stable identifier (name) of a resource on the `service`. A resource can be logically identified as "//{resource.service}/{resource.name}". The differences between a resource name and a URI are: * Resource name is a logical identifier, independent of network protocol and API version. For example, `//pubsub.googleapis.com/projects/123/topics/news-feed`. * URI often includes protocol and version information, so it can be used directly by applications. For example, `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`. See https://cloud.google.com/apis/design/resource_names for details. */
		name: FormControl<string | null | undefined>,

		/** The name of the service that this resource belongs to, such as `pubsub.googleapis.com`. The service may be different from the DNS hostname that actually serves the request. */
		service: FormControl<string | null | undefined>,

		/** The type of the resource. The syntax is platform-specific because different platforms define their resources differently. For Google APIs, the type format must be "{service}/{kind}", such as "pubsub.googleapis.com/Topic". */
		type: FormControl<string | null | undefined>,

		/** The unique identifier of the resource. UID is unique in the time and space for this resource within the scope of the service. It is typically generated by the server on successful creation of a resource and must not be changed. UID is used to uniquely identify resources with resource name reuses. This should be a UUID4. */
		uid: FormControl<string | null | undefined>,

		/** Output only. The timestamp when the resource was last updated. Any change to the resource made by users must refresh this value. Changes to a resource made by the service should refresh this value. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateResourceFormGroup() {
		return new FormGroup<ResourceFormProperties>({
			annotations: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			createTime: new FormControl<string | null | undefined>(undefined),
			deleteTime: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			etag: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			location: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			service: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			uid: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Information related to policy violations for this request. */
	export interface PolicyViolationInfo {

		/** Represents OrgPolicy Violation information. */
		orgPolicyViolationInfo?: OrgPolicyViolationInfo;
	}

	/** Information related to policy violations for this request. */
	export interface PolicyViolationInfoFormProperties {
	}
	export function CreatePolicyViolationInfoFormGroup() {
		return new FormGroup<PolicyViolationInfoFormProperties>({
		});

	}


	/** Represents OrgPolicy Violation information. */
	export interface OrgPolicyViolationInfo {

		/** Optional. Resource payload that is currently in scope and is subjected to orgpolicy conditions. This payload may be the subset of the actual Resource that may come in the request. This payload should not contain any core content. */
		payload?: {[id: string]: any };

		/** Optional. Tags referenced on the resource at the time of evaluation. These also include the federated tags, if they are supplied in the CheckOrgPolicy or CheckCustomConstraints Requests. Optional field as of now. These tags are the Cloud tags that are available on the resource during the policy evaluation and will be available as part of the OrgPolicy check response for logging purposes. */
		resourceTags?: {[id: string]: string };

		/** Optional. Resource type that the orgpolicy is checked against. Example: compute.googleapis.com/Instance, store.googleapis.com/bucket */
		resourceType?: string | null;

		/** Optional. Policy violations */
		violationInfo?: Array<ViolationInfo>;
	}

	/** Represents OrgPolicy Violation information. */
	export interface OrgPolicyViolationInfoFormProperties {

		/** Optional. Resource payload that is currently in scope and is subjected to orgpolicy conditions. This payload may be the subset of the actual Resource that may come in the request. This payload should not contain any core content. */
		payload: FormControl<{[id: string]: any } | null | undefined>,

		/** Optional. Tags referenced on the resource at the time of evaluation. These also include the federated tags, if they are supplied in the CheckOrgPolicy or CheckCustomConstraints Requests. Optional field as of now. These tags are the Cloud tags that are available on the resource during the policy evaluation and will be available as part of the OrgPolicy check response for logging purposes. */
		resourceTags: FormControl<{[id: string]: string } | null | undefined>,

		/** Optional. Resource type that the orgpolicy is checked against. Example: compute.googleapis.com/Instance, store.googleapis.com/bucket */
		resourceType: FormControl<string | null | undefined>,
	}
	export function CreateOrgPolicyViolationInfoFormGroup() {
		return new FormGroup<OrgPolicyViolationInfoFormProperties>({
			payload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			resourceTags: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			resourceType: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Provides information about the Policy violation info for this request. */
	export interface ViolationInfo {

		/** Optional. Value that is being checked for the policy. This could be in encrypted form (if pii sensitive). This field will only be emitted in LIST_POLICY types */
		checkedValue?: string | null;

		/** Optional. Constraint name */
		constraint?: string | null;

		/** Optional. Error message that policy is indicating. */
		errorMessage?: string | null;

		/** Optional. Indicates the type of the policy. */
		policyType?: ViolationInfoPolicyType | null;
	}

	/** Provides information about the Policy violation info for this request. */
	export interface ViolationInfoFormProperties {

		/** Optional. Value that is being checked for the policy. This could be in encrypted form (if pii sensitive). This field will only be emitted in LIST_POLICY types */
		checkedValue: FormControl<string | null | undefined>,

		/** Optional. Constraint name */
		constraint: FormControl<string | null | undefined>,

		/** Optional. Error message that policy is indicating. */
		errorMessage: FormControl<string | null | undefined>,

		/** Optional. Indicates the type of the policy. */
		policyType: FormControl<ViolationInfoPolicyType | null | undefined>,
	}
	export function CreateViolationInfoFormGroup() {
		return new FormGroup<ViolationInfoFormProperties>({
			checkedValue: new FormControl<string | null | undefined>(undefined),
			constraint: new FormControl<string | null | undefined>(undefined),
			errorMessage: new FormControl<string | null | undefined>(undefined),
			policyType: new FormControl<ViolationInfoPolicyType | null | undefined>(undefined),
		});

	}

	export enum ViolationInfoPolicyType { POLICY_TYPE_UNSPECIFIED = 'POLICY_TYPE_UNSPECIFIED', BOOLEAN_CONSTRAINT = 'BOOLEAN_CONSTRAINT', LIST_CONSTRAINT = 'LIST_CONSTRAINT', CUSTOM_CONSTRAINT = 'CUSTOM_CONSTRAINT' }


	/** Metadata about the request. */
	export interface RequestMetadata {

		/** The IP address of the caller. For a caller from the internet, this will be the public IPv4 or IPv6 address. For calls made from inside Google's internal production network from one GCP service to another, `caller_ip` will be redacted to "private". For a caller from a Compute Engine VM with a external IP address, `caller_ip` will be the VM's external IP address. For a caller from a Compute Engine VM without a external IP address, if the VM is in the same organization (or project) as the accessed resource, `caller_ip` will be the VM's internal IPv4 address, otherwise `caller_ip` will be redacted to "gce-internal-ip". See https://cloud.google.com/compute/docs/vpc/ for more information. */
		callerIp?: string | null;

		/** The network of the caller. Set only if the network host project is part of the same GCP organization (or project) as the accessed resource. See https://cloud.google.com/compute/docs/vpc/ for more information. This is a scheme-less URI full resource name. For example: "//compute.googleapis.com/projects/PROJECT_ID/global/networks/NETWORK_ID" */
		callerNetwork?: string | null;

		/** The user agent of the caller. This information is not authenticated and should be treated accordingly. For example: + `google-api-python-client/1.4.0`: The request was made by the Google API client for Python. + `Cloud SDK Command Line Tool apitools-client/1.0 gcloud/0.9.62`: The request was made by the Google Cloud SDK CLI (gcloud). + `AppEngine-Google; (+http://code.google.com/appengine; appid: s~my-project`: The request was made from the `my-project` App Engine app. */
		callerSuppliedUserAgent?: string | null;

		/** This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate. */
		destinationAttributes?: Peer;

		/** This message defines attributes for an HTTP request. If the actual request is not an HTTP request, the runtime system should try to map the actual request to an equivalent HTTP request. */
		requestAttributes?: Request;
	}

	/** Metadata about the request. */
	export interface RequestMetadataFormProperties {

		/** The IP address of the caller. For a caller from the internet, this will be the public IPv4 or IPv6 address. For calls made from inside Google's internal production network from one GCP service to another, `caller_ip` will be redacted to "private". For a caller from a Compute Engine VM with a external IP address, `caller_ip` will be the VM's external IP address. For a caller from a Compute Engine VM without a external IP address, if the VM is in the same organization (or project) as the accessed resource, `caller_ip` will be the VM's internal IPv4 address, otherwise `caller_ip` will be redacted to "gce-internal-ip". See https://cloud.google.com/compute/docs/vpc/ for more information. */
		callerIp: FormControl<string | null | undefined>,

		/** The network of the caller. Set only if the network host project is part of the same GCP organization (or project) as the accessed resource. See https://cloud.google.com/compute/docs/vpc/ for more information. This is a scheme-less URI full resource name. For example: "//compute.googleapis.com/projects/PROJECT_ID/global/networks/NETWORK_ID" */
		callerNetwork: FormControl<string | null | undefined>,

		/** The user agent of the caller. This information is not authenticated and should be treated accordingly. For example: + `google-api-python-client/1.4.0`: The request was made by the Google API client for Python. + `Cloud SDK Command Line Tool apitools-client/1.0 gcloud/0.9.62`: The request was made by the Google Cloud SDK CLI (gcloud). + `AppEngine-Google; (+http://code.google.com/appengine; appid: s~my-project`: The request was made from the `my-project` App Engine app. */
		callerSuppliedUserAgent: FormControl<string | null | undefined>,
	}
	export function CreateRequestMetadataFormGroup() {
		return new FormGroup<RequestMetadataFormProperties>({
			callerIp: new FormControl<string | null | undefined>(undefined),
			callerNetwork: new FormControl<string | null | undefined>(undefined),
			callerSuppliedUserAgent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate. */
	export interface Peer {

		/** The IP address of the peer. */
		ip?: string | null;

		/** The labels associated with the peer. */
		labels?: {[id: string]: string };

		/** The network port of the peer. */
		port?: string | null;

		/** The identity of this peer. Similar to `Request.auth.principal`, but relative to the peer instead of the request. For example, the identity associated with a load balancer that forwarded the request. */
		principal?: string | null;

		/** The CLDR country/region code associated with the above IP address. If the IP address is private, the `region_code` should reflect the physical location where this peer is running. */
		regionCode?: string | null;
	}

	/** This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate. */
	export interface PeerFormProperties {

		/** The IP address of the peer. */
		ip: FormControl<string | null | undefined>,

		/** The labels associated with the peer. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** The network port of the peer. */
		port: FormControl<string | null | undefined>,

		/** The identity of this peer. Similar to `Request.auth.principal`, but relative to the peer instead of the request. For example, the identity associated with a load balancer that forwarded the request. */
		principal: FormControl<string | null | undefined>,

		/** The CLDR country/region code associated with the above IP address. If the IP address is private, the `region_code` should reflect the physical location where this peer is running. */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreatePeerFormGroup() {
		return new FormGroup<PeerFormProperties>({
			ip: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			port: new FormControl<string | null | undefined>(undefined),
			principal: new FormControl<string | null | undefined>(undefined),
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message defines attributes for an HTTP request. If the actual request is not an HTTP request, the runtime system should try to map the actual request to an equivalent HTTP request. */
	export interface Request {

		/** This message defines request authentication attributes. Terminology is based on the JSON Web Token (JWT) standard, but the terms also correlate to concepts in other standards. */
		auth?: Auth;

		/** The HTTP request headers. If multiple headers share the same key, they must be merged according to the HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive. */
		headers?: {[id: string]: string };

		/** The HTTP request `Host` header value. */
		host?: string | null;

		/** The unique ID for a request, which can be propagated to downstream systems. The ID should have low probability of collision within a single day for a specific service. */
		id?: string | null;

		/** The HTTP request method, such as `GET`, `POST`. */
		method?: string | null;

		/** The HTTP URL path, excluding the query parameters. */
		path?: string | null;

		/** The network protocol used with the request, such as "http/1.1", "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids for details. */
		protocol?: string | null;

		/** The HTTP URL query in the format of `name1=value1&name2=value2`, as it appears in the first line of the HTTP request. No decoding is performed. */
		query?: string | null;

		/** A special parameter for request reason. It is used by security systems to associate auditing information with a request. */
		reason?: string | null;

		/** The HTTP URL scheme, such as `http` and `https`. */
		scheme?: string | null;

		/** The HTTP request size in bytes. If unknown, it must be -1. */
		size?: string | null;

		/** The timestamp when the `destination` service receives the last byte of the request. */
		time?: string | null;
	}

	/** This message defines attributes for an HTTP request. If the actual request is not an HTTP request, the runtime system should try to map the actual request to an equivalent HTTP request. */
	export interface RequestFormProperties {

		/** The HTTP request headers. If multiple headers share the same key, they must be merged according to the HTTP spec. All header keys must be lowercased, because HTTP header keys are case-insensitive. */
		headers: FormControl<{[id: string]: string } | null | undefined>,

		/** The HTTP request `Host` header value. */
		host: FormControl<string | null | undefined>,

		/** The unique ID for a request, which can be propagated to downstream systems. The ID should have low probability of collision within a single day for a specific service. */
		id: FormControl<string | null | undefined>,

		/** The HTTP request method, such as `GET`, `POST`. */
		method: FormControl<string | null | undefined>,

		/** The HTTP URL path, excluding the query parameters. */
		path: FormControl<string | null | undefined>,

		/** The network protocol used with the request, such as "http/1.1", "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids for details. */
		protocol: FormControl<string | null | undefined>,

		/** The HTTP URL query in the format of `name1=value1&name2=value2`, as it appears in the first line of the HTTP request. No decoding is performed. */
		query: FormControl<string | null | undefined>,

		/** A special parameter for request reason. It is used by security systems to associate auditing information with a request. */
		reason: FormControl<string | null | undefined>,

		/** The HTTP URL scheme, such as `http` and `https`. */
		scheme: FormControl<string | null | undefined>,

		/** The HTTP request size in bytes. If unknown, it must be -1. */
		size: FormControl<string | null | undefined>,

		/** The timestamp when the `destination` service receives the last byte of the request. */
		time: FormControl<string | null | undefined>,
	}
	export function CreateRequestFormGroup() {
		return new FormGroup<RequestFormProperties>({
			headers: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			host: new FormControl<string | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			method: new FormControl<string | null | undefined>(undefined),
			path: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			query: new FormControl<string | null | undefined>(undefined),
			reason: new FormControl<string | null | undefined>(undefined),
			scheme: new FormControl<string | null | undefined>(undefined),
			size: new FormControl<string | null | undefined>(undefined),
			time: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This message defines request authentication attributes. Terminology is based on the JSON Web Token (JWT) standard, but the terms also correlate to concepts in other standards. */
	export interface Auth {

		/** A list of access level resource names that allow resources to be accessed by authenticated requester. It is part of Secure GCP processing for the incoming request. An access level string has the format: "//{api_service_name}/accessPolicies/{policy_id}/accessLevels/{short_name}" Example: "//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL" */
		accessLevels?: Array<string>;

		/** The intended audience(s) for this authentication information. Reflects the audience (`aud`) claim within a JWT. The audience value(s) depends on the `issuer`, but typically include one or more of the following pieces of information: * The services intended to receive the credential. For example, ["https://pubsub.googleapis.com/", "https://storage.googleapis.com/"]. * A set of service-based scopes. For example, ["https://www.googleapis.com/auth/cloud-platform"]. * The client id of an app, such as the Firebase project id for JWTs from Firebase Auth. Consult the documentation for the credential issuer to determine the information provided. */
		audiences?: Array<string>;

		/** Structured claims presented with the credential. JWTs include `{key: value}` pairs for standard and private claims. The following is a subset of the standard required and optional claims that would typically be presented for a Google-based JWT: {'iss': 'accounts.google.com', 'sub': '113289723416554971153', 'aud': ['123456789012', 'pubsub.googleapis.com'], 'azp': '123456789012.apps.googleusercontent.com', 'email': 'jsmith@example.com', 'iat': 1353601026, 'exp': 1353604926} SAML assertions are similarly specified, but with an identity provider dependent structure. */
		claims?: {[id: string]: any };

		/** The authorized presenter of the credential. Reflects the optional Authorized Presenter (`azp`) claim within a JWT or the OAuth client id. For example, a Google Cloud Platform client id looks as follows: "123456789012.apps.googleusercontent.com". */
		presenter?: string | null;

		/** The authenticated principal. Reflects the issuer (`iss`) and subject (`sub`) claims within a JWT. The issuer and subject should be `/` delimited, with `/` percent-encoded within the subject fragment. For Google accounts, the principal format is: "https://accounts.google.com/{id}" */
		principal?: string | null;
	}

	/** This message defines request authentication attributes. Terminology is based on the JSON Web Token (JWT) standard, but the terms also correlate to concepts in other standards. */
	export interface AuthFormProperties {

		/** Structured claims presented with the credential. JWTs include `{key: value}` pairs for standard and private claims. The following is a subset of the standard required and optional claims that would typically be presented for a Google-based JWT: {'iss': 'accounts.google.com', 'sub': '113289723416554971153', 'aud': ['123456789012', 'pubsub.googleapis.com'], 'azp': '123456789012.apps.googleusercontent.com', 'email': 'jsmith@example.com', 'iat': 1353601026, 'exp': 1353604926} SAML assertions are similarly specified, but with an identity provider dependent structure. */
		claims: FormControl<{[id: string]: any } | null | undefined>,

		/** The authorized presenter of the credential. Reflects the optional Authorized Presenter (`azp`) claim within a JWT or the OAuth client id. For example, a Google Cloud Platform client id looks as follows: "123456789012.apps.googleusercontent.com". */
		presenter: FormControl<string | null | undefined>,

		/** The authenticated principal. Reflects the issuer (`iss`) and subject (`sub`) claims within a JWT. The issuer and subject should be `/` delimited, with `/` percent-encoded within the subject fragment. For Google accounts, the principal format is: "https://accounts.google.com/{id}" */
		principal: FormControl<string | null | undefined>,
	}
	export function CreateAuthFormGroup() {
		return new FormGroup<AuthFormProperties>({
			claims: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			presenter: new FormControl<string | null | undefined>(undefined),
			principal: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location information about a resource. */
	export interface ResourceLocation {

		/** The locations of a resource after the execution of the operation. Requests to create or delete a location based resource must populate the 'current_locations' field and not the 'original_locations' field. For example: "europe-west1-a" "us-east1" "nam3" */
		currentLocations?: Array<string>;

		/** The locations of a resource prior to the execution of the operation. Requests that mutate the resource's location must populate both the 'original_locations' as well as the 'current_locations' fields. For example: "europe-west1-a" "us-east1" "nam3" */
		originalLocations?: Array<string>;
	}

	/** Location information about a resource. */
	export interface ResourceLocationFormProperties {
	}
	export function CreateResourceLocationFormGroup() {
		return new FormGroup<ResourceLocationFormProperties>({
		});

	}


	/** Defines the errors to be returned in google.api.servicecontrol.v1.CheckResponse.check_errors. */
	export interface CheckError {

		/** The error code. */
		code?: CheckErrorCode | null;

		/** Free-form text providing details on the error cause of the error. */
		detail?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: Status;

		/** Subject to whom this error applies. See the specific code enum for more details on this field. For example: - "project:" - "folder:" - "organization:" */
		subject?: string | null;
	}

	/** Defines the errors to be returned in google.api.servicecontrol.v1.CheckResponse.check_errors. */
	export interface CheckErrorFormProperties {

		/** The error code. */
		code: FormControl<CheckErrorCode | null | undefined>,

		/** Free-form text providing details on the error cause of the error. */
		detail: FormControl<string | null | undefined>,

		/** Subject to whom this error applies. See the specific code enum for more details on this field. For example: - "project:" - "folder:" - "organization:" */
		subject: FormControl<string | null | undefined>,
	}
	export function CreateCheckErrorFormGroup() {
		return new FormGroup<CheckErrorFormProperties>({
			code: new FormControl<CheckErrorCode | null | undefined>(undefined),
			detail: new FormControl<string | null | undefined>(undefined),
			subject: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum CheckErrorCode { ERROR_CODE_UNSPECIFIED = 'ERROR_CODE_UNSPECIFIED', NOT_FOUND = 'NOT_FOUND', PERMISSION_DENIED = 'PERMISSION_DENIED', RESOURCE_EXHAUSTED = 'RESOURCE_EXHAUSTED', BUDGET_EXCEEDED = 'BUDGET_EXCEEDED', DENIAL_OF_SERVICE_DETECTED = 'DENIAL_OF_SERVICE_DETECTED', LOAD_SHEDDING = 'LOAD_SHEDDING', ABUSER_DETECTED = 'ABUSER_DETECTED', SERVICE_NOT_ACTIVATED = 'SERVICE_NOT_ACTIVATED', VISIBILITY_DENIED = 'VISIBILITY_DENIED', BILLING_DISABLED = 'BILLING_DISABLED', PROJECT_DELETED = 'PROJECT_DELETED', PROJECT_INVALID = 'PROJECT_INVALID', CONSUMER_INVALID = 'CONSUMER_INVALID', IP_ADDRESS_BLOCKED = 'IP_ADDRESS_BLOCKED', REFERER_BLOCKED = 'REFERER_BLOCKED', CLIENT_APP_BLOCKED = 'CLIENT_APP_BLOCKED', API_TARGET_BLOCKED = 'API_TARGET_BLOCKED', API_KEY_INVALID = 'API_KEY_INVALID', API_KEY_EXPIRED = 'API_KEY_EXPIRED', API_KEY_NOT_FOUND = 'API_KEY_NOT_FOUND', SPATULA_HEADER_INVALID = 'SPATULA_HEADER_INVALID', LOAS_ROLE_INVALID = 'LOAS_ROLE_INVALID', NO_LOAS_PROJECT = 'NO_LOAS_PROJECT', LOAS_PROJECT_DISABLED = 'LOAS_PROJECT_DISABLED', SECURITY_POLICY_VIOLATED = 'SECURITY_POLICY_VIOLATED', INVALID_CREDENTIAL = 'INVALID_CREDENTIAL', LOCATION_POLICY_VIOLATED = 'LOCATION_POLICY_VIOLATED', NAMESPACE_LOOKUP_UNAVAILABLE = 'NAMESPACE_LOOKUP_UNAVAILABLE', SERVICE_STATUS_UNAVAILABLE = 'SERVICE_STATUS_UNAVAILABLE', BILLING_STATUS_UNAVAILABLE = 'BILLING_STATUS_UNAVAILABLE', QUOTA_CHECK_UNAVAILABLE = 'QUOTA_CHECK_UNAVAILABLE', LOAS_PROJECT_LOOKUP_UNAVAILABLE = 'LOAS_PROJECT_LOOKUP_UNAVAILABLE', CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE = 'CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE', SECURITY_POLICY_BACKEND_UNAVAILABLE = 'SECURITY_POLICY_BACKEND_UNAVAILABLE', LOCATION_POLICY_BACKEND_UNAVAILABLE = 'LOCATION_POLICY_BACKEND_UNAVAILABLE', INJECTED_ERROR = 'INJECTED_ERROR' }


	/** Contains additional information about the check operation. */
	export interface CheckInfo {

		/** `ConsumerInfo` provides information about the consumer. */
		consumerInfo?: ConsumerInfo;

		/** A list of fields and label keys that are ignored by the server. The client doesn't need to send them for following requests to improve performance and allow better aggregation. */
		unusedArguments?: Array<string>;
	}

	/** Contains additional information about the check operation. */
	export interface CheckInfoFormProperties {
	}
	export function CreateCheckInfoFormGroup() {
		return new FormGroup<CheckInfoFormProperties>({
		});

	}


	/** `ConsumerInfo` provides information about the consumer. */
	export interface ConsumerInfo {

		/** The consumer identity number, can be Google cloud project number, folder number or organization number e.g. 1234567890. A value of 0 indicates no consumer number is found. */
		consumerNumber?: string | null;

		/** The Google cloud project number, e.g. 1234567890. A value of 0 indicates no project number is found. NOTE: This field is deprecated after Chemist support flexible consumer id. New code should not depend on this field anymore. */
		projectNumber?: string | null;

		/** The type of the consumer which should have been defined in [Google Resource Manager](https://cloud.google.com/resource-manager/). */
		type?: ConsumerInfoType | null;
	}

	/** `ConsumerInfo` provides information about the consumer. */
	export interface ConsumerInfoFormProperties {

		/** The consumer identity number, can be Google cloud project number, folder number or organization number e.g. 1234567890. A value of 0 indicates no consumer number is found. */
		consumerNumber: FormControl<string | null | undefined>,

		/** The Google cloud project number, e.g. 1234567890. A value of 0 indicates no project number is found. NOTE: This field is deprecated after Chemist support flexible consumer id. New code should not depend on this field anymore. */
		projectNumber: FormControl<string | null | undefined>,

		/** The type of the consumer which should have been defined in [Google Resource Manager](https://cloud.google.com/resource-manager/). */
		type: FormControl<ConsumerInfoType | null | undefined>,
	}
	export function CreateConsumerInfoFormGroup() {
		return new FormGroup<ConsumerInfoFormProperties>({
			consumerNumber: new FormControl<string | null | undefined>(undefined),
			projectNumber: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<ConsumerInfoType | null | undefined>(undefined),
		});

	}

	export enum ConsumerInfoType { CONSUMER_TYPE_UNSPECIFIED = 'CONSUMER_TYPE_UNSPECIFIED', PROJECT = 'PROJECT', FOLDER = 'FOLDER', ORGANIZATION = 'ORGANIZATION', SERVICE_SPECIFIC = 'SERVICE_SPECIFIC' }


	/** Request message for the Check method. */
	export interface CheckRequest {

		/** Represents information regarding an operation. */
		operation?: Operation;

		/** Requests the project settings to be returned as part of the check response. */
		requestProjectSettings?: boolean | null;

		/** Specifies which version of service configuration should be used to process the request. If unspecified or no matching version can be found, the latest one will be used. */
		serviceConfigId?: string | null;

		/** Indicates if service activation check should be skipped for this request. Default behavior is to perform the check and apply relevant quota. WARNING: Setting this flag to "true" will disable quota enforcement. */
		skipActivationCheck?: boolean | null;
	}

	/** Request message for the Check method. */
	export interface CheckRequestFormProperties {

		/** Requests the project settings to be returned as part of the check response. */
		requestProjectSettings: FormControl<boolean | null | undefined>,

		/** Specifies which version of service configuration should be used to process the request. If unspecified or no matching version can be found, the latest one will be used. */
		serviceConfigId: FormControl<string | null | undefined>,

		/** Indicates if service activation check should be skipped for this request. Default behavior is to perform the check and apply relevant quota. WARNING: Setting this flag to "true" will disable quota enforcement. */
		skipActivationCheck: FormControl<boolean | null | undefined>,
	}
	export function CreateCheckRequestFormGroup() {
		return new FormGroup<CheckRequestFormProperties>({
			requestProjectSettings: new FormControl<boolean | null | undefined>(undefined),
			serviceConfigId: new FormControl<string | null | undefined>(undefined),
			skipActivationCheck: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Represents information regarding an operation. */
	export interface Operation {

		/** Identity of the consumer who is using the service. This field should be filled in for the operations initiated by a consumer, but not for service-initiated operations that are not related to a specific consumer. - This can be in one of the following formats: - project:PROJECT_ID, - project`_`number:PROJECT_NUMBER, - projects/PROJECT_ID or PROJECT_NUMBER, - folders/FOLDER_NUMBER, - organizations/ORGANIZATION_NUMBER, - api`_`key:API_KEY. */
		consumerId?: string | null;

		/** End time of the operation. Required when the operation is used in ServiceController.Report, but optional when the operation is used in ServiceController.Check. */
		endTime?: string | null;

		/** DO NOT USE. This is an experimental field. */
		importance?: OperationImportance | null;

		/** Labels describing the operation. Only the following labels are allowed: - Labels describing monitored resources as defined in the service configuration. - Default labels of metric values. When specified, labels defined in the metric value override these default. - The following labels defined by Google Cloud Platform: - `cloud.googleapis.com/location` describing the location where the operation happened, - `servicecontrol.googleapis.com/user_agent` describing the user agent of the API request, - `servicecontrol.googleapis.com/service_agent` describing the service used to handle the API request (e.g. ESP), - `servicecontrol.googleapis.com/platform` describing the platform where the API is served, such as App Engine, Compute Engine, or Kubernetes Engine. */
		labels?: {[id: string]: string };

		/** Represents information to be logged. */
		logEntries?: Array<LogEntry>;

		/** Represents information about this operation. Each MetricValueSet corresponds to a metric defined in the service configuration. The data type used in the MetricValueSet must agree with the data type specified in the metric definition. Within a single operation, it is not allowed to have more than one MetricValue instances that have the same metric names and identical label value combinations. If a request has such duplicated MetricValue instances, the entire request is rejected with an invalid argument error. */
		metricValueSets?: Array<MetricValueSet>;

		/** Identity of the operation. This must be unique within the scope of the service that generated the operation. If the service calls Check() and Report() on the same operation, the two calls should carry the same id. UUID version 4 is recommended, though not required. In scenarios where an operation is computed from existing information and an idempotent id is desirable for deduplication purpose, UUID version 5 is recommended. See RFC 4122 for details. */
		operationId?: string | null;

		/** Fully qualified name of the operation. Reserved for future use. */
		operationName?: string | null;

		/** Represents the properties needed for quota operations. */
		quotaProperties?: QuotaProperties;

		/** The resources that are involved in the operation. The maximum supported number of entries in this field is 100. */
		resources?: Array<ResourceInfo>;

		/** Required. Start time of the operation. */
		startTime?: string | null;

		/** Unimplemented. A list of Cloud Trace spans. The span names shall contain the id of the destination project which can be either the produce or the consumer project. */
		traceSpans?: Array<TraceSpan>;

		/** Private Preview. This feature is only available for approved services. User defined labels for the resource that this operation is associated with. */
		userLabels?: {[id: string]: string };
	}

	/** Represents information regarding an operation. */
	export interface OperationFormProperties {

		/** Identity of the consumer who is using the service. This field should be filled in for the operations initiated by a consumer, but not for service-initiated operations that are not related to a specific consumer. - This can be in one of the following formats: - project:PROJECT_ID, - project`_`number:PROJECT_NUMBER, - projects/PROJECT_ID or PROJECT_NUMBER, - folders/FOLDER_NUMBER, - organizations/ORGANIZATION_NUMBER, - api`_`key:API_KEY. */
		consumerId: FormControl<string | null | undefined>,

		/** End time of the operation. Required when the operation is used in ServiceController.Report, but optional when the operation is used in ServiceController.Check. */
		endTime: FormControl<string | null | undefined>,

		/** DO NOT USE. This is an experimental field. */
		importance: FormControl<OperationImportance | null | undefined>,

		/** Labels describing the operation. Only the following labels are allowed: - Labels describing monitored resources as defined in the service configuration. - Default labels of metric values. When specified, labels defined in the metric value override these default. - The following labels defined by Google Cloud Platform: - `cloud.googleapis.com/location` describing the location where the operation happened, - `servicecontrol.googleapis.com/user_agent` describing the user agent of the API request, - `servicecontrol.googleapis.com/service_agent` describing the service used to handle the API request (e.g. ESP), - `servicecontrol.googleapis.com/platform` describing the platform where the API is served, such as App Engine, Compute Engine, or Kubernetes Engine. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Identity of the operation. This must be unique within the scope of the service that generated the operation. If the service calls Check() and Report() on the same operation, the two calls should carry the same id. UUID version 4 is recommended, though not required. In scenarios where an operation is computed from existing information and an idempotent id is desirable for deduplication purpose, UUID version 5 is recommended. See RFC 4122 for details. */
		operationId: FormControl<string | null | undefined>,

		/** Fully qualified name of the operation. Reserved for future use. */
		operationName: FormControl<string | null | undefined>,

		/** Required. Start time of the operation. */
		startTime: FormControl<string | null | undefined>,

		/** Private Preview. This feature is only available for approved services. User defined labels for the resource that this operation is associated with. */
		userLabels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateOperationFormGroup() {
		return new FormGroup<OperationFormProperties>({
			consumerId: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			importance: new FormControl<OperationImportance | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			operationId: new FormControl<string | null | undefined>(undefined),
			operationName: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			userLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}

	export enum OperationImportance { LOW = 'LOW', HIGH = 'HIGH', DEBUG = 'DEBUG', PROMOTED = 'PROMOTED' }


	/** An individual log entry. */
	export interface LogEntry {

		/** A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message. */
		httpRequest?: HttpRequest;

		/** A unique ID for the log entry used for deduplication. If omitted, the implementation will generate one based on operation_id. */
		insertId?: string | null;

		/** A set of user-defined (key, value) data that provides additional information about the log entry. */
		labels?: {[id: string]: string };

		/** Required. The log to which this log entry belongs. Examples: `"syslog"`, `"book_log"`. */
		name?: string | null;

		/** Additional information about a potentially long-running operation with which a log entry is associated. */
		operation?: LogEntryOperation;

		/** The log entry payload, represented as a protocol buffer that is expressed as a JSON object. The only accepted type currently is AuditLog. */
		protoPayload?: {[id: string]: any };

		/** The severity of the log entry. The default value is `LogSeverity.DEFAULT`. */
		severity?: LogEntrySeverity | null;

		/** Additional information about the source code location that produced the log entry. */
		sourceLocation?: LogEntrySourceLocation;

		/** The log entry payload, represented as a structure that is expressed as a JSON object. */
		structPayload?: {[id: string]: any };

		/** The log entry payload, represented as a Unicode string (UTF-8). */
		textPayload?: string | null;

		/** The time the event described by the log entry occurred. If omitted, defaults to operation start time. */
		timestamp?: string | null;

		/** Optional. Resource name of the trace associated with the log entry, if any. If this field contains a relative resource name, you can assume the name is relative to `//tracing.googleapis.com`. Example: `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824` */
		trace?: string | null;
	}

	/** An individual log entry. */
	export interface LogEntryFormProperties {

		/** A unique ID for the log entry used for deduplication. If omitted, the implementation will generate one based on operation_id. */
		insertId: FormControl<string | null | undefined>,

		/** A set of user-defined (key, value) data that provides additional information about the log entry. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The log to which this log entry belongs. Examples: `"syslog"`, `"book_log"`. */
		name: FormControl<string | null | undefined>,

		/** The log entry payload, represented as a protocol buffer that is expressed as a JSON object. The only accepted type currently is AuditLog. */
		protoPayload: FormControl<{[id: string]: any } | null | undefined>,

		/** The severity of the log entry. The default value is `LogSeverity.DEFAULT`. */
		severity: FormControl<LogEntrySeverity | null | undefined>,

		/** The log entry payload, represented as a structure that is expressed as a JSON object. */
		structPayload: FormControl<{[id: string]: any } | null | undefined>,

		/** The log entry payload, represented as a Unicode string (UTF-8). */
		textPayload: FormControl<string | null | undefined>,

		/** The time the event described by the log entry occurred. If omitted, defaults to operation start time. */
		timestamp: FormControl<string | null | undefined>,

		/** Optional. Resource name of the trace associated with the log entry, if any. If this field contains a relative resource name, you can assume the name is relative to `//tracing.googleapis.com`. Example: `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824` */
		trace: FormControl<string | null | undefined>,
	}
	export function CreateLogEntryFormGroup() {
		return new FormGroup<LogEntryFormProperties>({
			insertId: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protoPayload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			severity: new FormControl<LogEntrySeverity | null | undefined>(undefined),
			structPayload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			textPayload: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			trace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message. */
	export interface HttpRequest {

		/** The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted. */
		cacheFillBytes?: string | null;

		/** Whether or not an entity was served from cache (with or without validation). */
		cacheHit?: boolean | null;

		/** Whether or not a cache lookup was attempted. */
		cacheLookup?: boolean | null;

		/** Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if `cache_hit` is True. */
		cacheValidatedWithOriginServer?: boolean | null;

		/** The request processing latency on the server, from the time the request was received until the response was sent. */
		latency?: string | null;

		/** Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket" */
		protocol?: string | null;

		/** The referer URL of the request, as defined in [HTTP/1.1 Header Field Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). */
		referer?: string | null;

		/** The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: `"192.168.1.1"`, `"FE80::0202:B3FF:FE1E:8329"`. */
		remoteIp?: string | null;

		/** The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`. */
		requestMethod?: string | null;

		/** The size of the HTTP request message in bytes, including the request headers and the request body. */
		requestSize?: string | null;

		/** The scheme (http, https), the host name, the path, and the query portion of the URL that was requested. Example: `"http://example.com/some/info?color=red"`. */
		requestUrl?: string | null;

		/** The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body. */
		responseSize?: string | null;

		/** The IP address (IPv4 or IPv6) of the origin server that the request was sent to. */
		serverIp?: string | null;

		/**
		 * The response code indicating the status of the response. Examples: 200, 404.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** The user agent sent by the client. Example: `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)"`. */
		userAgent?: string | null;
	}

	/** A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message. */
	export interface HttpRequestFormProperties {

		/** The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted. */
		cacheFillBytes: FormControl<string | null | undefined>,

		/** Whether or not an entity was served from cache (with or without validation). */
		cacheHit: FormControl<boolean | null | undefined>,

		/** Whether or not a cache lookup was attempted. */
		cacheLookup: FormControl<boolean | null | undefined>,

		/** Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if `cache_hit` is True. */
		cacheValidatedWithOriginServer: FormControl<boolean | null | undefined>,

		/** The request processing latency on the server, from the time the request was received until the response was sent. */
		latency: FormControl<string | null | undefined>,

		/** Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket" */
		protocol: FormControl<string | null | undefined>,

		/** The referer URL of the request, as defined in [HTTP/1.1 Header Field Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). */
		referer: FormControl<string | null | undefined>,

		/** The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: `"192.168.1.1"`, `"FE80::0202:B3FF:FE1E:8329"`. */
		remoteIp: FormControl<string | null | undefined>,

		/** The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`. */
		requestMethod: FormControl<string | null | undefined>,

		/** The size of the HTTP request message in bytes, including the request headers and the request body. */
		requestSize: FormControl<string | null | undefined>,

		/** The scheme (http, https), the host name, the path, and the query portion of the URL that was requested. Example: `"http://example.com/some/info?color=red"`. */
		requestUrl: FormControl<string | null | undefined>,

		/** The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body. */
		responseSize: FormControl<string | null | undefined>,

		/** The IP address (IPv4 or IPv6) of the origin server that the request was sent to. */
		serverIp: FormControl<string | null | undefined>,

		/**
		 * The response code indicating the status of the response. Examples: 200, 404.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** The user agent sent by the client. Example: `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)"`. */
		userAgent: FormControl<string | null | undefined>,
	}
	export function CreateHttpRequestFormGroup() {
		return new FormGroup<HttpRequestFormProperties>({
			cacheFillBytes: new FormControl<string | null | undefined>(undefined),
			cacheHit: new FormControl<boolean | null | undefined>(undefined),
			cacheLookup: new FormControl<boolean | null | undefined>(undefined),
			cacheValidatedWithOriginServer: new FormControl<boolean | null | undefined>(undefined),
			latency: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			referer: new FormControl<string | null | undefined>(undefined),
			remoteIp: new FormControl<string | null | undefined>(undefined),
			requestMethod: new FormControl<string | null | undefined>(undefined),
			requestSize: new FormControl<string | null | undefined>(undefined),
			requestUrl: new FormControl<string | null | undefined>(undefined),
			responseSize: new FormControl<string | null | undefined>(undefined),
			serverIp: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional information about a potentially long-running operation with which a log entry is associated. */
	export interface LogEntryOperation {

		/** Optional. Set this to True if this is the first log entry in the operation. */
		first?: boolean | null;

		/** Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation. */
		id?: string | null;

		/** Optional. Set this to True if this is the last log entry in the operation. */
		last?: boolean | null;

		/** Optional. An arbitrary producer identifier. The combination of `id` and `producer` must be globally unique. Examples for `producer`: `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`. */
		producer?: string | null;
	}

	/** Additional information about a potentially long-running operation with which a log entry is associated. */
	export interface LogEntryOperationFormProperties {

		/** Optional. Set this to True if this is the first log entry in the operation. */
		first: FormControl<boolean | null | undefined>,

		/** Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation. */
		id: FormControl<string | null | undefined>,

		/** Optional. Set this to True if this is the last log entry in the operation. */
		last: FormControl<boolean | null | undefined>,

		/** Optional. An arbitrary producer identifier. The combination of `id` and `producer` must be globally unique. Examples for `producer`: `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`. */
		producer: FormControl<string | null | undefined>,
	}
	export function CreateLogEntryOperationFormGroup() {
		return new FormGroup<LogEntryOperationFormProperties>({
			first: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last: new FormControl<boolean | null | undefined>(undefined),
			producer: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum LogEntrySeverity { DEFAULT = 'DEFAULT', DEBUG = 'DEBUG', INFO = 'INFO', NOTICE = 'NOTICE', WARNING = 'WARNING', ERROR = 'ERROR', CRITICAL = 'CRITICAL', ALERT = 'ALERT', EMERGENCY = 'EMERGENCY' }


	/** Additional information about the source code location that produced the log entry. */
	export interface LogEntrySourceLocation {

		/** Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name. */
		file?: string | null;

		/** Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function` (Python). */
		function?: string | null;

		/** Optional. Line within the source file. 1-based; 0 indicates no line number available. */
		line?: string | null;
	}

	/** Additional information about the source code location that produced the log entry. */
	export interface LogEntrySourceLocationFormProperties {

		/** Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name. */
		file: FormControl<string | null | undefined>,

		/** Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function` (Python). */
		function: FormControl<string | null | undefined>,

		/** Optional. Line within the source file. 1-based; 0 indicates no line number available. */
		line: FormControl<string | null | undefined>,
	}
	export function CreateLogEntrySourceLocationFormGroup() {
		return new FormGroup<LogEntrySourceLocationFormProperties>({
			file: new FormControl<string | null | undefined>(undefined),
			function: new FormControl<string | null | undefined>(undefined),
			line: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents the properties needed for quota operations. */
	export interface QuotaProperties {

		/** Quota mode for this operation. */
		quotaMode?: QuotaPropertiesQuotaMode | null;
	}

	/** Represents the properties needed for quota operations. */
	export interface QuotaPropertiesFormProperties {

		/** Quota mode for this operation. */
		quotaMode: FormControl<QuotaPropertiesQuotaMode | null | undefined>,
	}
	export function CreateQuotaPropertiesFormGroup() {
		return new FormGroup<QuotaPropertiesFormProperties>({
			quotaMode: new FormControl<QuotaPropertiesQuotaMode | null | undefined>(undefined),
		});

	}

	export enum QuotaPropertiesQuotaMode { ACQUIRE = 'ACQUIRE', ACQUIRE_BEST_EFFORT = 'ACQUIRE_BEST_EFFORT', CHECK = 'CHECK' }


	/** Describes a resource associated with this operation. */
	export interface ResourceInfo {

		/** The resource permission required for this request. */
		permission?: string | null;

		/** The identifier of the parent of this resource instance. Must be in one of the following formats: - `projects/` - `folders/` - `organizations/` */
		resourceContainer?: string | null;

		/** The location of the resource. If not empty, the resource will be checked against location policy. The value must be a valid zone, region or multiregion. For example: "europe-west4" or "northamerica-northeast1-a" */
		resourceLocation?: string | null;

		/** Name of the resource. This is used for auditing purposes. */
		resourceName?: string | null;
	}

	/** Describes a resource associated with this operation. */
	export interface ResourceInfoFormProperties {

		/** The resource permission required for this request. */
		permission: FormControl<string | null | undefined>,

		/** The identifier of the parent of this resource instance. Must be in one of the following formats: - `projects/` - `folders/` - `organizations/` */
		resourceContainer: FormControl<string | null | undefined>,

		/** The location of the resource. If not empty, the resource will be checked against location policy. The value must be a valid zone, region or multiregion. For example: "europe-west4" or "northamerica-northeast1-a" */
		resourceLocation: FormControl<string | null | undefined>,

		/** Name of the resource. This is used for auditing purposes. */
		resourceName: FormControl<string | null | undefined>,
	}
	export function CreateResourceInfoFormGroup() {
		return new FormGroup<ResourceInfoFormProperties>({
			permission: new FormControl<string | null | undefined>(undefined),
			resourceContainer: new FormControl<string | null | undefined>(undefined),
			resourceLocation: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous—there may be gaps or overlaps between spans in a trace. */
	export interface TraceSpan {

		/** A set of attributes, each in the format `[KEY]:[VALUE]`. */
		attributes?: Attributes;

		/**
		 * An optional number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		childSpanCount?: number | null;

		/** Represents a string that might be shortened to a specified length. */
		displayName?: TruncatableString;

		/** The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running. */
		endTime?: string | null;

		/** The resource name of the span in the following format: projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. [SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. */
		name?: string | null;

		/** The [SPAN_ID] of this span's parent span. If this is a root span, then this field must be empty. */
		parentSpanId?: string | null;

		/** (Optional) Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Stackdriver Trace is unable to take advantage of this helpful information. */
		sameProcessAsParentSpan?: boolean | null;

		/** The [SPAN_ID] portion of the span's resource name. */
		spanId?: string | null;

		/** Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee) to identify an RPC call. */
		spanKind?: TraceSpanSpanKind | null;

		/** The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running. */
		startTime?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: Status;
	}

	/** A span represents a single operation within a trace. Spans can be nested to form a trace tree. Often, a trace contains a root span that describes the end-to-end latency, and one or more subspans for its sub-operations. A trace can also contain multiple root spans, or none at all. Spans do not need to be contiguous—there may be gaps or overlaps between spans in a trace. */
	export interface TraceSpanFormProperties {

		/**
		 * An optional number of child spans that were generated while this span was active. If set, allows implementation to detect missing child spans.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		childSpanCount: FormControl<number | null | undefined>,

		/** The end time of the span. On the client side, this is the time kept by the local machine where the span execution ends. On the server side, this is the time when the server application handler stops running. */
		endTime: FormControl<string | null | undefined>,

		/** The resource name of the span in the following format: projects/[PROJECT_ID]/traces/[TRACE_ID]/spans/SPAN_ID is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. [SPAN_ID] is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. */
		name: FormControl<string | null | undefined>,

		/** The [SPAN_ID] of this span's parent span. If this is a root span, then this field must be empty. */
		parentSpanId: FormControl<string | null | undefined>,

		/** (Optional) Set this parameter to indicate whether this span is in the same process as its parent. If you do not set this parameter, Stackdriver Trace is unable to take advantage of this helpful information. */
		sameProcessAsParentSpan: FormControl<boolean | null | undefined>,

		/** The [SPAN_ID] portion of the span's resource name. */
		spanId: FormControl<string | null | undefined>,

		/** Distinguishes between spans generated in a particular context. For example, two spans with the same name may be distinguished using `CLIENT` (caller) and `SERVER` (callee) to identify an RPC call. */
		spanKind: FormControl<TraceSpanSpanKind | null | undefined>,

		/** The start time of the span. On the client side, this is the time kept by the local machine where the span execution starts. On the server side, this is the time when the server's application handler starts running. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateTraceSpanFormGroup() {
		return new FormGroup<TraceSpanFormProperties>({
			childSpanCount: new FormControl<number | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			parentSpanId: new FormControl<string | null | undefined>(undefined),
			sameProcessAsParentSpan: new FormControl<boolean | null | undefined>(undefined),
			spanId: new FormControl<string | null | undefined>(undefined),
			spanKind: new FormControl<TraceSpanSpanKind | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum TraceSpanSpanKind { SPAN_KIND_UNSPECIFIED = 'SPAN_KIND_UNSPECIFIED', INTERNAL = 'INTERNAL', SERVER = 'SERVER', CLIENT = 'CLIENT', PRODUCER = 'PRODUCER', CONSUMER = 'CONSUMER' }


	/** Response message for the Check method. */
	export interface CheckResponse {

		/** Indicate the decision of the check. If no check errors are present, the service should process the operation. Otherwise the service should use the list of errors to determine the appropriate action. */
		checkErrors?: Array<CheckError>;

		/** Contains additional information about the check operation. */
		checkInfo?: CheckInfo;

		/** The same operation_id value used in the CheckRequest. Used for logging and diagnostics purposes. */
		operationId?: string | null;

		/** Contains the quota information for a quota check response. */
		quotaInfo?: QuotaInfo;

		/** The actual config id used to process the request. */
		serviceConfigId?: string | null;

		/** The current service rollout id used to process the request. */
		serviceRolloutId?: string | null;
	}

	/** Response message for the Check method. */
	export interface CheckResponseFormProperties {

		/** The same operation_id value used in the CheckRequest. Used for logging and diagnostics purposes. */
		operationId: FormControl<string | null | undefined>,

		/** The actual config id used to process the request. */
		serviceConfigId: FormControl<string | null | undefined>,

		/** The current service rollout id used to process the request. */
		serviceRolloutId: FormControl<string | null | undefined>,
	}
	export function CreateCheckResponseFormGroup() {
		return new FormGroup<CheckResponseFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined),
			serviceConfigId: new FormControl<string | null | undefined>(undefined),
			serviceRolloutId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Contains the quota information for a quota check response. */
	export interface QuotaInfo {

		/** Quota Metrics that have exceeded quota limits. For QuotaGroup-based quota, this is QuotaGroup.name For QuotaLimit-based quota, this is QuotaLimit.name See: google.api.Quota Deprecated: Use quota_metrics to get per quota group limit exceeded status. */
		limitExceeded?: Array<string>;

		/** Map of quota group name to the actual number of tokens consumed. If the quota check was not successful, then this will not be populated due to no quota consumption. We are not merging this field with 'quota_metrics' field because of the complexity of scaling in Chemist client code base. For simplicity, we will keep this field for Castor (that scales quota usage) and 'quota_metrics' for SuperQuota (that doesn't scale quota usage). */
		quotaConsumed?: {[id: string]: number };

		/** Quota metrics to indicate the usage. Depending on the check request, one or more of the following metrics will be included: 1. For rate quota, per quota group or per quota metric incremental usage will be specified using the following delta metric: "serviceruntime.googleapis.com/api/consumer/quota_used_count" 2. For allocation quota, per quota metric total usage will be specified using the following gauge metric: "serviceruntime.googleapis.com/allocation/consumer/quota_used_count" 3. For both rate quota and allocation quota, the quota limit reached condition will be specified using the following boolean metric: "serviceruntime.googleapis.com/quota/exceeded" */
		quotaMetrics?: Array<MetricValueSet>;
	}

	/** Contains the quota information for a quota check response. */
	export interface QuotaInfoFormProperties {

		/** Map of quota group name to the actual number of tokens consumed. If the quota check was not successful, then this will not be populated due to no quota consumption. We are not merging this field with 'quota_metrics' field because of the complexity of scaling in Chemist client code base. For simplicity, we will keep this field for Castor (that scales quota usage) and 'quota_metrics' for SuperQuota (that doesn't scale quota usage). */
		quotaConsumed: FormControl<{[id: string]: number } | null | undefined>,
	}
	export function CreateQuotaInfoFormGroup() {
		return new FormGroup<QuotaInfoFormProperties>({
			quotaConsumed: new FormControl<{[id: string]: number } | null | undefined>(undefined),
		});

	}


	/** Represents the processing error of one Operation in the request. */
	export interface ReportError {

		/** The Operation.operation_id value from the request. */
		operationId?: string | null;

		/** The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors). */
		status?: Status;
	}

	/** Represents the processing error of one Operation in the request. */
	export interface ReportErrorFormProperties {

		/** The Operation.operation_id value from the request. */
		operationId: FormControl<string | null | undefined>,
	}
	export function CreateReportErrorFormGroup() {
		return new FormGroup<ReportErrorFormProperties>({
			operationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for the Report method. */
	export interface ReportRequest {

		/** Operations to be reported. Typically the service should report one operation per request. Putting multiple operations into a single request is allowed, but should be used only when multiple operations are natually available at the time of the report. There is no limit on the number of operations in the same ReportRequest, however the ReportRequest size should be no larger than 1MB. See ReportResponse.report_errors for partial failure behavior. */
		operations?: Array<Operation>;

		/** Specifies which version of service config should be used to process the request. If unspecified or no matching version can be found, the latest one will be used. */
		serviceConfigId?: string | null;
	}

	/** Request message for the Report method. */
	export interface ReportRequestFormProperties {

		/** Specifies which version of service config should be used to process the request. If unspecified or no matching version can be found, the latest one will be used. */
		serviceConfigId: FormControl<string | null | undefined>,
	}
	export function CreateReportRequestFormGroup() {
		return new FormGroup<ReportRequestFormProperties>({
			serviceConfigId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for the Report method. */
	export interface ReportResponse {

		/** Partial failures, one for each `Operation` in the request that failed processing. There are three possible combinations of the RPC status: 1. The combination of a successful RPC status and an empty `report_errors` list indicates a complete success where all `Operations` in the request are processed successfully. 2. The combination of a successful RPC status and a non-empty `report_errors` list indicates a partial success where some `Operations` in the request succeeded. Each `Operation` that failed processing has a corresponding item in this list. 3. A failed RPC status indicates a general non-deterministic failure. When this happens, it's impossible to know which of the 'Operations' in the request succeeded or failed. */
		reportErrors?: Array<ReportError>;

		/** The actual config id used to process the request. */
		serviceConfigId?: string | null;

		/** The current service rollout id used to process the request. */
		serviceRolloutId?: string | null;
	}

	/** Response message for the Report method. */
	export interface ReportResponseFormProperties {

		/** The actual config id used to process the request. */
		serviceConfigId: FormControl<string | null | undefined>,

		/** The current service rollout id used to process the request. */
		serviceRolloutId: FormControl<string | null | undefined>,
	}
	export function CreateReportResponseFormGroup() {
		return new FormGroup<ReportResponseFormProperties>({
			serviceConfigId: new FormControl<string | null | undefined>(undefined),
			serviceRolloutId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The context of a span. This is attached to an Exemplar in Distribution values during aggregation. It contains the name of a span with format: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] */
	export interface SpanContext {

		/** The resource name of the span. The format is: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. */
		spanName?: string | null;
	}

	/** The context of a span. This is attached to an Exemplar in Distribution values during aggregation. It contains the name of a span with format: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] */
	export interface SpanContextFormProperties {

		/** The resource name of the span. The format is: projects/[PROJECT_ID_OR_NUMBER]/traces/[TRACE_ID]/spans/[SPAN_ID] `[TRACE_ID]` is a unique identifier for a trace within a project; it is a 32-character hexadecimal encoding of a 16-byte array. `[SPAN_ID]` is a unique identifier for a span within a trace; it is a 16-character hexadecimal encoding of an 8-byte array. */
		spanName: FormControl<string | null | undefined>,
	}
	export function CreateSpanContextFormGroup() {
		return new FormGroup<SpanContextFormProperties>({
			spanName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message. */
	export interface V1HttpRequest {

		/** The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted. */
		cacheFillBytes?: string | null;

		/** Whether or not an entity was served from cache (with or without validation). */
		cacheHit?: boolean | null;

		/** Whether or not a cache lookup was attempted. */
		cacheLookup?: boolean | null;

		/** Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if `cache_hit` is True. */
		cacheValidatedWithOriginServer?: boolean | null;

		/** The request processing latency on the server, from the time the request was received until the response was sent. */
		latency?: string | null;

		/** Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket" */
		protocol?: string | null;

		/** The referer URL of the request, as defined in [HTTP/1.1 Header Field Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). */
		referer?: string | null;

		/** The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: `"192.168.1.1"`, `"FE80::0202:B3FF:FE1E:8329"`. */
		remoteIp?: string | null;

		/** The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`. */
		requestMethod?: string | null;

		/** The size of the HTTP request message in bytes, including the request headers and the request body. */
		requestSize?: string | null;

		/** The scheme (http, https), the host name, the path, and the query portion of the URL that was requested. Example: `"http://example.com/some/info?color=red"`. */
		requestUrl?: string | null;

		/** The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body. */
		responseSize?: string | null;

		/** The IP address (IPv4 or IPv6) of the origin server that the request was sent to. */
		serverIp?: string | null;

		/**
		 * The response code indicating the status of the response. Examples: 200, 404.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status?: number | null;

		/** The user agent sent by the client. Example: `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)"`. */
		userAgent?: string | null;
	}

	/** A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message. */
	export interface V1HttpRequestFormProperties {

		/** The number of HTTP response bytes inserted into cache. Set only when a cache fill was attempted. */
		cacheFillBytes: FormControl<string | null | undefined>,

		/** Whether or not an entity was served from cache (with or without validation). */
		cacheHit: FormControl<boolean | null | undefined>,

		/** Whether or not a cache lookup was attempted. */
		cacheLookup: FormControl<boolean | null | undefined>,

		/** Whether or not the response was validated with the origin server before being served from cache. This field is only meaningful if `cache_hit` is True. */
		cacheValidatedWithOriginServer: FormControl<boolean | null | undefined>,

		/** The request processing latency on the server, from the time the request was received until the response was sent. */
		latency: FormControl<string | null | undefined>,

		/** Protocol used for the request. Examples: "HTTP/1.1", "HTTP/2", "websocket" */
		protocol: FormControl<string | null | undefined>,

		/** The referer URL of the request, as defined in [HTTP/1.1 Header Field Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). */
		referer: FormControl<string | null | undefined>,

		/** The IP address (IPv4 or IPv6) of the client that issued the HTTP request. Examples: `"192.168.1.1"`, `"FE80::0202:B3FF:FE1E:8329"`. */
		remoteIp: FormControl<string | null | undefined>,

		/** The request method. Examples: `"GET"`, `"HEAD"`, `"PUT"`, `"POST"`. */
		requestMethod: FormControl<string | null | undefined>,

		/** The size of the HTTP request message in bytes, including the request headers and the request body. */
		requestSize: FormControl<string | null | undefined>,

		/** The scheme (http, https), the host name, the path, and the query portion of the URL that was requested. Example: `"http://example.com/some/info?color=red"`. */
		requestUrl: FormControl<string | null | undefined>,

		/** The size of the HTTP response message sent back to the client, in bytes, including the response headers and the response body. */
		responseSize: FormControl<string | null | undefined>,

		/** The IP address (IPv4 or IPv6) of the origin server that the request was sent to. */
		serverIp: FormControl<string | null | undefined>,

		/**
		 * The response code indicating the status of the response. Examples: 200, 404.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		status: FormControl<number | null | undefined>,

		/** The user agent sent by the client. Example: `"Mozilla/4.0 (compatible; MSIE 6.0; Windows 98; Q312461; .NET CLR 1.0.3705)"`. */
		userAgent: FormControl<string | null | undefined>,
	}
	export function CreateV1HttpRequestFormGroup() {
		return new FormGroup<V1HttpRequestFormProperties>({
			cacheFillBytes: new FormControl<string | null | undefined>(undefined),
			cacheHit: new FormControl<boolean | null | undefined>(undefined),
			cacheLookup: new FormControl<boolean | null | undefined>(undefined),
			cacheValidatedWithOriginServer: new FormControl<boolean | null | undefined>(undefined),
			latency: new FormControl<string | null | undefined>(undefined),
			protocol: new FormControl<string | null | undefined>(undefined),
			referer: new FormControl<string | null | undefined>(undefined),
			remoteIp: new FormControl<string | null | undefined>(undefined),
			requestMethod: new FormControl<string | null | undefined>(undefined),
			requestSize: new FormControl<string | null | undefined>(undefined),
			requestUrl: new FormControl<string | null | undefined>(undefined),
			responseSize: new FormControl<string | null | undefined>(undefined),
			serverIp: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<number | null | undefined>(undefined),
			userAgent: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** An individual log entry. */
	export interface V1LogEntry {

		/** A common proto for logging HTTP requests. Only contains semantics defined by the HTTP specification. Product-specific logging information MUST be defined in a separate message. */
		httpRequest?: V1HttpRequest;

		/** A unique ID for the log entry used for deduplication. If omitted, the implementation will generate one based on operation_id. */
		insertId?: string | null;

		/** A set of user-defined (key, value) data that provides additional information about the log entry. */
		labels?: {[id: string]: string };

		/** A set of user-defined (key, value) data that provides additional information about the moniotored resource that the log entry belongs to. */
		monitoredResourceLabels?: {[id: string]: string };

		/** Required. The log to which this log entry belongs. Examples: `"syslog"`, `"book_log"`. */
		name?: string | null;

		/** Additional information about a potentially long-running operation with which a log entry is associated. */
		operation?: V1LogEntryOperation;

		/** The log entry payload, represented as a protocol buffer that is expressed as a JSON object. The only accepted type currently is AuditLog. */
		protoPayload?: {[id: string]: any };

		/** The severity of the log entry. The default value is `LogSeverity.DEFAULT`. */
		severity?: LogEntrySeverity | null;

		/** Additional information about the source code location that produced the log entry. */
		sourceLocation?: V1LogEntrySourceLocation;

		/** The log entry payload, represented as a structure that is expressed as a JSON object. */
		structPayload?: {[id: string]: any };

		/** The log entry payload, represented as a Unicode string (UTF-8). */
		textPayload?: string | null;

		/** The time the event described by the log entry occurred. If omitted, defaults to operation start time. */
		timestamp?: string | null;

		/** Optional. Resource name of the trace associated with the log entry, if any. If this field contains a relative resource name, you can assume the name is relative to `//tracing.googleapis.com`. Example: `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824` */
		trace?: string | null;
	}

	/** An individual log entry. */
	export interface V1LogEntryFormProperties {

		/** A unique ID for the log entry used for deduplication. If omitted, the implementation will generate one based on operation_id. */
		insertId: FormControl<string | null | undefined>,

		/** A set of user-defined (key, value) data that provides additional information about the log entry. */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** A set of user-defined (key, value) data that provides additional information about the moniotored resource that the log entry belongs to. */
		monitoredResourceLabels: FormControl<{[id: string]: string } | null | undefined>,

		/** Required. The log to which this log entry belongs. Examples: `"syslog"`, `"book_log"`. */
		name: FormControl<string | null | undefined>,

		/** The log entry payload, represented as a protocol buffer that is expressed as a JSON object. The only accepted type currently is AuditLog. */
		protoPayload: FormControl<{[id: string]: any } | null | undefined>,

		/** The severity of the log entry. The default value is `LogSeverity.DEFAULT`. */
		severity: FormControl<LogEntrySeverity | null | undefined>,

		/** The log entry payload, represented as a structure that is expressed as a JSON object. */
		structPayload: FormControl<{[id: string]: any } | null | undefined>,

		/** The log entry payload, represented as a Unicode string (UTF-8). */
		textPayload: FormControl<string | null | undefined>,

		/** The time the event described by the log entry occurred. If omitted, defaults to operation start time. */
		timestamp: FormControl<string | null | undefined>,

		/** Optional. Resource name of the trace associated with the log entry, if any. If this field contains a relative resource name, you can assume the name is relative to `//tracing.googleapis.com`. Example: `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824` */
		trace: FormControl<string | null | undefined>,
	}
	export function CreateV1LogEntryFormGroup() {
		return new FormGroup<V1LogEntryFormProperties>({
			insertId: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			monitoredResourceLabels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			protoPayload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			severity: new FormControl<LogEntrySeverity | null | undefined>(undefined),
			structPayload: new FormControl<{[id: string]: any } | null | undefined>(undefined),
			textPayload: new FormControl<string | null | undefined>(undefined),
			timestamp: new FormControl<string | null | undefined>(undefined),
			trace: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional information about a potentially long-running operation with which a log entry is associated. */
	export interface V1LogEntryOperation {

		/** Optional. Set this to True if this is the first log entry in the operation. */
		first?: boolean | null;

		/** Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation. */
		id?: string | null;

		/** Optional. Set this to True if this is the last log entry in the operation. */
		last?: boolean | null;

		/** Optional. An arbitrary producer identifier. The combination of `id` and `producer` must be globally unique. Examples for `producer`: `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`. */
		producer?: string | null;
	}

	/** Additional information about a potentially long-running operation with which a log entry is associated. */
	export interface V1LogEntryOperationFormProperties {

		/** Optional. Set this to True if this is the first log entry in the operation. */
		first: FormControl<boolean | null | undefined>,

		/** Optional. An arbitrary operation identifier. Log entries with the same identifier are assumed to be part of the same operation. */
		id: FormControl<string | null | undefined>,

		/** Optional. Set this to True if this is the last log entry in the operation. */
		last: FormControl<boolean | null | undefined>,

		/** Optional. An arbitrary producer identifier. The combination of `id` and `producer` must be globally unique. Examples for `producer`: `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`. */
		producer: FormControl<string | null | undefined>,
	}
	export function CreateV1LogEntryOperationFormGroup() {
		return new FormGroup<V1LogEntryOperationFormProperties>({
			first: new FormControl<boolean | null | undefined>(undefined),
			id: new FormControl<string | null | undefined>(undefined),
			last: new FormControl<boolean | null | undefined>(undefined),
			producer: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Additional information about the source code location that produced the log entry. */
	export interface V1LogEntrySourceLocation {

		/** Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name. */
		file?: string | null;

		/** Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function` (Python). */
		function?: string | null;

		/** Optional. Line within the source file. 1-based; 0 indicates no line number available. */
		line?: string | null;
	}

	/** Additional information about the source code location that produced the log entry. */
	export interface V1LogEntrySourceLocationFormProperties {

		/** Optional. Source file name. Depending on the runtime environment, this might be a simple name or a fully-qualified name. */
		file: FormControl<string | null | undefined>,

		/** Optional. Human-readable name of the function or method being invoked, with optional context such as the class or package name. This information may be used in contexts such as the logs viewer, where a file and line number are less meaningful. The format can vary by language. For example: `qual.if.ied.Class.method` (Java), `dir/package.func` (Go), `function` (Python). */
		function: FormControl<string | null | undefined>,

		/** Optional. Line within the source file. 1-based; 0 indicates no line number available. */
		line: FormControl<string | null | undefined>,
	}
	export function CreateV1LogEntrySourceLocationFormGroup() {
		return new FormGroup<V1LogEntrySourceLocationFormProperties>({
			file: new FormControl<string | null | undefined>(undefined),
			function: new FormControl<string | null | undefined>(undefined),
			line: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Attempts to allocate quota for the specified consumer. It should be called before the operation is executed. This method requires the `servicemanagement.services.quota` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam). **NOTE:** The client **must** fail-open on server errors `INTERNAL`, `UNKNOWN`, `DEADLINE_EXCEEDED`, and `UNAVAILABLE`. To ensure system reliability, the server may inject these errors to prohibit any hard dependency on the quota functionality.
		 * Post v1/services/{serviceName}:allocateQuota
		 * @param {string} serviceName Name of the service as specified in the service configuration. For example, `"pubsub.googleapis.com"`. See google.api.Service for the definition of a service name.
		 * @return {AllocateQuotaResponse} Successful response
		 */
		Servicecontrol_services_allocateQuota(serviceName: string, requestBody: AllocateQuotaRequest): Observable<AllocateQuotaResponse> {
			return this.http.post<AllocateQuotaResponse>(this.baseUri + 'v1/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + ':allocateQuota', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Checks whether an operation on a service should be allowed to proceed based on the configuration of the service and related policies. It must be called before the operation is executed. If feasible, the client should cache the check results and reuse them for 60 seconds. In case of any server errors, the client should rely on the cached results for much longer time to avoid outage. WARNING: There is general 60s delay for the configuration and policy propagation, therefore callers MUST NOT depend on the `Check` method having the latest policy information. NOTE: the CheckRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.check` permission on the specified service. For more information, see [Cloud IAM](https://cloud.google.com/iam).
		 * Post v1/services/{serviceName}:check
		 * @param {string} serviceName The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
		 * @return {CheckResponse} Successful response
		 */
		Servicecontrol_services_check(serviceName: string, requestBody: CheckRequest): Observable<CheckResponse> {
			return this.http.post<CheckResponse>(this.baseUri + 'v1/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + ':check', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Reports operation results to Google Service Control, such as logs and metrics. It should be called after an operation is completed. If feasible, the client should aggregate reporting data for up to 5 seconds to reduce API traffic. Limiting aggregation to 5 seconds is to reduce data loss during client crashes. Clients should carefully choose the aggregation time window to avoid data loss risk more than 0.01% for business and compliance reasons. NOTE: the ReportRequest has the size limit (wire-format byte size) of 1MB. This method requires the `servicemanagement.services.report` permission on the specified service. For more information, see [Google Cloud IAM](https://cloud.google.com/iam).
		 * Post v1/services/{serviceName}:report
		 * @param {string} serviceName The service name as specified in its service configuration. For example, `"pubsub.googleapis.com"`. See [google.api.Service](https://cloud.google.com/service-management/reference/rpc/google.api#google.api.Service) for the definition of a service name.
		 * @return {ReportResponse} Successful response
		 */
		Servicecontrol_services_report(serviceName: string, requestBody: ReportRequest): Observable<ReportResponse> {
			return this.http.post<ReportResponse>(this.baseUri + 'v1/services/' + (serviceName == null ? '' : encodeURIComponent(serviceName)) + ':report', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

}

