import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** This complex type defines the fields that comprise the benchmark against which the seller's performance is compared. The comparison determines the seller's rating for the metric. */
	export interface BenchmarkMetadata {

		/** This field returns the average value for the group, as defined by the specified basis. When the benchmark basis is set to PEER_BENCHMARK, the value returned in this field is the benchmark value to which the seller's metric value is compared to determine the seller's rating for the customer service metric. */
		average?: string | null;
	}

	/** This complex type defines the fields that comprise the benchmark against which the seller's performance is compared. The comparison determines the seller's rating for the metric. */
	export interface BenchmarkMetadataFormProperties {

		/** This field returns the average value for the group, as defined by the specified basis. When the benchmark basis is set to PEER_BENCHMARK, the value returned in this field is the benchmark value to which the seller's metric value is compared to determine the seller's rating for the customer service metric. */
		average: FormControl<string | null | undefined>,
	}
	export function CreateBenchmarkMetadataFormGroup() {
		return new FormGroup<BenchmarkMetadataFormProperties>({
			average: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that describes a program cycle. */
	export interface Cycle {

		/** The cycle type, either CURRENT or PROJECTED. CURRENT means the profile's metrics values are from the most recent official eBay monthly standards evaluation. PROJECTED means the profile values were determined when the profile was requested. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/CycleTypeEnum.html'>eBay API documentation</a> */
		cycleType?: string | null;

		/** The date and time at which the standard compliance values were determined for the profile. The time stamp is formatted as an ISO 8601 string, which is based on the 24-hour Universal Coordinated Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2018-08-04T07:09:00.000Z */
		evaluationDate?: string | null;

		/** The month in which the currently effective seller level was computed. The value is always formatted as YYYY-MM. If the cycle is CURRENT, this value is the month and year the of the last eBay compliance evaluation. If this is for a PROJECTED cycle, the value is the month and year of the next scheduled evaluation. Because eBay does official evaluations around the 20th of each month, a PROJECTED value may indicate either the current or the next month. */
		evaluationMonth?: string | null;
	}

	/** A complex type that describes a program cycle. */
	export interface CycleFormProperties {

		/** The cycle type, either CURRENT or PROJECTED. CURRENT means the profile's metrics values are from the most recent official eBay monthly standards evaluation. PROJECTED means the profile values were determined when the profile was requested. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/CycleTypeEnum.html'>eBay API documentation</a> */
		cycleType: FormControl<string | null | undefined>,

		/** The date and time at which the standard compliance values were determined for the profile. The time stamp is formatted as an ISO 8601 string, which is based on the 24-hour Universal Coordinated Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2018-08-04T07:09:00.000Z */
		evaluationDate: FormControl<string | null | undefined>,

		/** The month in which the currently effective seller level was computed. The value is always formatted as YYYY-MM. If the cycle is CURRENT, this value is the month and year the of the last eBay compliance evaluation. If this is for a PROJECTED cycle, the value is the month and year of the next scheduled evaluation. Because eBay does official evaluations around the 20th of each month, a PROJECTED value may indicate either the current or the next month. */
		evaluationMonth: FormControl<string | null | undefined>,
	}
	export function CreateCycleFormGroup() {
		return new FormGroup<CycleFormProperties>({
			cycleType: new FormControl<string | null | undefined>(undefined),
			evaluationDate: new FormControl<string | null | undefined>(undefined),
			evaluationMonth: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that defines a dimension key and metrics in a traffic report. */
	export interface Definition {

		/** Indicates the data type of the returned dimension. For example, if the dimension is day, the data type is DATE. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/DataTypeEnum.html'>eBay API documentation</a> */
		dataType?: string | null;

		/** The value the dimension or metric parameter as submitted in the request. */
		key?: string | null;

		/** The localized name of the metric or dimension (translated into the language specified in the Accept-Language HTTP request header). For example, if Accept-Language is set to de-DE, the value &quot;day&quot; in the dimension container is returned as &quot;tag&quot;, and a metric of TRANSACTION is returned as &quot;Transaktionsanzahl&quot;. */
		localizedName?: string | null;
	}

	/** A complex type that defines a dimension key and metrics in a traffic report. */
	export interface DefinitionFormProperties {

		/** Indicates the data type of the returned dimension. For example, if the dimension is day, the data type is DATE. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/DataTypeEnum.html'>eBay API documentation</a> */
		dataType: FormControl<string | null | undefined>,

		/** The value the dimension or metric parameter as submitted in the request. */
		key: FormControl<string | null | undefined>,

		/** The localized name of the metric or dimension (translated into the language specified in the Accept-Language HTTP request header). For example, if Accept-Language is set to de-DE, the value &quot;day&quot; in the dimension container is returned as &quot;tag&quot;, and a metric of TRANSACTION is returned as &quot;Transaktionsanzahl&quot;. */
		localizedName: FormControl<string | null | undefined>,
	}
	export function CreateDefinitionFormGroup() {
		return new FormGroup<DefinitionFormProperties>({
			dataType: new FormControl<string | null | undefined>(undefined),
			key: new FormControl<string | null | undefined>(undefined),
			localizedName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The fields in this complex type define the dimension, or attributes, by which the associated customer service metric and benchmark data is measured. The value of dimensionKey gets set according to the configuration of the input request. The name and value pair further define dimension under the key. */
	export interface Dimension {

		/** dimensionKey defines the basis against which the seller's customer service metric is measured. The value of this field gets set according to the value of the customer_service_metric_type input parameter. The following input configurations return the responses shown: ITEM_NOT_AS_DESCRIBED &ndash; Returns benchmark ratings based on L1 listing categories, so the result shows metrics where the dimensionKey is set to LISTING_CATEGORY. ITEM_NOT_RECEIVED &ndash; Returns benchmark ratings based on world shipping regions, so the result shows metrics where the dimensionKey is set to SHIPPING_REGION. The shipping region is indicated by the associated value field. For specifics on world shipping regions, see the FAQ section on the following page: Monitor your service metrics For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/DimensionTypeEnum.html'>eBay API documentation</a> */
		dimensionKey?: string | null;

		/** The dimension name returned in this field depends on the dimensionKey: If dimensionKey is set to SHIPPING_REGION, this field is set to one of following values, which represent established shipping corridors: Domestic International: Mature region International: Emerging region If dimensionKey is set to LISTING_CATEGORY, this field is set to the name of the primary (L1) category in which the items being rated were listed. */
		name?: string | null;

		/** The value returned in this field depends on the dimensionKey. If dimensionKey equals LISTING_CATEGORY, the value returned in this field is the category ID of the primary (L1) category in which the items being rated were listed. If dimensionKey equals SHIPPING_REGION, one of the following values is returned: DOMESTIC INTERNATIONAL_MATURED_REGION INTERNATIONAL_EMERGING_REGION */
		value?: string | null;
	}

	/** The fields in this complex type define the dimension, or attributes, by which the associated customer service metric and benchmark data is measured. The value of dimensionKey gets set according to the configuration of the input request. The name and value pair further define dimension under the key. */
	export interface DimensionFormProperties {

		/** dimensionKey defines the basis against which the seller's customer service metric is measured. The value of this field gets set according to the value of the customer_service_metric_type input parameter. The following input configurations return the responses shown: ITEM_NOT_AS_DESCRIBED &ndash; Returns benchmark ratings based on L1 listing categories, so the result shows metrics where the dimensionKey is set to LISTING_CATEGORY. ITEM_NOT_RECEIVED &ndash; Returns benchmark ratings based on world shipping regions, so the result shows metrics where the dimensionKey is set to SHIPPING_REGION. The shipping region is indicated by the associated value field. For specifics on world shipping regions, see the FAQ section on the following page: Monitor your service metrics For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/DimensionTypeEnum.html'>eBay API documentation</a> */
		dimensionKey: FormControl<string | null | undefined>,

		/** The dimension name returned in this field depends on the dimensionKey: If dimensionKey is set to SHIPPING_REGION, this field is set to one of following values, which represent established shipping corridors: Domestic International: Mature region International: Emerging region If dimensionKey is set to LISTING_CATEGORY, this field is set to the name of the primary (L1) category in which the items being rated were listed. */
		name: FormControl<string | null | undefined>,

		/** The value returned in this field depends on the dimensionKey. If dimensionKey equals LISTING_CATEGORY, the value returned in this field is the category ID of the primary (L1) category in which the items being rated were listed. If dimensionKey equals SHIPPING_REGION, one of the following values is returned: DOMESTIC INTERNATIONAL_MATURED_REGION INTERNATIONAL_EMERGING_REGION */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDimensionFormGroup() {
		return new FormGroup<DimensionFormProperties>({
			dimensionKey: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type defines a the customer service metrics and seller benchmark performance related to a given dimension. */
	export interface DimensionMetric {

		/** The fields in this complex type define the dimension, or attributes, by which the associated customer service metric and benchmark data is measured. The value of dimensionKey gets set according to the configuration of the input request. The name and value pair further define dimension under the key. */
		dimension?: Dimension;

		/** This is a list of Metric elements where each element contains data and information related to the transactions grouped by the associated dimension. */
		metrics?: Array<Metric>;
	}

	/** This complex type defines a the customer service metrics and seller benchmark performance related to a given dimension. */
	export interface DimensionMetricFormProperties {
	}
	export function CreateDimensionMetricFormGroup() {
		return new FormGroup<DimensionMetricFormProperties>({
		});

	}


	/** This complex data type defines the details of the customer service metric and benchmark data related to the associated dimension. */
	export interface Metric {

		/** This complex type defines the benchmark data, which includes the average value of the metric for the group (the benchmark) and the seller's overall rating when compared to the benchmark. */
		benchmark?: MetricBenchmark;

		/** Returned when metricKey equals COUNT, this field returns an array of seller data where each set of data is grouped according by an overarching basis. When the seller distribution is returned, the numeric value of the associated value container equals the sum of the transactions where the seller meets the criteria of the customer service metric type for the given dimension during the evaluationCycle. */
		distributions?: Array<MetricDistribution>;

		/** This field indicates the customer service metric being returned in the associated metrics container. The field is set as follows: TRANSACTION_COUNT &ndash; When set to this value, the associated value field equals the total number of transactions completed in the seller group for the metric in the given dimension during the associated evaluationCycle. COUNT &ndash; When set to this value, the associated value field is set to the total number of transactions the seller completed that meet the criteria of the customer service metric type for the given dimension that occurred during the evaluationCycle. RATE &ndash; When set to this value, the value of the associated value field is the rate of the customer service metric type in the given dimension during the associated evaluationCycle. Specifically, when metricKey is set to RATE, the associated value field is set to the value of metricKey TRANSACTION_COUNT divided by the value of metricKey COUNT. The returned benchmark.rating for the seller is based on this calculated value. */
		metricKey?: string | null;

		/** This field is set to the seller's numeric rating for the associated metricKey for the given dimension during the evaluationCycle. To determine the seller's rating for this metric, the value of this field is compared to the average metric value of the group. */
		value?: string | null;
	}

	/** This complex data type defines the details of the customer service metric and benchmark data related to the associated dimension. */
	export interface MetricFormProperties {

		/** This field indicates the customer service metric being returned in the associated metrics container. The field is set as follows: TRANSACTION_COUNT &ndash; When set to this value, the associated value field equals the total number of transactions completed in the seller group for the metric in the given dimension during the associated evaluationCycle. COUNT &ndash; When set to this value, the associated value field is set to the total number of transactions the seller completed that meet the criteria of the customer service metric type for the given dimension that occurred during the evaluationCycle. RATE &ndash; When set to this value, the value of the associated value field is the rate of the customer service metric type in the given dimension during the associated evaluationCycle. Specifically, when metricKey is set to RATE, the associated value field is set to the value of metricKey TRANSACTION_COUNT divided by the value of metricKey COUNT. The returned benchmark.rating for the seller is based on this calculated value. */
		metricKey: FormControl<string | null | undefined>,

		/** This field is set to the seller's numeric rating for the associated metricKey for the given dimension during the evaluationCycle. To determine the seller's rating for this metric, the value of this field is compared to the average metric value of the group. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateMetricFormGroup() {
		return new FormGroup<MetricFormProperties>({
			metricKey: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type defines the benchmark data, which includes the average value of the metric for the group (the benchmark) and the seller's overall rating when compared to the benchmark. */
	export interface MetricBenchmark {

		/** If this field is present, it indicates that the rating given to the seller was &quot;adjusted&quot; for one reason or another. If eBay determines that the normal rating of a seller is impacted by circumstances beyond their control, they can issue an override to adjust the rating given to the seller. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/RatingAdjustmentTypeEnum.html'>eBay API documentation</a> */
		adjustment?: string | null;

		/** This field returns the &quot;basis&quot; by which the benchmark is calculated for the customer service metric type. Currently, the only supported basis is PEER_BENCHMARK. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/BenchmarkTypeEnum.html'>eBay API documentation</a> */
		basis?: string | null;

		/** This complex type defines the fields that comprise the benchmark against which the seller's performance is compared. The comparison determines the seller's rating for the metric. */
		metadata?: BenchmarkMetadata;

		/** This field returns seller's rating for the customer service metric. The rating is set to a value that equals the relative deviation between the seller's metric value and the benchmark value for the customer service metric. Deviation values range from LOW to VERY HIGH, and the lower the deviation, the better the seller rating. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/RatingTypeEnum.html'>eBay API documentation</a> */
		rating?: string | null;
	}

	/** This complex type defines the benchmark data, which includes the average value of the metric for the group (the benchmark) and the seller's overall rating when compared to the benchmark. */
	export interface MetricBenchmarkFormProperties {

		/** If this field is present, it indicates that the rating given to the seller was &quot;adjusted&quot; for one reason or another. If eBay determines that the normal rating of a seller is impacted by circumstances beyond their control, they can issue an override to adjust the rating given to the seller. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/RatingAdjustmentTypeEnum.html'>eBay API documentation</a> */
		adjustment: FormControl<string | null | undefined>,

		/** This field returns the &quot;basis&quot; by which the benchmark is calculated for the customer service metric type. Currently, the only supported basis is PEER_BENCHMARK. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/BenchmarkTypeEnum.html'>eBay API documentation</a> */
		basis: FormControl<string | null | undefined>,

		/** This field returns seller's rating for the customer service metric. The rating is set to a value that equals the relative deviation between the seller's metric value and the benchmark value for the customer service metric. Deviation values range from LOW to VERY HIGH, and the lower the deviation, the better the seller rating. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/RatingTypeEnum.html'>eBay API documentation</a> */
		rating: FormControl<string | null | undefined>,
	}
	export function CreateMetricBenchmarkFormGroup() {
		return new FormGroup<MetricBenchmarkFormProperties>({
			adjustment: new FormControl<string | null | undefined>(undefined),
			basis: new FormControl<string | null | undefined>(undefined),
			rating: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex data type describes the metric distribution by basis. */
	export interface MetricDistribution {

		/** This field returns the basis, or the method, by which the metric rating is calculated. */
		basis?: string | null;

		/** This field returns a list of name/value pairs, where the name indicates the distribution being rated and the value indicates the count of seller transactions that meet the distribution criteria. */
		data?: Array<Distribution>;
	}

	/** This complex data type describes the metric distribution by basis. */
	export interface MetricDistributionFormProperties {

		/** This field returns the basis, or the method, by which the metric rating is calculated. */
		basis: FormControl<string | null | undefined>,
	}
	export function CreateMetricDistributionFormGroup() {
		return new FormGroup<MetricDistributionFormProperties>({
			basis: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type defines of a piece of data that is grouped by the associated basis. It contains the name for the data set and its associated value. */
	export interface Distribution {

		/** The name of a distribution in which the seller is active. */
		name?: string | null;

		/** This field contains the number of transactions the seller had in the distribution (identified by the associated name field) during the metric evaluationCycle. */
		value?: string | null;
	}

	/** This complex type defines of a piece of data that is grouped by the associated basis. It contains the name for the data set and its associated value. */
	export interface DistributionFormProperties {

		/** The name of a distribution in which the seller is active. */
		name: FormControl<string | null | undefined>,

		/** This field contains the number of transactions the seller had in the distribution (identified by the associated name field) during the metric evaluationCycle. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateDistributionFormGroup() {
		return new FormGroup<DistributionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Type that defines the fields that can be returned in an error. */
	export interface Error {

		/** Identifies whether the error was in the REQUEST or happened when running the APPLICATION. */
		category?: string | null;

		/** The primary system where the error occurred. This is relevant for application errors. For Analytics errors, it always has the value API_ANALYTICS. */
		domain?: string | null;

		/**
		 * A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms. Traffic report error IDs range from 50001 to 50500.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorId?: number | null;

		/** Identifies specific request elements associated with the error, if any. inputRefId's response is format specific. For JSON, use JSONPath notation. */
		inputRefIds?: Array<string>;

		/** A more detailed explanation of the error than given in the message error field. */
		longMessage?: string | null;

		/** Information on how to correct the problem, in the end user's terms and language where applicable. Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale. */
		message?: string | null;

		/** Identifies specific response elements associated with the error, if any. Path format is the same as inputRefId. */
		outputRefIds?: Array<string>;

		/** This optional list of name/value pairs that contain context-specific ErrorParameter objects, with each item in the list being a parameter (or input field name) that caused an error condition. Each ErrorParameter object consists of two fields, a name and a value. */
		parameters?: Array<ErrorParameter>;

		/** If present, indicates which subsystem in which the error occurred. */
		subdomain?: string | null;
	}

	/** Type that defines the fields that can be returned in an error. */
	export interface ErrorFormProperties {

		/** Identifies whether the error was in the REQUEST or happened when running the APPLICATION. */
		category: FormControl<string | null | undefined>,

		/** The primary system where the error occurred. This is relevant for application errors. For Analytics errors, it always has the value API_ANALYTICS. */
		domain: FormControl<string | null | undefined>,

		/**
		 * A positive integer that uniquely identifies the specific error condition that occurred. Your application can use error codes as identifiers in your customized error-handling algorithms. Traffic report error IDs range from 50001 to 50500.
		 * Type: int, -2,147,483,648 to 2,147,483,647
		 */
		errorId: FormControl<number | null | undefined>,

		/** A more detailed explanation of the error than given in the message error field. */
		longMessage: FormControl<string | null | undefined>,

		/** Information on how to correct the problem, in the end user's terms and language where applicable. Its value is at most 50 characters long. If applicable, the value is localized in the end user's requested locale. */
		message: FormControl<string | null | undefined>,

		/** If present, indicates which subsystem in which the error occurred. */
		subdomain: FormControl<string | null | undefined>,
	}
	export function CreateErrorFormGroup() {
		return new FormGroup<ErrorFormProperties>({
			category: new FormControl<string | null | undefined>(undefined),
			domain: new FormControl<string | null | undefined>(undefined),
			errorId: new FormControl<number | null | undefined>(undefined),
			longMessage: new FormControl<string | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
			subdomain: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that defines an error and error message. */
	export interface ErrorParameter {

		/** Name of the entity that threw the error. */
		name?: string | null;

		/** A description of the error. */
		value?: string | null;
	}

	/** A complex type that defines an error and error message. */
	export interface ErrorParameterFormProperties {

		/** Name of the entity that threw the error. */
		name: FormControl<string | null | undefined>,

		/** A description of the error. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateErrorParameterFormGroup() {
		return new FormGroup<ErrorParameterFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex type describes the start and end dates of the of the time period over which the associated benchmark is computed. All timestamps are based on Mountain Standard Time (MST). The timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. */
	export interface EvaluationCycle {

		/** End date and time of the transaction lookback range. All timestamps are based on Mountain Standard Time (MST). The timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. */
		endDate?: string | null;

		/** The ISO-8601 date and time at which the seller was evaluated for this customer service metric rating. */
		evaluationDate?: string | null;

		/** This field specifies the transaction lookback period used for the evaluation. The evaluation_type value specified in the request is returned in this field. There are two possible values: CURRENT &ndash; A monthly evaluation that occurs on the 20th of every month. PROJECTED &ndash; A daily evaluation that provides a projection of how the seller is currently performing with regards to the upcoming evaluation period. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/EvaluationTypeEnum.html'>eBay API documentation</a> */
		evaluationType?: string | null;

		/** The start date and time of the transaction lookback range. All timestamps are based on Mountain Standard Time (MST). The timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2018-08-04T07:09:00.000Z */
		startDate?: string | null;
	}

	/** This complex type describes the start and end dates of the of the time period over which the associated benchmark is computed. All timestamps are based on Mountain Standard Time (MST). The timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. */
	export interface EvaluationCycleFormProperties {

		/** End date and time of the transaction lookback range. All timestamps are based on Mountain Standard Time (MST). The timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. */
		endDate: FormControl<string | null | undefined>,

		/** The ISO-8601 date and time at which the seller was evaluated for this customer service metric rating. */
		evaluationDate: FormControl<string | null | undefined>,

		/** This field specifies the transaction lookback period used for the evaluation. The evaluation_type value specified in the request is returned in this field. There are two possible values: CURRENT &ndash; A monthly evaluation that occurs on the 20th of every month. PROJECTED &ndash; A daily evaluation that provides a projection of how the seller is currently performing with regards to the upcoming evaluation period. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/EvaluationTypeEnum.html'>eBay API documentation</a> */
		evaluationType: FormControl<string | null | undefined>,

		/** The start date and time of the transaction lookback range. All timestamps are based on Mountain Standard Time (MST). The timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2018-08-04T07:09:00.000Z */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateEvaluationCycleFormGroup() {
		return new FormGroup<EvaluationCycleFormProperties>({
			endDate: new FormControl<string | null | undefined>(undefined),
			evaluationDate: new FormControl<string | null | undefined>(undefined),
			evaluationType: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response container for a list of seller profiles. */
	export interface FindSellerStandardsProfilesResponse {

		/** A list of the seller's standards profiles. A &quot;standards profile&quot; is a set of eBay seller standards categories and the values related to the associated seller. Profiles are distinguished by a combination of cycle and program values. The &quot;program&quot; value specifies the region to which the data is from. The &quot;cycle&quot; value specifies whether the values were determined just now, or if the values are from the last official eBay seller standards evaluation. */
		standardsProfiles?: Array<StandardsProfile>;
	}

	/** The response container for a list of seller profiles. */
	export interface FindSellerStandardsProfilesResponseFormProperties {
	}
	export function CreateFindSellerStandardsProfilesResponseFormGroup() {
		return new FormGroup<FindSellerStandardsProfilesResponseFormProperties>({
		});

	}


	/** A complex type that defines a seller profile. */
	export interface StandardsProfile {

		/** A complex type that describes a program cycle. */
		cycle?: Cycle;

		/** If set to true, this flag indicates this is the default program for the seller. Except for sellers in China, a seller's default program is the marketplace where they registered with eBay. Seller's in China select their default program when they register. */
		defaultProgram?: boolean | null;

		/** Specifies how the overall seller level was calculated. In the event of special circumstances (as determined by eBay), eBay may override the calculated seller level. In general, such overrides protect a seller's level. The usual value for both cycle types is &quot;Seller level generated by standards monthly evaluation cycle.&quot; */
		evaluationReason?: string | null;

		/** A list of the metrics upon which a seller's profile is evaluated. Each program's applicable metrics and requirements are listed at eBay Top Rated seller program standards. */
		metrics?: Array<Metric>;

		/** Indicates the program used to generate the profile data. Values can be PROGRAM_DE, PROGRAM_UK, PROGRAM_US, or PROGRAM_GLOBAL. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/ProgramEnum.html'>eBay API documentation</a> */
		program?: string | null;

		/** The overall standards level of the seller, one of TOP_RATED, ABOVE_STANDARD, or BELOW_STANDARD. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/StandardsLevelEnum.html'>eBay API documentation</a> */
		standardsLevel?: string | null;
	}

	/** A complex type that defines a seller profile. */
	export interface StandardsProfileFormProperties {

		/** If set to true, this flag indicates this is the default program for the seller. Except for sellers in China, a seller's default program is the marketplace where they registered with eBay. Seller's in China select their default program when they register. */
		defaultProgram: FormControl<boolean | null | undefined>,

		/** Specifies how the overall seller level was calculated. In the event of special circumstances (as determined by eBay), eBay may override the calculated seller level. In general, such overrides protect a seller's level. The usual value for both cycle types is &quot;Seller level generated by standards monthly evaluation cycle.&quot; */
		evaluationReason: FormControl<string | null | undefined>,

		/** Indicates the program used to generate the profile data. Values can be PROGRAM_DE, PROGRAM_UK, PROGRAM_US, or PROGRAM_GLOBAL. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/ProgramEnum.html'>eBay API documentation</a> */
		program: FormControl<string | null | undefined>,

		/** The overall standards level of the seller, one of TOP_RATED, ABOVE_STANDARD, or BELOW_STANDARD. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/StandardsLevelEnum.html'>eBay API documentation</a> */
		standardsLevel: FormControl<string | null | undefined>,
	}
	export function CreateStandardsProfileFormGroup() {
		return new FormGroup<StandardsProfileFormProperties>({
			defaultProgram: new FormControl<boolean | null | undefined>(undefined),
			evaluationReason: new FormControl<string | null | undefined>(undefined),
			program: new FormControl<string | null | undefined>(undefined),
			standardsLevel: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** This complex data type defines the response data that is returned from a request to getCustomerServiceMetric. The dimensionMetrics object contains the details of the dimension being measured and the calculated customer service metric values. The evaluationCycle defines the period used to calculate the metric values. The marketplaceId is the eBay marketplace for which the metrics are being considered. */
	export interface GetCustomerServiceMetricResponse {

		/** This container provides a seller's customer service metric performance for a given dimension. In the getCustomerServiceMetric request, specify values for the following request parameters to control the returned dimension and the associated metric values: customer_service_metric_type evaluation_type evaluation_marketplace_id */
		dimensionMetrics?: Array<DimensionMetric>;

		/** This complex type describes the start and end dates of the of the time period over which the associated benchmark is computed. All timestamps are based on Mountain Standard Time (MST). The timestamp is formatted as an ISO 8601 string, which is based on the 24-hour Coordinated Universal Time (UTC) clock. */
		evaluationCycle?: EvaluationCycle;

		/** The eBay marketplace ID of the marketplace upon which the customer service metric evaluation is based. The customer_service_metric resource supports a limited set of marketplaces. For a complete list of the supported marketplaces, please see the Service metrics policy page. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/MarketplaceIdEnum.html'>eBay API documentation</a> */
		marketplaceId?: string | null;
	}

	/** This complex data type defines the response data that is returned from a request to getCustomerServiceMetric. The dimensionMetrics object contains the details of the dimension being measured and the calculated customer service metric values. The evaluationCycle defines the period used to calculate the metric values. The marketplaceId is the eBay marketplace for which the metrics are being considered. */
	export interface GetCustomerServiceMetricResponseFormProperties {

		/** The eBay marketplace ID of the marketplace upon which the customer service metric evaluation is based. The customer_service_metric resource supports a limited set of marketplaces. For a complete list of the supported marketplaces, please see the Service metrics policy page. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/analytics/types/MarketplaceIdEnum.html'>eBay API documentation</a> */
		marketplaceId: FormControl<string | null | undefined>,
	}
	export function CreateGetCustomerServiceMetricResponseFormGroup() {
		return new FormGroup<GetCustomerServiceMetricResponseFormProperties>({
			marketplaceId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Type that defines the headers for the dimension keys and metrics returned in the report. */
	export interface Header {

		/** A list of the dimension or metric keys returned in the report. The values for each are is returned in the associated key fields. */
		dimensionKeys?: Array<Definition>;

		/** The list of metrics returned in the report. The values for each are is returned in the associated key fields. */
		metrics?: Array<Definition>;
	}

	/** Type that defines the headers for the dimension keys and metrics returned in the report. */
	export interface HeaderFormProperties {
	}
	export function CreateHeaderFormGroup() {
		return new FormGroup<HeaderFormProperties>({
		});

	}


	/** Type the defines the metadata information of the report. This includes the headers and the individual metadata records. */
	export interface Metadata {

		/** Type that defines the metadata header fields. */
		metadataHeader?: MetadataHeader;

		/** A list of the individual report records. */
		metadataRecords?: Array<MetadataRecord>;
	}

	/** Type the defines the metadata information of the report. This includes the headers and the individual metadata records. */
	export interface MetadataFormProperties {
	}
	export function CreateMetadataFormGroup() {
		return new FormGroup<MetadataFormProperties>({
		});

	}


	/** Type that defines the metadata header fields. */
	export interface MetadataHeader {

		/** The key value used for the report. For example: &quot;key&quot;: &quot;LISTING_ID&quot; */
		key?: string | null;

		/** The list of dimension key values used for the report header. Each list element contains the key name, its data type, and its localized name. For example: &quot;metadataKeys&quot;: [ &nbsp;&nbsp;&quot;key&quot;: &quot;LISTING_TITLE&quot;, &nbsp;&nbsp;&quot;localizedName&quot;: &quot;Listing title&quot;, &nbsp;&nbsp;&quot;dataType&quot;: &quot;STRING&quot; */
		metadataKeys?: Array<Definition>;
	}

	/** Type that defines the metadata header fields. */
	export interface MetadataHeaderFormProperties {

		/** The key value used for the report. For example: &quot;key&quot;: &quot;LISTING_ID&quot; */
		key: FormControl<string | null | undefined>,
	}
	export function CreateMetadataHeaderFormGroup() {
		return new FormGroup<MetadataHeaderFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A complex type that defines the data records returned in the report. */
	export interface MetadataRecord {

		/** A list of data in a row returned in the traffic report. The data in each of the cells match the labels in headers of the report. */
		metadataValues?: Array<Value>;

		/** A complex type that contains a value, plus the veracity of that value. */
		value?: Value;
	}

	/** A complex type that defines the data records returned in the report. */
	export interface MetadataRecordFormProperties {
	}
	export function CreateMetadataRecordFormGroup() {
		return new FormGroup<MetadataRecordFormProperties>({
		});

	}


	/** A complex type that contains a value, plus the veracity of that value. */
	export interface Value {

		/** If set to true, this flag indicates the value in the value field is valid as computed. A value of false indicates one or more of the values used to calculate the value was invalid. The occurrence of this is a rare, however consider this case: suppose a buyer navigates to a View Item page at 11:59 pm (the end of the day) and purchases the item at 12:05am the next day. In this case, the item would have been purchased with 0 views for the day. */
		applicable?: boolean | null;

		/** The value of the report data. */
		value?: string | null;
	}

	/** A complex type that contains a value, plus the veracity of that value. */
	export interface ValueFormProperties {

		/** If set to true, this flag indicates the value in the value field is valid as computed. A value of false indicates one or more of the values used to calculate the value was invalid. The occurrence of this is a rare, however consider this case: suppose a buyer navigates to a View Item page at 11:59 pm (the end of the day) and purchases the item at 12:05am the next day. In this case, the item would have been purchased with 0 views for the day. */
		applicable: FormControl<boolean | null | undefined>,

		/** The value of the report data. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateValueFormGroup() {
		return new FormGroup<ValueFormProperties>({
			applicable: new FormControl<boolean | null | undefined>(undefined),
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Type that defines the fields of the individual record of the report. */
	export interface Record {

		/** A list where each element contains either the string DAY (if the dimension is DAY), or the listing ID for which the record's metric data is computed. A second array member, applicable, is always true for dimension values. */
		dimensionValues?: Array<Value>;

		/** A list where each element contains a value field that indicates the record's value for the metric. Each element also contains an applicable field that indicates the veracity of the computed value. Note that there are no metric names or IDs associated with the values returned in this array. The metadata to which these values relate can be found in the key values . The order of the metric values in this array equals the order of the key values in metadataHeader. */
		metricValues?: Array<Value>;
	}

	/** Type that defines the fields of the individual record of the report. */
	export interface RecordFormProperties {
	}
	export function CreateRecordFormGroup() {
		return new FormGroup<RecordFormProperties>({
		});

	}


	/** The complex type that defines that defines the report. */
	export interface Report {

		/** A complex type containing the header of the report and the type of data containted in the rows of the report. */
		dimensionMetadata?: Array<Metadata>;

		/** The time stamp is formatted as an ISO 8601 string, which is based on the 24-hour Universal Coordinated Time (UTC) clock. If you specify an end date that is beyond the lastUpdatedDate value, eBay returns a report that contains data only up to the lastUpdateDate date. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2018-08-20T07:09:00.000Z */
		endDate?: string | null;

		/** Type that defines the headers for the dimension keys and metrics returned in the report. */
		header?: Header;

		/** The date and time, in ISO 8601 format, that indicates the last time the data returned in the report was updated. */
		lastUpdatedDate?: string | null;

		/** A complex type containing the individual data records for the traffic report. */
		records?: Array<Record>;

		/** The start date of the date range used to calculate the report, in ISO 8601 format. */
		startDate?: string | null;

		/** An array of any process errors or warnings that were generated during the processing of the call processing. */
		warnings?: Array<Error>;
	}

	/** The complex type that defines that defines the report. */
	export interface ReportFormProperties {

		/** The time stamp is formatted as an ISO 8601 string, which is based on the 24-hour Universal Coordinated Time (UTC) clock. If you specify an end date that is beyond the lastUpdatedDate value, eBay returns a report that contains data only up to the lastUpdateDate date. Format: [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].[sss]Z Example: 2018-08-20T07:09:00.000Z */
		endDate: FormControl<string | null | undefined>,

		/** The date and time, in ISO 8601 format, that indicates the last time the data returned in the report was updated. */
		lastUpdatedDate: FormControl<string | null | undefined>,

		/** The start date of the date range used to calculate the report, in ISO 8601 format. */
		startDate: FormControl<string | null | undefined>,
	}
	export function CreateReportFormGroup() {
		return new FormGroup<ReportFormProperties>({
			endDate: new FormControl<string | null | undefined>(undefined),
			lastUpdatedDate: new FormControl<string | null | undefined>(undefined),
			startDate: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Use this method to retrieve a seller's performance and rating for the customer service metric. Control the response from the getCustomerServiceMetric method using the following path and query parameters: customer_service_metric_type controls the type of customer service transactions evaluated for the metric rating. evaluation_type controls the period you want to review. evaluation_marketplace_id specifies the target marketplace for the evaluation. Currently, metric data is returned for only peer benchmarking. For more detail on the workings of peer benchmarking, see Service metrics policy.
		 * Get customer_service_metric/{customer_service_metric_type}/{evaluation_type}
		 * @param {string} customer_service_metric_type Use this path parameter to specify the type of customer service metrics and benchmark data you want returned for the seller. Supported types are: ITEM_NOT_AS_DESCRIBED ITEM_NOT_RECEIVED
		 * @param {string} evaluation_marketplace_id Use this query parameter to specify the Marketplace ID to evaluate for the customer service metrics and benchmark data. For the list of supported marketplaces, see Analytics API requirements and restrictions. For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/analytics/types/MarketplaceIdEnum.html
		 * @param {string} evaluation_type Use this path parameter to specify the type of the seller evaluation you want returned, either: CURRENT &ndash; A monthly evaluation that occurs on the 20th of every month. PROJECTED &ndash; A daily evaluation that provides a projection of how the seller is currently performing with regards to the upcoming evaluation period.
		 * @return {GetCustomerServiceMetricResponse} Success
		 */
		GetCustomerServiceMetric(customer_service_metric_type: string, evaluation_marketplace_id: string, evaluation_type: string): Observable<GetCustomerServiceMetricResponse> {
			return this.http.get<GetCustomerServiceMetricResponse>(this.baseUri + 'customer_service_metric/' + (customer_service_metric_type == null ? '' : encodeURIComponent(customer_service_metric_type)) + '/' + (evaluation_type == null ? '' : encodeURIComponent(evaluation_type)) + '&evaluation_marketplace_id=' + (evaluation_marketplace_id == null ? '' : encodeURIComponent(evaluation_marketplace_id)), {});
		}

		/**
		 * This call retrieves all the standards profiles for the associated seller. A standards profile is a set of eBay seller metrics and the seller's associated compliance values (either TOP_RATED, ABOVE_STANDARD, or BELOW_STANDARD). A seller's multiple profiles are distinguished by two criteria, a &quot;program&quot; and a &quot;cycle.&quot; A profile's program is one of three regions where the seller may have done business, or PROGRAM_GLOBAL to indicate all marketplaces where the seller has done business. The cycle value specifies whether the standards compliance values were determined at the last official eBay evaluation or at the time of the request.
		 * Get seller_standards_profile
		 * @return {FindSellerStandardsProfilesResponse} Success
		 */
		FindSellerStandardsProfiles(): Observable<FindSellerStandardsProfilesResponse> {
			return this.http.get<FindSellerStandardsProfilesResponse>(this.baseUri + 'seller_standards_profile', {});
		}

		/**
		 * This call retrieves a single standards profile for the associated seller. A standards profile is a set of eBay seller metrics and the seller's associated compliance values (either TOP_RATED, ABOVE_STANDARD, or BELOW_STANDARD). A seller can have multiple profiles distinguished by two criteria, a &quot;program&quot; and a &quot;cycle.&quot; A profile's program is one of three regions where the seller may have done business, or PROGRAM_GLOBAL to indicate all marketplaces where the seller has done business. The cycle value specifies whether the standards compliance values were determined at the last official eBay evaluation (CURRENT) or at the time of the request (PROJECTED). Both cycle and a program values are required URI parameters for this method.
		 * Get seller_standards_profile/{program}/{cycle}
		 * @param {string} cycle The period covered by the returned standards profile evaluation. Supply one of two values, CURRENT means the response reflects eBay's most recent monthly standards evaluation and PROJECTED means the response reflect the seller's projected monthly evaluation, as calculated at the time of the request.
		 * @param {string} program This input value specifies the region used to determine the seller's standards profile. Supply one of the four following values, PROGRAM_DE, PROGRAM_UK, PROGRAM_US, or PROGRAM_GLOBAL.
		 * @return {StandardsProfile} Success
		 */
		GetSellerStandardsProfile(cycle: string, program: string): Observable<StandardsProfile> {
			return this.http.get<StandardsProfile>(this.baseUri + 'seller_standards_profile/' + (program == null ? '' : encodeURIComponent(program)) + '/' + (cycle == null ? '' : encodeURIComponent(cycle)), {});
		}

		/**
		 * This method returns a report that details the user traffic received by a seller's listings. A traffic report gives sellers the ability to review how often their listings appeared on eBay, how many times their listings are viewed, and how many purchases were made. The report also returns the report's start and end dates, and the date the information was last updated. When using this call: Be sure to URL-encode the values you pass in query parameters, as described in URI parameters. See the request samples below for details. You can only specify a single metric in the sort parameter and the specified metric must be listed in the metric parameter of your request. Parameter names are case sensitive, but metric names are not. For example, the following are correct: sort=LISTING_IMPRESSION_TOTAL sort=lisitng_impression_total metric=lisitng_impression_total However, these are incorrect: SORT=LISTING_IMPRESSION_TOTAL SORT=lisitng_impression_total Metric=lisitng_impression_total For more information, see Traffic report details.
		 * Get traffic_report
		 * @param {string} dimension This query parameter specifies the dimension, or &quot;attribute,&quot; that is applied to the report metric. Valid values: DAY or LISTING Examples If you specify dimension=DAY and metric=CLICK_THROUGH_RATE, the traffic report contains the number of times an item displayed on a search results page and the buyer clicked through to the View Item page for each day in the date range, as in: 12-06-17: 32, 12-07-17: 54, ... If you specify dimension=LISTING and metric=LISTING_IMPRESSION_STORE, the traffic report contains the number of times that listing appeared on the seller's store during the specified date range. For example, LISTING_IMPRESSION_STORE: 157 means the item appeared 157 times in the store during the date range.
		 * @param {string} filter This query parameter refines the information returned in the traffic report. Configure the following properties of the filter parameter to tune the traffic report to your needs: date_range Limits the report to the specified range of dates. Format the date range by enclosing the earliest date and end date for the report in brackets (&quot;[ ]&quot;), as follows: [YYYYMMDD..YYYYMMDD] The maximum range between the start and end dates is 90 days, and the earliest start date you can specify is two years prior to the current date, which is defined as 730 days (365 * 2), not accounting for Leap Year. The last date for which traffic data exists is a value called lastUpdatedDate. eBay returns an error if you specify a date range greater than 90 days, or the start date is after the lastUpdatedDate. If the specified end date is beyond the lastUpdatedDate, eBay returns data up to the lastUpdatedDate. Required: Always listing_ids This filter limits the results to only the supplied list of listingId values. You can specify to 200 different listingId values. Enclose the list of IDs with curly braces (&quot;{ }&quot;), and separate multiple values with a pipe character (&quot;|&quot;). This filter only returns data for listings that have been either active or sold in last 90 days, and any unsold listings in the last 30 days. All listings must be the seller's and they must be listed on the marketplace specified by the marketplace_ids filter argument. marketplace_ids This filter limits the report to seller data related to only the specified marketplace ID (currently the filter allows only a single marketplace ID). Enclose the marketplace ID in curly braces (&quot;{ }&quot;). Valid values: EBAY_AU EBAY_DE EBAY_GB EBAY_US EBAY_MOTORS_US Required if you set the dimension parameter to DAY. traffic_source Limits the report to either Promoted Listings items or non-Promoted Listings (organic) items. Valid values are ORGANIC and PROMOTED_LISTINGS. Enclose the list of values with curly braces (&quot;{ }&quot;), and separate multiple values with a pipe character (&quot;|&quot;) The default is both values. Example filter parameter The following example shows how to configure the filter parameter with the marketplace_ids and date_range filters: filter=marketplace_ids:{EBAY_US},date_range:[20170601..20170828] Note: You must URL encode all the values you supply in the filter parameter, as described in URL parameters. For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/analytics/types/FilterField.html
		 * @param {string} metric This query parameter specifies the metrics you want covered in the report. Specify a comma-separated list of the metrics you want included in the report. Valid values: CLICK_THROUGH_RATE The number of times an item displays on the search results page divided by the number of times buyers clicked through to its View Item page. Localized name: Click through rate LISTING_IMPRESSION_SEARCH_RESULTS_PAGE The number of times the seller's listings displayed on the search results page. Note, the listing might not have been visible to the buyer due to its position on the page. Localized name: Listing impressions from the search results page LISTING_IMPRESSION_STORE The number of times the seller's listings displayed on the seller's store. Note, the listing might not have been visible to the buyer due to its position on the page. Localized name: Listing impressions from your Store LISTING_IMPRESSION_TOTAL The total number of times the seller's listings displayed on the search results page OR in the seller's store. The item is counted each time it displays on either page. However, the listing might not have been visible to the buyer due to its position on the page. This is a combination of: LISTING_IMPRESSION_SEARCH_RESULTS_PAGE + LISTING_IMPRESSION_STORE. Localized name: Total listing impressions LISTING_VIEWS_SOURCE_DIRECT The number of times a View Item page was directly accessed, such as when a buyer navigates to the page using a bookmark. Localized name: Direct views LISTING_VIEWS_SOURCE_OFF_EBAY The number of times a View Item page was accessed via a site other than eBay, such as when a buyer clicks on a link to the listing from a search engine page. Localized name: Off eBay views LISTING_VIEWS_SOURCE_OTHER_EBAY The number of times a View Item page was accessed from an eBay page that is not either the search results page or the seller's store. Localized name: Views from non-search and non-store pages within eBay LISTING_VIEWS_SOURCE_SEARCH_RESULTS_PAGE The number of times the item displayed on the search results page. Localized name: Views on the search results page LISTING_VIEWS_SOURCE_STORE The number of times a View Item page was accessed via the seller's store. Localized name: Views from your Store LISTING_VIEWS_TOTAL Total number of listings viewed. This number sums: LISTING_VIEWS_SOURCE_DIRECT LISTING_VIEWS_SOURCE_OFF_EBAY LISTING_VIEWS_SOURCE_OTHER_EBAY LISTING_VIEWS_SOURCE_SEARCH_RESULTS_PAGE LISTING_VIEWS_SOURCE_STORE. Localized name: Total views SALES_CONVERSION_RATE The number of completed transactions divided by the number of View Item page views. Equals: TRANSACTION / LISTING_VIEWS_TOTAL Localized name: Sales conversion rate TRANSACTION The total number of completed transactions. Localized name: Transaction count
		 * @param {string} sort This query parameter sorts the report on the specified metric. The metric you specify must be included in the configuration of the report's metric parameter. Sorting is helpful when you want to review how a specific metric is performing, such as the CLICK_THROUGH_RATE. Reports can be sorted in ascending or descending order. Precede the value of a descending-order request with a minus sign (&quot;-&quot;), for example: sort=-CLICK_THROUGH_RATE. For implementation help, refer to eBay API documentation at https://developer.ebay.com/devzone/rest/api-ref/analytics/types/SortField.html
		 * @return {Report} Success
		 */
		GetTrafficReport(dimension: string | null | undefined, filter: string | null | undefined, metric: string | null | undefined, sort: string | null | undefined): Observable<Report> {
			return this.http.get<Report>(this.baseUri + 'traffic_report?dimension=' + (dimension == null ? '' : encodeURIComponent(dimension)) + '&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&metric=' + (metric == null ? '' : encodeURIComponent(metric)) + '&sort=' + (sort == null ? '' : encodeURIComponent(sort)), {});
		}
	}

}

