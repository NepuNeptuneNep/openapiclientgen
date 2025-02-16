import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/**
	 * A task to execute on the completion of a job.
	 * See https://cloud.google.com/dlp/docs/concepts-actions to learn more.
	 */
	export interface GooglePrivacyDlpV2Action {

		/**
		 * Enable email notification to project owners and editors on jobs's
		 * completion/failure.
		 */
		jobNotificationEmails?: GooglePrivacyDlpV2JobNotificationEmails;

		/**
		 * Publish a message into given Pub/Sub topic when DlpJob has completed. The
		 * message contains a single field, `DlpJobName`, which is equal to the
		 * finished job's
		 * [`DlpJob.name`](/dlp/docs/reference/rest/v2/projects.dlpJobs#DlpJob).
		 * Compatible with: Inspect, Risk
		 */
		pubSub?: GooglePrivacyDlpV2PublishToPubSub;

		/**
		 * Publish findings of a DlpJob to Cloud Data Catalog. Labels summarizing the
		 * results of the DlpJob will be applied to the entry for the resource scanned
		 * in Cloud Data Catalog. Any labels previously written by another DlpJob will
		 * be deleted. InfoType naming patterns are strictly enforced when using this
		 * feature. Note that the findings will be persisted in Cloud Data Catalog
		 * storage and are governed by Data Catalog service-specific policy, see
		 * https://cloud.google.com/terms/service-terms
		 * Only a single instance of this action can be specified and only allowed if
		 * all resources being scanned are BigQuery tables.
		 * Compatible with: Inspect
		 */
		publishFindingsToCloudDataCatalog?: GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog;

		/**
		 * Publish the result summary of a DlpJob to the Cloud Security
		 * Command Center (CSCC Alpha).
		 * This action is only available for projects which are parts of
		 * an organization and whitelisted for the alpha Cloud Security Command
		 * Center.
		 * The action will publish count of finding instances and their info types.
		 * The summary of findings will be persisted in CSCC and are governed by CSCC
		 * service-specific policy, see https://cloud.google.com/terms/service-terms
		 * Only a single instance of this action can be specified.
		 * Compatible with: Inspect
		 */
		publishSummaryToCscc?: GooglePrivacyDlpV2PublishSummaryToCscc;

		/**
		 * Enable Stackdriver metric dlp.googleapis.com/finding_count. This
		 * will publish a metric to stack driver on each infotype requested and
		 * how many findings were found for it. CustomDetectors will be bucketed
		 * as 'Custom' under the Stackdriver label 'info_type'.
		 */
		publishToStackdriver?: GooglePrivacyDlpV2PublishToStackdriver;

		/**
		 * If set, the detailed findings will be persisted to the specified
		 * OutputStorageConfig. Only a single instance of this action can be
		 * specified.
		 * Compatible with: Inspect, Risk
		 */
		saveFindings?: GooglePrivacyDlpV2SaveFindings;
	}

	/**
	 * A task to execute on the completion of a job.
	 * See https://cloud.google.com/dlp/docs/concepts-actions to learn more.
	 */
	export interface GooglePrivacyDlpV2ActionFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ActionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ActionFormProperties>({
		});

	}


	/**
	 * Enable email notification to project owners and editors on jobs's
	 * completion/failure.
	 */
	export interface GooglePrivacyDlpV2JobNotificationEmails {
	}

	/**
	 * Enable email notification to project owners and editors on jobs's
	 * completion/failure.
	 */
	export interface GooglePrivacyDlpV2JobNotificationEmailsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2JobNotificationEmailsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2JobNotificationEmailsFormProperties>({
		});

	}


	/**
	 * Publish a message into given Pub/Sub topic when DlpJob has completed. The
	 * message contains a single field, `DlpJobName`, which is equal to the
	 * finished job's
	 * [`DlpJob.name`](/dlp/docs/reference/rest/v2/projects.dlpJobs#DlpJob).
	 * Compatible with: Inspect, Risk
	 */
	export interface GooglePrivacyDlpV2PublishToPubSub {

		/**
		 * Cloud Pub/Sub topic to send notifications to. The topic must have given
		 * publishing access rights to the DLP API service account executing
		 * the long running DlpJob sending the notifications.
		 * Format is projects/{project}/topics/{topic}.
		 */
		topic?: string | null;
	}

	/**
	 * Publish a message into given Pub/Sub topic when DlpJob has completed. The
	 * message contains a single field, `DlpJobName`, which is equal to the
	 * finished job's
	 * [`DlpJob.name`](/dlp/docs/reference/rest/v2/projects.dlpJobs#DlpJob).
	 * Compatible with: Inspect, Risk
	 */
	export interface GooglePrivacyDlpV2PublishToPubSubFormProperties {

		/**
		 * Cloud Pub/Sub topic to send notifications to. The topic must have given
		 * publishing access rights to the DLP API service account executing
		 * the long running DlpJob sending the notifications.
		 * Format is projects/{project}/topics/{topic}.
		 */
		topic: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2PublishToPubSubFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PublishToPubSubFormProperties>({
			topic: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Publish findings of a DlpJob to Cloud Data Catalog. Labels summarizing the
	 * results of the DlpJob will be applied to the entry for the resource scanned
	 * in Cloud Data Catalog. Any labels previously written by another DlpJob will
	 * be deleted. InfoType naming patterns are strictly enforced when using this
	 * feature. Note that the findings will be persisted in Cloud Data Catalog
	 * storage and are governed by Data Catalog service-specific policy, see
	 * https://cloud.google.com/terms/service-terms
	 * Only a single instance of this action can be specified and only allowed if
	 * all resources being scanned are BigQuery tables.
	 * Compatible with: Inspect
	 */
	export interface GooglePrivacyDlpV2PublishFindingsToCloudDataCatalog {
	}

	/**
	 * Publish findings of a DlpJob to Cloud Data Catalog. Labels summarizing the
	 * results of the DlpJob will be applied to the entry for the resource scanned
	 * in Cloud Data Catalog. Any labels previously written by another DlpJob will
	 * be deleted. InfoType naming patterns are strictly enforced when using this
	 * feature. Note that the findings will be persisted in Cloud Data Catalog
	 * storage and are governed by Data Catalog service-specific policy, see
	 * https://cloud.google.com/terms/service-terms
	 * Only a single instance of this action can be specified and only allowed if
	 * all resources being scanned are BigQuery tables.
	 * Compatible with: Inspect
	 */
	export interface GooglePrivacyDlpV2PublishFindingsToCloudDataCatalogFormProperties {
	}
	export function CreateGooglePrivacyDlpV2PublishFindingsToCloudDataCatalogFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PublishFindingsToCloudDataCatalogFormProperties>({
		});

	}


	/**
	 * Publish the result summary of a DlpJob to the Cloud Security
	 * Command Center (CSCC Alpha).
	 * This action is only available for projects which are parts of
	 * an organization and whitelisted for the alpha Cloud Security Command
	 * Center.
	 * The action will publish count of finding instances and their info types.
	 * The summary of findings will be persisted in CSCC and are governed by CSCC
	 * service-specific policy, see https://cloud.google.com/terms/service-terms
	 * Only a single instance of this action can be specified.
	 * Compatible with: Inspect
	 */
	export interface GooglePrivacyDlpV2PublishSummaryToCscc {
	}

	/**
	 * Publish the result summary of a DlpJob to the Cloud Security
	 * Command Center (CSCC Alpha).
	 * This action is only available for projects which are parts of
	 * an organization and whitelisted for the alpha Cloud Security Command
	 * Center.
	 * The action will publish count of finding instances and their info types.
	 * The summary of findings will be persisted in CSCC and are governed by CSCC
	 * service-specific policy, see https://cloud.google.com/terms/service-terms
	 * Only a single instance of this action can be specified.
	 * Compatible with: Inspect
	 */
	export interface GooglePrivacyDlpV2PublishSummaryToCsccFormProperties {
	}
	export function CreateGooglePrivacyDlpV2PublishSummaryToCsccFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PublishSummaryToCsccFormProperties>({
		});

	}


	/**
	 * Enable Stackdriver metric dlp.googleapis.com/finding_count. This
	 * will publish a metric to stack driver on each infotype requested and
	 * how many findings were found for it. CustomDetectors will be bucketed
	 * as 'Custom' under the Stackdriver label 'info_type'.
	 */
	export interface GooglePrivacyDlpV2PublishToStackdriver {
	}

	/**
	 * Enable Stackdriver metric dlp.googleapis.com/finding_count. This
	 * will publish a metric to stack driver on each infotype requested and
	 * how many findings were found for it. CustomDetectors will be bucketed
	 * as 'Custom' under the Stackdriver label 'info_type'.
	 */
	export interface GooglePrivacyDlpV2PublishToStackdriverFormProperties {
	}
	export function CreateGooglePrivacyDlpV2PublishToStackdriverFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PublishToStackdriverFormProperties>({
		});

	}


	/**
	 * If set, the detailed findings will be persisted to the specified
	 * OutputStorageConfig. Only a single instance of this action can be
	 * specified.
	 * Compatible with: Inspect, Risk
	 */
	export interface GooglePrivacyDlpV2SaveFindings {

		/** Cloud repository for storing output. */
		outputConfig?: GooglePrivacyDlpV2OutputStorageConfig;
	}

	/**
	 * If set, the detailed findings will be persisted to the specified
	 * OutputStorageConfig. Only a single instance of this action can be
	 * specified.
	 * Compatible with: Inspect, Risk
	 */
	export interface GooglePrivacyDlpV2SaveFindingsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2SaveFindingsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2SaveFindingsFormProperties>({
		});

	}


	/** Cloud repository for storing output. */
	export interface GooglePrivacyDlpV2OutputStorageConfig {

		/**
		 * Schema used for writing the findings for Inspect jobs. This field is only
		 * used for Inspect and must be unspecified for Risk jobs. Columns are derived
		 * from the `Finding` object. If appending to an existing table, any columns
		 * from the predefined schema that are missing will be added. No columns in
		 * the existing table will be deleted.
		 * If unspecified, then all available columns will be used for a new table or
		 * an (existing) table with no schema, and no changes will be made to an
		 * existing table that has a schema.
		 * Only for use with external storage.
		 */
		outputSchema?: GooglePrivacyDlpV2OutputStorageConfigOutputSchema | null;

		/**
		 * Message defining the location of a BigQuery table. A table is uniquely
		 * identified  by its project_id, dataset_id, and table_name. Within a query
		 * a table is often referenced with a string in the format of:
		 * `<project_id>:<dataset_id>.<table_id>` or
		 * `<project_id>.<dataset_id>.<table_id>`.
		 */
		table?: GooglePrivacyDlpV2BigQueryTable;
	}

	/** Cloud repository for storing output. */
	export interface GooglePrivacyDlpV2OutputStorageConfigFormProperties {

		/**
		 * Schema used for writing the findings for Inspect jobs. This field is only
		 * used for Inspect and must be unspecified for Risk jobs. Columns are derived
		 * from the `Finding` object. If appending to an existing table, any columns
		 * from the predefined schema that are missing will be added. No columns in
		 * the existing table will be deleted.
		 * If unspecified, then all available columns will be used for a new table or
		 * an (existing) table with no schema, and no changes will be made to an
		 * existing table that has a schema.
		 * Only for use with external storage.
		 */
		outputSchema: FormControl<GooglePrivacyDlpV2OutputStorageConfigOutputSchema | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2OutputStorageConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2OutputStorageConfigFormProperties>({
			outputSchema: new FormControl<GooglePrivacyDlpV2OutputStorageConfigOutputSchema | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2OutputStorageConfigOutputSchema { OUTPUT_SCHEMA_UNSPECIFIED = 0, BASIC_COLUMNS = 1, GCS_COLUMNS = 2, DATASTORE_COLUMNS = 3, BIG_QUERY_COLUMNS = 4, ALL_COLUMNS = 5 }


	/**
	 * Message defining the location of a BigQuery table. A table is uniquely
	 * identified  by its project_id, dataset_id, and table_name. Within a query
	 * a table is often referenced with a string in the format of:
	 * `<project_id>:<dataset_id>.<table_id>` or
	 * `<project_id>.<dataset_id>.<table_id>`.
	 */
	export interface GooglePrivacyDlpV2BigQueryTable {

		/** Dataset ID of the table. */
		datasetId?: string | null;

		/**
		 * The Google Cloud Platform project ID of the project containing the table.
		 * If omitted, project ID is inferred from the API call.
		 */
		projectId?: string | null;

		/** Name of the table. */
		tableId?: string | null;
	}

	/**
	 * Message defining the location of a BigQuery table. A table is uniquely
	 * identified  by its project_id, dataset_id, and table_name. Within a query
	 * a table is often referenced with a string in the format of:
	 * `<project_id>:<dataset_id>.<table_id>` or
	 * `<project_id>.<dataset_id>.<table_id>`.
	 */
	export interface GooglePrivacyDlpV2BigQueryTableFormProperties {

		/** Dataset ID of the table. */
		datasetId: FormControl<string | null | undefined>,

		/**
		 * The Google Cloud Platform project ID of the project containing the table.
		 * If omitted, project ID is inferred from the API call.
		 */
		projectId: FormControl<string | null | undefined>,

		/** Name of the table. */
		tableId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2BigQueryTableFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BigQueryTableFormProperties>({
			datasetId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			tableId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for ActivateJobTrigger. */
	export interface GooglePrivacyDlpV2ActivateJobTriggerRequest {
	}

	/** Request message for ActivateJobTrigger. */
	export interface GooglePrivacyDlpV2ActivateJobTriggerRequestFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ActivateJobTriggerRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ActivateJobTriggerRequestFormProperties>({
		});

	}


	/** Result of a risk analysis operation request. */
	export interface GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails {

		/** Result of the categorical stats computation. */
		categoricalStatsResult?: GooglePrivacyDlpV2CategoricalStatsResult;

		/**
		 * Result of the δ-presence computation. Note that these results are an
		 * estimation, not exact values.
		 */
		deltaPresenceEstimationResult?: GooglePrivacyDlpV2DeltaPresenceEstimationResult;

		/** Result of the k-anonymity computation. */
		kAnonymityResult?: GooglePrivacyDlpV2KAnonymityResult;

		/**
		 * Result of the reidentifiability analysis. Note that these results are an
		 * estimation, not exact values.
		 */
		kMapEstimationResult?: GooglePrivacyDlpV2KMapEstimationResult;

		/** Result of the l-diversity computation. */
		lDiversityResult?: GooglePrivacyDlpV2LDiversityResult;

		/** Result of the numerical stats computation. */
		numericalStatsResult?: GooglePrivacyDlpV2NumericalStatsResult;

		/** Privacy metric to compute for reidentification risk analysis. */
		requestedPrivacyMetric?: GooglePrivacyDlpV2PrivacyMetric;

		/**
		 * Message defining the location of a BigQuery table. A table is uniquely
		 * identified  by its project_id, dataset_id, and table_name. Within a query
		 * a table is often referenced with a string in the format of:
		 * `<project_id>:<dataset_id>.<table_id>` or
		 * `<project_id>.<dataset_id>.<table_id>`.
		 */
		requestedSourceTable?: GooglePrivacyDlpV2BigQueryTable;
	}

	/** Result of a risk analysis operation request. */
	export interface GooglePrivacyDlpV2AnalyzeDataSourceRiskDetailsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2AnalyzeDataSourceRiskDetailsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2AnalyzeDataSourceRiskDetailsFormProperties>({
		});

	}


	/** Result of the categorical stats computation. */
	export interface GooglePrivacyDlpV2CategoricalStatsResult {

		/** Histogram of value frequencies in the column. */
		valueFrequencyHistogramBuckets?: Array<GooglePrivacyDlpV2CategoricalStatsHistogramBucket>;
	}

	/** Result of the categorical stats computation. */
	export interface GooglePrivacyDlpV2CategoricalStatsResultFormProperties {
	}
	export function CreateGooglePrivacyDlpV2CategoricalStatsResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CategoricalStatsResultFormProperties>({
		});

	}


	/** Histogram of value frequencies in the column. */
	export interface GooglePrivacyDlpV2CategoricalStatsHistogramBucket {

		/** Total number of values in this bucket. */
		bucketSize?: string | null;

		/** Total number of distinct values in this bucket. */
		bucketValueCount?: string | null;

		/**
		 * Sample of value frequencies in this bucket. The total number of
		 * values returned per bucket is capped at 20.
		 */
		bucketValues?: Array<GooglePrivacyDlpV2ValueFrequency>;

		/** Lower bound on the value frequency of the values in this bucket. */
		valueFrequencyLowerBound?: string | null;

		/** Upper bound on the value frequency of the values in this bucket. */
		valueFrequencyUpperBound?: string | null;
	}

	/** Histogram of value frequencies in the column. */
	export interface GooglePrivacyDlpV2CategoricalStatsHistogramBucketFormProperties {

		/** Total number of values in this bucket. */
		bucketSize: FormControl<string | null | undefined>,

		/** Total number of distinct values in this bucket. */
		bucketValueCount: FormControl<string | null | undefined>,

		/** Lower bound on the value frequency of the values in this bucket. */
		valueFrequencyLowerBound: FormControl<string | null | undefined>,

		/** Upper bound on the value frequency of the values in this bucket. */
		valueFrequencyUpperBound: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CategoricalStatsHistogramBucketFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CategoricalStatsHistogramBucketFormProperties>({
			bucketSize: new FormControl<string | null | undefined>(undefined),
			bucketValueCount: new FormControl<string | null | undefined>(undefined),
			valueFrequencyLowerBound: new FormControl<string | null | undefined>(undefined),
			valueFrequencyUpperBound: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A value of a field, including its frequency. */
	export interface GooglePrivacyDlpV2ValueFrequency {

		/** How many times the value is contained in the field. */
		count?: string | null;

		/**
		 * Set of primitive values supported by the system.
		 * Note that for the purposes of inspection or transformation, the number
		 * of bytes considered to comprise a 'Value' is based on its representation
		 * as a UTF-8 encoded string. For example, if 'integer_value' is set to
		 * 123456789, the number of bytes would be counted as 9, even though an
		 * int64 only holds up to 8 bytes of data.
		 */
		value?: GooglePrivacyDlpV2Value;
	}

	/** A value of a field, including its frequency. */
	export interface GooglePrivacyDlpV2ValueFrequencyFormProperties {

		/** How many times the value is contained in the field. */
		count: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ValueFrequencyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ValueFrequencyFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Set of primitive values supported by the system.
	 * Note that for the purposes of inspection or transformation, the number
	 * of bytes considered to comprise a 'Value' is based on its representation
	 * as a UTF-8 encoded string. For example, if 'integer_value' is set to
	 * 123456789, the number of bytes would be counted as 9, even though an
	 * int64 only holds up to 8 bytes of data.
	 */
	export interface GooglePrivacyDlpV2Value {

		/** boolean */
		booleanValue?: boolean | null;

		/**
		 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
		 * and time zone are either specified elsewhere or are not significant. The date
		 * is relative to the Proleptic Gregorian Calendar. This can represent:
		 * * A full date, with non-zero year, month and day values
		 * * A month and day value, with a zero year, e.g. an anniversary
		 * * A year on its own, with zero month and day values
		 * * A year and month value, with a zero day, e.g. a credit card expiration date
		 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
		 */
		dateValue?: GoogleTypeDate;

		/** day of week */
		dayOfWeekValue?: GooglePrivacyDlpV2ValueDayOfWeekValue | null;

		/** float */
		floatValue?: number | null;

		/** integer */
		integerValue?: string | null;

		/** string */
		stringValue?: string | null;

		/**
		 * Represents a time of day. The date and time zone are either not significant
		 * or are specified elsewhere. An API may choose to allow leap seconds. Related
		 * types are google.type.Date and `google.protobuf.Timestamp`.
		 */
		timeValue?: GoogleTypeTimeOfDay;

		/** timestamp */
		timestampValue?: string | null;
	}

	/**
	 * Set of primitive values supported by the system.
	 * Note that for the purposes of inspection or transformation, the number
	 * of bytes considered to comprise a 'Value' is based on its representation
	 * as a UTF-8 encoded string. For example, if 'integer_value' is set to
	 * 123456789, the number of bytes would be counted as 9, even though an
	 * int64 only holds up to 8 bytes of data.
	 */
	export interface GooglePrivacyDlpV2ValueFormProperties {

		/** boolean */
		booleanValue: FormControl<boolean | null | undefined>,

		/** day of week */
		dayOfWeekValue: FormControl<GooglePrivacyDlpV2ValueDayOfWeekValue | null | undefined>,

		/** float */
		floatValue: FormControl<number | null | undefined>,

		/** integer */
		integerValue: FormControl<string | null | undefined>,

		/** string */
		stringValue: FormControl<string | null | undefined>,

		/** timestamp */
		timestampValue: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ValueFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ValueFormProperties>({
			booleanValue: new FormControl<boolean | null | undefined>(undefined),
			dayOfWeekValue: new FormControl<GooglePrivacyDlpV2ValueDayOfWeekValue | null | undefined>(undefined),
			floatValue: new FormControl<number | null | undefined>(undefined),
			integerValue: new FormControl<string | null | undefined>(undefined),
			stringValue: new FormControl<string | null | undefined>(undefined),
			timestampValue: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
	 * and time zone are either specified elsewhere or are not significant. The date
	 * is relative to the Proleptic Gregorian Calendar. This can represent:
	 * * A full date, with non-zero year, month and day values
	 * * A month and day value, with a zero year, e.g. an anniversary
	 * * A year on its own, with zero month and day values
	 * * A year and month value, with a zero day, e.g. a credit card expiration date
	 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
	 */
	export interface GoogleTypeDate {

		/**
		 * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
		 * if specifying a year by itself or a year and month where the day is not
		 * significant.
		 */
		day?: number | null;

		/**
		 * Month of year. Must be from 1 to 12, or 0 if specifying a year without a
		 * month and day.
		 */
		month?: number | null;

		/**
		 * Year of date. Must be from 1 to 9999, or 0 if specifying a date without
		 * a year.
		 */
		year?: number | null;
	}

	/**
	 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
	 * and time zone are either specified elsewhere or are not significant. The date
	 * is relative to the Proleptic Gregorian Calendar. This can represent:
	 * * A full date, with non-zero year, month and day values
	 * * A month and day value, with a zero year, e.g. an anniversary
	 * * A year on its own, with zero month and day values
	 * * A year and month value, with a zero day, e.g. a credit card expiration date
	 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
	 */
	export interface GoogleTypeDateFormProperties {

		/**
		 * Day of month. Must be from 1 to 31 and valid for the year and month, or 0
		 * if specifying a year by itself or a year and month where the day is not
		 * significant.
		 */
		day: FormControl<number | null | undefined>,

		/**
		 * Month of year. Must be from 1 to 12, or 0 if specifying a year without a
		 * month and day.
		 */
		month: FormControl<number | null | undefined>,

		/**
		 * Year of date. Must be from 1 to 9999, or 0 if specifying a date without
		 * a year.
		 */
		year: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeDateFormGroup() {
		return new FormGroup<GoogleTypeDateFormProperties>({
			day: new FormControl<number | null | undefined>(undefined),
			month: new FormControl<number | null | undefined>(undefined),
			year: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2ValueDayOfWeekValue { DAY_OF_WEEK_UNSPECIFIED = 0, MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3, THURSDAY = 4, FRIDAY = 5, SATURDAY = 6, SUNDAY = 7 }


	/**
	 * Represents a time of day. The date and time zone are either not significant
	 * or are specified elsewhere. An API may choose to allow leap seconds. Related
	 * types are google.type.Date and `google.protobuf.Timestamp`.
	 */
	export interface GoogleTypeTimeOfDay {

		/**
		 * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
		 * to allow the value "24:00:00" for scenarios like business closing time.
		 */
		hours?: number | null;

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes?: number | null;

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos?: number | null;

		/**
		 * Seconds of minutes of the time. Must normally be from 0 to 59. An API may
		 * allow the value 60 if it allows leap-seconds.
		 */
		seconds?: number | null;
	}

	/**
	 * Represents a time of day. The date and time zone are either not significant
	 * or are specified elsewhere. An API may choose to allow leap seconds. Related
	 * types are google.type.Date and `google.protobuf.Timestamp`.
	 */
	export interface GoogleTypeTimeOfDayFormProperties {

		/**
		 * Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
		 * to allow the value "24:00:00" for scenarios like business closing time.
		 */
		hours: FormControl<number | null | undefined>,

		/** Minutes of hour of day. Must be from 0 to 59. */
		minutes: FormControl<number | null | undefined>,

		/** Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999. */
		nanos: FormControl<number | null | undefined>,

		/**
		 * Seconds of minutes of the time. Must normally be from 0 to 59. An API may
		 * allow the value 60 if it allows leap-seconds.
		 */
		seconds: FormControl<number | null | undefined>,
	}
	export function CreateGoogleTypeTimeOfDayFormGroup() {
		return new FormGroup<GoogleTypeTimeOfDayFormProperties>({
			hours: new FormControl<number | null | undefined>(undefined),
			minutes: new FormControl<number | null | undefined>(undefined),
			nanos: new FormControl<number | null | undefined>(undefined),
			seconds: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * Result of the δ-presence computation. Note that these results are an
	 * estimation, not exact values.
	 */
	export interface GooglePrivacyDlpV2DeltaPresenceEstimationResult {

		/**
		 * The intervals [min_probability, max_probability) do not overlap. If a
		 * value doesn't correspond to any such interval, the associated frequency
		 * is zero. For example, the following records:
		 * {min_probability: 0, max_probability: 0.1, frequency: 17}
		 * {min_probability: 0.2, max_probability: 0.3, frequency: 42}
		 * {min_probability: 0.3, max_probability: 0.4, frequency: 99}
		 * mean that there are no record with an estimated probability in [0.1, 0.2)
		 * nor larger or equal to 0.4.
		 */
		deltaPresenceEstimationHistogram?: Array<GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket>;
	}

	/**
	 * Result of the δ-presence computation. Note that these results are an
	 * estimation, not exact values.
	 */
	export interface GooglePrivacyDlpV2DeltaPresenceEstimationResultFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DeltaPresenceEstimationResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeltaPresenceEstimationResultFormProperties>({
		});

	}


	/**
	 * A DeltaPresenceEstimationHistogramBucket message with the following
	 * values:
	 *   min_probability: 0.1
	 *   max_probability: 0.2
	 *   frequency: 42
	 * means that there are 42 records for which δ is in [0.1, 0.2). An
	 * important particular case is when min_probability = max_probability = 1:
	 * then, every individual who shares this quasi-identifier combination is in
	 * the dataset.
	 */
	export interface GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucket {

		/** Number of records within these probability bounds. */
		bucketSize?: string | null;

		/** Total number of distinct quasi-identifier tuple values in this bucket. */
		bucketValueCount?: string | null;

		/**
		 * Sample of quasi-identifier tuple values in this bucket. The total
		 * number of classes returned per bucket is capped at 20.
		 */
		bucketValues?: Array<GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues>;

		/** Always greater than or equal to min_probability. */
		maxProbability?: number | null;

		/** Between 0 and 1. */
		minProbability?: number | null;
	}

	/**
	 * A DeltaPresenceEstimationHistogramBucket message with the following
	 * values:
	 *   min_probability: 0.1
	 *   max_probability: 0.2
	 *   frequency: 42
	 * means that there are 42 records for which δ is in [0.1, 0.2). An
	 * important particular case is when min_probability = max_probability = 1:
	 * then, every individual who shares this quasi-identifier combination is in
	 * the dataset.
	 */
	export interface GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucketFormProperties {

		/** Number of records within these probability bounds. */
		bucketSize: FormControl<string | null | undefined>,

		/** Total number of distinct quasi-identifier tuple values in this bucket. */
		bucketValueCount: FormControl<string | null | undefined>,

		/** Always greater than or equal to min_probability. */
		maxProbability: FormControl<number | null | undefined>,

		/** Between 0 and 1. */
		minProbability: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucketFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeltaPresenceEstimationHistogramBucketFormProperties>({
			bucketSize: new FormControl<string | null | undefined>(undefined),
			bucketValueCount: new FormControl<string | null | undefined>(undefined),
			maxProbability: new FormControl<number | null | undefined>(undefined),
			minProbability: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** A tuple of values for the quasi-identifier columns. */
	export interface GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValues {

		/**
		 * The estimated probability that a given individual sharing these
		 * quasi-identifier values is in the dataset. This value, typically called
		 * δ, is the ratio between the number of records in the dataset with these
		 * quasi-identifier values, and the total number of individuals (inside
		 * *and* outside the dataset) with these quasi-identifier values.
		 * For example, if there are 15 individuals in the dataset who share the
		 * same quasi-identifier values, and an estimated 100 people in the entire
		 * population with these values, then δ is 0.15.
		 */
		estimatedProbability?: number | null;

		/** The quasi-identifier values. */
		quasiIdsValues?: Array<GooglePrivacyDlpV2Value>;
	}

	/** A tuple of values for the quasi-identifier columns. */
	export interface GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValuesFormProperties {

		/**
		 * The estimated probability that a given individual sharing these
		 * quasi-identifier values is in the dataset. This value, typically called
		 * δ, is the ratio between the number of records in the dataset with these
		 * quasi-identifier values, and the total number of individuals (inside
		 * *and* outside the dataset) with these quasi-identifier values.
		 * For example, if there are 15 individuals in the dataset who share the
		 * same quasi-identifier values, and an estimated 100 people in the entire
		 * population with these values, then δ is 0.15.
		 */
		estimatedProbability: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValuesFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeltaPresenceEstimationQuasiIdValuesFormProperties>({
			estimatedProbability: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Result of the k-anonymity computation. */
	export interface GooglePrivacyDlpV2KAnonymityResult {

		/** Histogram of k-anonymity equivalence classes. */
		equivalenceClassHistogramBuckets?: Array<GooglePrivacyDlpV2KAnonymityHistogramBucket>;
	}

	/** Result of the k-anonymity computation. */
	export interface GooglePrivacyDlpV2KAnonymityResultFormProperties {
	}
	export function CreateGooglePrivacyDlpV2KAnonymityResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KAnonymityResultFormProperties>({
		});

	}


	/** Histogram of k-anonymity equivalence classes. */
	export interface GooglePrivacyDlpV2KAnonymityHistogramBucket {

		/** Total number of equivalence classes in this bucket. */
		bucketSize?: string | null;

		/** Total number of distinct equivalence classes in this bucket. */
		bucketValueCount?: string | null;

		/**
		 * Sample of equivalence classes in this bucket. The total number of
		 * classes returned per bucket is capped at 20.
		 */
		bucketValues?: Array<GooglePrivacyDlpV2KAnonymityEquivalenceClass>;

		/** Lower bound on the size of the equivalence classes in this bucket. */
		equivalenceClassSizeLowerBound?: string | null;

		/** Upper bound on the size of the equivalence classes in this bucket. */
		equivalenceClassSizeUpperBound?: string | null;
	}

	/** Histogram of k-anonymity equivalence classes. */
	export interface GooglePrivacyDlpV2KAnonymityHistogramBucketFormProperties {

		/** Total number of equivalence classes in this bucket. */
		bucketSize: FormControl<string | null | undefined>,

		/** Total number of distinct equivalence classes in this bucket. */
		bucketValueCount: FormControl<string | null | undefined>,

		/** Lower bound on the size of the equivalence classes in this bucket. */
		equivalenceClassSizeLowerBound: FormControl<string | null | undefined>,

		/** Upper bound on the size of the equivalence classes in this bucket. */
		equivalenceClassSizeUpperBound: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2KAnonymityHistogramBucketFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KAnonymityHistogramBucketFormProperties>({
			bucketSize: new FormControl<string | null | undefined>(undefined),
			bucketValueCount: new FormControl<string | null | undefined>(undefined),
			equivalenceClassSizeLowerBound: new FormControl<string | null | undefined>(undefined),
			equivalenceClassSizeUpperBound: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The set of columns' values that share the same ldiversity value */
	export interface GooglePrivacyDlpV2KAnonymityEquivalenceClass {

		/**
		 * Size of the equivalence class, for example number of rows with the
		 * above set of values.
		 */
		equivalenceClassSize?: string | null;

		/**
		 * Set of values defining the equivalence class. One value per
		 * quasi-identifier column in the original KAnonymity metric message.
		 * The order is always the same as the original request.
		 */
		quasiIdsValues?: Array<GooglePrivacyDlpV2Value>;
	}

	/** The set of columns' values that share the same ldiversity value */
	export interface GooglePrivacyDlpV2KAnonymityEquivalenceClassFormProperties {

		/**
		 * Size of the equivalence class, for example number of rows with the
		 * above set of values.
		 */
		equivalenceClassSize: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2KAnonymityEquivalenceClassFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KAnonymityEquivalenceClassFormProperties>({
			equivalenceClassSize: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Result of the reidentifiability analysis. Note that these results are an
	 * estimation, not exact values.
	 */
	export interface GooglePrivacyDlpV2KMapEstimationResult {

		/**
		 * The intervals [min_anonymity, max_anonymity] do not overlap. If a value
		 * doesn't correspond to any such interval, the associated frequency is
		 * zero. For example, the following records:
		 * {min_anonymity: 1, max_anonymity: 1, frequency: 17}
		 * {min_anonymity: 2, max_anonymity: 3, frequency: 42}
		 * {min_anonymity: 5, max_anonymity: 10, frequency: 99}
		 * mean that there are no record with an estimated anonymity of 4, 5, or
		 * larger than 10.
		 */
		kMapEstimationHistogram?: Array<GooglePrivacyDlpV2KMapEstimationHistogramBucket>;
	}

	/**
	 * Result of the reidentifiability analysis. Note that these results are an
	 * estimation, not exact values.
	 */
	export interface GooglePrivacyDlpV2KMapEstimationResultFormProperties {
	}
	export function CreateGooglePrivacyDlpV2KMapEstimationResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KMapEstimationResultFormProperties>({
		});

	}


	/**
	 * A KMapEstimationHistogramBucket message with the following values:
	 *   min_anonymity: 3
	 *   max_anonymity: 5
	 *   frequency: 42
	 * means that there are 42 records whose quasi-identifier values correspond
	 * to 3, 4 or 5 people in the overlying population. An important particular
	 * case is when min_anonymity = max_anonymity = 1: the frequency field then
	 * corresponds to the number of uniquely identifiable records.
	 */
	export interface GooglePrivacyDlpV2KMapEstimationHistogramBucket {

		/** Number of records within these anonymity bounds. */
		bucketSize?: string | null;

		/** Total number of distinct quasi-identifier tuple values in this bucket. */
		bucketValueCount?: string | null;

		/**
		 * Sample of quasi-identifier tuple values in this bucket. The total
		 * number of classes returned per bucket is capped at 20.
		 */
		bucketValues?: Array<GooglePrivacyDlpV2KMapEstimationQuasiIdValues>;

		/** Always greater than or equal to min_anonymity. */
		maxAnonymity?: string | null;

		/** Always positive. */
		minAnonymity?: string | null;
	}

	/**
	 * A KMapEstimationHistogramBucket message with the following values:
	 *   min_anonymity: 3
	 *   max_anonymity: 5
	 *   frequency: 42
	 * means that there are 42 records whose quasi-identifier values correspond
	 * to 3, 4 or 5 people in the overlying population. An important particular
	 * case is when min_anonymity = max_anonymity = 1: the frequency field then
	 * corresponds to the number of uniquely identifiable records.
	 */
	export interface GooglePrivacyDlpV2KMapEstimationHistogramBucketFormProperties {

		/** Number of records within these anonymity bounds. */
		bucketSize: FormControl<string | null | undefined>,

		/** Total number of distinct quasi-identifier tuple values in this bucket. */
		bucketValueCount: FormControl<string | null | undefined>,

		/** Always greater than or equal to min_anonymity. */
		maxAnonymity: FormControl<string | null | undefined>,

		/** Always positive. */
		minAnonymity: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2KMapEstimationHistogramBucketFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KMapEstimationHistogramBucketFormProperties>({
			bucketSize: new FormControl<string | null | undefined>(undefined),
			bucketValueCount: new FormControl<string | null | undefined>(undefined),
			maxAnonymity: new FormControl<string | null | undefined>(undefined),
			minAnonymity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A tuple of values for the quasi-identifier columns. */
	export interface GooglePrivacyDlpV2KMapEstimationQuasiIdValues {

		/** The estimated anonymity for these quasi-identifier values. */
		estimatedAnonymity?: string | null;

		/** The quasi-identifier values. */
		quasiIdsValues?: Array<GooglePrivacyDlpV2Value>;
	}

	/** A tuple of values for the quasi-identifier columns. */
	export interface GooglePrivacyDlpV2KMapEstimationQuasiIdValuesFormProperties {

		/** The estimated anonymity for these quasi-identifier values. */
		estimatedAnonymity: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2KMapEstimationQuasiIdValuesFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KMapEstimationQuasiIdValuesFormProperties>({
			estimatedAnonymity: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the l-diversity computation. */
	export interface GooglePrivacyDlpV2LDiversityResult {

		/** Histogram of l-diversity equivalence class sensitive value frequencies. */
		sensitiveValueFrequencyHistogramBuckets?: Array<GooglePrivacyDlpV2LDiversityHistogramBucket>;
	}

	/** Result of the l-diversity computation. */
	export interface GooglePrivacyDlpV2LDiversityResultFormProperties {
	}
	export function CreateGooglePrivacyDlpV2LDiversityResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LDiversityResultFormProperties>({
		});

	}


	/** Histogram of l-diversity equivalence class sensitive value frequencies. */
	export interface GooglePrivacyDlpV2LDiversityHistogramBucket {

		/** Total number of equivalence classes in this bucket. */
		bucketSize?: string | null;

		/** Total number of distinct equivalence classes in this bucket. */
		bucketValueCount?: string | null;

		/**
		 * Sample of equivalence classes in this bucket. The total number of
		 * classes returned per bucket is capped at 20.
		 */
		bucketValues?: Array<GooglePrivacyDlpV2LDiversityEquivalenceClass>;

		/**
		 * Lower bound on the sensitive value frequencies of the equivalence
		 * classes in this bucket.
		 */
		sensitiveValueFrequencyLowerBound?: string | null;

		/**
		 * Upper bound on the sensitive value frequencies of the equivalence
		 * classes in this bucket.
		 */
		sensitiveValueFrequencyUpperBound?: string | null;
	}

	/** Histogram of l-diversity equivalence class sensitive value frequencies. */
	export interface GooglePrivacyDlpV2LDiversityHistogramBucketFormProperties {

		/** Total number of equivalence classes in this bucket. */
		bucketSize: FormControl<string | null | undefined>,

		/** Total number of distinct equivalence classes in this bucket. */
		bucketValueCount: FormControl<string | null | undefined>,

		/**
		 * Lower bound on the sensitive value frequencies of the equivalence
		 * classes in this bucket.
		 */
		sensitiveValueFrequencyLowerBound: FormControl<string | null | undefined>,

		/**
		 * Upper bound on the sensitive value frequencies of the equivalence
		 * classes in this bucket.
		 */
		sensitiveValueFrequencyUpperBound: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2LDiversityHistogramBucketFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LDiversityHistogramBucketFormProperties>({
			bucketSize: new FormControl<string | null | undefined>(undefined),
			bucketValueCount: new FormControl<string | null | undefined>(undefined),
			sensitiveValueFrequencyLowerBound: new FormControl<string | null | undefined>(undefined),
			sensitiveValueFrequencyUpperBound: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The set of columns' values that share the same ldiversity value. */
	export interface GooglePrivacyDlpV2LDiversityEquivalenceClass {

		/** Size of the k-anonymity equivalence class. */
		equivalenceClassSize?: string | null;

		/** Number of distinct sensitive values in this equivalence class. */
		numDistinctSensitiveValues?: string | null;

		/**
		 * Quasi-identifier values defining the k-anonymity equivalence
		 * class. The order is always the same as the original request.
		 */
		quasiIdsValues?: Array<GooglePrivacyDlpV2Value>;

		/** Estimated frequencies of top sensitive values. */
		topSensitiveValues?: Array<GooglePrivacyDlpV2ValueFrequency>;
	}

	/** The set of columns' values that share the same ldiversity value. */
	export interface GooglePrivacyDlpV2LDiversityEquivalenceClassFormProperties {

		/** Size of the k-anonymity equivalence class. */
		equivalenceClassSize: FormControl<string | null | undefined>,

		/** Number of distinct sensitive values in this equivalence class. */
		numDistinctSensitiveValues: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2LDiversityEquivalenceClassFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LDiversityEquivalenceClassFormProperties>({
			equivalenceClassSize: new FormControl<string | null | undefined>(undefined),
			numDistinctSensitiveValues: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Result of the numerical stats computation. */
	export interface GooglePrivacyDlpV2NumericalStatsResult {

		/**
		 * Set of primitive values supported by the system.
		 * Note that for the purposes of inspection or transformation, the number
		 * of bytes considered to comprise a 'Value' is based on its representation
		 * as a UTF-8 encoded string. For example, if 'integer_value' is set to
		 * 123456789, the number of bytes would be counted as 9, even though an
		 * int64 only holds up to 8 bytes of data.
		 */
		maxValue?: GooglePrivacyDlpV2Value;

		/**
		 * Set of primitive values supported by the system.
		 * Note that for the purposes of inspection or transformation, the number
		 * of bytes considered to comprise a 'Value' is based on its representation
		 * as a UTF-8 encoded string. For example, if 'integer_value' is set to
		 * 123456789, the number of bytes would be counted as 9, even though an
		 * int64 only holds up to 8 bytes of data.
		 */
		minValue?: GooglePrivacyDlpV2Value;

		/**
		 * List of 99 values that partition the set of field values into 100 equal
		 * sized buckets.
		 */
		quantileValues?: Array<GooglePrivacyDlpV2Value>;
	}

	/** Result of the numerical stats computation. */
	export interface GooglePrivacyDlpV2NumericalStatsResultFormProperties {
	}
	export function CreateGooglePrivacyDlpV2NumericalStatsResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2NumericalStatsResultFormProperties>({
		});

	}


	/** Privacy metric to compute for reidentification risk analysis. */
	export interface GooglePrivacyDlpV2PrivacyMetric {

		/**
		 * Compute numerical stats over an individual column, including
		 * number of distinct values and value count distribution.
		 */
		categoricalStatsConfig?: GooglePrivacyDlpV2CategoricalStatsConfig;

		/**
		 * δ-presence metric, used to estimate how likely it is for an attacker to
		 * figure out that one given individual appears in a de-identified dataset.
		 * Similarly to the k-map metric, we cannot compute δ-presence exactly without
		 * knowing the attack dataset, so we use a statistical model instead.
		 */
		deltaPresenceEstimationConfig?: GooglePrivacyDlpV2DeltaPresenceEstimationConfig;

		/** k-anonymity metric, used for analysis of reidentification risk. */
		kAnonymityConfig?: GooglePrivacyDlpV2KAnonymityConfig;

		/**
		 * Reidentifiability metric. This corresponds to a risk model similar to what
		 * is called "journalist risk" in the literature, except the attack dataset is
		 * statistically modeled instead of being perfectly known. This can be done
		 * using publicly available data (like the US Census), or using a custom
		 * statistical model (indicated as one or several BigQuery tables), or by
		 * extrapolating from the distribution of values in the input dataset.
		 */
		kMapEstimationConfig?: GooglePrivacyDlpV2KMapEstimationConfig;

		/** l-diversity metric, used for analysis of reidentification risk. */
		lDiversityConfig?: GooglePrivacyDlpV2LDiversityConfig;

		/**
		 * Compute numerical stats over an individual column, including
		 * min, max, and quantiles.
		 */
		numericalStatsConfig?: GooglePrivacyDlpV2NumericalStatsConfig;
	}

	/** Privacy metric to compute for reidentification risk analysis. */
	export interface GooglePrivacyDlpV2PrivacyMetricFormProperties {
	}
	export function CreateGooglePrivacyDlpV2PrivacyMetricFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PrivacyMetricFormProperties>({
		});

	}


	/**
	 * Compute numerical stats over an individual column, including
	 * number of distinct values and value count distribution.
	 */
	export interface GooglePrivacyDlpV2CategoricalStatsConfig {

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;
	}

	/**
	 * Compute numerical stats over an individual column, including
	 * number of distinct values and value count distribution.
	 */
	export interface GooglePrivacyDlpV2CategoricalStatsConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2CategoricalStatsConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CategoricalStatsConfigFormProperties>({
		});

	}


	/** General identifier of a data field in a storage service. */
	export interface GooglePrivacyDlpV2FieldId {

		/** Name describing the field. */
		name?: string | null;
	}

	/** General identifier of a data field in a storage service. */
	export interface GooglePrivacyDlpV2FieldIdFormProperties {

		/** Name describing the field. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2FieldIdFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2FieldIdFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * δ-presence metric, used to estimate how likely it is for an attacker to
	 * figure out that one given individual appears in a de-identified dataset.
	 * Similarly to the k-map metric, we cannot compute δ-presence exactly without
	 * knowing the attack dataset, so we use a statistical model instead.
	 */
	export interface GooglePrivacyDlpV2DeltaPresenceEstimationConfig {

		/**
		 * Several auxiliary tables can be used in the analysis. Each custom_tag
		 * used to tag a quasi-identifiers field must appear in exactly one
		 * field of one auxiliary table.
		 */
		auxiliaryTables?: Array<GooglePrivacyDlpV2StatisticalTable>;

		/**
		 * Required. Fields considered to be quasi-identifiers. No two fields can have the
		 * same tag.
		 */
		quasiIds?: Array<GooglePrivacyDlpV2QuasiId>;

		/**
		 * ISO 3166-1 alpha-2 region code to use in the statistical modeling.
		 * Set if no column is tagged with a region-specific InfoType (like
		 * US_ZIP_5) or a region code.
		 */
		regionCode?: string | null;
	}

	/**
	 * δ-presence metric, used to estimate how likely it is for an attacker to
	 * figure out that one given individual appears in a de-identified dataset.
	 * Similarly to the k-map metric, we cannot compute δ-presence exactly without
	 * knowing the attack dataset, so we use a statistical model instead.
	 */
	export interface GooglePrivacyDlpV2DeltaPresenceEstimationConfigFormProperties {

		/**
		 * ISO 3166-1 alpha-2 region code to use in the statistical modeling.
		 * Set if no column is tagged with a region-specific InfoType (like
		 * US_ZIP_5) or a region code.
		 */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DeltaPresenceEstimationConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeltaPresenceEstimationConfigFormProperties>({
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An auxiliary table containing statistical information on the relative
	 * frequency of different quasi-identifiers values. It has one or several
	 * quasi-identifiers columns, and one column that indicates the relative
	 * frequency of each quasi-identifier tuple.
	 * If a tuple is present in the data but not in the auxiliary table, the
	 * corresponding relative frequency is assumed to be zero (and thus, the
	 * tuple is highly reidentifiable).
	 */
	export interface GooglePrivacyDlpV2StatisticalTable {

		/** Required. Quasi-identifier columns. */
		quasiIds?: Array<GooglePrivacyDlpV2QuasiIdentifierField>;

		/** General identifier of a data field in a storage service. */
		relativeFrequency?: GooglePrivacyDlpV2FieldId;

		/**
		 * Message defining the location of a BigQuery table. A table is uniquely
		 * identified  by its project_id, dataset_id, and table_name. Within a query
		 * a table is often referenced with a string in the format of:
		 * `<project_id>:<dataset_id>.<table_id>` or
		 * `<project_id>.<dataset_id>.<table_id>`.
		 */
		table?: GooglePrivacyDlpV2BigQueryTable;
	}

	/**
	 * An auxiliary table containing statistical information on the relative
	 * frequency of different quasi-identifiers values. It has one or several
	 * quasi-identifiers columns, and one column that indicates the relative
	 * frequency of each quasi-identifier tuple.
	 * If a tuple is present in the data but not in the auxiliary table, the
	 * corresponding relative frequency is assumed to be zero (and thus, the
	 * tuple is highly reidentifiable).
	 */
	export interface GooglePrivacyDlpV2StatisticalTableFormProperties {
	}
	export function CreateGooglePrivacyDlpV2StatisticalTableFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2StatisticalTableFormProperties>({
		});

	}


	/**
	 * A quasi-identifier column has a custom_tag, used to know which column
	 * in the data corresponds to which column in the statistical model.
	 */
	export interface GooglePrivacyDlpV2QuasiIdentifierField {

		/**
		 * A column can be tagged with a custom tag. In this case, the user must
		 * indicate an auxiliary table that contains statistical information on
		 * the possible values of this column (below).
		 */
		customTag?: string | null;

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;
	}

	/**
	 * A quasi-identifier column has a custom_tag, used to know which column
	 * in the data corresponds to which column in the statistical model.
	 */
	export interface GooglePrivacyDlpV2QuasiIdentifierFieldFormProperties {

		/**
		 * A column can be tagged with a custom tag. In this case, the user must
		 * indicate an auxiliary table that contains statistical information on
		 * the possible values of this column (below).
		 */
		customTag: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2QuasiIdentifierFieldFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2QuasiIdentifierFieldFormProperties>({
			customTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A column with a semantic tag attached. */
	export interface GooglePrivacyDlpV2QuasiId {

		/**
		 * A column can be tagged with a custom tag. In this case, the user must
		 * indicate an auxiliary table that contains statistical information on
		 * the possible values of this column (below).
		 */
		customTag?: string | null;

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;

		/**
		 * A generic empty message that you can re-use to avoid defining duplicated
		 * empty messages in your APIs. A typical example is to use it as the request
		 * or the response type of an API method. For instance:
		 * service Foo {
		 * rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
		 * }
		 * The JSON representation for `Empty` is empty JSON object `{}`.
		 */
		inferred?: GoogleProtobufEmpty;

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;
	}

	/** A column with a semantic tag attached. */
	export interface GooglePrivacyDlpV2QuasiIdFormProperties {

		/**
		 * A column can be tagged with a custom tag. In this case, the user must
		 * indicate an auxiliary table that contains statistical information on
		 * the possible values of this column (below).
		 */
		customTag: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2QuasiIdFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2QuasiIdFormProperties>({
			customTag: new FormControl<string | null | undefined>(undefined),
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
	export interface GoogleProtobufEmpty {
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
	export interface GoogleProtobufEmptyFormProperties {
	}
	export function CreateGoogleProtobufEmptyFormGroup() {
		return new FormGroup<GoogleProtobufEmptyFormProperties>({
		});

	}


	/** Type of information detected by the API. */
	export interface GooglePrivacyDlpV2InfoType {

		/**
		 * Name of the information type. Either a name of your choosing when
		 * creating a CustomInfoType, or one of the names listed
		 * at https://cloud.google.com/dlp/docs/infotypes-reference when specifying
		 * a built-in type. InfoType names should conform to the pattern
		 * `[a-zA-Z0-9_]{1,64}`.
		 */
		name?: string | null;
	}

	/** Type of information detected by the API. */
	export interface GooglePrivacyDlpV2InfoTypeFormProperties {

		/**
		 * Name of the information type. Either a name of your choosing when
		 * creating a CustomInfoType, or one of the names listed
		 * at https://cloud.google.com/dlp/docs/infotypes-reference when specifying
		 * a built-in type. InfoType names should conform to the pattern
		 * `[a-zA-Z0-9_]{1,64}`.
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InfoTypeFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InfoTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** k-anonymity metric, used for analysis of reidentification risk. */
	export interface GooglePrivacyDlpV2KAnonymityConfig {

		/**
		 * An entity in a dataset is a field or set of fields that correspond to a
		 * single person. For example, in medical records the `EntityId` might be a
		 * patient identifier, or for financial records it might be an account
		 * identifier. This message is used when generalizations or analysis must take
		 * into account that multiple rows correspond to the same entity.
		 */
		entityId?: GooglePrivacyDlpV2EntityId;

		/**
		 * Set of fields to compute k-anonymity over. When multiple fields are
		 * specified, they are considered a single composite key. Structs and
		 * repeated data types are not supported; however, nested fields are
		 * supported so long as they are not structs themselves or nested within
		 * a repeated field.
		 */
		quasiIds?: Array<GooglePrivacyDlpV2FieldId>;
	}

	/** k-anonymity metric, used for analysis of reidentification risk. */
	export interface GooglePrivacyDlpV2KAnonymityConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2KAnonymityConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KAnonymityConfigFormProperties>({
		});

	}


	/**
	 * An entity in a dataset is a field or set of fields that correspond to a
	 * single person. For example, in medical records the `EntityId` might be a
	 * patient identifier, or for financial records it might be an account
	 * identifier. This message is used when generalizations or analysis must take
	 * into account that multiple rows correspond to the same entity.
	 */
	export interface GooglePrivacyDlpV2EntityId {

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;
	}

	/**
	 * An entity in a dataset is a field or set of fields that correspond to a
	 * single person. For example, in medical records the `EntityId` might be a
	 * patient identifier, or for financial records it might be an account
	 * identifier. This message is used when generalizations or analysis must take
	 * into account that multiple rows correspond to the same entity.
	 */
	export interface GooglePrivacyDlpV2EntityIdFormProperties {
	}
	export function CreateGooglePrivacyDlpV2EntityIdFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2EntityIdFormProperties>({
		});

	}


	/**
	 * Reidentifiability metric. This corresponds to a risk model similar to what
	 * is called "journalist risk" in the literature, except the attack dataset is
	 * statistically modeled instead of being perfectly known. This can be done
	 * using publicly available data (like the US Census), or using a custom
	 * statistical model (indicated as one or several BigQuery tables), or by
	 * extrapolating from the distribution of values in the input dataset.
	 */
	export interface GooglePrivacyDlpV2KMapEstimationConfig {

		/**
		 * Several auxiliary tables can be used in the analysis. Each custom_tag
		 * used to tag a quasi-identifiers column must appear in exactly one column
		 * of one auxiliary table.
		 */
		auxiliaryTables?: Array<GooglePrivacyDlpV2AuxiliaryTable>;

		/**
		 * Required. Fields considered to be quasi-identifiers. No two columns can have the
		 * same tag.
		 */
		quasiIds?: Array<GooglePrivacyDlpV2TaggedField>;

		/**
		 * ISO 3166-1 alpha-2 region code to use in the statistical modeling.
		 * Set if no column is tagged with a region-specific InfoType (like
		 * US_ZIP_5) or a region code.
		 */
		regionCode?: string | null;
	}

	/**
	 * Reidentifiability metric. This corresponds to a risk model similar to what
	 * is called "journalist risk" in the literature, except the attack dataset is
	 * statistically modeled instead of being perfectly known. This can be done
	 * using publicly available data (like the US Census), or using a custom
	 * statistical model (indicated as one or several BigQuery tables), or by
	 * extrapolating from the distribution of values in the input dataset.
	 */
	export interface GooglePrivacyDlpV2KMapEstimationConfigFormProperties {

		/**
		 * ISO 3166-1 alpha-2 region code to use in the statistical modeling.
		 * Set if no column is tagged with a region-specific InfoType (like
		 * US_ZIP_5) or a region code.
		 */
		regionCode: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2KMapEstimationConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KMapEstimationConfigFormProperties>({
			regionCode: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * An auxiliary table contains statistical information on the relative
	 * frequency of different quasi-identifiers values. It has one or several
	 * quasi-identifiers columns, and one column that indicates the relative
	 * frequency of each quasi-identifier tuple.
	 * If a tuple is present in the data but not in the auxiliary table, the
	 * corresponding relative frequency is assumed to be zero (and thus, the
	 * tuple is highly reidentifiable).
	 */
	export interface GooglePrivacyDlpV2AuxiliaryTable {

		/** Required. Quasi-identifier columns. */
		quasiIds?: Array<GooglePrivacyDlpV2QuasiIdField>;

		/** General identifier of a data field in a storage service. */
		relativeFrequency?: GooglePrivacyDlpV2FieldId;

		/**
		 * Message defining the location of a BigQuery table. A table is uniquely
		 * identified  by its project_id, dataset_id, and table_name. Within a query
		 * a table is often referenced with a string in the format of:
		 * `<project_id>:<dataset_id>.<table_id>` or
		 * `<project_id>.<dataset_id>.<table_id>`.
		 */
		table?: GooglePrivacyDlpV2BigQueryTable;
	}

	/**
	 * An auxiliary table contains statistical information on the relative
	 * frequency of different quasi-identifiers values. It has one or several
	 * quasi-identifiers columns, and one column that indicates the relative
	 * frequency of each quasi-identifier tuple.
	 * If a tuple is present in the data but not in the auxiliary table, the
	 * corresponding relative frequency is assumed to be zero (and thus, the
	 * tuple is highly reidentifiable).
	 */
	export interface GooglePrivacyDlpV2AuxiliaryTableFormProperties {
	}
	export function CreateGooglePrivacyDlpV2AuxiliaryTableFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2AuxiliaryTableFormProperties>({
		});

	}


	/**
	 * A quasi-identifier column has a custom_tag, used to know which column
	 * in the data corresponds to which column in the statistical model.
	 */
	export interface GooglePrivacyDlpV2QuasiIdField {

		/** A auxiliary field. */
		customTag?: string | null;

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;
	}

	/**
	 * A quasi-identifier column has a custom_tag, used to know which column
	 * in the data corresponds to which column in the statistical model.
	 */
	export interface GooglePrivacyDlpV2QuasiIdFieldFormProperties {

		/** A auxiliary field. */
		customTag: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2QuasiIdFieldFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2QuasiIdFieldFormProperties>({
			customTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** A column with a semantic tag attached. */
	export interface GooglePrivacyDlpV2TaggedField {

		/**
		 * A column can be tagged with a custom tag. In this case, the user must
		 * indicate an auxiliary table that contains statistical information on
		 * the possible values of this column (below).
		 */
		customTag?: string | null;

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;

		/**
		 * A generic empty message that you can re-use to avoid defining duplicated
		 * empty messages in your APIs. A typical example is to use it as the request
		 * or the response type of an API method. For instance:
		 * service Foo {
		 * rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);
		 * }
		 * The JSON representation for `Empty` is empty JSON object `{}`.
		 */
		inferred?: GoogleProtobufEmpty;

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;
	}

	/** A column with a semantic tag attached. */
	export interface GooglePrivacyDlpV2TaggedFieldFormProperties {

		/**
		 * A column can be tagged with a custom tag. In this case, the user must
		 * indicate an auxiliary table that contains statistical information on
		 * the possible values of this column (below).
		 */
		customTag: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TaggedFieldFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TaggedFieldFormProperties>({
			customTag: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** l-diversity metric, used for analysis of reidentification risk. */
	export interface GooglePrivacyDlpV2LDiversityConfig {

		/**
		 * Set of quasi-identifiers indicating how equivalence classes are
		 * defined for the l-diversity computation. When multiple fields are
		 * specified, they are considered a single composite key.
		 */
		quasiIds?: Array<GooglePrivacyDlpV2FieldId>;

		/** General identifier of a data field in a storage service. */
		sensitiveAttribute?: GooglePrivacyDlpV2FieldId;
	}

	/** l-diversity metric, used for analysis of reidentification risk. */
	export interface GooglePrivacyDlpV2LDiversityConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2LDiversityConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LDiversityConfigFormProperties>({
		});

	}


	/**
	 * Compute numerical stats over an individual column, including
	 * min, max, and quantiles.
	 */
	export interface GooglePrivacyDlpV2NumericalStatsConfig {

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;
	}

	/**
	 * Compute numerical stats over an individual column, including
	 * min, max, and quantiles.
	 */
	export interface GooglePrivacyDlpV2NumericalStatsConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2NumericalStatsConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2NumericalStatsConfigFormProperties>({
		});

	}


	/** Message defining a field of a BigQuery table. */
	export interface GooglePrivacyDlpV2BigQueryField {

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;

		/**
		 * Message defining the location of a BigQuery table. A table is uniquely
		 * identified  by its project_id, dataset_id, and table_name. Within a query
		 * a table is often referenced with a string in the format of:
		 * `<project_id>:<dataset_id>.<table_id>` or
		 * `<project_id>.<dataset_id>.<table_id>`.
		 */
		table?: GooglePrivacyDlpV2BigQueryTable;
	}

	/** Message defining a field of a BigQuery table. */
	export interface GooglePrivacyDlpV2BigQueryFieldFormProperties {
	}
	export function CreateGooglePrivacyDlpV2BigQueryFieldFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BigQueryFieldFormProperties>({
		});

	}


	/** Row key for identifying a record in BigQuery table. */
	export interface GooglePrivacyDlpV2BigQueryKey {

		/**
		 * Row number inferred at the time the table was scanned. This value is
		 * nondeterministic, cannot be queried, and may be null for inspection
		 * jobs. To locate findings within a table, specify
		 * `inspect_job.storage_config.big_query_options.identifying_fields` in
		 * `CreateDlpJobRequest`.
		 */
		rowNumber?: string | null;

		/**
		 * Message defining the location of a BigQuery table. A table is uniquely
		 * identified  by its project_id, dataset_id, and table_name. Within a query
		 * a table is often referenced with a string in the format of:
		 * `<project_id>:<dataset_id>.<table_id>` or
		 * `<project_id>.<dataset_id>.<table_id>`.
		 */
		tableReference?: GooglePrivacyDlpV2BigQueryTable;
	}

	/** Row key for identifying a record in BigQuery table. */
	export interface GooglePrivacyDlpV2BigQueryKeyFormProperties {

		/**
		 * Row number inferred at the time the table was scanned. This value is
		 * nondeterministic, cannot be queried, and may be null for inspection
		 * jobs. To locate findings within a table, specify
		 * `inspect_job.storage_config.big_query_options.identifying_fields` in
		 * `CreateDlpJobRequest`.
		 */
		rowNumber: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2BigQueryKeyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BigQueryKeyFormProperties>({
			rowNumber: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Options defining BigQuery table and row identifiers. */
	export interface GooglePrivacyDlpV2BigQueryOptions {

		/**
		 * References to fields excluded from scanning. This allows you to skip
		 * inspection of entire columns which you know have no findings.
		 */
		excludedFields?: Array<GooglePrivacyDlpV2FieldId>;

		/**
		 * Table fields that may uniquely identify a row within the table. When
		 * `actions.saveFindings.outputConfig.table` is specified, the values of
		 * columns specified here are available in the output table under
		 * `location.content_locations.record_location.record_key.id_values`. Nested
		 * fields such as `person.birthdate.year` are allowed.
		 */
		identifyingFields?: Array<GooglePrivacyDlpV2FieldId>;

		/**
		 * Max number of rows to scan. If the table has more rows than this value, the
		 * rest of the rows are omitted. If not set, or if set to 0, all rows will be
		 * scanned. Only one of rows_limit and rows_limit_percent can be specified.
		 * Cannot be used in conjunction with TimespanConfig.
		 */
		rowsLimit?: string | null;

		/**
		 * Max percentage of rows to scan. The rest are omitted. The number of rows
		 * scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and
		 * 100 means no limit. Defaults to 0. Only one of rows_limit and
		 * rows_limit_percent can be specified. Cannot be used in conjunction with
		 * TimespanConfig.
		 */
		rowsLimitPercent?: number | null;
		sampleMethod?: GooglePrivacyDlpV2BigQueryOptionsSampleMethod | null;

		/**
		 * Message defining the location of a BigQuery table. A table is uniquely
		 * identified  by its project_id, dataset_id, and table_name. Within a query
		 * a table is often referenced with a string in the format of:
		 * `<project_id>:<dataset_id>.<table_id>` or
		 * `<project_id>.<dataset_id>.<table_id>`.
		 */
		tableReference?: GooglePrivacyDlpV2BigQueryTable;
	}

	/** Options defining BigQuery table and row identifiers. */
	export interface GooglePrivacyDlpV2BigQueryOptionsFormProperties {

		/**
		 * Max number of rows to scan. If the table has more rows than this value, the
		 * rest of the rows are omitted. If not set, or if set to 0, all rows will be
		 * scanned. Only one of rows_limit and rows_limit_percent can be specified.
		 * Cannot be used in conjunction with TimespanConfig.
		 */
		rowsLimit: FormControl<string | null | undefined>,

		/**
		 * Max percentage of rows to scan. The rest are omitted. The number of rows
		 * scanned is rounded down. Must be between 0 and 100, inclusively. Both 0 and
		 * 100 means no limit. Defaults to 0. Only one of rows_limit and
		 * rows_limit_percent can be specified. Cannot be used in conjunction with
		 * TimespanConfig.
		 */
		rowsLimitPercent: FormControl<number | null | undefined>,
		sampleMethod: FormControl<GooglePrivacyDlpV2BigQueryOptionsSampleMethod | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2BigQueryOptionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BigQueryOptionsFormProperties>({
			rowsLimit: new FormControl<string | null | undefined>(undefined),
			rowsLimitPercent: new FormControl<number | null | undefined>(undefined),
			sampleMethod: new FormControl<GooglePrivacyDlpV2BigQueryOptionsSampleMethod | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2BigQueryOptionsSampleMethod { SAMPLE_METHOD_UNSPECIFIED = 0, TOP = 1, RANDOM_START = 2 }


	/** Bounding box encompassing detected text within an image. */
	export interface GooglePrivacyDlpV2BoundingBox {

		/** Height of the bounding box in pixels. */
		height?: number | null;

		/** Left coordinate of the bounding box. (0,0) is upper left. */
		left?: number | null;

		/** Top coordinate of the bounding box. (0,0) is upper left. */
		top?: number | null;

		/** Width of the bounding box in pixels. */
		width?: number | null;
	}

	/** Bounding box encompassing detected text within an image. */
	export interface GooglePrivacyDlpV2BoundingBoxFormProperties {

		/** Height of the bounding box in pixels. */
		height: FormControl<number | null | undefined>,

		/** Left coordinate of the bounding box. (0,0) is upper left. */
		left: FormControl<number | null | undefined>,

		/** Top coordinate of the bounding box. (0,0) is upper left. */
		top: FormControl<number | null | undefined>,

		/** Width of the bounding box in pixels. */
		width: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2BoundingBoxFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BoundingBoxFormProperties>({
			height: new FormControl<number | null | undefined>(undefined),
			left: new FormControl<number | null | undefined>(undefined),
			top: new FormControl<number | null | undefined>(undefined),
			width: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Bucket is represented as a range, along with replacement values. */
	export interface GooglePrivacyDlpV2Bucket {

		/**
		 * Set of primitive values supported by the system.
		 * Note that for the purposes of inspection or transformation, the number
		 * of bytes considered to comprise a 'Value' is based on its representation
		 * as a UTF-8 encoded string. For example, if 'integer_value' is set to
		 * 123456789, the number of bytes would be counted as 9, even though an
		 * int64 only holds up to 8 bytes of data.
		 */
		max?: GooglePrivacyDlpV2Value;

		/**
		 * Set of primitive values supported by the system.
		 * Note that for the purposes of inspection or transformation, the number
		 * of bytes considered to comprise a 'Value' is based on its representation
		 * as a UTF-8 encoded string. For example, if 'integer_value' is set to
		 * 123456789, the number of bytes would be counted as 9, even though an
		 * int64 only holds up to 8 bytes of data.
		 */
		min?: GooglePrivacyDlpV2Value;

		/**
		 * Set of primitive values supported by the system.
		 * Note that for the purposes of inspection or transformation, the number
		 * of bytes considered to comprise a 'Value' is based on its representation
		 * as a UTF-8 encoded string. For example, if 'integer_value' is set to
		 * 123456789, the number of bytes would be counted as 9, even though an
		 * int64 only holds up to 8 bytes of data.
		 */
		replacementValue?: GooglePrivacyDlpV2Value;
	}

	/** Bucket is represented as a range, along with replacement values. */
	export interface GooglePrivacyDlpV2BucketFormProperties {
	}
	export function CreateGooglePrivacyDlpV2BucketFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BucketFormProperties>({
		});

	}


	/**
	 * Generalization function that buckets values based on ranges. The ranges and
	 * replacement values are dynamically provided by the user for custom behavior,
	 * such as 1-30 -> LOW 31-65 -> MEDIUM 66-100 -> HIGH
	 * This can be used on
	 * data of type: number, long, string, timestamp.
	 * If the bound `Value` type differs from the type of data being transformed, we
	 * will first attempt converting the type of the data to be transformed to match
	 * the type of the bound before comparing.
	 * See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.
	 */
	export interface GooglePrivacyDlpV2BucketingConfig {

		/** Set of buckets. Ranges must be non-overlapping. */
		buckets?: Array<GooglePrivacyDlpV2Bucket>;
	}

	/**
	 * Generalization function that buckets values based on ranges. The ranges and
	 * replacement values are dynamically provided by the user for custom behavior,
	 * such as 1-30 -> LOW 31-65 -> MEDIUM 66-100 -> HIGH
	 * This can be used on
	 * data of type: number, long, string, timestamp.
	 * If the bound `Value` type differs from the type of data being transformed, we
	 * will first attempt converting the type of the data to be transformed to match
	 * the type of the bound before comparing.
	 * See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.
	 */
	export interface GooglePrivacyDlpV2BucketingConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2BucketingConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2BucketingConfigFormProperties>({
		});

	}


	/** Container for bytes to inspect or redact. */
	export interface GooglePrivacyDlpV2ByteContentItem {

		/** Content data to inspect or redact. */
		data?: string | null;

		/** The type of data stored in the bytes string. Default will be TEXT_UTF8. */
		type?: GooglePrivacyDlpV2ByteContentItemType | null;
	}

	/** Container for bytes to inspect or redact. */
	export interface GooglePrivacyDlpV2ByteContentItemFormProperties {

		/** Content data to inspect or redact. */
		data: FormControl<string | null | undefined>,

		/** The type of data stored in the bytes string. Default will be TEXT_UTF8. */
		type: FormControl<GooglePrivacyDlpV2ByteContentItemType | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ByteContentItemFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ByteContentItemFormProperties>({
			data: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<GooglePrivacyDlpV2ByteContentItemType | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2ByteContentItemType { BYTES_TYPE_UNSPECIFIED = 0, IMAGE = 1, IMAGE_JPEG = 2, IMAGE_BMP = 3, IMAGE_PNG = 4, IMAGE_SVG = 5, TEXT_UTF8 = 6, WORD_DOCUMENT = 7, PDF = 8, AVRO = 9 }


	/** The request message for canceling a DLP job. */
	export interface GooglePrivacyDlpV2CancelDlpJobRequest {
	}

	/** The request message for canceling a DLP job. */
	export interface GooglePrivacyDlpV2CancelDlpJobRequestFormProperties {
	}
	export function CreateGooglePrivacyDlpV2CancelDlpJobRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CancelDlpJobRequestFormProperties>({
		});

	}


	/**
	 * Partially mask a string by replacing a given number of characters with a
	 * fixed character. Masking can start from the beginning or end of the string.
	 * This can be used on data of any type (numbers, longs, and so on) and when
	 * de-identifying structured data we'll attempt to preserve the original data's
	 * type. (This allows you to take a long like 123 and modify it to a string like
	 * **3.
	 */
	export interface GooglePrivacyDlpV2CharacterMaskConfig {

		/**
		 * When masking a string, items in this list will be skipped when replacing
		 * characters. For example, if the input string is `555-555-5555` and you
		 * instruct Cloud DLP to skip `-` and mask 5 characters with `*`, Cloud DLP
		 * returns `***-**5-5555`.
		 */
		charactersToIgnore?: Array<GooglePrivacyDlpV2CharsToIgnore>;

		/**
		 * Character to use to mask the sensitive values&mdash;for example, `*` for an
		 * alphabetic string such as a name, or `0` for a numeric string such as ZIP
		 * code or credit card number. This string must have a length of 1. If not
		 * supplied, this value defaults to `*` for strings, and `0` for digits.
		 */
		maskingCharacter?: string | null;

		/**
		 * Number of characters to mask. If not set, all matching chars will be
		 * masked. Skipped characters do not count towards this tally.
		 */
		numberToMask?: number | null;

		/**
		 * Mask characters in reverse order. For example, if `masking_character` is
		 * `0`, `number_to_mask` is `14`, and `reverse_order` is `false`, then the
		 * input string `1234-5678-9012-3456` is masked as `00000000000000-3456`.
		 * If `masking_character` is `*`, `number_to_mask` is `3`, and `reverse_order`
		 * is `true`, then the string `12345` is masked as `12***`.
		 */
		reverseOrder?: boolean | null;
	}

	/**
	 * Partially mask a string by replacing a given number of characters with a
	 * fixed character. Masking can start from the beginning or end of the string.
	 * This can be used on data of any type (numbers, longs, and so on) and when
	 * de-identifying structured data we'll attempt to preserve the original data's
	 * type. (This allows you to take a long like 123 and modify it to a string like
	 * **3.
	 */
	export interface GooglePrivacyDlpV2CharacterMaskConfigFormProperties {

		/**
		 * Character to use to mask the sensitive values&mdash;for example, `*` for an
		 * alphabetic string such as a name, or `0` for a numeric string such as ZIP
		 * code or credit card number. This string must have a length of 1. If not
		 * supplied, this value defaults to `*` for strings, and `0` for digits.
		 */
		maskingCharacter: FormControl<string | null | undefined>,

		/**
		 * Number of characters to mask. If not set, all matching chars will be
		 * masked. Skipped characters do not count towards this tally.
		 */
		numberToMask: FormControl<number | null | undefined>,

		/**
		 * Mask characters in reverse order. For example, if `masking_character` is
		 * `0`, `number_to_mask` is `14`, and `reverse_order` is `false`, then the
		 * input string `1234-5678-9012-3456` is masked as `00000000000000-3456`.
		 * If `masking_character` is `*`, `number_to_mask` is `3`, and `reverse_order`
		 * is `true`, then the string `12345` is masked as `12***`.
		 */
		reverseOrder: FormControl<boolean | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CharacterMaskConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CharacterMaskConfigFormProperties>({
			maskingCharacter: new FormControl<string | null | undefined>(undefined),
			numberToMask: new FormControl<number | null | undefined>(undefined),
			reverseOrder: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/**
	 * Characters to skip when doing deidentification of a value. These will be left
	 * alone and skipped.
	 */
	export interface GooglePrivacyDlpV2CharsToIgnore {

		/** Characters to not transform when masking. */
		charactersToSkip?: string | null;

		/**
		 * Common characters to not transform when masking. Useful to avoid removing
		 * punctuation.
		 */
		commonCharactersToIgnore?: GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnore | null;
	}

	/**
	 * Characters to skip when doing deidentification of a value. These will be left
	 * alone and skipped.
	 */
	export interface GooglePrivacyDlpV2CharsToIgnoreFormProperties {

		/** Characters to not transform when masking. */
		charactersToSkip: FormControl<string | null | undefined>,

		/**
		 * Common characters to not transform when masking. Useful to avoid removing
		 * punctuation.
		 */
		commonCharactersToIgnore: FormControl<GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnore | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CharsToIgnoreFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CharsToIgnoreFormProperties>({
			charactersToSkip: new FormControl<string | null | undefined>(undefined),
			commonCharactersToIgnore: new FormControl<GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnore | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2CharsToIgnoreCommonCharactersToIgnore { COMMON_CHARS_TO_IGNORE_UNSPECIFIED = 0, NUMERIC = 1, ALPHA_UPPER_CASE = 2, ALPHA_LOWER_CASE = 3, PUNCTUATION = 4, WHITESPACE = 5 }


	/** Message representing a set of files in Cloud Storage. */
	export interface GooglePrivacyDlpV2CloudStorageFileSet {

		/**
		 * The url, in the format `gs://<bucket>/<path>`. Trailing wildcard in the
		 * path is allowed.
		 */
		url?: string | null;
	}

	/** Message representing a set of files in Cloud Storage. */
	export interface GooglePrivacyDlpV2CloudStorageFileSetFormProperties {

		/**
		 * The url, in the format `gs://<bucket>/<path>`. Trailing wildcard in the
		 * path is allowed.
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CloudStorageFileSetFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CloudStorageFileSetFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Options defining a file or a set of files within a Google Cloud Storage
	 * bucket.
	 */
	export interface GooglePrivacyDlpV2CloudStorageOptions {

		/**
		 * Max number of bytes to scan from a file. If a scanned file's size is bigger
		 * than this value then the rest of the bytes are omitted. Only one
		 * of bytes_limit_per_file and bytes_limit_per_file_percent can be specified.
		 */
		bytesLimitPerFile?: string | null;

		/**
		 * Max percentage of bytes to scan from a file. The rest are omitted. The
		 * number of bytes scanned is rounded down. Must be between 0 and 100,
		 * inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one
		 * of bytes_limit_per_file and bytes_limit_per_file_percent can be specified.
		 */
		bytesLimitPerFilePercent?: number | null;

		/** Set of files to scan. */
		fileSet?: GooglePrivacyDlpV2FileSet;

		/**
		 * List of file type groups to include in the scan.
		 * If empty, all files are scanned and available data format processors
		 * are applied. In addition, the binary content of the selected files
		 * is always scanned as well.
		 * Images are scanned only as binary if the specified region
		 * does not support image inspection and no file_types were specified.
		 * Image inspection is restricted to 'global', 'us', 'asia', and 'europe'.
		 */
		fileTypes?: Array<string>;

		/**
		 * Limits the number of files to scan to this percentage of the input FileSet.
		 * Number of files scanned is rounded down. Must be between 0 and 100,
		 * inclusively. Both 0 and 100 means no limit. Defaults to 0.
		 */
		filesLimitPercent?: number | null;
		sampleMethod?: GooglePrivacyDlpV2BigQueryOptionsSampleMethod | null;
	}

	/**
	 * Options defining a file or a set of files within a Google Cloud Storage
	 * bucket.
	 */
	export interface GooglePrivacyDlpV2CloudStorageOptionsFormProperties {

		/**
		 * Max number of bytes to scan from a file. If a scanned file's size is bigger
		 * than this value then the rest of the bytes are omitted. Only one
		 * of bytes_limit_per_file and bytes_limit_per_file_percent can be specified.
		 */
		bytesLimitPerFile: FormControl<string | null | undefined>,

		/**
		 * Max percentage of bytes to scan from a file. The rest are omitted. The
		 * number of bytes scanned is rounded down. Must be between 0 and 100,
		 * inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one
		 * of bytes_limit_per_file and bytes_limit_per_file_percent can be specified.
		 */
		bytesLimitPerFilePercent: FormControl<number | null | undefined>,

		/**
		 * Limits the number of files to scan to this percentage of the input FileSet.
		 * Number of files scanned is rounded down. Must be between 0 and 100,
		 * inclusively. Both 0 and 100 means no limit. Defaults to 0.
		 */
		filesLimitPercent: FormControl<number | null | undefined>,
		sampleMethod: FormControl<GooglePrivacyDlpV2BigQueryOptionsSampleMethod | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CloudStorageOptionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CloudStorageOptionsFormProperties>({
			bytesLimitPerFile: new FormControl<string | null | undefined>(undefined),
			bytesLimitPerFilePercent: new FormControl<number | null | undefined>(undefined),
			filesLimitPercent: new FormControl<number | null | undefined>(undefined),
			sampleMethod: new FormControl<GooglePrivacyDlpV2BigQueryOptionsSampleMethod | null | undefined>(undefined),
		});

	}


	/** Set of files to scan. */
	export interface GooglePrivacyDlpV2FileSet {

		/**
		 * Message representing a set of files in a Cloud Storage bucket. Regular
		 * expressions are used to allow fine-grained control over which files in the
		 * bucket to include.
		 * Included files are those that match at least one item in `include_regex` and
		 * do not match any items in `exclude_regex`. Note that a file that matches
		 * items from both lists will _not_ be included. For a match to occur, the
		 * entire file path (i.e., everything in the url after the bucket name) must
		 * match the regular expression.
		 * For example, given the input `{bucket_name: "mybucket", include_regex:
		 * ["directory1/.*"], exclude_regex:
		 * ["directory1/excluded.*"]}`:
		 * * `gs://mybucket/directory1/myfile` will be included
		 * * `gs://mybucket/directory1/directory2/myfile` will be included (`.*` matches
		 * across `/`)
		 * * `gs://mybucket/directory0/directory1/myfile` will _not_ be included (the
		 * full path doesn't match any items in `include_regex`)
		 * * `gs://mybucket/directory1/excludedfile` will _not_ be included (the path
		 * matches an item in `exclude_regex`)
		 * If `include_regex` is left empty, it will match all files by default
		 * (this is equivalent to setting `include_regex: [".*"]`).
		 * Some other common use cases:
		 * * `{bucket_name: "mybucket", exclude_regex: [".*\.pdf"]}` will include all
		 * files in `mybucket` except for .pdf files
		 * * `{bucket_name: "mybucket", include_regex: ["directory/[^/]+"]}` will
		 * include all files directly under `gs://mybucket/directory/`, without matching
		 * across `/`
		 */
		regexFileSet?: GooglePrivacyDlpV2CloudStorageRegexFileSet;

		/**
		 * The Cloud Storage url of the file(s) to scan, in the format
		 * `gs://<bucket>/<path>`. Trailing wildcard in the path is allowed.
		 * If the url ends in a trailing slash, the bucket or directory represented
		 * by the url will be scanned non-recursively (content in sub-directories
		 * will not be scanned). This means that `gs://mybucket/` is equivalent to
		 * `gs://mybucket/*`, and `gs://mybucket/directory/` is equivalent to
		 * `gs://mybucket/directory/*`.
		 * Exactly one of `url` or `regex_file_set` must be set.
		 */
		url?: string | null;
	}

	/** Set of files to scan. */
	export interface GooglePrivacyDlpV2FileSetFormProperties {

		/**
		 * The Cloud Storage url of the file(s) to scan, in the format
		 * `gs://<bucket>/<path>`. Trailing wildcard in the path is allowed.
		 * If the url ends in a trailing slash, the bucket or directory represented
		 * by the url will be scanned non-recursively (content in sub-directories
		 * will not be scanned). This means that `gs://mybucket/` is equivalent to
		 * `gs://mybucket/*`, and `gs://mybucket/directory/` is equivalent to
		 * `gs://mybucket/directory/*`.
		 * Exactly one of `url` or `regex_file_set` must be set.
		 */
		url: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2FileSetFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2FileSetFormProperties>({
			url: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Message representing a set of files in a Cloud Storage bucket. Regular
	 * expressions are used to allow fine-grained control over which files in the
	 * bucket to include.
	 * Included files are those that match at least one item in `include_regex` and
	 * do not match any items in `exclude_regex`. Note that a file that matches
	 * items from both lists will _not_ be included. For a match to occur, the
	 * entire file path (i.e., everything in the url after the bucket name) must
	 * match the regular expression.
	 * For example, given the input `{bucket_name: "mybucket", include_regex:
	 * ["directory1/.*"], exclude_regex:
	 * ["directory1/excluded.*"]}`:
	 * * `gs://mybucket/directory1/myfile` will be included
	 * * `gs://mybucket/directory1/directory2/myfile` will be included (`.*` matches
	 * across `/`)
	 * * `gs://mybucket/directory0/directory1/myfile` will _not_ be included (the
	 * full path doesn't match any items in `include_regex`)
	 * * `gs://mybucket/directory1/excludedfile` will _not_ be included (the path
	 * matches an item in `exclude_regex`)
	 * If `include_regex` is left empty, it will match all files by default
	 * (this is equivalent to setting `include_regex: [".*"]`).
	 * Some other common use cases:
	 * * `{bucket_name: "mybucket", exclude_regex: [".*\.pdf"]}` will include all
	 * files in `mybucket` except for .pdf files
	 * * `{bucket_name: "mybucket", include_regex: ["directory/[^/]+"]}` will
	 * include all files directly under `gs://mybucket/directory/`, without matching
	 * across `/`
	 */
	export interface GooglePrivacyDlpV2CloudStorageRegexFileSet {

		/** The name of a Cloud Storage bucket. Required. */
		bucketName?: string | null;

		/**
		 * A list of regular expressions matching file paths to exclude. All files in
		 * the bucket that match at least one of these regular expressions will be
		 * excluded from the scan.
		 * Regular expressions use RE2
		 * [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found
		 * under the google/re2 repository on GitHub.
		 */
		excludeRegex?: Array<string>;

		/**
		 * A list of regular expressions matching file paths to include. All files in
		 * the bucket that match at least one of these regular expressions will be
		 * included in the set of files, except for those that also match an item in
		 * `exclude_regex`. Leaving this field empty will match all files by default
		 * (this is equivalent to including `.*` in the list).
		 * Regular expressions use RE2
		 * [syntax](https://github.com/google/re2/wiki/Syntax); a guide can be found
		 * under the google/re2 repository on GitHub.
		 */
		includeRegex?: Array<string>;
	}

	/**
	 * Message representing a set of files in a Cloud Storage bucket. Regular
	 * expressions are used to allow fine-grained control over which files in the
	 * bucket to include.
	 * Included files are those that match at least one item in `include_regex` and
	 * do not match any items in `exclude_regex`. Note that a file that matches
	 * items from both lists will _not_ be included. For a match to occur, the
	 * entire file path (i.e., everything in the url after the bucket name) must
	 * match the regular expression.
	 * For example, given the input `{bucket_name: "mybucket", include_regex:
	 * ["directory1/.*"], exclude_regex:
	 * ["directory1/excluded.*"]}`:
	 * * `gs://mybucket/directory1/myfile` will be included
	 * * `gs://mybucket/directory1/directory2/myfile` will be included (`.*` matches
	 * across `/`)
	 * * `gs://mybucket/directory0/directory1/myfile` will _not_ be included (the
	 * full path doesn't match any items in `include_regex`)
	 * * `gs://mybucket/directory1/excludedfile` will _not_ be included (the path
	 * matches an item in `exclude_regex`)
	 * If `include_regex` is left empty, it will match all files by default
	 * (this is equivalent to setting `include_regex: [".*"]`).
	 * Some other common use cases:
	 * * `{bucket_name: "mybucket", exclude_regex: [".*\.pdf"]}` will include all
	 * files in `mybucket` except for .pdf files
	 * * `{bucket_name: "mybucket", include_regex: ["directory/[^/]+"]}` will
	 * include all files directly under `gs://mybucket/directory/`, without matching
	 * across `/`
	 */
	export interface GooglePrivacyDlpV2CloudStorageRegexFileSetFormProperties {

		/** The name of a Cloud Storage bucket. Required. */
		bucketName: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CloudStorageRegexFileSetFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CloudStorageRegexFileSetFormProperties>({
			bucketName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message representing a single file or path in Cloud Storage. */
	export interface GooglePrivacyDlpV2CloudStoragePath {

		/**
		 * A url representing a file or path (no wildcards) in Cloud Storage.
		 * Example: gs://[BUCKET_NAME]/dictionary.txt
		 */
		path?: string | null;
	}

	/** Message representing a single file or path in Cloud Storage. */
	export interface GooglePrivacyDlpV2CloudStoragePathFormProperties {

		/**
		 * A url representing a file or path (no wildcards) in Cloud Storage.
		 * Example: gs://[BUCKET_NAME]/dictionary.txt
		 */
		path: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CloudStoragePathFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CloudStoragePathFormProperties>({
			path: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Represents a color in the RGB color space. */
	export interface GooglePrivacyDlpV2Color {

		/** The amount of blue in the color as a value in the interval [0, 1]. */
		blue?: number | null;

		/** The amount of green in the color as a value in the interval [0, 1]. */
		green?: number | null;

		/** The amount of red in the color as a value in the interval [0, 1]. */
		red?: number | null;
	}

	/** Represents a color in the RGB color space. */
	export interface GooglePrivacyDlpV2ColorFormProperties {

		/** The amount of blue in the color as a value in the interval [0, 1]. */
		blue: FormControl<number | null | undefined>,

		/** The amount of green in the color as a value in the interval [0, 1]. */
		green: FormControl<number | null | undefined>,

		/** The amount of red in the color as a value in the interval [0, 1]. */
		red: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ColorFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ColorFormProperties>({
			blue: new FormControl<number | null | undefined>(undefined),
			green: new FormControl<number | null | undefined>(undefined),
			red: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * The field type of `value` and `field` do not need to match to be
	 * considered equal, but not all comparisons are possible.
	 * EQUAL_TO and NOT_EQUAL_TO attempt to compare even with incompatible types,
	 * but all other comparisons are invalid with incompatible types.
	 * A `value` of type:
	 * - `string` can be compared against all other types
	 * - `boolean` can only be compared against other booleans
	 * - `integer` can be compared against doubles or a string if the string value
	 * can be parsed as an integer.
	 * - `double` can be compared against integers or a string if the string can
	 * be parsed as a double.
	 * - `Timestamp` can be compared against strings in RFC 3339 date string
	 * format.
	 * - `TimeOfDay` can be compared against timestamps and strings in the format
	 * of 'HH:mm:ss'.
	 * If we fail to compare do to type mismatch, a warning will be given and
	 * the condition will evaluate to false.
	 */
	export interface GooglePrivacyDlpV2Condition {

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;

		/** Required. Operator used to compare the field or infoType to the value. */
		operator?: GooglePrivacyDlpV2ConditionOperator | null;

		/**
		 * Set of primitive values supported by the system.
		 * Note that for the purposes of inspection or transformation, the number
		 * of bytes considered to comprise a 'Value' is based on its representation
		 * as a UTF-8 encoded string. For example, if 'integer_value' is set to
		 * 123456789, the number of bytes would be counted as 9, even though an
		 * int64 only holds up to 8 bytes of data.
		 */
		value?: GooglePrivacyDlpV2Value;
	}

	/**
	 * The field type of `value` and `field` do not need to match to be
	 * considered equal, but not all comparisons are possible.
	 * EQUAL_TO and NOT_EQUAL_TO attempt to compare even with incompatible types,
	 * but all other comparisons are invalid with incompatible types.
	 * A `value` of type:
	 * - `string` can be compared against all other types
	 * - `boolean` can only be compared against other booleans
	 * - `integer` can be compared against doubles or a string if the string value
	 * can be parsed as an integer.
	 * - `double` can be compared against integers or a string if the string can
	 * be parsed as a double.
	 * - `Timestamp` can be compared against strings in RFC 3339 date string
	 * format.
	 * - `TimeOfDay` can be compared against timestamps and strings in the format
	 * of 'HH:mm:ss'.
	 * If we fail to compare do to type mismatch, a warning will be given and
	 * the condition will evaluate to false.
	 */
	export interface GooglePrivacyDlpV2ConditionFormProperties {

		/** Required. Operator used to compare the field or infoType to the value. */
		operator: FormControl<GooglePrivacyDlpV2ConditionOperator | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ConditionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ConditionFormProperties>({
			operator: new FormControl<GooglePrivacyDlpV2ConditionOperator | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2ConditionOperator { RELATIONAL_OPERATOR_UNSPECIFIED = 0, EQUAL_TO = 1, NOT_EQUAL_TO = 2, GREATER_THAN = 3, LESS_THAN = 4, GREATER_THAN_OR_EQUALS = 5, LESS_THAN_OR_EQUALS = 6, EXISTS = 7 }


	/** A collection of conditions. */
	export interface GooglePrivacyDlpV2Conditions {

		/** A collection of conditions. */
		conditions?: Array<GooglePrivacyDlpV2Condition>;
	}

	/** A collection of conditions. */
	export interface GooglePrivacyDlpV2ConditionsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ConditionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ConditionsFormProperties>({
		});

	}


	/**
	 * Represents a container that may contain DLP findings.
	 * Examples of a container include a file, table, or database record.
	 */
	export interface GooglePrivacyDlpV2Container {

		/**
		 * A string representation of the full container name.
		 * Examples:
		 * - BigQuery: 'Project:DataSetId.TableId'
		 * - Google Cloud Storage: 'gs://Bucket/folders/filename.txt'
		 */
		fullPath?: string | null;

		/**
		 * Project where the finding was found.
		 * Can be different from the project that owns the finding.
		 */
		projectId?: string | null;

		/**
		 * The rest of the path after the root.
		 * Examples:
		 * - For BigQuery table `project_id:dataset_id.table_id`, the relative path is
		 * `table_id`
		 * - Google Cloud Storage file `gs://bucket/folder/filename.txt`, the relative
		 * path is `folder/filename.txt`
		 */
		relativePath?: string | null;

		/**
		 * The root of the container.
		 * Examples:
		 * - For BigQuery table `project_id:dataset_id.table_id`, the root is
		 * `dataset_id`
		 * - For Google Cloud Storage file `gs://bucket/folder/filename.txt`, the root
		 * is `gs://bucket`
		 */
		rootPath?: string | null;

		/** Container type, for example BigQuery or Google Cloud Storage. */
		type?: string | null;

		/**
		 * Findings container modification timestamp, if applicable.
		 * For Google Cloud Storage contains last file modification timestamp.
		 * For BigQuery table contains last_modified_time property.
		 * For Datastore - not populated.
		 */
		updateTime?: string | null;

		/**
		 * Findings container version, if available
		 * ("generation" for Google Cloud Storage).
		 */
		version?: string | null;
	}

	/**
	 * Represents a container that may contain DLP findings.
	 * Examples of a container include a file, table, or database record.
	 */
	export interface GooglePrivacyDlpV2ContainerFormProperties {

		/**
		 * A string representation of the full container name.
		 * Examples:
		 * - BigQuery: 'Project:DataSetId.TableId'
		 * - Google Cloud Storage: 'gs://Bucket/folders/filename.txt'
		 */
		fullPath: FormControl<string | null | undefined>,

		/**
		 * Project where the finding was found.
		 * Can be different from the project that owns the finding.
		 */
		projectId: FormControl<string | null | undefined>,

		/**
		 * The rest of the path after the root.
		 * Examples:
		 * - For BigQuery table `project_id:dataset_id.table_id`, the relative path is
		 * `table_id`
		 * - Google Cloud Storage file `gs://bucket/folder/filename.txt`, the relative
		 * path is `folder/filename.txt`
		 */
		relativePath: FormControl<string | null | undefined>,

		/**
		 * The root of the container.
		 * Examples:
		 * - For BigQuery table `project_id:dataset_id.table_id`, the root is
		 * `dataset_id`
		 * - For Google Cloud Storage file `gs://bucket/folder/filename.txt`, the root
		 * is `gs://bucket`
		 */
		rootPath: FormControl<string | null | undefined>,

		/** Container type, for example BigQuery or Google Cloud Storage. */
		type: FormControl<string | null | undefined>,

		/**
		 * Findings container modification timestamp, if applicable.
		 * For Google Cloud Storage contains last file modification timestamp.
		 * For BigQuery table contains last_modified_time property.
		 * For Datastore - not populated.
		 */
		updateTime: FormControl<string | null | undefined>,

		/**
		 * Findings container version, if available
		 * ("generation" for Google Cloud Storage).
		 */
		version: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ContainerFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ContainerFormProperties>({
			fullPath: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
			relativePath: new FormControl<string | null | undefined>(undefined),
			rootPath: new FormControl<string | null | undefined>(undefined),
			type: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
			version: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container structure for the content to inspect. */
	export interface GooglePrivacyDlpV2ContentItem {

		/** Container for bytes to inspect or redact. */
		byteItem?: GooglePrivacyDlpV2ByteContentItem;

		/**
		 * Structured content to inspect. Up to 50,000 `Value`s per request allowed.
		 * See https://cloud.google.com/dlp/docs/inspecting-text#inspecting_a_table to
		 * learn more.
		 */
		table?: GooglePrivacyDlpV2Table;

		/** String data to inspect or redact. */
		value?: string | null;
	}

	/** Container structure for the content to inspect. */
	export interface GooglePrivacyDlpV2ContentItemFormProperties {

		/** String data to inspect or redact. */
		value: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ContentItemFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ContentItemFormProperties>({
			value: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Structured content to inspect. Up to 50,000 `Value`s per request allowed.
	 * See https://cloud.google.com/dlp/docs/inspecting-text#inspecting_a_table to
	 * learn more.
	 */
	export interface GooglePrivacyDlpV2Table {

		/** Headers of the table. */
		headers?: Array<GooglePrivacyDlpV2FieldId>;

		/** Rows of the table. */
		rows?: Array<GooglePrivacyDlpV2Row>;
	}

	/**
	 * Structured content to inspect. Up to 50,000 `Value`s per request allowed.
	 * See https://cloud.google.com/dlp/docs/inspecting-text#inspecting_a_table to
	 * learn more.
	 */
	export interface GooglePrivacyDlpV2TableFormProperties {
	}
	export function CreateGooglePrivacyDlpV2TableFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TableFormProperties>({
		});

	}


	/** Values of the row. */
	export interface GooglePrivacyDlpV2Row {

		/** Individual cells. */
		values?: Array<GooglePrivacyDlpV2Value>;
	}

	/** Values of the row. */
	export interface GooglePrivacyDlpV2RowFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RowFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RowFormProperties>({
		});

	}


	/**
	 * Precise location of the finding within a document, record, image, or metadata
	 * container.
	 */
	export interface GooglePrivacyDlpV2ContentLocation {

		/**
		 * Name of the container where the finding is located.
		 * The top level name is the source file name or table name. Names of some
		 * common storage containers are formatted as follows:
		 * * BigQuery tables:  `{project_id}:{dataset_id}.{table_id}`
		 * * Cloud Storage files: `gs://{bucket}/{path}`
		 * * Datastore namespace: {namespace}
		 * Nested names could be absent if the embedded object has no string
		 * identifier (for an example an image contained within a document).
		 */
		containerName?: string | null;

		/**
		 * Findings container modification timestamp, if applicable.
		 * For Google Cloud Storage contains last file modification timestamp.
		 * For BigQuery table contains last_modified_time property.
		 * For Datastore - not populated.
		 */
		containerTimestamp?: string | null;

		/**
		 * Findings container version, if available
		 * ("generation" for Google Cloud Storage).
		 */
		containerVersion?: string | null;

		/** Location of a finding within a document. */
		documentLocation?: GooglePrivacyDlpV2DocumentLocation;

		/** Location of the finding within an image. */
		imageLocation?: GooglePrivacyDlpV2ImageLocation;

		/** Metadata Location */
		metadataLocation?: GooglePrivacyDlpV2MetadataLocation;

		/** Location of a finding within a row or record. */
		recordLocation?: GooglePrivacyDlpV2RecordLocation;
	}

	/**
	 * Precise location of the finding within a document, record, image, or metadata
	 * container.
	 */
	export interface GooglePrivacyDlpV2ContentLocationFormProperties {

		/**
		 * Name of the container where the finding is located.
		 * The top level name is the source file name or table name. Names of some
		 * common storage containers are formatted as follows:
		 * * BigQuery tables:  `{project_id}:{dataset_id}.{table_id}`
		 * * Cloud Storage files: `gs://{bucket}/{path}`
		 * * Datastore namespace: {namespace}
		 * Nested names could be absent if the embedded object has no string
		 * identifier (for an example an image contained within a document).
		 */
		containerName: FormControl<string | null | undefined>,

		/**
		 * Findings container modification timestamp, if applicable.
		 * For Google Cloud Storage contains last file modification timestamp.
		 * For BigQuery table contains last_modified_time property.
		 * For Datastore - not populated.
		 */
		containerTimestamp: FormControl<string | null | undefined>,

		/**
		 * Findings container version, if available
		 * ("generation" for Google Cloud Storage).
		 */
		containerVersion: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ContentLocationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ContentLocationFormProperties>({
			containerName: new FormControl<string | null | undefined>(undefined),
			containerTimestamp: new FormControl<string | null | undefined>(undefined),
			containerVersion: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location of a finding within a document. */
	export interface GooglePrivacyDlpV2DocumentLocation {

		/**
		 * Offset of the line, from the beginning of the file, where the finding
		 * is located.
		 */
		fileOffset?: string | null;
	}

	/** Location of a finding within a document. */
	export interface GooglePrivacyDlpV2DocumentLocationFormProperties {

		/**
		 * Offset of the line, from the beginning of the file, where the finding
		 * is located.
		 */
		fileOffset: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DocumentLocationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DocumentLocationFormProperties>({
			fileOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location of the finding within an image. */
	export interface GooglePrivacyDlpV2ImageLocation {

		/** Bounding boxes locating the pixels within the image containing the finding. */
		boundingBoxes?: Array<GooglePrivacyDlpV2BoundingBox>;
	}

	/** Location of the finding within an image. */
	export interface GooglePrivacyDlpV2ImageLocationFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ImageLocationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ImageLocationFormProperties>({
		});

	}


	/** Metadata Location */
	export interface GooglePrivacyDlpV2MetadataLocation {

		/** Storage metadata label to indicate which metadata entry contains findings. */
		storageLabel?: GooglePrivacyDlpV2StorageMetadataLabel;

		/** Type of metadata containing the finding. */
		type?: GooglePrivacyDlpV2MetadataLocationType | null;
	}

	/** Metadata Location */
	export interface GooglePrivacyDlpV2MetadataLocationFormProperties {

		/** Type of metadata containing the finding. */
		type: FormControl<GooglePrivacyDlpV2MetadataLocationType | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2MetadataLocationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2MetadataLocationFormProperties>({
			type: new FormControl<GooglePrivacyDlpV2MetadataLocationType | null | undefined>(undefined),
		});

	}


	/** Storage metadata label to indicate which metadata entry contains findings. */
	export interface GooglePrivacyDlpV2StorageMetadataLabel {
		key?: string | null;
	}

	/** Storage metadata label to indicate which metadata entry contains findings. */
	export interface GooglePrivacyDlpV2StorageMetadataLabelFormProperties {
		key: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2StorageMetadataLabelFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2StorageMetadataLabelFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2MetadataLocationType { METADATATYPE_UNSPECIFIED = 0, STORAGE_METADATA = 1 }


	/** Location of a finding within a row or record. */
	export interface GooglePrivacyDlpV2RecordLocation {

		/** General identifier of a data field in a storage service. */
		fieldId?: GooglePrivacyDlpV2FieldId;

		/** Message for a unique key indicating a record that contains a finding. */
		recordKey?: GooglePrivacyDlpV2RecordKey;

		/** Location of a finding within a table. */
		tableLocation?: GooglePrivacyDlpV2TableLocation;
	}

	/** Location of a finding within a row or record. */
	export interface GooglePrivacyDlpV2RecordLocationFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RecordLocationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RecordLocationFormProperties>({
		});

	}


	/** Message for a unique key indicating a record that contains a finding. */
	export interface GooglePrivacyDlpV2RecordKey {

		/** Row key for identifying a record in BigQuery table. */
		bigQueryKey?: GooglePrivacyDlpV2BigQueryKey;

		/** Record key for a finding in Cloud Datastore. */
		datastoreKey?: GooglePrivacyDlpV2DatastoreKey;

		/**
		 * Values of identifying columns in the given row. Order of values matches
		 * the order of `identifying_fields` specified in the scanning request.
		 */
		idValues?: Array<string>;
	}

	/** Message for a unique key indicating a record that contains a finding. */
	export interface GooglePrivacyDlpV2RecordKeyFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RecordKeyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RecordKeyFormProperties>({
		});

	}


	/** Record key for a finding in Cloud Datastore. */
	export interface GooglePrivacyDlpV2DatastoreKey {

		/**
		 * A unique identifier for a Datastore entity.
		 * If a key's partition ID or any of its path kinds or names are
		 * reserved/read-only, the key is reserved/read-only.
		 * A reserved/read-only key is forbidden in certain documented contexts.
		 */
		entityKey?: GooglePrivacyDlpV2Key;
	}

	/** Record key for a finding in Cloud Datastore. */
	export interface GooglePrivacyDlpV2DatastoreKeyFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DatastoreKeyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DatastoreKeyFormProperties>({
		});

	}


	/**
	 * A unique identifier for a Datastore entity.
	 * If a key's partition ID or any of its path kinds or names are
	 * reserved/read-only, the key is reserved/read-only.
	 * A reserved/read-only key is forbidden in certain documented contexts.
	 */
	export interface GooglePrivacyDlpV2Key {

		/**
		 * Datastore partition ID.
		 * A partition ID identifies a grouping of entities. The grouping is always
		 * by project and namespace, however the namespace ID may be empty.
		 * A partition ID contains several dimensions:
		 * project ID and namespace ID.
		 */
		partitionId?: GooglePrivacyDlpV2PartitionId;

		/**
		 * The entity path.
		 * An entity path consists of one or more elements composed of a kind and a
		 * string or numerical identifier, which identify entities. The first
		 * element identifies a _root entity_, the second element identifies
		 * a _child_ of the root entity, the third element identifies a child of the
		 * second entity, and so forth. The entities identified by all prefixes of
		 * the path are called the element's _ancestors_.
		 * A path can never be empty, and a path can have at most 100 elements.
		 */
		path?: Array<GooglePrivacyDlpV2PathElement>;
	}

	/**
	 * A unique identifier for a Datastore entity.
	 * If a key's partition ID or any of its path kinds or names are
	 * reserved/read-only, the key is reserved/read-only.
	 * A reserved/read-only key is forbidden in certain documented contexts.
	 */
	export interface GooglePrivacyDlpV2KeyFormProperties {
	}
	export function CreateGooglePrivacyDlpV2KeyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KeyFormProperties>({
		});

	}


	/**
	 * Datastore partition ID.
	 * A partition ID identifies a grouping of entities. The grouping is always
	 * by project and namespace, however the namespace ID may be empty.
	 * A partition ID contains several dimensions:
	 * project ID and namespace ID.
	 */
	export interface GooglePrivacyDlpV2PartitionId {

		/** If not empty, the ID of the namespace to which the entities belong. */
		namespaceId?: string | null;

		/** The ID of the project to which the entities belong. */
		projectId?: string | null;
	}

	/**
	 * Datastore partition ID.
	 * A partition ID identifies a grouping of entities. The grouping is always
	 * by project and namespace, however the namespace ID may be empty.
	 * A partition ID contains several dimensions:
	 * project ID and namespace ID.
	 */
	export interface GooglePrivacyDlpV2PartitionIdFormProperties {

		/** If not empty, the ID of the namespace to which the entities belong. */
		namespaceId: FormControl<string | null | undefined>,

		/** The ID of the project to which the entities belong. */
		projectId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2PartitionIdFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PartitionIdFormProperties>({
			namespaceId: new FormControl<string | null | undefined>(undefined),
			projectId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A (kind, ID/name) pair used to construct a key path.
	 * If either name or ID is set, the element is complete.
	 * If neither is set, the element is incomplete.
	 */
	export interface GooglePrivacyDlpV2PathElement {

		/**
		 * The auto-allocated ID of the entity.
		 * Never equal to zero. Values less than zero are discouraged and may not
		 * be supported in the future.
		 */
		id?: string | null;

		/**
		 * The kind of the entity.
		 * A kind matching regex `__.*__` is reserved/read-only.
		 * A kind must not contain more than 1500 bytes when UTF-8 encoded.
		 * Cannot be `""`.
		 */
		kind?: string | null;

		/**
		 * The name of the entity.
		 * A name matching regex `__.*__` is reserved/read-only.
		 * A name must not be more than 1500 bytes when UTF-8 encoded.
		 * Cannot be `""`.
		 */
		name?: string | null;
	}

	/**
	 * A (kind, ID/name) pair used to construct a key path.
	 * If either name or ID is set, the element is complete.
	 * If neither is set, the element is incomplete.
	 */
	export interface GooglePrivacyDlpV2PathElementFormProperties {

		/**
		 * The auto-allocated ID of the entity.
		 * Never equal to zero. Values less than zero are discouraged and may not
		 * be supported in the future.
		 */
		id: FormControl<string | null | undefined>,

		/**
		 * The kind of the entity.
		 * A kind matching regex `__.*__` is reserved/read-only.
		 * A kind must not contain more than 1500 bytes when UTF-8 encoded.
		 * Cannot be `""`.
		 */
		kind: FormControl<string | null | undefined>,

		/**
		 * The name of the entity.
		 * A name matching regex `__.*__` is reserved/read-only.
		 * A name must not be more than 1500 bytes when UTF-8 encoded.
		 * Cannot be `""`.
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2PathElementFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PathElementFormProperties>({
			id: new FormControl<string | null | undefined>(undefined),
			kind: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Location of a finding within a table. */
	export interface GooglePrivacyDlpV2TableLocation {

		/** The zero-based index of the row where the finding is located. */
		rowIndex?: string | null;
	}

	/** Location of a finding within a table. */
	export interface GooglePrivacyDlpV2TableLocationFormProperties {

		/** The zero-based index of the row where the finding is located. */
		rowIndex: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TableLocationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TableLocationFormProperties>({
			rowIndex: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CreateDeidentifyTemplate. */
	export interface GooglePrivacyDlpV2CreateDeidentifyTemplateRequest {

		/**
		 * DeidentifyTemplates contains instructions on how to de-identify content.
		 * See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
		 */
		deidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplate;

		/**
		 * The geographic location to store the deidentification template. Reserved
		 * for future extensions.
		 */
		locationId?: string | null;

		/**
		 * The template id can contain uppercase and lowercase letters,
		 * numbers, and hyphens; that is, it must match the regular
		 * expression: `[a-zA-Z\\d-_]+`. The maximum length is 100
		 * characters. Can be empty to allow the system to generate one.
		 */
		templateId?: string | null;
	}

	/** Request message for CreateDeidentifyTemplate. */
	export interface GooglePrivacyDlpV2CreateDeidentifyTemplateRequestFormProperties {

		/**
		 * The geographic location to store the deidentification template. Reserved
		 * for future extensions.
		 */
		locationId: FormControl<string | null | undefined>,

		/**
		 * The template id can contain uppercase and lowercase letters,
		 * numbers, and hyphens; that is, it must match the regular
		 * expression: `[a-zA-Z\\d-_]+`. The maximum length is 100
		 * characters. Can be empty to allow the system to generate one.
		 */
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CreateDeidentifyTemplateRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CreateDeidentifyTemplateRequestFormProperties>({
			locationId: new FormControl<string | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * DeidentifyTemplates contains instructions on how to de-identify content.
	 * See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
	 */
	export interface GooglePrivacyDlpV2DeidentifyTemplate {

		/** Output only. The creation timestamp of an inspectTemplate. */
		createTime?: string | null;

		/** The configuration that controls how the data will change. */
		deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;

		/** Short description (max 256 chars). */
		description?: string | null;

		/** Display name (max 256 chars). */
		displayName?: string | null;

		/**
		 * Output only. The template name.
		 * The template will have one of the following formats:
		 * `projects/PROJECT_ID/deidentifyTemplates/TEMPLATE_ID` OR
		 * `organizations/ORGANIZATION_ID/deidentifyTemplates/TEMPLATE_ID`
		 */
		name?: string | null;

		/** Output only. The last update timestamp of an inspectTemplate. */
		updateTime?: string | null;
	}

	/**
	 * DeidentifyTemplates contains instructions on how to de-identify content.
	 * See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
	 */
	export interface GooglePrivacyDlpV2DeidentifyTemplateFormProperties {

		/** Output only. The creation timestamp of an inspectTemplate. */
		createTime: FormControl<string | null | undefined>,

		/** Short description (max 256 chars). */
		description: FormControl<string | null | undefined>,

		/** Display name (max 256 chars). */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Output only. The template name.
		 * The template will have one of the following formats:
		 * `projects/PROJECT_ID/deidentifyTemplates/TEMPLATE_ID` OR
		 * `organizations/ORGANIZATION_ID/deidentifyTemplates/TEMPLATE_ID`
		 */
		name: FormControl<string | null | undefined>,

		/** Output only. The last update timestamp of an inspectTemplate. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DeidentifyTemplateFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeidentifyTemplateFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The configuration that controls how the data will change. */
	export interface GooglePrivacyDlpV2DeidentifyConfig {

		/**
		 * A type of transformation that will scan unstructured text and
		 * apply various `PrimitiveTransformation`s to each finding, where the
		 * transformation is applied to only values that were identified as a specific
		 * info_type.
		 */
		infoTypeTransformations?: GooglePrivacyDlpV2InfoTypeTransformations;

		/**
		 * A type of transformation that is applied over structured data such as a
		 * table.
		 */
		recordTransformations?: GooglePrivacyDlpV2RecordTransformations;

		/**
		 * How to handle transformation errors during de-identification. A
		 * transformation error occurs when the requested transformation is incompatible
		 * with the data. For example, trying to de-identify an IP address using a
		 * `DateShift` transformation would result in a transformation error, since date
		 * info cannot be extracted from an IP address.
		 * Information about any incompatible transformations, and how they were
		 * handled, is returned in the response as part of the
		 * `TransformationOverviews`.
		 */
		transformationErrorHandling?: GooglePrivacyDlpV2TransformationErrorHandling;
	}

	/** The configuration that controls how the data will change. */
	export interface GooglePrivacyDlpV2DeidentifyConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DeidentifyConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeidentifyConfigFormProperties>({
		});

	}


	/**
	 * A type of transformation that will scan unstructured text and
	 * apply various `PrimitiveTransformation`s to each finding, where the
	 * transformation is applied to only values that were identified as a specific
	 * info_type.
	 */
	export interface GooglePrivacyDlpV2InfoTypeTransformations {

		/**
		 * Required. Transformation for each infoType. Cannot specify more than one
		 * for a given infoType.
		 */
		transformations?: Array<GooglePrivacyDlpV2InfoTypeTransformation>;
	}

	/**
	 * A type of transformation that will scan unstructured text and
	 * apply various `PrimitiveTransformation`s to each finding, where the
	 * transformation is applied to only values that were identified as a specific
	 * info_type.
	 */
	export interface GooglePrivacyDlpV2InfoTypeTransformationsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2InfoTypeTransformationsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InfoTypeTransformationsFormProperties>({
		});

	}


	/**
	 * A transformation to apply to text that is identified as a specific
	 * info_type.
	 */
	export interface GooglePrivacyDlpV2InfoTypeTransformation {

		/**
		 * InfoTypes to apply the transformation to. An empty list will cause
		 * this transformation to apply to all findings that correspond to
		 * infoTypes that were requested in `InspectConfig`.
		 */
		infoTypes?: Array<GooglePrivacyDlpV2InfoType>;

		/** A rule for transforming a value. */
		primitiveTransformation?: GooglePrivacyDlpV2PrimitiveTransformation;
	}

	/**
	 * A transformation to apply to text that is identified as a specific
	 * info_type.
	 */
	export interface GooglePrivacyDlpV2InfoTypeTransformationFormProperties {
	}
	export function CreateGooglePrivacyDlpV2InfoTypeTransformationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InfoTypeTransformationFormProperties>({
		});

	}


	/** A rule for transforming a value. */
	export interface GooglePrivacyDlpV2PrimitiveTransformation {

		/**
		 * Generalization function that buckets values based on ranges. The ranges and
		 * replacement values are dynamically provided by the user for custom behavior,
		 * such as 1-30 -> LOW 31-65 -> MEDIUM 66-100 -> HIGH
		 * This can be used on
		 * data of type: number, long, string, timestamp.
		 * If the bound `Value` type differs from the type of data being transformed, we
		 * will first attempt converting the type of the data to be transformed to match
		 * the type of the bound before comparing.
		 * See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.
		 */
		bucketingConfig?: GooglePrivacyDlpV2BucketingConfig;

		/**
		 * Partially mask a string by replacing a given number of characters with a
		 * fixed character. Masking can start from the beginning or end of the string.
		 * This can be used on data of any type (numbers, longs, and so on) and when
		 * de-identifying structured data we'll attempt to preserve the original data's
		 * type. (This allows you to take a long like 123 and modify it to a string like
		 * **3.
		 */
		characterMaskConfig?: GooglePrivacyDlpV2CharacterMaskConfig;

		/**
		 * Pseudonymization method that generates deterministic encryption for the given
		 * input. Outputs a base64 encoded representation of the encrypted output.
		 * Uses AES-SIV based on the RFC https://tools.ietf.org/html/rfc5297.
		 */
		cryptoDeterministicConfig?: GooglePrivacyDlpV2CryptoDeterministicConfig;

		/**
		 * Pseudonymization method that generates surrogates via cryptographic hashing.
		 * Uses SHA-256.
		 * The key size must be either 32 or 64 bytes.
		 * Outputs a base64 encoded representation of the hashed output
		 * (for example, L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=).
		 * Currently, only string and integer values can be hashed.
		 * See https://cloud.google.com/dlp/docs/pseudonymization to learn more.
		 */
		cryptoHashConfig?: GooglePrivacyDlpV2CryptoHashConfig;

		/**
		 * Replaces an identifier with a surrogate using Format Preserving Encryption
		 * (FPE) with the FFX mode of operation; however when used in the
		 * `ReidentifyContent` API method, it serves the opposite function by reversing
		 * the surrogate back into the original identifier. The identifier must be
		 * encoded as ASCII. For a given crypto key and context, the same identifier
		 * will be replaced with the same surrogate. Identifiers must be at least two
		 * characters long. In the case that the identifier is the empty string, it will
		 * be skipped. See https://cloud.google.com/dlp/docs/pseudonymization to learn
		 * more.
		 * Note: We recommend using  CryptoDeterministicConfig for all use cases which
		 * do not require preserving the input alphabet space and size, plus warrant
		 * referential integrity.
		 */
		cryptoReplaceFfxFpeConfig?: GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig;

		/**
		 * Shifts dates by random number of days, with option to be consistent for the
		 * same context. See https://cloud.google.com/dlp/docs/concepts-date-shifting
		 * to learn more.
		 */
		dateShiftConfig?: GooglePrivacyDlpV2DateShiftConfig;

		/**
		 * Buckets values based on fixed size ranges. The
		 * Bucketing transformation can provide all of this functionality,
		 * but requires more configuration. This message is provided as a convenience to
		 * the user for simple bucketing strategies.
		 * The transformed value will be a hyphenated string of
		 * {lower_bound}-{upper_bound}, i.e if lower_bound = 10 and upper_bound = 20
		 * all values that are within this bucket will be replaced with "10-20".
		 * This can be used on data of type: double, long.
		 * If the bound Value type differs from the type of data
		 * being transformed, we will first attempt converting the type of the data to
		 * be transformed to match the type of the bound before comparing.
		 * See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.
		 */
		fixedSizeBucketingConfig?: GooglePrivacyDlpV2FixedSizeBucketingConfig;

		/**
		 * Redact a given value. For example, if used with an `InfoTypeTransformation`
		 * transforming PHONE_NUMBER, and input 'My phone number is 206-555-0123', the
		 * output would be 'My phone number is '.
		 */
		redactConfig?: GooglePrivacyDlpV2RedactConfig;

		/** Replace each input value with a given `Value`. */
		replaceConfig?: GooglePrivacyDlpV2ReplaceValueConfig;

		/** Replace each matching finding with the name of the info_type. */
		replaceWithInfoTypeConfig?: GooglePrivacyDlpV2ReplaceWithInfoTypeConfig;

		/**
		 * For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a
		 * portion of the value.
		 */
		timePartConfig?: GooglePrivacyDlpV2TimePartConfig;
	}

	/** A rule for transforming a value. */
	export interface GooglePrivacyDlpV2PrimitiveTransformationFormProperties {
	}
	export function CreateGooglePrivacyDlpV2PrimitiveTransformationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2PrimitiveTransformationFormProperties>({
		});

	}


	/**
	 * Pseudonymization method that generates deterministic encryption for the given
	 * input. Outputs a base64 encoded representation of the encrypted output.
	 * Uses AES-SIV based on the RFC https://tools.ietf.org/html/rfc5297.
	 */
	export interface GooglePrivacyDlpV2CryptoDeterministicConfig {

		/** General identifier of a data field in a storage service. */
		context?: GooglePrivacyDlpV2FieldId;

		/**
		 * This is a data encryption key (DEK) (as opposed to
		 * a key encryption key (KEK) stored by KMS).
		 * When using KMS to wrap/unwrap DEKs, be sure to set an appropriate
		 * IAM policy on the KMS CryptoKey (KEK) to ensure an attacker cannot
		 * unwrap the data crypto key.
		 */
		cryptoKey?: GooglePrivacyDlpV2CryptoKey;

		/** Type of information detected by the API. */
		surrogateInfoType?: GooglePrivacyDlpV2InfoType;
	}

	/**
	 * Pseudonymization method that generates deterministic encryption for the given
	 * input. Outputs a base64 encoded representation of the encrypted output.
	 * Uses AES-SIV based on the RFC https://tools.ietf.org/html/rfc5297.
	 */
	export interface GooglePrivacyDlpV2CryptoDeterministicConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2CryptoDeterministicConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CryptoDeterministicConfigFormProperties>({
		});

	}


	/**
	 * This is a data encryption key (DEK) (as opposed to
	 * a key encryption key (KEK) stored by KMS).
	 * When using KMS to wrap/unwrap DEKs, be sure to set an appropriate
	 * IAM policy on the KMS CryptoKey (KEK) to ensure an attacker cannot
	 * unwrap the data crypto key.
	 */
	export interface GooglePrivacyDlpV2CryptoKey {

		/**
		 * Include to use an existing data crypto key wrapped by KMS.
		 * The wrapped key must be a 128/192/256 bit key.
		 * Authorization requires the following IAM permissions when sending a request
		 * to perform a crypto transformation using a kms-wrapped crypto key:
		 * dlp.kms.encrypt
		 */
		kmsWrapped?: GooglePrivacyDlpV2KmsWrappedCryptoKey;

		/**
		 * Use this to have a random data crypto key generated.
		 * It will be discarded after the request finishes.
		 */
		transient?: GooglePrivacyDlpV2TransientCryptoKey;

		/**
		 * Using raw keys is prone to security risks due to accidentally
		 * leaking the key. Choose another type of key if possible.
		 */
		unwrapped?: GooglePrivacyDlpV2UnwrappedCryptoKey;
	}

	/**
	 * This is a data encryption key (DEK) (as opposed to
	 * a key encryption key (KEK) stored by KMS).
	 * When using KMS to wrap/unwrap DEKs, be sure to set an appropriate
	 * IAM policy on the KMS CryptoKey (KEK) to ensure an attacker cannot
	 * unwrap the data crypto key.
	 */
	export interface GooglePrivacyDlpV2CryptoKeyFormProperties {
	}
	export function CreateGooglePrivacyDlpV2CryptoKeyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CryptoKeyFormProperties>({
		});

	}


	/**
	 * Include to use an existing data crypto key wrapped by KMS.
	 * The wrapped key must be a 128/192/256 bit key.
	 * Authorization requires the following IAM permissions when sending a request
	 * to perform a crypto transformation using a kms-wrapped crypto key:
	 * dlp.kms.encrypt
	 */
	export interface GooglePrivacyDlpV2KmsWrappedCryptoKey {

		/** Required. The resource name of the KMS CryptoKey to use for unwrapping. */
		cryptoKeyName?: string | null;

		/** Required. The wrapped data crypto key. */
		wrappedKey?: string | null;
	}

	/**
	 * Include to use an existing data crypto key wrapped by KMS.
	 * The wrapped key must be a 128/192/256 bit key.
	 * Authorization requires the following IAM permissions when sending a request
	 * to perform a crypto transformation using a kms-wrapped crypto key:
	 * dlp.kms.encrypt
	 */
	export interface GooglePrivacyDlpV2KmsWrappedCryptoKeyFormProperties {

		/** Required. The resource name of the KMS CryptoKey to use for unwrapping. */
		cryptoKeyName: FormControl<string | null | undefined>,

		/** Required. The wrapped data crypto key. */
		wrappedKey: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2KmsWrappedCryptoKeyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KmsWrappedCryptoKeyFormProperties>({
			cryptoKeyName: new FormControl<string | null | undefined>(undefined),
			wrappedKey: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Use this to have a random data crypto key generated.
	 * It will be discarded after the request finishes.
	 */
	export interface GooglePrivacyDlpV2TransientCryptoKey {

		/**
		 * Required. Name of the key.
		 * This is an arbitrary string used to differentiate different keys.
		 * A unique key is generated per name: two separate `TransientCryptoKey`
		 * protos share the same generated key if their names are the same.
		 * When the data crypto key is generated, this name is not used in any way
		 * (repeating the api call will result in a different key being generated).
		 */
		name?: string | null;
	}

	/**
	 * Use this to have a random data crypto key generated.
	 * It will be discarded after the request finishes.
	 */
	export interface GooglePrivacyDlpV2TransientCryptoKeyFormProperties {

		/**
		 * Required. Name of the key.
		 * This is an arbitrary string used to differentiate different keys.
		 * A unique key is generated per name: two separate `TransientCryptoKey`
		 * protos share the same generated key if their names are the same.
		 * When the data crypto key is generated, this name is not used in any way
		 * (repeating the api call will result in a different key being generated).
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TransientCryptoKeyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TransientCryptoKeyFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Using raw keys is prone to security risks due to accidentally
	 * leaking the key. Choose another type of key if possible.
	 */
	export interface GooglePrivacyDlpV2UnwrappedCryptoKey {

		/** Required. A 128/192/256 bit key. */
		key?: string | null;
	}

	/**
	 * Using raw keys is prone to security risks due to accidentally
	 * leaking the key. Choose another type of key if possible.
	 */
	export interface GooglePrivacyDlpV2UnwrappedCryptoKeyFormProperties {

		/** Required. A 128/192/256 bit key. */
		key: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2UnwrappedCryptoKeyFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2UnwrappedCryptoKeyFormProperties>({
			key: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Pseudonymization method that generates surrogates via cryptographic hashing.
	 * Uses SHA-256.
	 * The key size must be either 32 or 64 bytes.
	 * Outputs a base64 encoded representation of the hashed output
	 * (for example, L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=).
	 * Currently, only string and integer values can be hashed.
	 * See https://cloud.google.com/dlp/docs/pseudonymization to learn more.
	 */
	export interface GooglePrivacyDlpV2CryptoHashConfig {

		/**
		 * This is a data encryption key (DEK) (as opposed to
		 * a key encryption key (KEK) stored by KMS).
		 * When using KMS to wrap/unwrap DEKs, be sure to set an appropriate
		 * IAM policy on the KMS CryptoKey (KEK) to ensure an attacker cannot
		 * unwrap the data crypto key.
		 */
		cryptoKey?: GooglePrivacyDlpV2CryptoKey;
	}

	/**
	 * Pseudonymization method that generates surrogates via cryptographic hashing.
	 * Uses SHA-256.
	 * The key size must be either 32 or 64 bytes.
	 * Outputs a base64 encoded representation of the hashed output
	 * (for example, L7k0BHmF1ha5U3NfGykjro4xWi1MPVQPjhMAZbSV9mM=).
	 * Currently, only string and integer values can be hashed.
	 * See https://cloud.google.com/dlp/docs/pseudonymization to learn more.
	 */
	export interface GooglePrivacyDlpV2CryptoHashConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2CryptoHashConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CryptoHashConfigFormProperties>({
		});

	}


	/**
	 * Replaces an identifier with a surrogate using Format Preserving Encryption
	 * (FPE) with the FFX mode of operation; however when used in the
	 * `ReidentifyContent` API method, it serves the opposite function by reversing
	 * the surrogate back into the original identifier. The identifier must be
	 * encoded as ASCII. For a given crypto key and context, the same identifier
	 * will be replaced with the same surrogate. Identifiers must be at least two
	 * characters long. In the case that the identifier is the empty string, it will
	 * be skipped. See https://cloud.google.com/dlp/docs/pseudonymization to learn
	 * more.
	 * Note: We recommend using  CryptoDeterministicConfig for all use cases which
	 * do not require preserving the input alphabet space and size, plus warrant
	 * referential integrity.
	 */
	export interface GooglePrivacyDlpV2CryptoReplaceFfxFpeConfig {

		/** Common alphabets. */
		commonAlphabet?: GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabet | null;

		/** General identifier of a data field in a storage service. */
		context?: GooglePrivacyDlpV2FieldId;

		/**
		 * This is a data encryption key (DEK) (as opposed to
		 * a key encryption key (KEK) stored by KMS).
		 * When using KMS to wrap/unwrap DEKs, be sure to set an appropriate
		 * IAM policy on the KMS CryptoKey (KEK) to ensure an attacker cannot
		 * unwrap the data crypto key.
		 */
		cryptoKey?: GooglePrivacyDlpV2CryptoKey;

		/**
		 * This is supported by mapping these to the alphanumeric characters
		 * that the FFX mode natively supports. This happens before/after
		 * encryption/decryption.
		 * Each character listed must appear only once.
		 * Number of characters must be in the range [2, 95].
		 * This must be encoded as ASCII.
		 * The order of characters does not matter.
		 */
		customAlphabet?: string | null;

		/** The native way to select the alphabet. Must be in the range [2, 95]. */
		radix?: number | null;

		/** Type of information detected by the API. */
		surrogateInfoType?: GooglePrivacyDlpV2InfoType;
	}

	/**
	 * Replaces an identifier with a surrogate using Format Preserving Encryption
	 * (FPE) with the FFX mode of operation; however when used in the
	 * `ReidentifyContent` API method, it serves the opposite function by reversing
	 * the surrogate back into the original identifier. The identifier must be
	 * encoded as ASCII. For a given crypto key and context, the same identifier
	 * will be replaced with the same surrogate. Identifiers must be at least two
	 * characters long. In the case that the identifier is the empty string, it will
	 * be skipped. See https://cloud.google.com/dlp/docs/pseudonymization to learn
	 * more.
	 * Note: We recommend using  CryptoDeterministicConfig for all use cases which
	 * do not require preserving the input alphabet space and size, plus warrant
	 * referential integrity.
	 */
	export interface GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigFormProperties {

		/** Common alphabets. */
		commonAlphabet: FormControl<GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabet | null | undefined>,

		/**
		 * This is supported by mapping these to the alphanumeric characters
		 * that the FFX mode natively supports. This happens before/after
		 * encryption/decryption.
		 * Each character listed must appear only once.
		 * Number of characters must be in the range [2, 95].
		 * This must be encoded as ASCII.
		 * The order of characters does not matter.
		 */
		customAlphabet: FormControl<string | null | undefined>,

		/** The native way to select the alphabet. Must be in the range [2, 95]. */
		radix: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CryptoReplaceFfxFpeConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigFormProperties>({
			commonAlphabet: new FormControl<GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabet | null | undefined>(undefined),
			customAlphabet: new FormControl<string | null | undefined>(undefined),
			radix: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2CryptoReplaceFfxFpeConfigCommonAlphabet { FFX_COMMON_NATIVE_ALPHABET_UNSPECIFIED = 0, NUMERIC = 1, HEXADECIMAL = 2, UPPER_CASE_ALPHA_NUMERIC = 3, ALPHA_NUMERIC = 4 }


	/**
	 * Shifts dates by random number of days, with option to be consistent for the
	 * same context. See https://cloud.google.com/dlp/docs/concepts-date-shifting
	 * to learn more.
	 */
	export interface GooglePrivacyDlpV2DateShiftConfig {

		/** General identifier of a data field in a storage service. */
		context?: GooglePrivacyDlpV2FieldId;

		/**
		 * This is a data encryption key (DEK) (as opposed to
		 * a key encryption key (KEK) stored by KMS).
		 * When using KMS to wrap/unwrap DEKs, be sure to set an appropriate
		 * IAM policy on the KMS CryptoKey (KEK) to ensure an attacker cannot
		 * unwrap the data crypto key.
		 */
		cryptoKey?: GooglePrivacyDlpV2CryptoKey;

		/** Required. For example, -5 means shift date to at most 5 days back in the past. */
		lowerBoundDays?: number | null;

		/**
		 * Required. Range of shift in days. Actual shift will be selected at random within this
		 * range (inclusive ends). Negative means shift to earlier in time. Must not
		 * be more than 365250 days (1000 years) each direction.
		 * For example, 3 means shift date to at most 3 days into the future.
		 */
		upperBoundDays?: number | null;
	}

	/**
	 * Shifts dates by random number of days, with option to be consistent for the
	 * same context. See https://cloud.google.com/dlp/docs/concepts-date-shifting
	 * to learn more.
	 */
	export interface GooglePrivacyDlpV2DateShiftConfigFormProperties {

		/** Required. For example, -5 means shift date to at most 5 days back in the past. */
		lowerBoundDays: FormControl<number | null | undefined>,

		/**
		 * Required. Range of shift in days. Actual shift will be selected at random within this
		 * range (inclusive ends). Negative means shift to earlier in time. Must not
		 * be more than 365250 days (1000 years) each direction.
		 * For example, 3 means shift date to at most 3 days into the future.
		 */
		upperBoundDays: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DateShiftConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DateShiftConfigFormProperties>({
			lowerBoundDays: new FormControl<number | null | undefined>(undefined),
			upperBoundDays: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * Buckets values based on fixed size ranges. The
	 * Bucketing transformation can provide all of this functionality,
	 * but requires more configuration. This message is provided as a convenience to
	 * the user for simple bucketing strategies.
	 * The transformed value will be a hyphenated string of
	 * {lower_bound}-{upper_bound}, i.e if lower_bound = 10 and upper_bound = 20
	 * all values that are within this bucket will be replaced with "10-20".
	 * This can be used on data of type: double, long.
	 * If the bound Value type differs from the type of data
	 * being transformed, we will first attempt converting the type of the data to
	 * be transformed to match the type of the bound before comparing.
	 * See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.
	 */
	export interface GooglePrivacyDlpV2FixedSizeBucketingConfig {

		/**
		 * Required. Size of each bucket (except for minimum and maximum buckets). So if
		 * `lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the
		 * following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60,
		 * 60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works.
		 */
		bucketSize?: number | null;

		/**
		 * Set of primitive values supported by the system.
		 * Note that for the purposes of inspection or transformation, the number
		 * of bytes considered to comprise a 'Value' is based on its representation
		 * as a UTF-8 encoded string. For example, if 'integer_value' is set to
		 * 123456789, the number of bytes would be counted as 9, even though an
		 * int64 only holds up to 8 bytes of data.
		 */
		lowerBound?: GooglePrivacyDlpV2Value;

		/**
		 * Set of primitive values supported by the system.
		 * Note that for the purposes of inspection or transformation, the number
		 * of bytes considered to comprise a 'Value' is based on its representation
		 * as a UTF-8 encoded string. For example, if 'integer_value' is set to
		 * 123456789, the number of bytes would be counted as 9, even though an
		 * int64 only holds up to 8 bytes of data.
		 */
		upperBound?: GooglePrivacyDlpV2Value;
	}

	/**
	 * Buckets values based on fixed size ranges. The
	 * Bucketing transformation can provide all of this functionality,
	 * but requires more configuration. This message is provided as a convenience to
	 * the user for simple bucketing strategies.
	 * The transformed value will be a hyphenated string of
	 * {lower_bound}-{upper_bound}, i.e if lower_bound = 10 and upper_bound = 20
	 * all values that are within this bucket will be replaced with "10-20".
	 * This can be used on data of type: double, long.
	 * If the bound Value type differs from the type of data
	 * being transformed, we will first attempt converting the type of the data to
	 * be transformed to match the type of the bound before comparing.
	 * See https://cloud.google.com/dlp/docs/concepts-bucketing to learn more.
	 */
	export interface GooglePrivacyDlpV2FixedSizeBucketingConfigFormProperties {

		/**
		 * Required. Size of each bucket (except for minimum and maximum buckets). So if
		 * `lower_bound` = 10, `upper_bound` = 89, and `bucket_size` = 10, then the
		 * following buckets would be used: -10, 10-20, 20-30, 30-40, 40-50, 50-60,
		 * 60-70, 70-80, 80-89, 89+. Precision up to 2 decimals works.
		 */
		bucketSize: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2FixedSizeBucketingConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2FixedSizeBucketingConfigFormProperties>({
			bucketSize: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * Redact a given value. For example, if used with an `InfoTypeTransformation`
	 * transforming PHONE_NUMBER, and input 'My phone number is 206-555-0123', the
	 * output would be 'My phone number is '.
	 */
	export interface GooglePrivacyDlpV2RedactConfig {
	}

	/**
	 * Redact a given value. For example, if used with an `InfoTypeTransformation`
	 * transforming PHONE_NUMBER, and input 'My phone number is 206-555-0123', the
	 * output would be 'My phone number is '.
	 */
	export interface GooglePrivacyDlpV2RedactConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RedactConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RedactConfigFormProperties>({
		});

	}


	/** Replace each input value with a given `Value`. */
	export interface GooglePrivacyDlpV2ReplaceValueConfig {

		/**
		 * Set of primitive values supported by the system.
		 * Note that for the purposes of inspection or transformation, the number
		 * of bytes considered to comprise a 'Value' is based on its representation
		 * as a UTF-8 encoded string. For example, if 'integer_value' is set to
		 * 123456789, the number of bytes would be counted as 9, even though an
		 * int64 only holds up to 8 bytes of data.
		 */
		newValue?: GooglePrivacyDlpV2Value;
	}

	/** Replace each input value with a given `Value`. */
	export interface GooglePrivacyDlpV2ReplaceValueConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ReplaceValueConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ReplaceValueConfigFormProperties>({
		});

	}


	/** Replace each matching finding with the name of the info_type. */
	export interface GooglePrivacyDlpV2ReplaceWithInfoTypeConfig {
	}

	/** Replace each matching finding with the name of the info_type. */
	export interface GooglePrivacyDlpV2ReplaceWithInfoTypeConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ReplaceWithInfoTypeConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ReplaceWithInfoTypeConfigFormProperties>({
		});

	}


	/**
	 * For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a
	 * portion of the value.
	 */
	export interface GooglePrivacyDlpV2TimePartConfig {

		/** The part of the time to keep. */
		partToExtract?: GooglePrivacyDlpV2TimePartConfigPartToExtract | null;
	}

	/**
	 * For use with `Date`, `Timestamp`, and `TimeOfDay`, extract or preserve a
	 * portion of the value.
	 */
	export interface GooglePrivacyDlpV2TimePartConfigFormProperties {

		/** The part of the time to keep. */
		partToExtract: FormControl<GooglePrivacyDlpV2TimePartConfigPartToExtract | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TimePartConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TimePartConfigFormProperties>({
			partToExtract: new FormControl<GooglePrivacyDlpV2TimePartConfigPartToExtract | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2TimePartConfigPartToExtract { TIME_PART_UNSPECIFIED = 0, YEAR = 1, MONTH = 2, DAY_OF_MONTH = 3, DAY_OF_WEEK = 4, WEEK_OF_YEAR = 5, HOUR_OF_DAY = 6 }


	/**
	 * A type of transformation that is applied over structured data such as a
	 * table.
	 */
	export interface GooglePrivacyDlpV2RecordTransformations {

		/** Transform the record by applying various field transformations. */
		fieldTransformations?: Array<GooglePrivacyDlpV2FieldTransformation>;

		/**
		 * Configuration defining which records get suppressed entirely. Records that
		 * match any suppression rule are omitted from the output.
		 */
		recordSuppressions?: Array<GooglePrivacyDlpV2RecordSuppression>;
	}

	/**
	 * A type of transformation that is applied over structured data such as a
	 * table.
	 */
	export interface GooglePrivacyDlpV2RecordTransformationsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RecordTransformationsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RecordTransformationsFormProperties>({
		});

	}


	/** The transformation to apply to the field. */
	export interface GooglePrivacyDlpV2FieldTransformation {

		/**
		 * A condition for determining whether a transformation should be applied to
		 * a field.
		 */
		condition?: GooglePrivacyDlpV2RecordCondition;

		/** Required. Input field(s) to apply the transformation to. */
		fields?: Array<GooglePrivacyDlpV2FieldId>;

		/**
		 * A type of transformation that will scan unstructured text and
		 * apply various `PrimitiveTransformation`s to each finding, where the
		 * transformation is applied to only values that were identified as a specific
		 * info_type.
		 */
		infoTypeTransformations?: GooglePrivacyDlpV2InfoTypeTransformations;

		/** A rule for transforming a value. */
		primitiveTransformation?: GooglePrivacyDlpV2PrimitiveTransformation;
	}

	/** The transformation to apply to the field. */
	export interface GooglePrivacyDlpV2FieldTransformationFormProperties {
	}
	export function CreateGooglePrivacyDlpV2FieldTransformationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2FieldTransformationFormProperties>({
		});

	}


	/**
	 * A condition for determining whether a transformation should be applied to
	 * a field.
	 */
	export interface GooglePrivacyDlpV2RecordCondition {

		/** An expression, consisting or an operator and conditions. */
		expressions?: GooglePrivacyDlpV2Expressions;
	}

	/**
	 * A condition for determining whether a transformation should be applied to
	 * a field.
	 */
	export interface GooglePrivacyDlpV2RecordConditionFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RecordConditionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RecordConditionFormProperties>({
		});

	}


	/** An expression, consisting or an operator and conditions. */
	export interface GooglePrivacyDlpV2Expressions {

		/** A collection of conditions. */
		conditions?: GooglePrivacyDlpV2Conditions;

		/**
		 * The operator to apply to the result of conditions. Default and currently
		 * only supported value is `AND`.
		 */
		logicalOperator?: GooglePrivacyDlpV2ExpressionsLogicalOperator | null;
	}

	/** An expression, consisting or an operator and conditions. */
	export interface GooglePrivacyDlpV2ExpressionsFormProperties {

		/**
		 * The operator to apply to the result of conditions. Default and currently
		 * only supported value is `AND`.
		 */
		logicalOperator: FormControl<GooglePrivacyDlpV2ExpressionsLogicalOperator | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ExpressionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ExpressionsFormProperties>({
			logicalOperator: new FormControl<GooglePrivacyDlpV2ExpressionsLogicalOperator | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2ExpressionsLogicalOperator { LOGICAL_OPERATOR_UNSPECIFIED = 0, AND = 1 }


	/**
	 * Configuration to suppress records whose suppression conditions evaluate to
	 * true.
	 */
	export interface GooglePrivacyDlpV2RecordSuppression {

		/**
		 * A condition for determining whether a transformation should be applied to
		 * a field.
		 */
		condition?: GooglePrivacyDlpV2RecordCondition;
	}

	/**
	 * Configuration to suppress records whose suppression conditions evaluate to
	 * true.
	 */
	export interface GooglePrivacyDlpV2RecordSuppressionFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RecordSuppressionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RecordSuppressionFormProperties>({
		});

	}


	/**
	 * How to handle transformation errors during de-identification. A
	 * transformation error occurs when the requested transformation is incompatible
	 * with the data. For example, trying to de-identify an IP address using a
	 * `DateShift` transformation would result in a transformation error, since date
	 * info cannot be extracted from an IP address.
	 * Information about any incompatible transformations, and how they were
	 * handled, is returned in the response as part of the
	 * `TransformationOverviews`.
	 */
	export interface GooglePrivacyDlpV2TransformationErrorHandling {

		/**
		 * Skips the data without modifying it if the requested transformation would
		 * cause an error. For example, if a `DateShift` transformation were applied
		 * an an IP address, this mode would leave the IP address unchanged in the
		 * response.
		 */
		leaveUntransformed?: GooglePrivacyDlpV2LeaveUntransformed;

		/** Throw an error and fail the request when a transformation error occurs. */
		throwError?: GooglePrivacyDlpV2ThrowError;
	}

	/**
	 * How to handle transformation errors during de-identification. A
	 * transformation error occurs when the requested transformation is incompatible
	 * with the data. For example, trying to de-identify an IP address using a
	 * `DateShift` transformation would result in a transformation error, since date
	 * info cannot be extracted from an IP address.
	 * Information about any incompatible transformations, and how they were
	 * handled, is returned in the response as part of the
	 * `TransformationOverviews`.
	 */
	export interface GooglePrivacyDlpV2TransformationErrorHandlingFormProperties {
	}
	export function CreateGooglePrivacyDlpV2TransformationErrorHandlingFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TransformationErrorHandlingFormProperties>({
		});

	}


	/**
	 * Skips the data without modifying it if the requested transformation would
	 * cause an error. For example, if a `DateShift` transformation were applied
	 * an an IP address, this mode would leave the IP address unchanged in the
	 * response.
	 */
	export interface GooglePrivacyDlpV2LeaveUntransformed {
	}

	/**
	 * Skips the data without modifying it if the requested transformation would
	 * cause an error. For example, if a `DateShift` transformation were applied
	 * an an IP address, this mode would leave the IP address unchanged in the
	 * response.
	 */
	export interface GooglePrivacyDlpV2LeaveUntransformedFormProperties {
	}
	export function CreateGooglePrivacyDlpV2LeaveUntransformedFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LeaveUntransformedFormProperties>({
		});

	}


	/** Throw an error and fail the request when a transformation error occurs. */
	export interface GooglePrivacyDlpV2ThrowError {
	}

	/** Throw an error and fail the request when a transformation error occurs. */
	export interface GooglePrivacyDlpV2ThrowErrorFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ThrowErrorFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ThrowErrorFormProperties>({
		});

	}


	/**
	 * Request message for CreateDlpJobRequest. Used to initiate long running
	 * jobs such as calculating risk metrics or inspecting Google Cloud
	 * Storage.
	 */
	export interface GooglePrivacyDlpV2CreateDlpJobRequest {

		/** Controls what and how to inspect for findings. */
		inspectJob?: GooglePrivacyDlpV2InspectJobConfig;

		/**
		 * The job id can contain uppercase and lowercase letters,
		 * numbers, and hyphens; that is, it must match the regular
		 * expression: `[a-zA-Z\\d-_]+`. The maximum length is 100
		 * characters. Can be empty to allow the system to generate one.
		 */
		jobId?: string | null;

		/**
		 * The geographic location to store and process the job. Reserved for
		 * future extensions.
		 */
		locationId?: string | null;

		/**
		 * Configuration for a risk analysis job. See
		 * https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more.
		 */
		riskJob?: GooglePrivacyDlpV2RiskAnalysisJobConfig;
	}

	/**
	 * Request message for CreateDlpJobRequest. Used to initiate long running
	 * jobs such as calculating risk metrics or inspecting Google Cloud
	 * Storage.
	 */
	export interface GooglePrivacyDlpV2CreateDlpJobRequestFormProperties {

		/**
		 * The job id can contain uppercase and lowercase letters,
		 * numbers, and hyphens; that is, it must match the regular
		 * expression: `[a-zA-Z\\d-_]+`. The maximum length is 100
		 * characters. Can be empty to allow the system to generate one.
		 */
		jobId: FormControl<string | null | undefined>,

		/**
		 * The geographic location to store and process the job. Reserved for
		 * future extensions.
		 */
		locationId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CreateDlpJobRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CreateDlpJobRequestFormProperties>({
			jobId: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Controls what and how to inspect for findings. */
	export interface GooglePrivacyDlpV2InspectJobConfig {

		/** Actions to execute at the completion of the job. */
		actions?: Array<GooglePrivacyDlpV2Action>;

		/**
		 * Configuration description of the scanning process.
		 * When used with redactContent only info_types and min_likelihood are currently
		 * used.
		 */
		inspectConfig?: GooglePrivacyDlpV2InspectConfig;

		/**
		 * If provided, will be used as the default for all values in InspectConfig.
		 * `inspect_config` will be merged into the values persisted as part of the
		 * template.
		 */
		inspectTemplateName?: string | null;

		/** Shared message indicating Cloud storage type. */
		storageConfig?: GooglePrivacyDlpV2StorageConfig;
	}

	/** Controls what and how to inspect for findings. */
	export interface GooglePrivacyDlpV2InspectJobConfigFormProperties {

		/**
		 * If provided, will be used as the default for all values in InspectConfig.
		 * `inspect_config` will be merged into the values persisted as part of the
		 * template.
		 */
		inspectTemplateName: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InspectJobConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectJobConfigFormProperties>({
			inspectTemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Configuration description of the scanning process.
	 * When used with redactContent only info_types and min_likelihood are currently
	 * used.
	 */
	export interface GooglePrivacyDlpV2InspectConfig {

		/**
		 * List of options defining data content to scan.
		 * If empty, text, images, and other content will be included.
		 */
		contentOptions?: Array<string>;

		/**
		 * CustomInfoTypes provided by the user. See
		 * https://cloud.google.com/dlp/docs/creating-custom-infotypes to learn more.
		 */
		customInfoTypes?: Array<GooglePrivacyDlpV2CustomInfoType>;

		/** When true, excludes type information of the findings. */
		excludeInfoTypes?: boolean | null;

		/**
		 * When true, a contextual quote from the data that triggered a finding is
		 * included in the response; see Finding.quote.
		 */
		includeQuote?: boolean | null;

		/**
		 * Restricts what info_types to look for. The values must correspond to
		 * InfoType values returned by ListInfoTypes or listed at
		 * https://cloud.google.com/dlp/docs/infotypes-reference.
		 * When no InfoTypes or CustomInfoTypes are specified in a request, the
		 * system may automatically choose what detectors to run. By default this may
		 * be all types, but may change over time as detectors are updated.
		 * If you need precise control and predictability as to what detectors are
		 * run you should specify specific InfoTypes listed in the reference,
		 * otherwise a default list will be used, which may change over time.
		 */
		infoTypes?: Array<GooglePrivacyDlpV2InfoType>;

		/** Configuration to control the number of findings returned. */
		limits?: GooglePrivacyDlpV2FindingLimits;

		/**
		 * Only returns findings equal or above this threshold. The default is
		 * POSSIBLE.
		 * See https://cloud.google.com/dlp/docs/likelihood to learn more.
		 */
		minLikelihood?: GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null;

		/**
		 * Set of rules to apply to the findings for this InspectConfig.
		 * Exclusion rules, contained in the set are executed in the end, other
		 * rules are executed in the order they are specified for each info type.
		 */
		ruleSet?: Array<GooglePrivacyDlpV2InspectionRuleSet>;
	}

	/**
	 * Configuration description of the scanning process.
	 * When used with redactContent only info_types and min_likelihood are currently
	 * used.
	 */
	export interface GooglePrivacyDlpV2InspectConfigFormProperties {

		/** When true, excludes type information of the findings. */
		excludeInfoTypes: FormControl<boolean | null | undefined>,

		/**
		 * When true, a contextual quote from the data that triggered a finding is
		 * included in the response; see Finding.quote.
		 */
		includeQuote: FormControl<boolean | null | undefined>,

		/**
		 * Only returns findings equal or above this threshold. The default is
		 * POSSIBLE.
		 * See https://cloud.google.com/dlp/docs/likelihood to learn more.
		 */
		minLikelihood: FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InspectConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectConfigFormProperties>({
			excludeInfoTypes: new FormControl<boolean | null | undefined>(undefined),
			includeQuote: new FormControl<boolean | null | undefined>(undefined),
			minLikelihood: new FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>(undefined),
		});

	}


	/**
	 * Custom information type provided by the user. Used to find domain-specific
	 * sensitive information configurable to the data in question.
	 */
	export interface GooglePrivacyDlpV2CustomInfoType {

		/**
		 * Set of detection rules to apply to all findings of this CustomInfoType.
		 * Rules are applied in order that they are specified. Not supported for the
		 * `surrogate_type` CustomInfoType.
		 */
		detectionRules?: Array<GooglePrivacyDlpV2DetectionRule>;

		/**
		 * Custom information type based on a dictionary of words or phrases. This can
		 * be used to match sensitive information specific to the data, such as a list
		 * of employee IDs or job titles.
		 * Dictionary words are case-insensitive and all characters other than letters
		 * and digits in the unicode [Basic Multilingual
		 * Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane)
		 * will be replaced with whitespace when scanning for matches, so the
		 * dictionary phrase "Sam Johnson" will match all three phrases "sam johnson",
		 * "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters
		 * surrounding any match must be of a different type than the adjacent
		 * characters within the word, so letters must be next to non-letters and
		 * digits next to non-digits. For example, the dictionary word "jen" will
		 * match the first three letters of the text "jen123" but will return no
		 * matches for "jennifer".
		 * Dictionary words containing a large number of characters that are not
		 * letters or digits may result in unexpected findings because such characters
		 * are treated as whitespace. The
		 * [limits](https://cloud.google.com/dlp/limits) page contains details about
		 * the size limits of dictionaries. For dictionaries that do not fit within
		 * these constraints, consider using `LargeCustomDictionaryConfig` in the
		 * `StoredInfoType` API.
		 */
		dictionary?: GooglePrivacyDlpV2Dictionary;

		/**
		 * If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding
		 * to be returned. It still can be used for rules matching.
		 */
		exclusionType?: GooglePrivacyDlpV2CustomInfoTypeExclusionType | null;

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;

		/**
		 * Likelihood to return for this CustomInfoType. This base value can be
		 * altered by a detection rule if the finding meets the criteria specified by
		 * the rule. Defaults to `VERY_LIKELY` if not specified.
		 */
		likelihood?: GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null;

		/** Message defining a custom regular expression. */
		regex?: GooglePrivacyDlpV2Regex;

		/** A reference to a StoredInfoType to use with scanning. */
		storedType?: GooglePrivacyDlpV2StoredType;

		/**
		 * Message for detecting output from deidentification transformations
		 * such as
		 * [`CryptoReplaceFfxFpeConfig`](/dlp/docs/reference/rest/v2/organizations.deidentifyTemplates#cryptoreplaceffxfpeconfig).
		 * These types of transformations are
		 * those that perform pseudonymization, thereby producing a "surrogate" as
		 * output. This should be used in conjunction with a field on the
		 * transformation such as `surrogate_info_type`. This CustomInfoType does
		 * not support the use of `detection_rules`.
		 */
		surrogateType?: GooglePrivacyDlpV2SurrogateType;
	}

	/**
	 * Custom information type provided by the user. Used to find domain-specific
	 * sensitive information configurable to the data in question.
	 */
	export interface GooglePrivacyDlpV2CustomInfoTypeFormProperties {

		/**
		 * If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding
		 * to be returned. It still can be used for rules matching.
		 */
		exclusionType: FormControl<GooglePrivacyDlpV2CustomInfoTypeExclusionType | null | undefined>,

		/**
		 * Likelihood to return for this CustomInfoType. This base value can be
		 * altered by a detection rule if the finding meets the criteria specified by
		 * the rule. Defaults to `VERY_LIKELY` if not specified.
		 */
		likelihood: FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CustomInfoTypeFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CustomInfoTypeFormProperties>({
			exclusionType: new FormControl<GooglePrivacyDlpV2CustomInfoTypeExclusionType | null | undefined>(undefined),
			likelihood: new FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>(undefined),
		});

	}


	/**
	 * Deprecated; use `InspectionRuleSet` instead. Rule for modifying a
	 * `CustomInfoType` to alter behavior under certain circumstances, depending
	 * on the specific details of the rule. Not supported for the `surrogate_type`
	 * custom infoType.
	 */
	export interface GooglePrivacyDlpV2DetectionRule {

		/**
		 * The rule that adjusts the likelihood of findings within a certain
		 * proximity of hotwords.
		 */
		hotwordRule?: GooglePrivacyDlpV2HotwordRule;
	}

	/**
	 * Deprecated; use `InspectionRuleSet` instead. Rule for modifying a
	 * `CustomInfoType` to alter behavior under certain circumstances, depending
	 * on the specific details of the rule. Not supported for the `surrogate_type`
	 * custom infoType.
	 */
	export interface GooglePrivacyDlpV2DetectionRuleFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DetectionRuleFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DetectionRuleFormProperties>({
		});

	}


	/**
	 * The rule that adjusts the likelihood of findings within a certain
	 * proximity of hotwords.
	 */
	export interface GooglePrivacyDlpV2HotwordRule {

		/** Message defining a custom regular expression. */
		hotwordRegex?: GooglePrivacyDlpV2Regex;

		/**
		 * Message for specifying an adjustment to the likelihood of a finding as
		 * part of a detection rule.
		 */
		likelihoodAdjustment?: GooglePrivacyDlpV2LikelihoodAdjustment;

		/**
		 * Message for specifying a window around a finding to apply a detection
		 * rule.
		 */
		proximity?: GooglePrivacyDlpV2Proximity;
	}

	/**
	 * The rule that adjusts the likelihood of findings within a certain
	 * proximity of hotwords.
	 */
	export interface GooglePrivacyDlpV2HotwordRuleFormProperties {
	}
	export function CreateGooglePrivacyDlpV2HotwordRuleFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2HotwordRuleFormProperties>({
		});

	}


	/** Message defining a custom regular expression. */
	export interface GooglePrivacyDlpV2Regex {

		/**
		 * The index of the submatch to extract as findings. When not
		 * specified, the entire match is returned. No more than 3 may be included.
		 */
		groupIndexes?: Array<number>;

		/**
		 * Pattern defining the regular expression. Its syntax
		 * (https://github.com/google/re2/wiki/Syntax) can be found under the
		 * google/re2 repository on GitHub.
		 */
		pattern?: string | null;
	}

	/** Message defining a custom regular expression. */
	export interface GooglePrivacyDlpV2RegexFormProperties {

		/**
		 * Pattern defining the regular expression. Its syntax
		 * (https://github.com/google/re2/wiki/Syntax) can be found under the
		 * google/re2 repository on GitHub.
		 */
		pattern: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2RegexFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RegexFormProperties>({
			pattern: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Message for specifying an adjustment to the likelihood of a finding as
	 * part of a detection rule.
	 */
	export interface GooglePrivacyDlpV2LikelihoodAdjustment {

		/** Set the likelihood of a finding to a fixed value. */
		fixedLikelihood?: GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null;

		/**
		 * Increase or decrease the likelihood by the specified number of
		 * levels. For example, if a finding would be `POSSIBLE` without the
		 * detection rule and `relative_likelihood` is 1, then it is upgraded to
		 * `LIKELY`, while a value of -1 would downgrade it to `UNLIKELY`.
		 * Likelihood may never drop below `VERY_UNLIKELY` or exceed
		 * `VERY_LIKELY`, so applying an adjustment of 1 followed by an
		 * adjustment of -1 when base likelihood is `VERY_LIKELY` will result in
		 * a final likelihood of `LIKELY`.
		 */
		relativeLikelihood?: number | null;
	}

	/**
	 * Message for specifying an adjustment to the likelihood of a finding as
	 * part of a detection rule.
	 */
	export interface GooglePrivacyDlpV2LikelihoodAdjustmentFormProperties {

		/** Set the likelihood of a finding to a fixed value. */
		fixedLikelihood: FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>,

		/**
		 * Increase or decrease the likelihood by the specified number of
		 * levels. For example, if a finding would be `POSSIBLE` without the
		 * detection rule and `relative_likelihood` is 1, then it is upgraded to
		 * `LIKELY`, while a value of -1 would downgrade it to `UNLIKELY`.
		 * Likelihood may never drop below `VERY_UNLIKELY` or exceed
		 * `VERY_LIKELY`, so applying an adjustment of 1 followed by an
		 * adjustment of -1 when base likelihood is `VERY_LIKELY` will result in
		 * a final likelihood of `LIKELY`.
		 */
		relativeLikelihood: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2LikelihoodAdjustmentFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LikelihoodAdjustmentFormProperties>({
			fixedLikelihood: new FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>(undefined),
			relativeLikelihood: new FormControl<number | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood { LIKELIHOOD_UNSPECIFIED = 0, VERY_UNLIKELY = 1, UNLIKELY = 2, POSSIBLE = 3, LIKELY = 4, VERY_LIKELY = 5 }


	/**
	 * Message for specifying a window around a finding to apply a detection
	 * rule.
	 */
	export interface GooglePrivacyDlpV2Proximity {

		/** Number of characters after the finding to consider. */
		windowAfter?: number | null;

		/** Number of characters before the finding to consider. */
		windowBefore?: number | null;
	}

	/**
	 * Message for specifying a window around a finding to apply a detection
	 * rule.
	 */
	export interface GooglePrivacyDlpV2ProximityFormProperties {

		/** Number of characters after the finding to consider. */
		windowAfter: FormControl<number | null | undefined>,

		/** Number of characters before the finding to consider. */
		windowBefore: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ProximityFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ProximityFormProperties>({
			windowAfter: new FormControl<number | null | undefined>(undefined),
			windowBefore: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * Custom information type based on a dictionary of words or phrases. This can
	 * be used to match sensitive information specific to the data, such as a list
	 * of employee IDs or job titles.
	 * Dictionary words are case-insensitive and all characters other than letters
	 * and digits in the unicode [Basic Multilingual
	 * Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane)
	 * will be replaced with whitespace when scanning for matches, so the
	 * dictionary phrase "Sam Johnson" will match all three phrases "sam johnson",
	 * "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters
	 * surrounding any match must be of a different type than the adjacent
	 * characters within the word, so letters must be next to non-letters and
	 * digits next to non-digits. For example, the dictionary word "jen" will
	 * match the first three letters of the text "jen123" but will return no
	 * matches for "jennifer".
	 * Dictionary words containing a large number of characters that are not
	 * letters or digits may result in unexpected findings because such characters
	 * are treated as whitespace. The
	 * [limits](https://cloud.google.com/dlp/limits) page contains details about
	 * the size limits of dictionaries. For dictionaries that do not fit within
	 * these constraints, consider using `LargeCustomDictionaryConfig` in the
	 * `StoredInfoType` API.
	 */
	export interface GooglePrivacyDlpV2Dictionary {

		/** Message representing a single file or path in Cloud Storage. */
		cloudStoragePath?: GooglePrivacyDlpV2CloudStoragePath;

		/** Message defining a list of words or phrases to search for in the data. */
		wordList?: GooglePrivacyDlpV2WordList;
	}

	/**
	 * Custom information type based on a dictionary of words or phrases. This can
	 * be used to match sensitive information specific to the data, such as a list
	 * of employee IDs or job titles.
	 * Dictionary words are case-insensitive and all characters other than letters
	 * and digits in the unicode [Basic Multilingual
	 * Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane)
	 * will be replaced with whitespace when scanning for matches, so the
	 * dictionary phrase "Sam Johnson" will match all three phrases "sam johnson",
	 * "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters
	 * surrounding any match must be of a different type than the adjacent
	 * characters within the word, so letters must be next to non-letters and
	 * digits next to non-digits. For example, the dictionary word "jen" will
	 * match the first three letters of the text "jen123" but will return no
	 * matches for "jennifer".
	 * Dictionary words containing a large number of characters that are not
	 * letters or digits may result in unexpected findings because such characters
	 * are treated as whitespace. The
	 * [limits](https://cloud.google.com/dlp/limits) page contains details about
	 * the size limits of dictionaries. For dictionaries that do not fit within
	 * these constraints, consider using `LargeCustomDictionaryConfig` in the
	 * `StoredInfoType` API.
	 */
	export interface GooglePrivacyDlpV2DictionaryFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DictionaryFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DictionaryFormProperties>({
		});

	}


	/** Message defining a list of words or phrases to search for in the data. */
	export interface GooglePrivacyDlpV2WordList {

		/**
		 * Words or phrases defining the dictionary. The dictionary must contain
		 * at least one phrase and every phrase must contain at least 2 characters
		 * that are letters or digits. [required]
		 */
		words?: Array<string>;
	}

	/** Message defining a list of words or phrases to search for in the data. */
	export interface GooglePrivacyDlpV2WordListFormProperties {
	}
	export function CreateGooglePrivacyDlpV2WordListFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2WordListFormProperties>({
		});

	}

	export enum GooglePrivacyDlpV2CustomInfoTypeExclusionType { EXCLUSION_TYPE_UNSPECIFIED = 0, EXCLUSION_TYPE_EXCLUDE = 1 }


	/** A reference to a StoredInfoType to use with scanning. */
	export interface GooglePrivacyDlpV2StoredType {

		/**
		 * Timestamp indicating when the version of the `StoredInfoType` used for
		 * inspection was created. Output-only field, populated by the system.
		 */
		createTime?: string | null;

		/**
		 * Resource name of the requested `StoredInfoType`, for example
		 * `organizations/433245324/storedInfoTypes/432452342` or
		 * `projects/project-id/storedInfoTypes/432452342`.
		 */
		name?: string | null;
	}

	/** A reference to a StoredInfoType to use with scanning. */
	export interface GooglePrivacyDlpV2StoredTypeFormProperties {

		/**
		 * Timestamp indicating when the version of the `StoredInfoType` used for
		 * inspection was created. Output-only field, populated by the system.
		 */
		createTime: FormControl<string | null | undefined>,

		/**
		 * Resource name of the requested `StoredInfoType`, for example
		 * `organizations/433245324/storedInfoTypes/432452342` or
		 * `projects/project-id/storedInfoTypes/432452342`.
		 */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2StoredTypeFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2StoredTypeFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Message for detecting output from deidentification transformations
	 * such as
	 * [`CryptoReplaceFfxFpeConfig`](/dlp/docs/reference/rest/v2/organizations.deidentifyTemplates#cryptoreplaceffxfpeconfig).
	 * These types of transformations are
	 * those that perform pseudonymization, thereby producing a "surrogate" as
	 * output. This should be used in conjunction with a field on the
	 * transformation such as `surrogate_info_type`. This CustomInfoType does
	 * not support the use of `detection_rules`.
	 */
	export interface GooglePrivacyDlpV2SurrogateType {
	}

	/**
	 * Message for detecting output from deidentification transformations
	 * such as
	 * [`CryptoReplaceFfxFpeConfig`](/dlp/docs/reference/rest/v2/organizations.deidentifyTemplates#cryptoreplaceffxfpeconfig).
	 * These types of transformations are
	 * those that perform pseudonymization, thereby producing a "surrogate" as
	 * output. This should be used in conjunction with a field on the
	 * transformation such as `surrogate_info_type`. This CustomInfoType does
	 * not support the use of `detection_rules`.
	 */
	export interface GooglePrivacyDlpV2SurrogateTypeFormProperties {
	}
	export function CreateGooglePrivacyDlpV2SurrogateTypeFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2SurrogateTypeFormProperties>({
		});

	}


	/** Configuration to control the number of findings returned. */
	export interface GooglePrivacyDlpV2FindingLimits {

		/** Configuration of findings limit given for specified infoTypes. */
		maxFindingsPerInfoType?: Array<GooglePrivacyDlpV2InfoTypeLimit>;

		/**
		 * Max number of findings that will be returned for each item scanned.
		 * When set within `InspectJobConfig`,
		 * the maximum returned is 2000 regardless if this is set higher.
		 * When set within `InspectContentRequest`, this field is ignored.
		 */
		maxFindingsPerItem?: number | null;

		/**
		 * Max number of findings that will be returned per request/job.
		 * When set within `InspectContentRequest`, the maximum returned is 2000
		 * regardless if this is set higher.
		 */
		maxFindingsPerRequest?: number | null;
	}

	/** Configuration to control the number of findings returned. */
	export interface GooglePrivacyDlpV2FindingLimitsFormProperties {

		/**
		 * Max number of findings that will be returned for each item scanned.
		 * When set within `InspectJobConfig`,
		 * the maximum returned is 2000 regardless if this is set higher.
		 * When set within `InspectContentRequest`, this field is ignored.
		 */
		maxFindingsPerItem: FormControl<number | null | undefined>,

		/**
		 * Max number of findings that will be returned per request/job.
		 * When set within `InspectContentRequest`, the maximum returned is 2000
		 * regardless if this is set higher.
		 */
		maxFindingsPerRequest: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2FindingLimitsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2FindingLimitsFormProperties>({
			maxFindingsPerItem: new FormControl<number | null | undefined>(undefined),
			maxFindingsPerRequest: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * Max findings configuration per infoType, per content item or long
	 * running DlpJob.
	 */
	export interface GooglePrivacyDlpV2InfoTypeLimit {

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;

		/** Max findings limit for the given infoType. */
		maxFindings?: number | null;
	}

	/**
	 * Max findings configuration per infoType, per content item or long
	 * running DlpJob.
	 */
	export interface GooglePrivacyDlpV2InfoTypeLimitFormProperties {

		/** Max findings limit for the given infoType. */
		maxFindings: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InfoTypeLimitFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InfoTypeLimitFormProperties>({
			maxFindings: new FormControl<number | null | undefined>(undefined),
		});

	}


	/**
	 * Rule set for modifying a set of infoTypes to alter behavior under certain
	 * circumstances, depending on the specific details of the rules within the set.
	 */
	export interface GooglePrivacyDlpV2InspectionRuleSet {

		/** List of infoTypes this rule set is applied to. */
		infoTypes?: Array<GooglePrivacyDlpV2InfoType>;

		/** Set of rules to be applied to infoTypes. The rules are applied in order. */
		rules?: Array<GooglePrivacyDlpV2InspectionRule>;
	}

	/**
	 * Rule set for modifying a set of infoTypes to alter behavior under certain
	 * circumstances, depending on the specific details of the rules within the set.
	 */
	export interface GooglePrivacyDlpV2InspectionRuleSetFormProperties {
	}
	export function CreateGooglePrivacyDlpV2InspectionRuleSetFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectionRuleSetFormProperties>({
		});

	}


	/**
	 * A single inspection rule to be applied to infoTypes, specified in
	 * `InspectionRuleSet`.
	 */
	export interface GooglePrivacyDlpV2InspectionRule {

		/**
		 * The rule that specifies conditions when findings of infoTypes specified in
		 * `InspectionRuleSet` are removed from results.
		 */
		exclusionRule?: GooglePrivacyDlpV2ExclusionRule;

		/**
		 * The rule that adjusts the likelihood of findings within a certain
		 * proximity of hotwords.
		 */
		hotwordRule?: GooglePrivacyDlpV2HotwordRule;
	}

	/**
	 * A single inspection rule to be applied to infoTypes, specified in
	 * `InspectionRuleSet`.
	 */
	export interface GooglePrivacyDlpV2InspectionRuleFormProperties {
	}
	export function CreateGooglePrivacyDlpV2InspectionRuleFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectionRuleFormProperties>({
		});

	}


	/**
	 * The rule that specifies conditions when findings of infoTypes specified in
	 * `InspectionRuleSet` are removed from results.
	 */
	export interface GooglePrivacyDlpV2ExclusionRule {

		/**
		 * Custom information type based on a dictionary of words or phrases. This can
		 * be used to match sensitive information specific to the data, such as a list
		 * of employee IDs or job titles.
		 * Dictionary words are case-insensitive and all characters other than letters
		 * and digits in the unicode [Basic Multilingual
		 * Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane)
		 * will be replaced with whitespace when scanning for matches, so the
		 * dictionary phrase "Sam Johnson" will match all three phrases "sam johnson",
		 * "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters
		 * surrounding any match must be of a different type than the adjacent
		 * characters within the word, so letters must be next to non-letters and
		 * digits next to non-digits. For example, the dictionary word "jen" will
		 * match the first three letters of the text "jen123" but will return no
		 * matches for "jennifer".
		 * Dictionary words containing a large number of characters that are not
		 * letters or digits may result in unexpected findings because such characters
		 * are treated as whitespace. The
		 * [limits](https://cloud.google.com/dlp/limits) page contains details about
		 * the size limits of dictionaries. For dictionaries that do not fit within
		 * these constraints, consider using `LargeCustomDictionaryConfig` in the
		 * `StoredInfoType` API.
		 */
		dictionary?: GooglePrivacyDlpV2Dictionary;

		/** List of exclude infoTypes. */
		excludeInfoTypes?: GooglePrivacyDlpV2ExcludeInfoTypes;

		/** How the rule is applied, see MatchingType documentation for details. */
		matchingType?: GooglePrivacyDlpV2ExclusionRuleMatchingType | null;

		/** Message defining a custom regular expression. */
		regex?: GooglePrivacyDlpV2Regex;
	}

	/**
	 * The rule that specifies conditions when findings of infoTypes specified in
	 * `InspectionRuleSet` are removed from results.
	 */
	export interface GooglePrivacyDlpV2ExclusionRuleFormProperties {

		/** How the rule is applied, see MatchingType documentation for details. */
		matchingType: FormControl<GooglePrivacyDlpV2ExclusionRuleMatchingType | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ExclusionRuleFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ExclusionRuleFormProperties>({
			matchingType: new FormControl<GooglePrivacyDlpV2ExclusionRuleMatchingType | null | undefined>(undefined),
		});

	}


	/** List of exclude infoTypes. */
	export interface GooglePrivacyDlpV2ExcludeInfoTypes {

		/**
		 * InfoType list in ExclusionRule rule drops a finding when it overlaps or
		 * contained within with a finding of an infoType from this list. For
		 * example, for `InspectionRuleSet.info_types` containing "PHONE_NUMBER"` and
		 * `exclusion_rule` containing `exclude_info_types.info_types` with
		 * "EMAIL_ADDRESS" the phone number findings are dropped if they overlap
		 * with EMAIL_ADDRESS finding.
		 * That leads to "555-222-2222@example.org" to generate only a single
		 * finding, namely email address.
		 */
		infoTypes?: Array<GooglePrivacyDlpV2InfoType>;
	}

	/** List of exclude infoTypes. */
	export interface GooglePrivacyDlpV2ExcludeInfoTypesFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ExcludeInfoTypesFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ExcludeInfoTypesFormProperties>({
		});

	}

	export enum GooglePrivacyDlpV2ExclusionRuleMatchingType { MATCHING_TYPE_UNSPECIFIED = 0, MATCHING_TYPE_FULL_MATCH = 1, MATCHING_TYPE_PARTIAL_MATCH = 2, MATCHING_TYPE_INVERSE_MATCH = 3 }


	/** Shared message indicating Cloud storage type. */
	export interface GooglePrivacyDlpV2StorageConfig {

		/** Options defining BigQuery table and row identifiers. */
		bigQueryOptions?: GooglePrivacyDlpV2BigQueryOptions;

		/**
		 * Options defining a file or a set of files within a Google Cloud Storage
		 * bucket.
		 */
		cloudStorageOptions?: GooglePrivacyDlpV2CloudStorageOptions;

		/** Options defining a data set within Google Cloud Datastore. */
		datastoreOptions?: GooglePrivacyDlpV2DatastoreOptions;

		/**
		 * Configuration to control jobs where the content being inspected is outside
		 * of Google Cloud Platform.
		 */
		hybridOptions?: GooglePrivacyDlpV2HybridOptions;

		/**
		 * Configuration of the timespan of the items to include in scanning.
		 * Currently only supported when inspecting Google Cloud Storage and BigQuery.
		 */
		timespanConfig?: GooglePrivacyDlpV2TimespanConfig;
	}

	/** Shared message indicating Cloud storage type. */
	export interface GooglePrivacyDlpV2StorageConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2StorageConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2StorageConfigFormProperties>({
		});

	}


	/** Options defining a data set within Google Cloud Datastore. */
	export interface GooglePrivacyDlpV2DatastoreOptions {

		/** A representation of a Datastore kind. */
		kind?: GooglePrivacyDlpV2KindExpression;

		/**
		 * Datastore partition ID.
		 * A partition ID identifies a grouping of entities. The grouping is always
		 * by project and namespace, however the namespace ID may be empty.
		 * A partition ID contains several dimensions:
		 * project ID and namespace ID.
		 */
		partitionId?: GooglePrivacyDlpV2PartitionId;
	}

	/** Options defining a data set within Google Cloud Datastore. */
	export interface GooglePrivacyDlpV2DatastoreOptionsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DatastoreOptionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DatastoreOptionsFormProperties>({
		});

	}


	/** A representation of a Datastore kind. */
	export interface GooglePrivacyDlpV2KindExpression {

		/** The name of the kind. */
		name?: string | null;
	}

	/** A representation of a Datastore kind. */
	export interface GooglePrivacyDlpV2KindExpressionFormProperties {

		/** The name of the kind. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2KindExpressionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2KindExpressionFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Configuration to control jobs where the content being inspected is outside
	 * of Google Cloud Platform.
	 */
	export interface GooglePrivacyDlpV2HybridOptions {

		/**
		 * A short description of where the data is coming from. Will be stored once
		 * in the job. 256 max length.
		 */
		description?: string | null;

		/**
		 * To organize findings, these labels will be added to each finding.
		 * Label keys must be between 1 and 63 characters long and must conform
		 * to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`.
		 * Label values must be between 0 and 63 characters long and must conform
		 * to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.
		 * No more than 10 labels can be associated with a given finding.
		 * Examples:
		 * * `"environment" : "production"`
		 * * `"pipeline" : "etl"`
		 */
		labels?: {[id: string]: string };

		/**
		 * These are labels that each inspection request must include within their
		 * 'finding_labels' map. Request may contain others, but any missing one of
		 * these will be rejected.
		 * Label keys must be between 1 and 63 characters long and must conform
		 * to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`.
		 * No more than 10 keys can be required.
		 */
		requiredFindingLabelKeys?: Array<string>;

		/** Instructions regarding the table content being inspected. */
		tableOptions?: GooglePrivacyDlpV2TableOptions;
	}

	/**
	 * Configuration to control jobs where the content being inspected is outside
	 * of Google Cloud Platform.
	 */
	export interface GooglePrivacyDlpV2HybridOptionsFormProperties {

		/**
		 * A short description of where the data is coming from. Will be stored once
		 * in the job. 256 max length.
		 */
		description: FormControl<string | null | undefined>,

		/**
		 * To organize findings, these labels will be added to each finding.
		 * Label keys must be between 1 and 63 characters long and must conform
		 * to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`.
		 * Label values must be between 0 and 63 characters long and must conform
		 * to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.
		 * No more than 10 labels can be associated with a given finding.
		 * Examples:
		 * * `"environment" : "production"`
		 * * `"pipeline" : "etl"`
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2HybridOptionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2HybridOptionsFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
		});

	}


	/** Instructions regarding the table content being inspected. */
	export interface GooglePrivacyDlpV2TableOptions {

		/**
		 * The columns that are the primary keys for table objects included in
		 * ContentItem. A copy of this cell's value will stored alongside alongside
		 * each finding so that the finding can be traced to the specific row it came
		 * from. No more than 3 may be provided.
		 */
		identifyingFields?: Array<GooglePrivacyDlpV2FieldId>;
	}

	/** Instructions regarding the table content being inspected. */
	export interface GooglePrivacyDlpV2TableOptionsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2TableOptionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TableOptionsFormProperties>({
		});

	}


	/**
	 * Configuration of the timespan of the items to include in scanning.
	 * Currently only supported when inspecting Google Cloud Storage and BigQuery.
	 */
	export interface GooglePrivacyDlpV2TimespanConfig {

		/**
		 * When the job is started by a JobTrigger we will automatically figure out
		 * a valid start_time to avoid scanning files that have not been modified
		 * since the last time the JobTrigger executed. This will be based on the
		 * time of the execution of the last run of the JobTrigger.
		 */
		enableAutoPopulationOfTimespanConfig?: boolean | null;

		/**
		 * Exclude files or rows newer than this value.
		 * If set to zero, no upper time limit is applied.
		 */
		endTime?: string | null;

		/** Exclude files or rows older than this value. */
		startTime?: string | null;

		/** General identifier of a data field in a storage service. */
		timestampField?: GooglePrivacyDlpV2FieldId;
	}

	/**
	 * Configuration of the timespan of the items to include in scanning.
	 * Currently only supported when inspecting Google Cloud Storage and BigQuery.
	 */
	export interface GooglePrivacyDlpV2TimespanConfigFormProperties {

		/**
		 * When the job is started by a JobTrigger we will automatically figure out
		 * a valid start_time to avoid scanning files that have not been modified
		 * since the last time the JobTrigger executed. This will be based on the
		 * time of the execution of the last run of the JobTrigger.
		 */
		enableAutoPopulationOfTimespanConfig: FormControl<boolean | null | undefined>,

		/**
		 * Exclude files or rows newer than this value.
		 * If set to zero, no upper time limit is applied.
		 */
		endTime: FormControl<string | null | undefined>,

		/** Exclude files or rows older than this value. */
		startTime: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TimespanConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TimespanConfigFormProperties>({
			enableAutoPopulationOfTimespanConfig: new FormControl<boolean | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Configuration for a risk analysis job. See
	 * https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more.
	 */
	export interface GooglePrivacyDlpV2RiskAnalysisJobConfig {

		/**
		 * Actions to execute at the completion of the job. Are executed in the order
		 * provided.
		 */
		actions?: Array<GooglePrivacyDlpV2Action>;

		/** Privacy metric to compute for reidentification risk analysis. */
		privacyMetric?: GooglePrivacyDlpV2PrivacyMetric;

		/**
		 * Message defining the location of a BigQuery table. A table is uniquely
		 * identified  by its project_id, dataset_id, and table_name. Within a query
		 * a table is often referenced with a string in the format of:
		 * `<project_id>:<dataset_id>.<table_id>` or
		 * `<project_id>.<dataset_id>.<table_id>`.
		 */
		sourceTable?: GooglePrivacyDlpV2BigQueryTable;
	}

	/**
	 * Configuration for a risk analysis job. See
	 * https://cloud.google.com/dlp/docs/concepts-risk-analysis to learn more.
	 */
	export interface GooglePrivacyDlpV2RiskAnalysisJobConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RiskAnalysisJobConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RiskAnalysisJobConfigFormProperties>({
		});

	}


	/** Request message for CreateInspectTemplate. */
	export interface GooglePrivacyDlpV2CreateInspectTemplateRequest {

		/**
		 * The inspectTemplate contains a configuration (set of types of sensitive data
		 * to be detected) to be used anywhere you otherwise would normally specify
		 * InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates
		 * to learn more.
		 */
		inspectTemplate?: GooglePrivacyDlpV2InspectTemplate;

		/**
		 * The geographic location to store the inspection template. Reserved for
		 * future extensions.
		 */
		locationId?: string | null;

		/**
		 * The template id can contain uppercase and lowercase letters,
		 * numbers, and hyphens; that is, it must match the regular
		 * expression: `[a-zA-Z\\d-_]+`. The maximum length is 100
		 * characters. Can be empty to allow the system to generate one.
		 */
		templateId?: string | null;
	}

	/** Request message for CreateInspectTemplate. */
	export interface GooglePrivacyDlpV2CreateInspectTemplateRequestFormProperties {

		/**
		 * The geographic location to store the inspection template. Reserved for
		 * future extensions.
		 */
		locationId: FormControl<string | null | undefined>,

		/**
		 * The template id can contain uppercase and lowercase letters,
		 * numbers, and hyphens; that is, it must match the regular
		 * expression: `[a-zA-Z\\d-_]+`. The maximum length is 100
		 * characters. Can be empty to allow the system to generate one.
		 */
		templateId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CreateInspectTemplateRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CreateInspectTemplateRequestFormProperties>({
			locationId: new FormControl<string | null | undefined>(undefined),
			templateId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * The inspectTemplate contains a configuration (set of types of sensitive data
	 * to be detected) to be used anywhere you otherwise would normally specify
	 * InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates
	 * to learn more.
	 */
	export interface GooglePrivacyDlpV2InspectTemplate {

		/** Output only. The creation timestamp of an inspectTemplate. */
		createTime?: string | null;

		/** Short description (max 256 chars). */
		description?: string | null;

		/** Display name (max 256 chars). */
		displayName?: string | null;

		/**
		 * Configuration description of the scanning process.
		 * When used with redactContent only info_types and min_likelihood are currently
		 * used.
		 */
		inspectConfig?: GooglePrivacyDlpV2InspectConfig;

		/**
		 * Output only. The template name.
		 * The template will have one of the following formats:
		 * `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR
		 * `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`;
		 */
		name?: string | null;

		/** Output only. The last update timestamp of an inspectTemplate. */
		updateTime?: string | null;
	}

	/**
	 * The inspectTemplate contains a configuration (set of types of sensitive data
	 * to be detected) to be used anywhere you otherwise would normally specify
	 * InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates
	 * to learn more.
	 */
	export interface GooglePrivacyDlpV2InspectTemplateFormProperties {

		/** Output only. The creation timestamp of an inspectTemplate. */
		createTime: FormControl<string | null | undefined>,

		/** Short description (max 256 chars). */
		description: FormControl<string | null | undefined>,

		/** Display name (max 256 chars). */
		displayName: FormControl<string | null | undefined>,

		/**
		 * Output only. The template name.
		 * The template will have one of the following formats:
		 * `projects/PROJECT_ID/inspectTemplates/TEMPLATE_ID` OR
		 * `organizations/ORGANIZATION_ID/inspectTemplates/TEMPLATE_ID`;
		 */
		name: FormControl<string | null | undefined>,

		/** Output only. The last update timestamp of an inspectTemplate. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InspectTemplateFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectTemplateFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CreateJobTrigger. */
	export interface GooglePrivacyDlpV2CreateJobTriggerRequest {

		/**
		 * Contains a configuration to make dlp api calls on a repeating basis.
		 * See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
		 */
		jobTrigger?: GooglePrivacyDlpV2JobTrigger;

		/**
		 * The geographic location to store the job trigger. Reserved for
		 * future extensions.
		 */
		locationId?: string | null;

		/**
		 * The trigger id can contain uppercase and lowercase letters,
		 * numbers, and hyphens; that is, it must match the regular
		 * expression: `[a-zA-Z\\d-_]+`. The maximum length is 100
		 * characters. Can be empty to allow the system to generate one.
		 */
		triggerId?: string | null;
	}

	/** Request message for CreateJobTrigger. */
	export interface GooglePrivacyDlpV2CreateJobTriggerRequestFormProperties {

		/**
		 * The geographic location to store the job trigger. Reserved for
		 * future extensions.
		 */
		locationId: FormControl<string | null | undefined>,

		/**
		 * The trigger id can contain uppercase and lowercase letters,
		 * numbers, and hyphens; that is, it must match the regular
		 * expression: `[a-zA-Z\\d-_]+`. The maximum length is 100
		 * characters. Can be empty to allow the system to generate one.
		 */
		triggerId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CreateJobTriggerRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CreateJobTriggerRequestFormProperties>({
			locationId: new FormControl<string | null | undefined>(undefined),
			triggerId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Contains a configuration to make dlp api calls on a repeating basis.
	 * See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
	 */
	export interface GooglePrivacyDlpV2JobTrigger {

		/** Output only. The creation timestamp of a triggeredJob. */
		createTime?: string | null;

		/** User provided description (max 256 chars) */
		description?: string | null;

		/** Display name (max 100 chars) */
		displayName?: string | null;

		/**
		 * Output only. A stream of errors encountered when the trigger was activated. Repeated
		 * errors may result in the JobTrigger automatically being paused.
		 * Will return the last 100 errors. Whenever the JobTrigger is modified
		 * this list will be cleared.
		 */
		errors?: Array<GooglePrivacyDlpV2Error>;

		/** Controls what and how to inspect for findings. */
		inspectJob?: GooglePrivacyDlpV2InspectJobConfig;

		/** Output only. The timestamp of the last time this trigger executed. */
		lastRunTime?: string | null;

		/**
		 * Unique resource name for the triggeredJob, assigned by the service when the
		 * triggeredJob is created, for example
		 * `projects/dlp-test-project/jobTriggers/53234423`.
		 */
		name?: string | null;

		/** Required. A status for this trigger. */
		status?: GooglePrivacyDlpV2JobTriggerStatus | null;

		/**
		 * A list of triggers which will be OR'ed together. Only one in the list
		 * needs to trigger for a job to be started. The list may contain only
		 * a single Schedule trigger and must have at least one object.
		 */
		triggers?: Array<GooglePrivacyDlpV2Trigger>;

		/** Output only. The last update timestamp of a triggeredJob. */
		updateTime?: string | null;
	}

	/**
	 * Contains a configuration to make dlp api calls on a repeating basis.
	 * See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
	 */
	export interface GooglePrivacyDlpV2JobTriggerFormProperties {

		/** Output only. The creation timestamp of a triggeredJob. */
		createTime: FormControl<string | null | undefined>,

		/** User provided description (max 256 chars) */
		description: FormControl<string | null | undefined>,

		/** Display name (max 100 chars) */
		displayName: FormControl<string | null | undefined>,

		/** Output only. The timestamp of the last time this trigger executed. */
		lastRunTime: FormControl<string | null | undefined>,

		/**
		 * Unique resource name for the triggeredJob, assigned by the service when the
		 * triggeredJob is created, for example
		 * `projects/dlp-test-project/jobTriggers/53234423`.
		 */
		name: FormControl<string | null | undefined>,

		/** Required. A status for this trigger. */
		status: FormControl<GooglePrivacyDlpV2JobTriggerStatus | null | undefined>,

		/** Output only. The last update timestamp of a triggeredJob. */
		updateTime: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2JobTriggerFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2JobTriggerFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			lastRunTime: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			status: new FormControl<GooglePrivacyDlpV2JobTriggerStatus | null | undefined>(undefined),
			updateTime: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Details information about an error encountered during job execution or
	 * the results of an unsuccessful activation of the JobTrigger.
	 */
	export interface GooglePrivacyDlpV2Error {

		/**
		 * The `Status` type defines a logical error model that is suitable for
		 * different programming environments, including REST APIs and RPC APIs. It is
		 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
		 * three pieces of data: error code, error message, and error details.
		 * You can find out more about this error model and how to work with it in the
		 * [API Design Guide](https://cloud.google.com/apis/design/errors).
		 */
		details?: GoogleRpcStatus;

		/** The times the error occurred. */
		timestamps?: Array<string>;
	}

	/**
	 * Details information about an error encountered during job execution or
	 * the results of an unsuccessful activation of the JobTrigger.
	 */
	export interface GooglePrivacyDlpV2ErrorFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ErrorFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ErrorFormProperties>({
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
	export interface GoogleRpcStatus {

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
	export interface GoogleRpcStatusFormProperties {

		/** The status code, which should be an enum value of google.rpc.Code. */
		code: FormControl<number | null | undefined>,

		/**
		 * A developer-facing error message, which should be in English. Any
		 * user-facing error message should be localized and sent in the
		 * google.rpc.Status.details field, or localized by the client.
		 */
		message: FormControl<string | null | undefined>,
	}
	export function CreateGoogleRpcStatusFormGroup() {
		return new FormGroup<GoogleRpcStatusFormProperties>({
			code: new FormControl<number | null | undefined>(undefined),
			message: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2JobTriggerStatus { STATUS_UNSPECIFIED = 0, HEALTHY = 1, PAUSED = 2, CANCELLED = 3 }


	/** What event needs to occur for a new job to be started. */
	export interface GooglePrivacyDlpV2Trigger {

		/**
		 * Job trigger option for hybrid jobs. Jobs must be manually created
		 * and finished.
		 */
		manual?: GooglePrivacyDlpV2Manual;

		/** Schedule for triggeredJobs. */
		schedule?: GooglePrivacyDlpV2Schedule;
	}

	/** What event needs to occur for a new job to be started. */
	export interface GooglePrivacyDlpV2TriggerFormProperties {
	}
	export function CreateGooglePrivacyDlpV2TriggerFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TriggerFormProperties>({
		});

	}


	/**
	 * Job trigger option for hybrid jobs. Jobs must be manually created
	 * and finished.
	 */
	export interface GooglePrivacyDlpV2Manual {
	}

	/**
	 * Job trigger option for hybrid jobs. Jobs must be manually created
	 * and finished.
	 */
	export interface GooglePrivacyDlpV2ManualFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ManualFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ManualFormProperties>({
		});

	}


	/** Schedule for triggeredJobs. */
	export interface GooglePrivacyDlpV2Schedule {

		/**
		 * With this option a job is started a regular periodic basis. For
		 * example: every day (86400 seconds).
		 * A scheduled start time will be skipped if the previous
		 * execution has not ended when its scheduled time occurs.
		 * This value must be set to a time duration greater than or equal
		 * to 1 day and can be no longer than 60 days.
		 */
		recurrencePeriodDuration?: string | null;
	}

	/** Schedule for triggeredJobs. */
	export interface GooglePrivacyDlpV2ScheduleFormProperties {

		/**
		 * With this option a job is started a regular periodic basis. For
		 * example: every day (86400 seconds).
		 * A scheduled start time will be skipped if the previous
		 * execution has not ended when its scheduled time occurs.
		 * This value must be set to a time duration greater than or equal
		 * to 1 day and can be no longer than 60 days.
		 */
		recurrencePeriodDuration: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ScheduleFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ScheduleFormProperties>({
			recurrencePeriodDuration: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for CreateStoredInfoType. */
	export interface GooglePrivacyDlpV2CreateStoredInfoTypeRequest {

		/**
		 * Configuration for stored infoTypes. All fields and subfield are provided
		 * by the user. For more information, see
		 * https://cloud.google.com/dlp/docs/creating-custom-infotypes.
		 */
		config?: GooglePrivacyDlpV2StoredInfoTypeConfig;

		/**
		 * The geographic location to store the stored infoType. Reserved for
		 * future extensions.
		 */
		locationId?: string | null;

		/**
		 * The storedInfoType ID can contain uppercase and lowercase letters,
		 * numbers, and hyphens; that is, it must match the regular
		 * expression: `[a-zA-Z\\d-_]+`. The maximum length is 100
		 * characters. Can be empty to allow the system to generate one.
		 */
		storedInfoTypeId?: string | null;
	}

	/** Request message for CreateStoredInfoType. */
	export interface GooglePrivacyDlpV2CreateStoredInfoTypeRequestFormProperties {

		/**
		 * The geographic location to store the stored infoType. Reserved for
		 * future extensions.
		 */
		locationId: FormControl<string | null | undefined>,

		/**
		 * The storedInfoType ID can contain uppercase and lowercase letters,
		 * numbers, and hyphens; that is, it must match the regular
		 * expression: `[a-zA-Z\\d-_]+`. The maximum length is 100
		 * characters. Can be empty to allow the system to generate one.
		 */
		storedInfoTypeId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2CreateStoredInfoTypeRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2CreateStoredInfoTypeRequestFormProperties>({
			locationId: new FormControl<string | null | undefined>(undefined),
			storedInfoTypeId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Configuration for stored infoTypes. All fields and subfield are provided
	 * by the user. For more information, see
	 * https://cloud.google.com/dlp/docs/creating-custom-infotypes.
	 */
	export interface GooglePrivacyDlpV2StoredInfoTypeConfig {

		/** Description of the StoredInfoType (max 256 characters). */
		description?: string | null;

		/**
		 * Custom information type based on a dictionary of words or phrases. This can
		 * be used to match sensitive information specific to the data, such as a list
		 * of employee IDs or job titles.
		 * Dictionary words are case-insensitive and all characters other than letters
		 * and digits in the unicode [Basic Multilingual
		 * Plane](https://en.wikipedia.org/wiki/Plane_%28Unicode%29#Basic_Multilingual_Plane)
		 * will be replaced with whitespace when scanning for matches, so the
		 * dictionary phrase "Sam Johnson" will match all three phrases "sam johnson",
		 * "Sam, Johnson", and "Sam (Johnson)". Additionally, the characters
		 * surrounding any match must be of a different type than the adjacent
		 * characters within the word, so letters must be next to non-letters and
		 * digits next to non-digits. For example, the dictionary word "jen" will
		 * match the first three letters of the text "jen123" but will return no
		 * matches for "jennifer".
		 * Dictionary words containing a large number of characters that are not
		 * letters or digits may result in unexpected findings because such characters
		 * are treated as whitespace. The
		 * [limits](https://cloud.google.com/dlp/limits) page contains details about
		 * the size limits of dictionaries. For dictionaries that do not fit within
		 * these constraints, consider using `LargeCustomDictionaryConfig` in the
		 * `StoredInfoType` API.
		 */
		dictionary?: GooglePrivacyDlpV2Dictionary;

		/** Display name of the StoredInfoType (max 256 characters). */
		displayName?: string | null;

		/**
		 * Configuration for a custom dictionary created from a data source of any size
		 * up to the maximum size defined in the
		 * [limits](https://cloud.google.com/dlp/limits) page. The artifacts of
		 * dictionary creation are stored in the specified Google Cloud Storage
		 * location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries
		 * that satisfy the size requirements.
		 */
		largeCustomDictionary?: GooglePrivacyDlpV2LargeCustomDictionaryConfig;

		/** Message defining a custom regular expression. */
		regex?: GooglePrivacyDlpV2Regex;
	}

	/**
	 * Configuration for stored infoTypes. All fields and subfield are provided
	 * by the user. For more information, see
	 * https://cloud.google.com/dlp/docs/creating-custom-infotypes.
	 */
	export interface GooglePrivacyDlpV2StoredInfoTypeConfigFormProperties {

		/** Description of the StoredInfoType (max 256 characters). */
		description: FormControl<string | null | undefined>,

		/** Display name of the StoredInfoType (max 256 characters). */
		displayName: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2StoredInfoTypeConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2StoredInfoTypeConfigFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Configuration for a custom dictionary created from a data source of any size
	 * up to the maximum size defined in the
	 * [limits](https://cloud.google.com/dlp/limits) page. The artifacts of
	 * dictionary creation are stored in the specified Google Cloud Storage
	 * location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries
	 * that satisfy the size requirements.
	 */
	export interface GooglePrivacyDlpV2LargeCustomDictionaryConfig {

		/** Message defining a field of a BigQuery table. */
		bigQueryField?: GooglePrivacyDlpV2BigQueryField;

		/** Message representing a set of files in Cloud Storage. */
		cloudStorageFileSet?: GooglePrivacyDlpV2CloudStorageFileSet;

		/** Message representing a single file or path in Cloud Storage. */
		outputPath?: GooglePrivacyDlpV2CloudStoragePath;
	}

	/**
	 * Configuration for a custom dictionary created from a data source of any size
	 * up to the maximum size defined in the
	 * [limits](https://cloud.google.com/dlp/limits) page. The artifacts of
	 * dictionary creation are stored in the specified Google Cloud Storage
	 * location. Consider using `CustomInfoType.Dictionary` for smaller dictionaries
	 * that satisfy the size requirements.
	 */
	export interface GooglePrivacyDlpV2LargeCustomDictionaryConfigFormProperties {
	}
	export function CreateGooglePrivacyDlpV2LargeCustomDictionaryConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LargeCustomDictionaryConfigFormProperties>({
		});

	}


	/**
	 * Message for a date time object.
	 * e.g. 2018-01-01, 5th August.
	 */
	export interface GooglePrivacyDlpV2DateTime {

		/**
		 * Represents a whole or partial calendar date, e.g. a birthday. The time of day
		 * and time zone are either specified elsewhere or are not significant. The date
		 * is relative to the Proleptic Gregorian Calendar. This can represent:
		 * * A full date, with non-zero year, month and day values
		 * * A month and day value, with a zero year, e.g. an anniversary
		 * * A year on its own, with zero month and day values
		 * * A year and month value, with a zero day, e.g. a credit card expiration date
		 * Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
		 */
		date?: GoogleTypeDate;

		/** Day of week */
		dayOfWeek?: GooglePrivacyDlpV2ValueDayOfWeekValue | null;

		/**
		 * Represents a time of day. The date and time zone are either not significant
		 * or are specified elsewhere. An API may choose to allow leap seconds. Related
		 * types are google.type.Date and `google.protobuf.Timestamp`.
		 */
		time?: GoogleTypeTimeOfDay;

		/** Time zone of the date time object. */
		timeZone?: GooglePrivacyDlpV2TimeZone;
	}

	/**
	 * Message for a date time object.
	 * e.g. 2018-01-01, 5th August.
	 */
	export interface GooglePrivacyDlpV2DateTimeFormProperties {

		/** Day of week */
		dayOfWeek: FormControl<GooglePrivacyDlpV2ValueDayOfWeekValue | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DateTimeFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DateTimeFormProperties>({
			dayOfWeek: new FormControl<GooglePrivacyDlpV2ValueDayOfWeekValue | null | undefined>(undefined),
		});

	}


	/** Time zone of the date time object. */
	export interface GooglePrivacyDlpV2TimeZone {

		/**
		 * Set only if the offset can be determined. Positive for time ahead of UTC.
		 * E.g. For "UTC-9", this value is -540.
		 */
		offsetMinutes?: number | null;
	}

	/** Time zone of the date time object. */
	export interface GooglePrivacyDlpV2TimeZoneFormProperties {

		/**
		 * Set only if the offset can be determined. Positive for time ahead of UTC.
		 * E.g. For "UTC-9", this value is -540.
		 */
		offsetMinutes: FormControl<number | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TimeZoneFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TimeZoneFormProperties>({
			offsetMinutes: new FormControl<number | null | undefined>(undefined),
		});

	}


	/** Request to de-identify a list of items. */
	export interface GooglePrivacyDlpV2DeidentifyContentRequest {

		/** The configuration that controls how the data will change. */
		deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;

		/**
		 * Template to use. Any configuration directly specified in
		 * deidentify_config will override those set in the template. Singular fields
		 * that are set in this request will replace their corresponding fields in the
		 * template. Repeated fields are appended. Singular sub-messages and groups
		 * are recursively merged.
		 */
		deidentifyTemplateName?: string | null;

		/**
		 * Configuration description of the scanning process.
		 * When used with redactContent only info_types and min_likelihood are currently
		 * used.
		 */
		inspectConfig?: GooglePrivacyDlpV2InspectConfig;

		/**
		 * Template to use. Any configuration directly specified in
		 * inspect_config will override those set in the template. Singular fields
		 * that are set in this request will replace their corresponding fields in the
		 * template. Repeated fields are appended. Singular sub-messages and groups
		 * are recursively merged.
		 */
		inspectTemplateName?: string | null;

		/** Container structure for the content to inspect. */
		item?: GooglePrivacyDlpV2ContentItem;

		/**
		 * The geographic location to process de-identification. Reserved for future
		 * extensions.
		 */
		locationId?: string | null;
	}

	/** Request to de-identify a list of items. */
	export interface GooglePrivacyDlpV2DeidentifyContentRequestFormProperties {

		/**
		 * Template to use. Any configuration directly specified in
		 * deidentify_config will override those set in the template. Singular fields
		 * that are set in this request will replace their corresponding fields in the
		 * template. Repeated fields are appended. Singular sub-messages and groups
		 * are recursively merged.
		 */
		deidentifyTemplateName: FormControl<string | null | undefined>,

		/**
		 * Template to use. Any configuration directly specified in
		 * inspect_config will override those set in the template. Singular fields
		 * that are set in this request will replace their corresponding fields in the
		 * template. Repeated fields are appended. Singular sub-messages and groups
		 * are recursively merged.
		 */
		inspectTemplateName: FormControl<string | null | undefined>,

		/**
		 * The geographic location to process de-identification. Reserved for future
		 * extensions.
		 */
		locationId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DeidentifyContentRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeidentifyContentRequestFormProperties>({
			deidentifyTemplateName: new FormControl<string | null | undefined>(undefined),
			inspectTemplateName: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of de-identifying a ContentItem. */
	export interface GooglePrivacyDlpV2DeidentifyContentResponse {

		/** Container structure for the content to inspect. */
		item?: GooglePrivacyDlpV2ContentItem;

		/** Overview of the modifications that occurred. */
		overview?: GooglePrivacyDlpV2TransformationOverview;
	}

	/** Results of de-identifying a ContentItem. */
	export interface GooglePrivacyDlpV2DeidentifyContentResponseFormProperties {
	}
	export function CreateGooglePrivacyDlpV2DeidentifyContentResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DeidentifyContentResponseFormProperties>({
		});

	}


	/** Overview of the modifications that occurred. */
	export interface GooglePrivacyDlpV2TransformationOverview {

		/** Transformations applied to the dataset. */
		transformationSummaries?: Array<GooglePrivacyDlpV2TransformationSummary>;

		/** Total size in bytes that were transformed in some way. */
		transformedBytes?: string | null;
	}

	/** Overview of the modifications that occurred. */
	export interface GooglePrivacyDlpV2TransformationOverviewFormProperties {

		/** Total size in bytes that were transformed in some way. */
		transformedBytes: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TransformationOverviewFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TransformationOverviewFormProperties>({
			transformedBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Summary of a single transformation.
	 * Only one of 'transformation', 'field_transformation', or 'record_suppress'
	 * will be set.
	 */
	export interface GooglePrivacyDlpV2TransformationSummary {

		/** General identifier of a data field in a storage service. */
		field?: GooglePrivacyDlpV2FieldId;

		/**
		 * The field transformation that was applied.
		 * If multiple field transformations are requested for a single field,
		 * this list will contain all of them; otherwise, only one is supplied.
		 */
		fieldTransformations?: Array<GooglePrivacyDlpV2FieldTransformation>;

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;

		/**
		 * Configuration to suppress records whose suppression conditions evaluate to
		 * true.
		 */
		recordSuppress?: GooglePrivacyDlpV2RecordSuppression;

		/** Collection of all transformations that took place or had an error. */
		results?: Array<GooglePrivacyDlpV2SummaryResult>;

		/** A rule for transforming a value. */
		transformation?: GooglePrivacyDlpV2PrimitiveTransformation;

		/** Total size in bytes that were transformed in some way. */
		transformedBytes?: string | null;
	}

	/**
	 * Summary of a single transformation.
	 * Only one of 'transformation', 'field_transformation', or 'record_suppress'
	 * will be set.
	 */
	export interface GooglePrivacyDlpV2TransformationSummaryFormProperties {

		/** Total size in bytes that were transformed in some way. */
		transformedBytes: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2TransformationSummaryFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2TransformationSummaryFormProperties>({
			transformedBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * A collection that informs the user the number of times a particular
	 * `TransformationResultCode` and error details occurred.
	 */
	export interface GooglePrivacyDlpV2SummaryResult {

		/** Outcome of the transformation. */
		code?: GooglePrivacyDlpV2SummaryResultCode | null;

		/** Number of transformations counted by this result. */
		count?: string | null;

		/**
		 * A place for warnings or errors to show up if a transformation didn't
		 * work as expected.
		 */
		details?: string | null;
	}

	/**
	 * A collection that informs the user the number of times a particular
	 * `TransformationResultCode` and error details occurred.
	 */
	export interface GooglePrivacyDlpV2SummaryResultFormProperties {

		/** Outcome of the transformation. */
		code: FormControl<GooglePrivacyDlpV2SummaryResultCode | null | undefined>,

		/** Number of transformations counted by this result. */
		count: FormControl<string | null | undefined>,

		/**
		 * A place for warnings or errors to show up if a transformation didn't
		 * work as expected.
		 */
		details: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2SummaryResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2SummaryResultFormProperties>({
			code: new FormControl<GooglePrivacyDlpV2SummaryResultCode | null | undefined>(undefined),
			count: new FormControl<string | null | undefined>(undefined),
			details: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2SummaryResultCode { TRANSFORMATION_RESULT_CODE_UNSPECIFIED = 0, SUCCESS = 1, ERROR = 2 }


	/** Combines all of the information about a DLP job. */
	export interface GooglePrivacyDlpV2DlpJob {

		/** Time when the job was created. */
		createTime?: string | null;

		/** Time when the job finished. */
		endTime?: string | null;

		/** A stream of errors encountered running the job. */
		errors?: Array<GooglePrivacyDlpV2Error>;

		/** The results of an inspect DataSource job. */
		inspectDetails?: GooglePrivacyDlpV2InspectDataSourceDetails;

		/**
		 * If created by a job trigger, the resource name of the trigger that
		 * instantiated the job.
		 */
		jobTriggerName?: string | null;

		/** The server-assigned name. */
		name?: string | null;

		/** Result of a risk analysis operation request. */
		riskDetails?: GooglePrivacyDlpV2AnalyzeDataSourceRiskDetails;

		/** Time when the job started. */
		startTime?: string | null;

		/** State of a job. */
		state?: GooglePrivacyDlpV2DlpJobState | null;

		/** The type of job. */
		type?: GooglePrivacyDlpV2DlpJobType | null;
	}

	/** Combines all of the information about a DLP job. */
	export interface GooglePrivacyDlpV2DlpJobFormProperties {

		/** Time when the job was created. */
		createTime: FormControl<string | null | undefined>,

		/** Time when the job finished. */
		endTime: FormControl<string | null | undefined>,

		/**
		 * If created by a job trigger, the resource name of the trigger that
		 * instantiated the job.
		 */
		jobTriggerName: FormControl<string | null | undefined>,

		/** The server-assigned name. */
		name: FormControl<string | null | undefined>,

		/** Time when the job started. */
		startTime: FormControl<string | null | undefined>,

		/** State of a job. */
		state: FormControl<GooglePrivacyDlpV2DlpJobState | null | undefined>,

		/** The type of job. */
		type: FormControl<GooglePrivacyDlpV2DlpJobType | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2DlpJobFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2DlpJobFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			endTime: new FormControl<string | null | undefined>(undefined),
			jobTriggerName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			startTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GooglePrivacyDlpV2DlpJobState | null | undefined>(undefined),
			type: new FormControl<GooglePrivacyDlpV2DlpJobType | null | undefined>(undefined),
		});

	}


	/** The results of an inspect DataSource job. */
	export interface GooglePrivacyDlpV2InspectDataSourceDetails {

		/** Snapshot of the inspection configuration. */
		requestedOptions?: GooglePrivacyDlpV2RequestedOptions;

		/** All result fields mentioned below are updated while the job is processing. */
		result?: GooglePrivacyDlpV2Result;
	}

	/** The results of an inspect DataSource job. */
	export interface GooglePrivacyDlpV2InspectDataSourceDetailsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2InspectDataSourceDetailsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectDataSourceDetailsFormProperties>({
		});

	}


	/** Snapshot of the inspection configuration. */
	export interface GooglePrivacyDlpV2RequestedOptions {

		/** Controls what and how to inspect for findings. */
		jobConfig?: GooglePrivacyDlpV2InspectJobConfig;

		/**
		 * The inspectTemplate contains a configuration (set of types of sensitive data
		 * to be detected) to be used anywhere you otherwise would normally specify
		 * InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates
		 * to learn more.
		 */
		snapshotInspectTemplate?: GooglePrivacyDlpV2InspectTemplate;
	}

	/** Snapshot of the inspection configuration. */
	export interface GooglePrivacyDlpV2RequestedOptionsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2RequestedOptionsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RequestedOptionsFormProperties>({
		});

	}


	/** All result fields mentioned below are updated while the job is processing. */
	export interface GooglePrivacyDlpV2Result {

		/** Statistics related to processing hybrid inspect requests. */
		hybridStats?: GooglePrivacyDlpV2HybridInspectStatistics;

		/**
		 * Statistics of how many instances of each info type were found during
		 * inspect job.
		 */
		infoTypeStats?: Array<GooglePrivacyDlpV2InfoTypeStats>;

		/** Total size in bytes that were processed. */
		processedBytes?: string | null;

		/** Estimate of the number of bytes to process. */
		totalEstimatedBytes?: string | null;
	}

	/** All result fields mentioned below are updated while the job is processing. */
	export interface GooglePrivacyDlpV2ResultFormProperties {

		/** Total size in bytes that were processed. */
		processedBytes: FormControl<string | null | undefined>,

		/** Estimate of the number of bytes to process. */
		totalEstimatedBytes: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ResultFormProperties>({
			processedBytes: new FormControl<string | null | undefined>(undefined),
			totalEstimatedBytes: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statistics related to processing hybrid inspect requests. */
	export interface GooglePrivacyDlpV2HybridInspectStatistics {

		/**
		 * The number of hybrid inspection requests aborted because the job ran
		 * out of quota or was ended before they could be processed.
		 */
		abortedCount?: string | null;

		/**
		 * The number of hybrid requests currently being processed. Only populated
		 * when called via method `getDlpJob`.
		 * A burst of traffic may cause hybrid inspect requests to be enqueued.
		 * Processing will take place as quickly as possible, but resource limitations
		 * may impact how long a request is enqueued for.
		 */
		pendingCount?: string | null;

		/** The number of hybrid inspection requests processed within this job. */
		processedCount?: string | null;
	}

	/** Statistics related to processing hybrid inspect requests. */
	export interface GooglePrivacyDlpV2HybridInspectStatisticsFormProperties {

		/**
		 * The number of hybrid inspection requests aborted because the job ran
		 * out of quota or was ended before they could be processed.
		 */
		abortedCount: FormControl<string | null | undefined>,

		/**
		 * The number of hybrid requests currently being processed. Only populated
		 * when called via method `getDlpJob`.
		 * A burst of traffic may cause hybrid inspect requests to be enqueued.
		 * Processing will take place as quickly as possible, but resource limitations
		 * may impact how long a request is enqueued for.
		 */
		pendingCount: FormControl<string | null | undefined>,

		/** The number of hybrid inspection requests processed within this job. */
		processedCount: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2HybridInspectStatisticsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2HybridInspectStatisticsFormProperties>({
			abortedCount: new FormControl<string | null | undefined>(undefined),
			pendingCount: new FormControl<string | null | undefined>(undefined),
			processedCount: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Statistics regarding a specific InfoType. */
	export interface GooglePrivacyDlpV2InfoTypeStats {

		/** Number of findings for this infoType. */
		count?: string | null;

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;
	}

	/** Statistics regarding a specific InfoType. */
	export interface GooglePrivacyDlpV2InfoTypeStatsFormProperties {

		/** Number of findings for this infoType. */
		count: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InfoTypeStatsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InfoTypeStatsFormProperties>({
			count: new FormControl<string | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2DlpJobState { JOB_STATE_UNSPECIFIED = 0, PENDING = 1, RUNNING = 2, DONE = 3, CANCELED = 4, FAILED = 5, ACTIVE = 6 }

	export enum GooglePrivacyDlpV2DlpJobType { DLP_JOB_TYPE_UNSPECIFIED = 0, INSPECT_JOB = 1, RISK_ANALYSIS_JOB = 2 }


	/** Represents a piece of potentially sensitive content. */
	export interface GooglePrivacyDlpV2Finding {

		/** Timestamp when finding was detected. */
		createTime?: string | null;

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;

		/** Time the job started that produced this finding. */
		jobCreateTime?: string | null;

		/** The job that stored the finding. */
		jobName?: string | null;

		/**
		 * The labels associated with this `Finding`.
		 * Label keys must be between 1 and 63 characters long and must conform
		 * to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`.
		 * Label values must be between 0 and 63 characters long and must conform
		 * to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.
		 * No more than 10 labels can be associated with a given finding.
		 * Examples:
		 * * `"environment" : "production"`
		 * * `"pipeline" : "etl"`
		 */
		labels?: {[id: string]: string };

		/** Confidence of how likely it is that the `info_type` is correct. */
		likelihood?: GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null;

		/** Specifies the location of the finding. */
		location?: GooglePrivacyDlpV2Location;

		/**
		 * Resource name in format
		 * projects/{project}/locations/{location}/findings/{finding} Populated only
		 * when viewing persisted findings.
		 */
		name?: string | null;

		/**
		 * The content that was found. Even if the content is not textual, it
		 * may be converted to a textual representation here.
		 * Provided if `include_quote` is true and the finding is
		 * less than or equal to 4096 bytes long. If the finding exceeds 4096 bytes
		 * in length, the quote may be omitted.
		 */
		quote?: string | null;

		/** Message for infoType-dependent details parsed from quote. */
		quoteInfo?: GooglePrivacyDlpV2QuoteInfo;

		/** The job that stored the finding. */
		resourceName?: string | null;

		/** Job trigger name, if applicable, for this finding. */
		triggerName?: string | null;
	}

	/** Represents a piece of potentially sensitive content. */
	export interface GooglePrivacyDlpV2FindingFormProperties {

		/** Timestamp when finding was detected. */
		createTime: FormControl<string | null | undefined>,

		/** Time the job started that produced this finding. */
		jobCreateTime: FormControl<string | null | undefined>,

		/** The job that stored the finding. */
		jobName: FormControl<string | null | undefined>,

		/**
		 * The labels associated with this `Finding`.
		 * Label keys must be between 1 and 63 characters long and must conform
		 * to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`.
		 * Label values must be between 0 and 63 characters long and must conform
		 * to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.
		 * No more than 10 labels can be associated with a given finding.
		 * Examples:
		 * * `"environment" : "production"`
		 * * `"pipeline" : "etl"`
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/** Confidence of how likely it is that the `info_type` is correct. */
		likelihood: FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>,

		/**
		 * Resource name in format
		 * projects/{project}/locations/{location}/findings/{finding} Populated only
		 * when viewing persisted findings.
		 */
		name: FormControl<string | null | undefined>,

		/**
		 * The content that was found. Even if the content is not textual, it
		 * may be converted to a textual representation here.
		 * Provided if `include_quote` is true and the finding is
		 * less than or equal to 4096 bytes long. If the finding exceeds 4096 bytes
		 * in length, the quote may be omitted.
		 */
		quote: FormControl<string | null | undefined>,

		/** The job that stored the finding. */
		resourceName: FormControl<string | null | undefined>,

		/** Job trigger name, if applicable, for this finding. */
		triggerName: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2FindingFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2FindingFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			jobCreateTime: new FormControl<string | null | undefined>(undefined),
			jobName: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			likelihood: new FormControl<GooglePrivacyDlpV2LikelihoodAdjustmentFixedLikelihood | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
			quote: new FormControl<string | null | undefined>(undefined),
			resourceName: new FormControl<string | null | undefined>(undefined),
			triggerName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Specifies the location of the finding. */
	export interface GooglePrivacyDlpV2Location {

		/** Generic half-open interval [start, end) */
		byteRange?: GooglePrivacyDlpV2Range;

		/** Generic half-open interval [start, end) */
		codepointRange?: GooglePrivacyDlpV2Range;

		/**
		 * Represents a container that may contain DLP findings.
		 * Examples of a container include a file, table, or database record.
		 */
		container?: GooglePrivacyDlpV2Container;

		/**
		 * List of nested objects pointing to the precise location of the finding
		 * within the file or record.
		 */
		contentLocations?: Array<GooglePrivacyDlpV2ContentLocation>;
	}

	/** Specifies the location of the finding. */
	export interface GooglePrivacyDlpV2LocationFormProperties {
	}
	export function CreateGooglePrivacyDlpV2LocationFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LocationFormProperties>({
		});

	}


	/** Generic half-open interval [start, end) */
	export interface GooglePrivacyDlpV2Range {

		/** Index of the last character of the range (exclusive). */
		end?: string | null;

		/** Index of the first character of the range (inclusive). */
		start?: string | null;
	}

	/** Generic half-open interval [start, end) */
	export interface GooglePrivacyDlpV2RangeFormProperties {

		/** Index of the last character of the range (exclusive). */
		end: FormControl<string | null | undefined>,

		/** Index of the first character of the range (inclusive). */
		start: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2RangeFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RangeFormProperties>({
			end: new FormControl<string | null | undefined>(undefined),
			start: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Message for infoType-dependent details parsed from quote. */
	export interface GooglePrivacyDlpV2QuoteInfo {

		/**
		 * Message for a date time object.
		 * e.g. 2018-01-01, 5th August.
		 */
		dateTime?: GooglePrivacyDlpV2DateTime;
	}

	/** Message for infoType-dependent details parsed from quote. */
	export interface GooglePrivacyDlpV2QuoteInfoFormProperties {
	}
	export function CreateGooglePrivacyDlpV2QuoteInfoFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2QuoteInfoFormProperties>({
		});

	}


	/** The request message for finishing a DLP hybrid job. */
	export interface GooglePrivacyDlpV2FinishDlpJobRequest {
	}

	/** The request message for finishing a DLP hybrid job. */
	export interface GooglePrivacyDlpV2FinishDlpJobRequestFormProperties {
	}
	export function CreateGooglePrivacyDlpV2FinishDlpJobRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2FinishDlpJobRequestFormProperties>({
		});

	}


	/**
	 * An individual hybrid item to inspect. Will be stored temporarily during
	 * processing.
	 */
	export interface GooglePrivacyDlpV2HybridContentItem {

		/** Populate to associate additional data with each finding. */
		findingDetails?: GooglePrivacyDlpV2HybridFindingDetails;

		/** Container structure for the content to inspect. */
		item?: GooglePrivacyDlpV2ContentItem;
	}

	/**
	 * An individual hybrid item to inspect. Will be stored temporarily during
	 * processing.
	 */
	export interface GooglePrivacyDlpV2HybridContentItemFormProperties {
	}
	export function CreateGooglePrivacyDlpV2HybridContentItemFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2HybridContentItemFormProperties>({
		});

	}


	/** Populate to associate additional data with each finding. */
	export interface GooglePrivacyDlpV2HybridFindingDetails {

		/**
		 * Represents a container that may contain DLP findings.
		 * Examples of a container include a file, table, or database record.
		 */
		containerDetails?: GooglePrivacyDlpV2Container;

		/**
		 * Offset in bytes of the line, from the beginning of the file, where the
		 * finding  is located. Populate if the item being scanned is only part of a
		 * bigger item, such as a shard of a file and you want to track the absolute
		 * position of the finding.
		 */
		fileOffset?: string | null;

		/**
		 * Labels to represent user provided metadata about the data being inspected.
		 * If configured by the job, some key values may be required.
		 * The labels associated with `Finding`'s produced by hybrid
		 * inspection.
		 * Label keys must be between 1 and 63 characters long and must conform
		 * to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`.
		 * Label values must be between 0 and 63 characters long and must conform
		 * to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.
		 * No more than 10 labels can be associated with a given finding.
		 * Examples:
		 * * `"environment" : "production"`
		 * * `"pipeline" : "etl"`
		 */
		labels?: {[id: string]: string };

		/**
		 * Offset of the row for tables. Populate if the row(s) being scanned are
		 * part of a bigger dataset and you want to keep track of their absolute
		 * position.
		 */
		rowOffset?: string | null;

		/** Instructions regarding the table content being inspected. */
		tableOptions?: GooglePrivacyDlpV2TableOptions;
	}

	/** Populate to associate additional data with each finding. */
	export interface GooglePrivacyDlpV2HybridFindingDetailsFormProperties {

		/**
		 * Offset in bytes of the line, from the beginning of the file, where the
		 * finding  is located. Populate if the item being scanned is only part of a
		 * bigger item, such as a shard of a file and you want to track the absolute
		 * position of the finding.
		 */
		fileOffset: FormControl<string | null | undefined>,

		/**
		 * Labels to represent user provided metadata about the data being inspected.
		 * If configured by the job, some key values may be required.
		 * The labels associated with `Finding`'s produced by hybrid
		 * inspection.
		 * Label keys must be between 1 and 63 characters long and must conform
		 * to the following regular expression: `[a-z]([-a-z0-9]*[a-z0-9])?`.
		 * Label values must be between 0 and 63 characters long and must conform
		 * to the regular expression `([a-z]([-a-z0-9]*[a-z0-9])?)?`.
		 * No more than 10 labels can be associated with a given finding.
		 * Examples:
		 * * `"environment" : "production"`
		 * * `"pipeline" : "etl"`
		 */
		labels: FormControl<{[id: string]: string } | null | undefined>,

		/**
		 * Offset of the row for tables. Populate if the row(s) being scanned are
		 * part of a bigger dataset and you want to keep track of their absolute
		 * position.
		 */
		rowOffset: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2HybridFindingDetailsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2HybridFindingDetailsFormProperties>({
			fileOffset: new FormControl<string | null | undefined>(undefined),
			labels: new FormControl<{[id: string]: string } | null | undefined>(undefined),
			rowOffset: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to search for potentially sensitive info in a custom location. */
	export interface GooglePrivacyDlpV2HybridInspectDlpJobRequest {

		/**
		 * An individual hybrid item to inspect. Will be stored temporarily during
		 * processing.
		 */
		hybridItem?: GooglePrivacyDlpV2HybridContentItem;
	}

	/** Request to search for potentially sensitive info in a custom location. */
	export interface GooglePrivacyDlpV2HybridInspectDlpJobRequestFormProperties {
	}
	export function CreateGooglePrivacyDlpV2HybridInspectDlpJobRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2HybridInspectDlpJobRequestFormProperties>({
		});

	}


	/** Request to search for potentially sensitive info in a custom location. */
	export interface GooglePrivacyDlpV2HybridInspectJobTriggerRequest {

		/**
		 * An individual hybrid item to inspect. Will be stored temporarily during
		 * processing.
		 */
		hybridItem?: GooglePrivacyDlpV2HybridContentItem;
	}

	/** Request to search for potentially sensitive info in a custom location. */
	export interface GooglePrivacyDlpV2HybridInspectJobTriggerRequestFormProperties {
	}
	export function CreateGooglePrivacyDlpV2HybridInspectJobTriggerRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2HybridInspectJobTriggerRequestFormProperties>({
		});

	}


	/** Quota exceeded errors will be thrown once quota has been met. */
	export interface GooglePrivacyDlpV2HybridInspectResponse {
	}

	/** Quota exceeded errors will be thrown once quota has been met. */
	export interface GooglePrivacyDlpV2HybridInspectResponseFormProperties {
	}
	export function CreateGooglePrivacyDlpV2HybridInspectResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2HybridInspectResponseFormProperties>({
		});

	}


	/** Configuration for determining how redaction of images should occur. */
	export interface GooglePrivacyDlpV2ImageRedactionConfig {

		/** Type of information detected by the API. */
		infoType?: GooglePrivacyDlpV2InfoType;

		/**
		 * If true, all text found in the image, regardless whether it matches an
		 * info_type, is redacted. Only one should be provided.
		 */
		redactAllText?: boolean | null;

		/** Represents a color in the RGB color space. */
		redactionColor?: GooglePrivacyDlpV2Color;
	}

	/** Configuration for determining how redaction of images should occur. */
	export interface GooglePrivacyDlpV2ImageRedactionConfigFormProperties {

		/**
		 * If true, all text found in the image, regardless whether it matches an
		 * info_type, is redacted. Only one should be provided.
		 */
		redactAllText: FormControl<boolean | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ImageRedactionConfigFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ImageRedactionConfigFormProperties>({
			redactAllText: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** InfoType description. */
	export interface GooglePrivacyDlpV2InfoTypeDescription {

		/**
		 * Description of the infotype. Translated when language is provided in the
		 * request.
		 */
		description?: string | null;

		/** Human readable form of the infoType name. */
		displayName?: string | null;

		/** Internal name of the infoType. */
		name?: string | null;

		/** Which parts of the API supports this InfoType. */
		supportedBy?: Array<string>;
	}

	/** InfoType description. */
	export interface GooglePrivacyDlpV2InfoTypeDescriptionFormProperties {

		/**
		 * Description of the infotype. Translated when language is provided in the
		 * request.
		 */
		description: FormControl<string | null | undefined>,

		/** Human readable form of the infoType name. */
		displayName: FormControl<string | null | undefined>,

		/** Internal name of the infoType. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InfoTypeDescriptionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InfoTypeDescriptionFormProperties>({
			description: new FormControl<string | null | undefined>(undefined),
			displayName: new FormControl<string | null | undefined>(undefined),
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to search for potentially sensitive info in a ContentItem. */
	export interface GooglePrivacyDlpV2InspectContentRequest {

		/**
		 * Configuration description of the scanning process.
		 * When used with redactContent only info_types and min_likelihood are currently
		 * used.
		 */
		inspectConfig?: GooglePrivacyDlpV2InspectConfig;

		/**
		 * Template to use. Any configuration directly specified in
		 * inspect_config will override those set in the template. Singular fields
		 * that are set in this request will replace their corresponding fields in the
		 * template. Repeated fields are appended. Singular sub-messages and groups
		 * are recursively merged.
		 */
		inspectTemplateName?: string | null;

		/** Container structure for the content to inspect. */
		item?: GooglePrivacyDlpV2ContentItem;

		/**
		 * The geographic location to process content inspection. Reserved for future
		 * extensions.
		 * When inspecting images location is restricted to 'global', 'us', 'asia',
		 * and 'europe'.
		 */
		locationId?: string | null;
	}

	/** Request to search for potentially sensitive info in a ContentItem. */
	export interface GooglePrivacyDlpV2InspectContentRequestFormProperties {

		/**
		 * Template to use. Any configuration directly specified in
		 * inspect_config will override those set in the template. Singular fields
		 * that are set in this request will replace their corresponding fields in the
		 * template. Repeated fields are appended. Singular sub-messages and groups
		 * are recursively merged.
		 */
		inspectTemplateName: FormControl<string | null | undefined>,

		/**
		 * The geographic location to process content inspection. Reserved for future
		 * extensions.
		 * When inspecting images location is restricted to 'global', 'us', 'asia',
		 * and 'europe'.
		 */
		locationId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InspectContentRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectContentRequestFormProperties>({
			inspectTemplateName: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of inspecting an item. */
	export interface GooglePrivacyDlpV2InspectContentResponse {

		/** All the findings for a single scanned item. */
		result?: GooglePrivacyDlpV2InspectResult;
	}

	/** Results of inspecting an item. */
	export interface GooglePrivacyDlpV2InspectContentResponseFormProperties {
	}
	export function CreateGooglePrivacyDlpV2InspectContentResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectContentResponseFormProperties>({
		});

	}


	/** All the findings for a single scanned item. */
	export interface GooglePrivacyDlpV2InspectResult {

		/** List of findings for an item. */
		findings?: Array<GooglePrivacyDlpV2Finding>;

		/**
		 * If true, then this item might have more findings than were returned,
		 * and the findings returned are an arbitrary subset of all findings.
		 * The findings list might be truncated because the input items were too
		 * large, or because the server reached the maximum amount of resources
		 * allowed for a single API call. For best results, divide the input into
		 * smaller batches.
		 */
		findingsTruncated?: boolean | null;
	}

	/** All the findings for a single scanned item. */
	export interface GooglePrivacyDlpV2InspectResultFormProperties {

		/**
		 * If true, then this item might have more findings than were returned,
		 * and the findings returned are an arbitrary subset of all findings.
		 * The findings list might be truncated because the input items were too
		 * large, or because the server reached the maximum amount of resources
		 * allowed for a single API call. For best results, divide the input into
		 * smaller batches.
		 */
		findingsTruncated: FormControl<boolean | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2InspectResultFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2InspectResultFormProperties>({
			findingsTruncated: new FormControl<boolean | null | undefined>(undefined),
		});

	}


	/** Summary statistics of a custom dictionary. */
	export interface GooglePrivacyDlpV2LargeCustomDictionaryStats {

		/** Approximate number of distinct phrases in the dictionary. */
		approxNumPhrases?: string | null;
	}

	/** Summary statistics of a custom dictionary. */
	export interface GooglePrivacyDlpV2LargeCustomDictionaryStatsFormProperties {

		/** Approximate number of distinct phrases in the dictionary. */
		approxNumPhrases: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2LargeCustomDictionaryStatsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2LargeCustomDictionaryStatsFormProperties>({
			approxNumPhrases: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListDeidentifyTemplates. */
	export interface GooglePrivacyDlpV2ListDeidentifyTemplatesResponse {

		/**
		 * List of deidentify templates, up to page_size in
		 * ListDeidentifyTemplatesRequest.
		 */
		deidentifyTemplates?: Array<GooglePrivacyDlpV2DeidentifyTemplate>;

		/**
		 * If the next page is available then the next page token to be used
		 * in following ListDeidentifyTemplates request.
		 */
		nextPageToken?: string | null;
	}

	/** Response message for ListDeidentifyTemplates. */
	export interface GooglePrivacyDlpV2ListDeidentifyTemplatesResponseFormProperties {

		/**
		 * If the next page is available then the next page token to be used
		 * in following ListDeidentifyTemplates request.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ListDeidentifyTemplatesResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ListDeidentifyTemplatesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** The response message for listing DLP jobs. */
	export interface GooglePrivacyDlpV2ListDlpJobsResponse {

		/** A list of DlpJobs that matches the specified filter in the request. */
		jobs?: Array<GooglePrivacyDlpV2DlpJob>;

		/** The standard List next-page token. */
		nextPageToken?: string | null;
	}

	/** The response message for listing DLP jobs. */
	export interface GooglePrivacyDlpV2ListDlpJobsResponseFormProperties {

		/** The standard List next-page token. */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ListDlpJobsResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ListDlpJobsResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response to the ListInfoTypes request. */
	export interface GooglePrivacyDlpV2ListInfoTypesResponse {

		/** Set of sensitive infoTypes. */
		infoTypes?: Array<GooglePrivacyDlpV2InfoTypeDescription>;
	}

	/** Response to the ListInfoTypes request. */
	export interface GooglePrivacyDlpV2ListInfoTypesResponseFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ListInfoTypesResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ListInfoTypesResponseFormProperties>({
		});

	}


	/** Response message for ListInspectTemplates. */
	export interface GooglePrivacyDlpV2ListInspectTemplatesResponse {

		/** List of inspectTemplates, up to page_size in ListInspectTemplatesRequest. */
		inspectTemplates?: Array<GooglePrivacyDlpV2InspectTemplate>;

		/**
		 * If the next page is available then the next page token to be used
		 * in following ListInspectTemplates request.
		 */
		nextPageToken?: string | null;
	}

	/** Response message for ListInspectTemplates. */
	export interface GooglePrivacyDlpV2ListInspectTemplatesResponseFormProperties {

		/**
		 * If the next page is available then the next page token to be used
		 * in following ListInspectTemplates request.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ListInspectTemplatesResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ListInspectTemplatesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListJobTriggers. */
	export interface GooglePrivacyDlpV2ListJobTriggersResponse {

		/** List of triggeredJobs, up to page_size in ListJobTriggersRequest. */
		jobTriggers?: Array<GooglePrivacyDlpV2JobTrigger>;

		/**
		 * If the next page is available then the next page token to be used
		 * in following ListJobTriggers request.
		 */
		nextPageToken?: string | null;
	}

	/** Response message for ListJobTriggers. */
	export interface GooglePrivacyDlpV2ListJobTriggersResponseFormProperties {

		/**
		 * If the next page is available then the next page token to be used
		 * in following ListJobTriggers request.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ListJobTriggersResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ListJobTriggersResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Response message for ListStoredInfoTypes. */
	export interface GooglePrivacyDlpV2ListStoredInfoTypesResponse {

		/**
		 * If the next page is available then the next page token to be used
		 * in following ListStoredInfoTypes request.
		 */
		nextPageToken?: string | null;

		/** List of storedInfoTypes, up to page_size in ListStoredInfoTypesRequest. */
		storedInfoTypes?: Array<GooglePrivacyDlpV2StoredInfoType>;
	}

	/** Response message for ListStoredInfoTypes. */
	export interface GooglePrivacyDlpV2ListStoredInfoTypesResponseFormProperties {

		/**
		 * If the next page is available then the next page token to be used
		 * in following ListStoredInfoTypes request.
		 */
		nextPageToken: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ListStoredInfoTypesResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ListStoredInfoTypesResponseFormProperties>({
			nextPageToken: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * StoredInfoType resource message that contains information about the current
	 * version and any pending updates.
	 */
	export interface GooglePrivacyDlpV2StoredInfoType {

		/**
		 * Version of a StoredInfoType, including the configuration used to build it,
		 * create timestamp, and current state.
		 */
		currentVersion?: GooglePrivacyDlpV2StoredInfoTypeVersion;

		/** Resource name. */
		name?: string | null;

		/**
		 * Pending versions of the stored info type. Empty if no versions are
		 * pending.
		 */
		pendingVersions?: Array<GooglePrivacyDlpV2StoredInfoTypeVersion>;
	}

	/**
	 * StoredInfoType resource message that contains information about the current
	 * version and any pending updates.
	 */
	export interface GooglePrivacyDlpV2StoredInfoTypeFormProperties {

		/** Resource name. */
		name: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2StoredInfoTypeFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2StoredInfoTypeFormProperties>({
			name: new FormControl<string | null | undefined>(undefined),
		});

	}


	/**
	 * Version of a StoredInfoType, including the configuration used to build it,
	 * create timestamp, and current state.
	 */
	export interface GooglePrivacyDlpV2StoredInfoTypeVersion {

		/**
		 * Configuration for stored infoTypes. All fields and subfield are provided
		 * by the user. For more information, see
		 * https://cloud.google.com/dlp/docs/creating-custom-infotypes.
		 */
		config?: GooglePrivacyDlpV2StoredInfoTypeConfig;

		/**
		 * Create timestamp of the version. Read-only, determined by the system
		 * when the version is created.
		 */
		createTime?: string | null;

		/**
		 * Errors that occurred when creating this storedInfoType version, or
		 * anomalies detected in the storedInfoType data that render it unusable. Only
		 * the five most recent errors will be displayed, with the most recent error
		 * appearing first.
		 * For example, some of the data for stored custom dictionaries is put in
		 * the user's Google Cloud Storage bucket, and if this data is modified or
		 * deleted by the user or another system, the dictionary becomes invalid.
		 * If any errors occur, fix the problem indicated by the error message and
		 * use the UpdateStoredInfoType API method to create another version of the
		 * storedInfoType to continue using it, reusing the same `config` if it was
		 * not the source of the error.
		 */
		errors?: Array<GooglePrivacyDlpV2Error>;

		/**
		 * Stored info type version state. Read-only, updated by the system
		 * during dictionary creation.
		 */
		state?: GooglePrivacyDlpV2StoredInfoTypeVersionState | null;

		/** Statistics for a StoredInfoType. */
		stats?: GooglePrivacyDlpV2StoredInfoTypeStats;
	}

	/**
	 * Version of a StoredInfoType, including the configuration used to build it,
	 * create timestamp, and current state.
	 */
	export interface GooglePrivacyDlpV2StoredInfoTypeVersionFormProperties {

		/**
		 * Create timestamp of the version. Read-only, determined by the system
		 * when the version is created.
		 */
		createTime: FormControl<string | null | undefined>,

		/**
		 * Stored info type version state. Read-only, updated by the system
		 * during dictionary creation.
		 */
		state: FormControl<GooglePrivacyDlpV2StoredInfoTypeVersionState | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2StoredInfoTypeVersionFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2StoredInfoTypeVersionFormProperties>({
			createTime: new FormControl<string | null | undefined>(undefined),
			state: new FormControl<GooglePrivacyDlpV2StoredInfoTypeVersionState | null | undefined>(undefined),
		});

	}

	export enum GooglePrivacyDlpV2StoredInfoTypeVersionState { STORED_INFO_TYPE_STATE_UNSPECIFIED = 0, PENDING = 1, READY = 2, FAILED = 3, INVALID = 4 }


	/** Statistics for a StoredInfoType. */
	export interface GooglePrivacyDlpV2StoredInfoTypeStats {

		/** Summary statistics of a custom dictionary. */
		largeCustomDictionary?: GooglePrivacyDlpV2LargeCustomDictionaryStats;
	}

	/** Statistics for a StoredInfoType. */
	export interface GooglePrivacyDlpV2StoredInfoTypeStatsFormProperties {
	}
	export function CreateGooglePrivacyDlpV2StoredInfoTypeStatsFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2StoredInfoTypeStatsFormProperties>({
		});

	}


	/**
	 * Request to search for potentially sensitive info in an image and redact it
	 * by covering it with a colored rectangle.
	 */
	export interface GooglePrivacyDlpV2RedactImageRequest {

		/** Container for bytes to inspect or redact. */
		byteItem?: GooglePrivacyDlpV2ByteContentItem;

		/** The configuration for specifying what content to redact from images. */
		imageRedactionConfigs?: Array<GooglePrivacyDlpV2ImageRedactionConfig>;

		/**
		 * Whether the response should include findings along with the redacted
		 * image.
		 */
		includeFindings?: boolean | null;

		/**
		 * Configuration description of the scanning process.
		 * When used with redactContent only info_types and min_likelihood are currently
		 * used.
		 */
		inspectConfig?: GooglePrivacyDlpV2InspectConfig;

		/**
		 * The geographic location to process the request. Reserved for future
		 * extensions.
		 * Location is restricted to 'global', 'us', 'asia', and 'europe'.
		 */
		locationId?: string | null;
	}

	/**
	 * Request to search for potentially sensitive info in an image and redact it
	 * by covering it with a colored rectangle.
	 */
	export interface GooglePrivacyDlpV2RedactImageRequestFormProperties {

		/**
		 * Whether the response should include findings along with the redacted
		 * image.
		 */
		includeFindings: FormControl<boolean | null | undefined>,

		/**
		 * The geographic location to process the request. Reserved for future
		 * extensions.
		 * Location is restricted to 'global', 'us', 'asia', and 'europe'.
		 */
		locationId: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2RedactImageRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RedactImageRequestFormProperties>({
			includeFindings: new FormControl<boolean | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of redacting an image. */
	export interface GooglePrivacyDlpV2RedactImageResponse {

		/**
		 * If an image was being inspected and the InspectConfig's include_quote was
		 * set to true, then this field will include all text, if any, that was found
		 * in the image.
		 */
		extractedText?: string | null;

		/** All the findings for a single scanned item. */
		inspectResult?: GooglePrivacyDlpV2InspectResult;

		/** The redacted image. The type will be the same as the original image. */
		redactedImage?: string | null;
	}

	/** Results of redacting an image. */
	export interface GooglePrivacyDlpV2RedactImageResponseFormProperties {

		/**
		 * If an image was being inspected and the InspectConfig's include_quote was
		 * set to true, then this field will include all text, if any, that was found
		 * in the image.
		 */
		extractedText: FormControl<string | null | undefined>,

		/** The redacted image. The type will be the same as the original image. */
		redactedImage: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2RedactImageResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2RedactImageResponseFormProperties>({
			extractedText: new FormControl<string | null | undefined>(undefined),
			redactedImage: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request to re-identify an item. */
	export interface GooglePrivacyDlpV2ReidentifyContentRequest {

		/**
		 * Configuration description of the scanning process.
		 * When used with redactContent only info_types and min_likelihood are currently
		 * used.
		 */
		inspectConfig?: GooglePrivacyDlpV2InspectConfig;

		/**
		 * Template to use. Any configuration directly specified in
		 * `inspect_config` will override those set in the template. Singular fields
		 * that are set in this request will replace their corresponding fields in the
		 * template. Repeated fields are appended. Singular sub-messages and groups
		 * are recursively merged.
		 */
		inspectTemplateName?: string | null;

		/** Container structure for the content to inspect. */
		item?: GooglePrivacyDlpV2ContentItem;

		/**
		 * The geographic location to process content reidentification.  Reserved for
		 * future extensions.
		 */
		locationId?: string | null;

		/** The configuration that controls how the data will change. */
		reidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;

		/**
		 * Template to use. References an instance of `DeidentifyTemplate`.
		 * Any configuration directly specified in `reidentify_config` or
		 * `inspect_config` will override those set in the template. Singular fields
		 * that are set in this request will replace their corresponding fields in the
		 * template. Repeated fields are appended. Singular sub-messages and groups
		 * are recursively merged.
		 */
		reidentifyTemplateName?: string | null;
	}

	/** Request to re-identify an item. */
	export interface GooglePrivacyDlpV2ReidentifyContentRequestFormProperties {

		/**
		 * Template to use. Any configuration directly specified in
		 * `inspect_config` will override those set in the template. Singular fields
		 * that are set in this request will replace their corresponding fields in the
		 * template. Repeated fields are appended. Singular sub-messages and groups
		 * are recursively merged.
		 */
		inspectTemplateName: FormControl<string | null | undefined>,

		/**
		 * The geographic location to process content reidentification.  Reserved for
		 * future extensions.
		 */
		locationId: FormControl<string | null | undefined>,

		/**
		 * Template to use. References an instance of `DeidentifyTemplate`.
		 * Any configuration directly specified in `reidentify_config` or
		 * `inspect_config` will override those set in the template. Singular fields
		 * that are set in this request will replace their corresponding fields in the
		 * template. Repeated fields are appended. Singular sub-messages and groups
		 * are recursively merged.
		 */
		reidentifyTemplateName: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2ReidentifyContentRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ReidentifyContentRequestFormProperties>({
			inspectTemplateName: new FormControl<string | null | undefined>(undefined),
			locationId: new FormControl<string | null | undefined>(undefined),
			reidentifyTemplateName: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Results of re-identifying a item. */
	export interface GooglePrivacyDlpV2ReidentifyContentResponse {

		/** Container structure for the content to inspect. */
		item?: GooglePrivacyDlpV2ContentItem;

		/** Overview of the modifications that occurred. */
		overview?: GooglePrivacyDlpV2TransformationOverview;
	}

	/** Results of re-identifying a item. */
	export interface GooglePrivacyDlpV2ReidentifyContentResponseFormProperties {
	}
	export function CreateGooglePrivacyDlpV2ReidentifyContentResponseFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2ReidentifyContentResponseFormProperties>({
		});

	}


	/** Request message for UpdateDeidentifyTemplate. */
	export interface GooglePrivacyDlpV2UpdateDeidentifyTemplateRequest {

		/**
		 * DeidentifyTemplates contains instructions on how to de-identify content.
		 * See https://cloud.google.com/dlp/docs/concepts-templates to learn more.
		 */
		deidentifyTemplate?: GooglePrivacyDlpV2DeidentifyTemplate;

		/** Mask to control which fields get updated. */
		updateMask?: string | null;
	}

	/** Request message for UpdateDeidentifyTemplate. */
	export interface GooglePrivacyDlpV2UpdateDeidentifyTemplateRequestFormProperties {

		/** Mask to control which fields get updated. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2UpdateDeidentifyTemplateRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2UpdateDeidentifyTemplateRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for UpdateInspectTemplate. */
	export interface GooglePrivacyDlpV2UpdateInspectTemplateRequest {

		/**
		 * The inspectTemplate contains a configuration (set of types of sensitive data
		 * to be detected) to be used anywhere you otherwise would normally specify
		 * InspectConfig. See https://cloud.google.com/dlp/docs/concepts-templates
		 * to learn more.
		 */
		inspectTemplate?: GooglePrivacyDlpV2InspectTemplate;

		/** Mask to control which fields get updated. */
		updateMask?: string | null;
	}

	/** Request message for UpdateInspectTemplate. */
	export interface GooglePrivacyDlpV2UpdateInspectTemplateRequestFormProperties {

		/** Mask to control which fields get updated. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2UpdateInspectTemplateRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2UpdateInspectTemplateRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for UpdateJobTrigger. */
	export interface GooglePrivacyDlpV2UpdateJobTriggerRequest {

		/**
		 * Contains a configuration to make dlp api calls on a repeating basis.
		 * See https://cloud.google.com/dlp/docs/concepts-job-triggers to learn more.
		 */
		jobTrigger?: GooglePrivacyDlpV2JobTrigger;

		/** Mask to control which fields get updated. */
		updateMask?: string | null;
	}

	/** Request message for UpdateJobTrigger. */
	export interface GooglePrivacyDlpV2UpdateJobTriggerRequestFormProperties {

		/** Mask to control which fields get updated. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2UpdateJobTriggerRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2UpdateJobTriggerRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Request message for UpdateStoredInfoType. */
	export interface GooglePrivacyDlpV2UpdateStoredInfoTypeRequest {

		/**
		 * Configuration for stored infoTypes. All fields and subfield are provided
		 * by the user. For more information, see
		 * https://cloud.google.com/dlp/docs/creating-custom-infotypes.
		 */
		config?: GooglePrivacyDlpV2StoredInfoTypeConfig;

		/** Mask to control which fields get updated. */
		updateMask?: string | null;
	}

	/** Request message for UpdateStoredInfoType. */
	export interface GooglePrivacyDlpV2UpdateStoredInfoTypeRequestFormProperties {

		/** Mask to control which fields get updated. */
		updateMask: FormControl<string | null | undefined>,
	}
	export function CreateGooglePrivacyDlpV2UpdateStoredInfoTypeRequestFormGroup() {
		return new FormGroup<GooglePrivacyDlpV2UpdateStoredInfoTypeRequestFormProperties>({
			updateMask: new FormControl<string | null | undefined>(undefined),
		});

	}

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Returns a list of the sensitive information types that the DLP API
		 * supports. See https://cloud.google.com/dlp/docs/infotypes-reference to
		 * learn more.
		 * Get v2/infoTypes
		 * @param {string} filter filter to only return infoTypes supported by certain parts of the
		 * API. Defaults to supported_by=INSPECT.
		 * @param {string} languageCode BCP-47 language code for localized infoType friendly
		 * names. If omitted, or if localized strings are not available,
		 * en-US strings will be returned.
		 * @param {string} locationId The geographic location to list info types. Reserved for future
		 * extensions.
		 * @return {void} Successful response
		 */
		Dlp_infoTypes_list(filter: string | null | undefined, languageCode: string | null | undefined, locationId: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/infoTypes?filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)) + '&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Returns a list of the sensitive information types that the DLP API
		 * supports. See https://cloud.google.com/dlp/docs/infotypes-reference to
		 * learn more.
		 * Get v2/locations/{locationId}/infoTypes
		 * @param {string} locationId The geographic location to list info types. Reserved for future
		 * extensions.
		 * @param {string} filter filter to only return infoTypes supported by certain parts of the
		 * API. Defaults to supported_by=INSPECT.
		 * @param {string} languageCode BCP-47 language code for localized infoType friendly
		 * names. If omitted, or if localized strings are not available,
		 * en-US strings will be returned.
		 * @return {void} Successful response
		 */
		Dlp_locations_infoTypes_list(locationId: string, filter: string | null | undefined, languageCode: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/locations/' + (locationId == null ? '' : encodeURIComponent(locationId)) + '/infoTypes&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&languageCode=' + (languageCode == null ? '' : encodeURIComponent(languageCode)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Deletes a job trigger.
		 * See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
		 * Delete v2/{name}
		 * @param {string} name Required. Resource name of the project and the triggeredJob, for example
		 * `projects/dlp-test-project/jobTriggers/53234423`.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_jobTriggers_delete(name: string): Observable<HttpResponse<string>> {
			return this.http.delete(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Gets a job trigger.
		 * See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
		 * Get v2/{name}
		 * @param {string} name Required. Resource name of the project and the triggeredJob, for example
		 * `projects/dlp-test-project/jobTriggers/53234423`.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_jobTriggers_get(name: string): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Updates a job trigger.
		 * See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
		 * Patch v2/{name}
		 * @param {string} name Required. Resource name of the project and the triggeredJob, for example
		 * `projects/dlp-test-project/jobTriggers/53234423`.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_jobTriggers_patch(name: string, requestBody: GooglePrivacyDlpV2UpdateJobTriggerRequest): Observable<HttpResponse<string>> {
			return this.http.patch(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)), JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Activate a job trigger. Causes the immediate execute of a trigger
		 * instead of waiting on the trigger event to occur.
		 * Post v2/{name}:activate
		 * @param {string} name Required. Resource name of the trigger to activate, for example
		 * `projects/dlp-test-project/jobTriggers/53234423`.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_jobTriggers_activate(name: string, requestBody: GooglePrivacyDlpV2ActivateJobTriggerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':activate', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Starts asynchronous cancellation on a long-running DlpJob. The server
		 * makes a best effort to cancel the DlpJob, but success is not
		 * guaranteed.
		 * See https://cloud.google.com/dlp/docs/inspecting-storage and
		 * https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
		 * Post v2/{name}:cancel
		 * @param {string} name Required. The name of the DlpJob resource to be cancelled.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_dlpJobs_cancel(name: string, requestBody: GooglePrivacyDlpV2CancelDlpJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':cancel', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Finish a running hybrid DlpJob. Triggers the finalization steps and running
		 * of any enabled actions that have not yet run.
		 * Early access feature is in a pre-release state and might change or have
		 * limited support. For more information, see
		 * https://cloud.google.com/products#product-launch-stages.
		 * Post v2/{name}:finish
		 * @param {string} name Required. The name of the DlpJob resource to be cancelled.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_dlpJobs_finish(name: string, requestBody: GooglePrivacyDlpV2FinishDlpJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':finish', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Inspect hybrid content and store findings to a trigger. The inspection
		 * will be processed asynchronously. To review the findings monitor the
		 * jobs within the trigger.
		 * Early access feature is in a pre-release state and might change or have
		 * limited support. For more information, see
		 * https://cloud.google.com/products#product-launch-stages.
		 * Post v2/{name}:hybridInspect
		 * @param {string} name Required. Resource name of the trigger to execute a hybrid inspect on, for example
		 * `projects/dlp-test-project/jobTriggers/53234423`.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_jobTriggers_hybridInspect(name: string, requestBody: GooglePrivacyDlpV2HybridInspectJobTriggerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (name == null ? '' : encodeURIComponent(name)) + ':hybridInspect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * De-identifies potentially sensitive info from a ContentItem.
		 * This method has limits on input size and output size.
		 * See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to
		 * learn more.
		 * When no InfoTypes or CustomInfoTypes are specified in this request, the
		 * system will automatically choose what detectors to run. By default this may
		 * be all types, but may change over time as detectors are updated.
		 * Post v2/{parent}/content:deidentify
		 * @param {string} parent The parent resource name, for example projects/my-project-id.
		 * @return {void} Successful response
		 */
		Dlp_projects_content_deidentify(parent: string, requestBody: GooglePrivacyDlpV2DeidentifyContentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/content:deidentify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Finds potentially sensitive info in content.
		 * This method has limits on input size, processing time, and output size.
		 * When no InfoTypes or CustomInfoTypes are specified in this request, the
		 * system will automatically choose what detectors to run. By default this may
		 * be all types, but may change over time as detectors are updated.
		 * For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images
		 * and https://cloud.google.com/dlp/docs/inspecting-text,
		 * Post v2/{parent}/content:inspect
		 * @param {string} parent The parent resource name, for example projects/my-project-id.
		 * @return {void} Successful response
		 */
		Dlp_projects_content_inspect(parent: string, requestBody: GooglePrivacyDlpV2InspectContentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/content:inspect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Re-identifies content that has been de-identified.
		 * See
		 * https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example
		 * to learn more.
		 * Post v2/{parent}/content:reidentify
		 * @param {string} parent Required. The parent resource name.
		 * @return {void} Successful response
		 */
		Dlp_projects_content_reidentify(parent: string, requestBody: GooglePrivacyDlpV2ReidentifyContentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/content:reidentify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists DeidentifyTemplates.
		 * See https://cloud.google.com/dlp/docs/creating-templates-deid to learn
		 * more.
		 * Get v2/{parent}/deidentifyTemplates
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id or
		 * organizations/my-org-id.
		 * @param {string} locationId The geographic location where deidentifications templates will be retrieved
		 * from. Use `-` for all locations. Reserved for future extensions.
		 * @param {string} orderBy Comma separated list of fields to order by,
		 * followed by `asc` or `desc` postfix. This list is case-insensitive,
		 * default sorting order is ascending, redundant space characters are
		 * insignificant.
		 * Example: `name asc,update_time, create_time desc`
		 * Supported fields are:
		 * - `create_time`: corresponds to time the template was created.
		 * - `update_time`: corresponds to time the template was last updated.
		 * - `name`: corresponds to template's name.
		 * - `display_name`: corresponds to template's display name.
		 * @param {number} pageSize Size of the page, can be limited by server. If zero server returns
		 * a page of max size 100.
		 * @param {string} pageToken Page token to continue retrieval. Comes from previous call
		 * to `ListDeidentifyTemplates`.
		 * @return {void} Successful response
		 */
		Dlp_projects_deidentifyTemplates_list(parent: string, locationId: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/deidentifyTemplates&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a DeidentifyTemplate for re-using frequently used configuration
		 * for de-identifying content, images, and storage.
		 * See https://cloud.google.com/dlp/docs/creating-templates-deid to learn
		 * more.
		 * Post v2/{parent}/deidentifyTemplates
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id or
		 * organizations/my-org-id.
		 * @return {void} Successful response
		 */
		Dlp_projects_deidentifyTemplates_create(parent: string, requestBody: GooglePrivacyDlpV2CreateDeidentifyTemplateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/deidentifyTemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists DlpJobs that match the specified filter in the request.
		 * See https://cloud.google.com/dlp/docs/inspecting-storage and
		 * https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
		 * Get v2/{parent}/dlpJobs
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id.
		 * @param {string} filter Allows filtering.
		 * Supported syntax:
		 * * Filter expressions are made up of one or more restrictions.
		 * * Restrictions can be combined by `AND` or `OR` logical operators. A
		 * sequence of restrictions implicitly uses `AND`.
		 * * A restriction has the form of `{field} {operator} {value}`.
		 * * Supported fields/values for inspect jobs:
		 *     - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED
		 *     - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY
		 *     - `trigger_name` - The resource name of the trigger that created job.
		 *     - 'end_time` - Corresponds to time the job finished.
		 *     - 'start_time` - Corresponds to time the job finished.
		 * * Supported fields for risk analysis jobs:
		 *     - `state` - RUNNING|CANCELED|FINISHED|FAILED
		 *     - 'end_time` - Corresponds to time the job finished.
		 *     - 'start_time` - Corresponds to time the job finished.
		 * * The operator must be `=` or `!=`.
		 * Examples:
		 * * inspected_storage = cloud_storage AND state = done
		 * * inspected_storage = cloud_storage OR inspected_storage = bigquery
		 * * inspected_storage = cloud_storage AND (state = done OR state = canceled)
		 * * end_time > \"2017-12-12T00:00:00+00:00\"
		 * The length of this field should be no more than 500 characters.
		 * @param {string} locationId The geographic location where jobs will be retrieved from.
		 * Use `-` for all locations. Reserved for future extensions.
		 * @param {string} orderBy Comma separated list of fields to order by,
		 * followed by `asc` or `desc` postfix. This list is case-insensitive,
		 * default sorting order is ascending, redundant space characters are
		 * insignificant.
		 * Example: `name asc, end_time asc, create_time desc`
		 * Supported fields are:
		 * - `create_time`: corresponds to time the job was created.
		 * - `end_time`: corresponds to time the job ended.
		 * - `name`: corresponds to job's name.
		 * - `state`: corresponds to `state`
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @param {GooglePrivacyDlpV2DlpJobType} type The type of job. Defaults to `DlpJobType.INSPECT`
		 * @return {void} Successful response
		 */
		Dlp_projects_dlpJobs_list(parent: string, filter: string | null | undefined, locationId: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, type: GooglePrivacyDlpV2DlpJobType | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dlpJobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&type=' + type, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new job to inspect storage or calculate risk metrics.
		 * See https://cloud.google.com/dlp/docs/inspecting-storage and
		 * https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
		 * When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the
		 * system will automatically choose what detectors to run. By default this may
		 * be all types, but may change over time as detectors are updated.
		 * Post v2/{parent}/dlpJobs
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id.
		 * @return {void} Successful response
		 */
		Dlp_projects_dlpJobs_create(parent: string, requestBody: GooglePrivacyDlpV2CreateDlpJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/dlpJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Redacts potentially sensitive info from an image.
		 * This method has limits on input size, processing time, and output size.
		 * See https://cloud.google.com/dlp/docs/redacting-sensitive-data-images to
		 * learn more.
		 * When no InfoTypes or CustomInfoTypes are specified in this request, the
		 * system will automatically choose what detectors to run. By default this may
		 * be all types, but may change over time as detectors are updated.
		 * Post v2/{parent}/image:redact
		 * @param {string} parent The parent resource name, for example projects/my-project-id.
		 * @return {void} Successful response
		 */
		Dlp_projects_image_redact(parent: string, requestBody: GooglePrivacyDlpV2RedactImageRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/image:redact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists InspectTemplates.
		 * See https://cloud.google.com/dlp/docs/creating-templates to learn more.
		 * Get v2/{parent}/inspectTemplates
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id or
		 * organizations/my-org-id.
		 * @param {string} locationId The geographic location where inspection templates will be retrieved from.
		 * Use `-` for all locations. Reserved for future extensions.
		 * @param {string} orderBy Comma separated list of fields to order by,
		 * followed by `asc` or `desc` postfix. This list is case-insensitive,
		 * default sorting order is ascending, redundant space characters are
		 * insignificant.
		 * Example: `name asc,update_time, create_time desc`
		 * Supported fields are:
		 * - `create_time`: corresponds to time the template was created.
		 * - `update_time`: corresponds to time the template was last updated.
		 * - `name`: corresponds to template's name.
		 * - `display_name`: corresponds to template's display name.
		 * @param {number} pageSize Size of the page, can be limited by server. If zero server returns
		 * a page of max size 100.
		 * @param {string} pageToken Page token to continue retrieval. Comes from previous call
		 * to `ListInspectTemplates`.
		 * @return {void} Successful response
		 */
		Dlp_projects_inspectTemplates_list(parent: string, locationId: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/inspectTemplates&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an InspectTemplate for re-using frequently used configuration
		 * for inspecting content, images, and storage.
		 * See https://cloud.google.com/dlp/docs/creating-templates to learn more.
		 * Post v2/{parent}/inspectTemplates
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id or
		 * organizations/my-org-id.
		 * @return {void} Successful response
		 */
		Dlp_projects_inspectTemplates_create(parent: string, requestBody: GooglePrivacyDlpV2CreateInspectTemplateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/inspectTemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists job triggers.
		 * See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
		 * Get v2/{parent}/jobTriggers
		 * @param {string} parent Required. The parent resource name, for example `projects/my-project-id`.
		 * @param {string} filter Allows filtering.
		 * Supported syntax:
		 * * Filter expressions are made up of one or more restrictions.
		 * * Restrictions can be combined by `AND` or `OR` logical operators. A
		 * sequence of restrictions implicitly uses `AND`.
		 * * A restriction has the form of `{field} {operator} {value}`.
		 * * Supported fields/values for inspect jobs:
		 *     - `status` - HEALTHY|PAUSED|CANCELLED
		 *     - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY
		 *     - 'last_run_time` - RFC 3339 formatted timestamp, surrounded by
		 *     quotation marks. Nanoseconds are ignored.
		 *     - 'error_count' - Number of errors that have occurred while running.
		 * * The operator must be `=` or `!=` for status and inspected_storage.
		 * Examples:
		 * * inspected_storage = cloud_storage AND status = HEALTHY
		 * * inspected_storage = cloud_storage OR inspected_storage = bigquery
		 * * inspected_storage = cloud_storage AND (state = PAUSED OR state = HEALTHY)
		 * * last_run_time > \"2017-12-12T00:00:00+00:00\"
		 * The length of this field should be no more than 500 characters.
		 * @param {string} locationId The geographic location where job triggers will be retrieved from.
		 * Use `-` for all locations. Reserved for future extensions.
		 * @param {string} orderBy Comma separated list of triggeredJob fields to order by,
		 * followed by `asc` or `desc` postfix. This list is case-insensitive,
		 * default sorting order is ascending, redundant space characters are
		 * insignificant.
		 * Example: `name asc,update_time, create_time desc`
		 * Supported fields are:
		 * - `create_time`: corresponds to time the JobTrigger was created.
		 * - `update_time`: corresponds to time the JobTrigger was last updated.
		 * - `last_run_time`: corresponds to the last time the JobTrigger ran.
		 * - `name`: corresponds to JobTrigger's name.
		 * - `display_name`: corresponds to JobTrigger's display name.
		 * - `status`: corresponds to JobTrigger's status.
		 * @param {number} pageSize Size of the page, can be limited by a server.
		 * @param {string} pageToken Page token to continue retrieval. Comes from previous call
		 * to ListJobTriggers. `order_by` field must not
		 * change for subsequent calls.
		 * @return {void} Successful response
		 */
		Dlp_projects_jobTriggers_list(parent: string, filter: string | null | undefined, locationId: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobTriggers&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a job trigger to run DLP actions such as scanning storage for
		 * sensitive information on a set schedule.
		 * See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
		 * Post v2/{parent}/jobTriggers
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id.
		 * @return {void} Successful response
		 */
		Dlp_projects_jobTriggers_create(parent: string, requestBody: GooglePrivacyDlpV2CreateJobTriggerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/jobTriggers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * De-identifies potentially sensitive info from a ContentItem.
		 * This method has limits on input size and output size.
		 * See https://cloud.google.com/dlp/docs/deidentify-sensitive-data to
		 * learn more.
		 * When no InfoTypes or CustomInfoTypes are specified in this request, the
		 * system will automatically choose what detectors to run. By default this may
		 * be all types, but may change over time as detectors are updated.
		 * Post v2/{parent}/locations/{locationId}/content:deidentify
		 * @param {string} parent The parent resource name, for example projects/my-project-id.
		 * @param {string} locationId The geographic location to process de-identification. Reserved for future
		 * extensions.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_content_deidentify(parent: string, locationId: string, requestBody: GooglePrivacyDlpV2DeidentifyContentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations/' + (locationId == null ? '' : encodeURIComponent(locationId)) + '/content:deidentify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Finds potentially sensitive info in content.
		 * This method has limits on input size, processing time, and output size.
		 * When no InfoTypes or CustomInfoTypes are specified in this request, the
		 * system will automatically choose what detectors to run. By default this may
		 * be all types, but may change over time as detectors are updated.
		 * For how to guides, see https://cloud.google.com/dlp/docs/inspecting-images
		 * and https://cloud.google.com/dlp/docs/inspecting-text,
		 * Post v2/{parent}/locations/{locationId}/content:inspect
		 * @param {string} parent The parent resource name, for example projects/my-project-id.
		 * @param {string} locationId The geographic location to process content inspection. Reserved for future
		 * extensions.
		 * When inspecting images location is restricted to 'global', 'us', 'asia',
		 * and 'europe'.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_content_inspect(parent: string, locationId: string, requestBody: GooglePrivacyDlpV2InspectContentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations/' + (locationId == null ? '' : encodeURIComponent(locationId)) + '/content:inspect', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Re-identifies content that has been de-identified.
		 * See
		 * https://cloud.google.com/dlp/docs/pseudonymization#re-identification_in_free_text_code_example
		 * to learn more.
		 * Post v2/{parent}/locations/{locationId}/content:reidentify
		 * @param {string} parent Required. The parent resource name.
		 * @param {string} locationId The geographic location to process content reidentification.  Reserved for
		 * future extensions.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_content_reidentify(parent: string, locationId: string, requestBody: GooglePrivacyDlpV2ReidentifyContentRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations/' + (locationId == null ? '' : encodeURIComponent(locationId)) + '/content:reidentify', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists DeidentifyTemplates.
		 * See https://cloud.google.com/dlp/docs/creating-templates-deid to learn
		 * more.
		 * Get v2/{parent}/locations/{locationId}/deidentifyTemplates
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id or
		 * organizations/my-org-id.
		 * @param {string} locationId The geographic location where deidentifications templates will be retrieved
		 * from. Use `-` for all locations. Reserved for future extensions.
		 * @param {string} orderBy Comma separated list of fields to order by,
		 * followed by `asc` or `desc` postfix. This list is case-insensitive,
		 * default sorting order is ascending, redundant space characters are
		 * insignificant.
		 * Example: `name asc,update_time, create_time desc`
		 * Supported fields are:
		 * - `create_time`: corresponds to time the template was created.
		 * - `update_time`: corresponds to time the template was last updated.
		 * - `name`: corresponds to template's name.
		 * - `display_name`: corresponds to template's display name.
		 * @param {number} pageSize Size of the page, can be limited by server. If zero server returns
		 * a page of max size 100.
		 * @param {string} pageToken Page token to continue retrieval. Comes from previous call
		 * to `ListDeidentifyTemplates`.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_deidentifyTemplates_list(parent: string, locationId: string, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations/' + (locationId == null ? '' : encodeURIComponent(locationId)) + '/deidentifyTemplates&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a DeidentifyTemplate for re-using frequently used configuration
		 * for de-identifying content, images, and storage.
		 * See https://cloud.google.com/dlp/docs/creating-templates-deid to learn
		 * more.
		 * Post v2/{parent}/locations/{locationId}/deidentifyTemplates
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id or
		 * organizations/my-org-id.
		 * @param {string} locationId The geographic location to store the deidentification template. Reserved
		 * for future extensions.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_deidentifyTemplates_create(parent: string, locationId: string, requestBody: GooglePrivacyDlpV2CreateDeidentifyTemplateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations/' + (locationId == null ? '' : encodeURIComponent(locationId)) + '/deidentifyTemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists DlpJobs that match the specified filter in the request.
		 * See https://cloud.google.com/dlp/docs/inspecting-storage and
		 * https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
		 * Get v2/{parent}/locations/{locationId}/dlpJobs
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id.
		 * @param {string} locationId The geographic location where jobs will be retrieved from.
		 * Use `-` for all locations. Reserved for future extensions.
		 * @param {string} filter Allows filtering.
		 * Supported syntax:
		 * * Filter expressions are made up of one or more restrictions.
		 * * Restrictions can be combined by `AND` or `OR` logical operators. A
		 * sequence of restrictions implicitly uses `AND`.
		 * * A restriction has the form of `{field} {operator} {value}`.
		 * * Supported fields/values for inspect jobs:
		 *     - `state` - PENDING|RUNNING|CANCELED|FINISHED|FAILED
		 *     - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY
		 *     - `trigger_name` - The resource name of the trigger that created job.
		 *     - 'end_time` - Corresponds to time the job finished.
		 *     - 'start_time` - Corresponds to time the job finished.
		 * * Supported fields for risk analysis jobs:
		 *     - `state` - RUNNING|CANCELED|FINISHED|FAILED
		 *     - 'end_time` - Corresponds to time the job finished.
		 *     - 'start_time` - Corresponds to time the job finished.
		 * * The operator must be `=` or `!=`.
		 * Examples:
		 * * inspected_storage = cloud_storage AND state = done
		 * * inspected_storage = cloud_storage OR inspected_storage = bigquery
		 * * inspected_storage = cloud_storage AND (state = done OR state = canceled)
		 * * end_time > \"2017-12-12T00:00:00+00:00\"
		 * The length of this field should be no more than 500 characters.
		 * @param {string} orderBy Comma separated list of fields to order by,
		 * followed by `asc` or `desc` postfix. This list is case-insensitive,
		 * default sorting order is ascending, redundant space characters are
		 * insignificant.
		 * Example: `name asc, end_time asc, create_time desc`
		 * Supported fields are:
		 * - `create_time`: corresponds to time the job was created.
		 * - `end_time`: corresponds to time the job ended.
		 * - `name`: corresponds to job's name.
		 * - `state`: corresponds to `state`
		 * @param {number} pageSize The standard list page size.
		 * @param {string} pageToken The standard list page token.
		 * @param {GooglePrivacyDlpV2DlpJobType} type The type of job. Defaults to `DlpJobType.INSPECT`
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_dlpJobs_list(parent: string, locationId: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined, type: GooglePrivacyDlpV2DlpJobType | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations/' + (locationId == null ? '' : encodeURIComponent(locationId)) + '/dlpJobs&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)) + '&type=' + type, { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a new job to inspect storage or calculate risk metrics.
		 * See https://cloud.google.com/dlp/docs/inspecting-storage and
		 * https://cloud.google.com/dlp/docs/compute-risk-analysis to learn more.
		 * When no InfoTypes or CustomInfoTypes are specified in inspect jobs, the
		 * system will automatically choose what detectors to run. By default this may
		 * be all types, but may change over time as detectors are updated.
		 * Post v2/{parent}/locations/{locationId}/dlpJobs
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id.
		 * @param {string} locationId The geographic location to store and process the job. Reserved for
		 * future extensions.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_dlpJobs_create(parent: string, locationId: string, requestBody: GooglePrivacyDlpV2CreateDlpJobRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations/' + (locationId == null ? '' : encodeURIComponent(locationId)) + '/dlpJobs', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Redacts potentially sensitive info from an image.
		 * This method has limits on input size, processing time, and output size.
		 * See https://cloud.google.com/dlp/docs/redacting-sensitive-data-images to
		 * learn more.
		 * When no InfoTypes or CustomInfoTypes are specified in this request, the
		 * system will automatically choose what detectors to run. By default this may
		 * be all types, but may change over time as detectors are updated.
		 * Post v2/{parent}/locations/{locationId}/image:redact
		 * @param {string} parent The parent resource name, for example projects/my-project-id.
		 * @param {string} locationId The geographic location to process the request. Reserved for future
		 * extensions.
		 * Location is restricted to 'global', 'us', 'asia', and 'europe'.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_image_redact(parent: string, locationId: string, requestBody: GooglePrivacyDlpV2RedactImageRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations/' + (locationId == null ? '' : encodeURIComponent(locationId)) + '/image:redact', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists InspectTemplates.
		 * See https://cloud.google.com/dlp/docs/creating-templates to learn more.
		 * Get v2/{parent}/locations/{locationId}/inspectTemplates
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id or
		 * organizations/my-org-id.
		 * @param {string} locationId The geographic location where inspection templates will be retrieved from.
		 * Use `-` for all locations. Reserved for future extensions.
		 * @param {string} orderBy Comma separated list of fields to order by,
		 * followed by `asc` or `desc` postfix. This list is case-insensitive,
		 * default sorting order is ascending, redundant space characters are
		 * insignificant.
		 * Example: `name asc,update_time, create_time desc`
		 * Supported fields are:
		 * - `create_time`: corresponds to time the template was created.
		 * - `update_time`: corresponds to time the template was last updated.
		 * - `name`: corresponds to template's name.
		 * - `display_name`: corresponds to template's display name.
		 * @param {number} pageSize Size of the page, can be limited by server. If zero server returns
		 * a page of max size 100.
		 * @param {string} pageToken Page token to continue retrieval. Comes from previous call
		 * to `ListInspectTemplates`.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_inspectTemplates_list(parent: string, locationId: string, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations/' + (locationId == null ? '' : encodeURIComponent(locationId)) + '/inspectTemplates&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates an InspectTemplate for re-using frequently used configuration
		 * for inspecting content, images, and storage.
		 * See https://cloud.google.com/dlp/docs/creating-templates to learn more.
		 * Post v2/{parent}/locations/{locationId}/inspectTemplates
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id or
		 * organizations/my-org-id.
		 * @param {string} locationId The geographic location to store the inspection template. Reserved for
		 * future extensions.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_inspectTemplates_create(parent: string, locationId: string, requestBody: GooglePrivacyDlpV2CreateInspectTemplateRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations/' + (locationId == null ? '' : encodeURIComponent(locationId)) + '/inspectTemplates', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists job triggers.
		 * See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
		 * Get v2/{parent}/locations/{locationId}/jobTriggers
		 * @param {string} parent Required. The parent resource name, for example `projects/my-project-id`.
		 * @param {string} locationId The geographic location where job triggers will be retrieved from.
		 * Use `-` for all locations. Reserved for future extensions.
		 * @param {string} filter Allows filtering.
		 * Supported syntax:
		 * * Filter expressions are made up of one or more restrictions.
		 * * Restrictions can be combined by `AND` or `OR` logical operators. A
		 * sequence of restrictions implicitly uses `AND`.
		 * * A restriction has the form of `{field} {operator} {value}`.
		 * * Supported fields/values for inspect jobs:
		 *     - `status` - HEALTHY|PAUSED|CANCELLED
		 *     - `inspected_storage` - DATASTORE|CLOUD_STORAGE|BIGQUERY
		 *     - 'last_run_time` - RFC 3339 formatted timestamp, surrounded by
		 *     quotation marks. Nanoseconds are ignored.
		 *     - 'error_count' - Number of errors that have occurred while running.
		 * * The operator must be `=` or `!=` for status and inspected_storage.
		 * Examples:
		 * * inspected_storage = cloud_storage AND status = HEALTHY
		 * * inspected_storage = cloud_storage OR inspected_storage = bigquery
		 * * inspected_storage = cloud_storage AND (state = PAUSED OR state = HEALTHY)
		 * * last_run_time > \"2017-12-12T00:00:00+00:00\"
		 * The length of this field should be no more than 500 characters.
		 * @param {string} orderBy Comma separated list of triggeredJob fields to order by,
		 * followed by `asc` or `desc` postfix. This list is case-insensitive,
		 * default sorting order is ascending, redundant space characters are
		 * insignificant.
		 * Example: `name asc,update_time, create_time desc`
		 * Supported fields are:
		 * - `create_time`: corresponds to time the JobTrigger was created.
		 * - `update_time`: corresponds to time the JobTrigger was last updated.
		 * - `last_run_time`: corresponds to the last time the JobTrigger ran.
		 * - `name`: corresponds to JobTrigger's name.
		 * - `display_name`: corresponds to JobTrigger's display name.
		 * - `status`: corresponds to JobTrigger's status.
		 * @param {number} pageSize Size of the page, can be limited by a server.
		 * @param {string} pageToken Page token to continue retrieval. Comes from previous call
		 * to ListJobTriggers. `order_by` field must not
		 * change for subsequent calls.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_jobTriggers_list(parent: string, locationId: string, filter: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations/' + (locationId == null ? '' : encodeURIComponent(locationId)) + '/jobTriggers&filter=' + (filter == null ? '' : encodeURIComponent(filter)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a job trigger to run DLP actions such as scanning storage for
		 * sensitive information on a set schedule.
		 * See https://cloud.google.com/dlp/docs/creating-job-triggers to learn more.
		 * Post v2/{parent}/locations/{locationId}/jobTriggers
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id.
		 * @param {string} locationId The geographic location to store the job trigger. Reserved for
		 * future extensions.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_jobTriggers_create(parent: string, locationId: string, requestBody: GooglePrivacyDlpV2CreateJobTriggerRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations/' + (locationId == null ? '' : encodeURIComponent(locationId)) + '/jobTriggers', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists stored infoTypes.
		 * See https://cloud.google.com/dlp/docs/creating-stored-infotypes to
		 * learn more.
		 * Get v2/{parent}/locations/{locationId}/storedInfoTypes
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id or
		 * organizations/my-org-id.
		 * @param {string} locationId The geographic location where stored infoTypes will be retrieved from.
		 * Use `-` for all locations. Reserved for future extensions.
		 * @param {string} orderBy Comma separated list of fields to order by,
		 * followed by `asc` or `desc` postfix. This list is case-insensitive,
		 * default sorting order is ascending, redundant space characters are
		 * insignificant.
		 * Example: `name asc, display_name, create_time desc`
		 * Supported fields are:
		 * - `create_time`: corresponds to time the most recent version of the
		 * resource was created.
		 * - `state`: corresponds to the state of the resource.
		 * - `name`: corresponds to resource name.
		 * - `display_name`: corresponds to info type's display name.
		 * @param {number} pageSize Size of the page, can be limited by server. If zero server returns
		 * a page of max size 100.
		 * @param {string} pageToken Page token to continue retrieval. Comes from previous call
		 * to `ListStoredInfoTypes`.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_storedInfoTypes_list(parent: string, locationId: string, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations/' + (locationId == null ? '' : encodeURIComponent(locationId)) + '/storedInfoTypes&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a pre-built stored infoType to be used for inspection.
		 * See https://cloud.google.com/dlp/docs/creating-stored-infotypes to
		 * learn more.
		 * Post v2/{parent}/locations/{locationId}/storedInfoTypes
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id or
		 * organizations/my-org-id.
		 * @param {string} locationId The geographic location to store the stored infoType. Reserved for
		 * future extensions.
		 * @return {void} Successful response
		 */
		Dlp_projects_locations_storedInfoTypes_create(parent: string, locationId: string, requestBody: GooglePrivacyDlpV2CreateStoredInfoTypeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/locations/' + (locationId == null ? '' : encodeURIComponent(locationId)) + '/storedInfoTypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}

		/**
		 * Lists stored infoTypes.
		 * See https://cloud.google.com/dlp/docs/creating-stored-infotypes to
		 * learn more.
		 * Get v2/{parent}/storedInfoTypes
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id or
		 * organizations/my-org-id.
		 * @param {string} locationId The geographic location where stored infoTypes will be retrieved from.
		 * Use `-` for all locations. Reserved for future extensions.
		 * @param {string} orderBy Comma separated list of fields to order by,
		 * followed by `asc` or `desc` postfix. This list is case-insensitive,
		 * default sorting order is ascending, redundant space characters are
		 * insignificant.
		 * Example: `name asc, display_name, create_time desc`
		 * Supported fields are:
		 * - `create_time`: corresponds to time the most recent version of the
		 * resource was created.
		 * - `state`: corresponds to the state of the resource.
		 * - `name`: corresponds to resource name.
		 * - `display_name`: corresponds to info type's display name.
		 * @param {number} pageSize Size of the page, can be limited by server. If zero server returns
		 * a page of max size 100.
		 * @param {string} pageToken Page token to continue retrieval. Comes from previous call
		 * to `ListStoredInfoTypes`.
		 * @return {void} Successful response
		 */
		Dlp_projects_storedInfoTypes_list(parent: string, locationId: string | null | undefined, orderBy: string | null | undefined, pageSize: number | null | undefined, pageToken: string | null | undefined): Observable<HttpResponse<string>> {
			return this.http.get(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/storedInfoTypes&locationId=' + (locationId == null ? '' : encodeURIComponent(locationId)) + '&orderBy=' + (orderBy == null ? '' : encodeURIComponent(orderBy)) + '&pageSize=' + pageSize + '&pageToken=' + (pageToken == null ? '' : encodeURIComponent(pageToken)), { observe: 'response', responseType: 'text' });
		}

		/**
		 * Creates a pre-built stored infoType to be used for inspection.
		 * See https://cloud.google.com/dlp/docs/creating-stored-infotypes to
		 * learn more.
		 * Post v2/{parent}/storedInfoTypes
		 * @param {string} parent Required. The parent resource name, for example projects/my-project-id or
		 * organizations/my-org-id.
		 * @return {void} Successful response
		 */
		Dlp_projects_storedInfoTypes_create(parent: string, requestBody: GooglePrivacyDlpV2CreateStoredInfoTypeRequest): Observable<HttpResponse<string>> {
			return this.http.post(this.baseUri + 'v2/' + (parent == null ? '' : encodeURIComponent(parent)) + '/storedInfoTypes', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' }, observe: 'response', responseType: 'text' });
		}
	}

}

