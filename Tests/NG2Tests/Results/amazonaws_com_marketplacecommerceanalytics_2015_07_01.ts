import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Container for the result of the GenerateDataSet operation. */
	export interface GenerateDataSetResult {
		dataSetRequestId?: string | null;
	}

	/** Container for the result of the GenerateDataSet operation. */
	export interface GenerateDataSetResultFormProperties {
		dataSetRequestId: FormControl<string | null | undefined>,
	}
	export function CreateGenerateDataSetResultFormGroup() {
		return new FormGroup<GenerateDataSetResultFormProperties>({
			dataSetRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the GenerateDataSet operation. */
	export interface GenerateDataSetRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		dataSetType: GenerateDataSetRequestDataSetType;

		/** Required */
		dataSetPublicationDate: Date;

		/**
		 * Required
		 * Min length: 1
		 */
		roleNameArn: string;

		/**
		 * Required
		 * Min length: 1
		 */
		destinationS3BucketName: string;
		destinationS3Prefix?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		snsTopicArn: string;
		customerDefinedValues?: CustomerDefinedValues;
	}

	/** Container for the parameters to the GenerateDataSet operation. */
	export interface GenerateDataSetRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		dataSetType: FormControl<GenerateDataSetRequestDataSetType | null | undefined>,

		/** Required */
		dataSetPublicationDate: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		roleNameArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		destinationS3BucketName: FormControl<string | null | undefined>,
		destinationS3Prefix: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		snsTopicArn: FormControl<string | null | undefined>,
	}
	export function CreateGenerateDataSetRequestFormGroup() {
		return new FormGroup<GenerateDataSetRequestFormProperties>({
			dataSetType: new FormControl<GenerateDataSetRequestDataSetType | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			dataSetPublicationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			roleNameArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			destinationS3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			destinationS3Prefix: new FormControl<string | null | undefined>(undefined),
			snsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export enum GenerateDataSetRequestDataSetType { customer_subscriber_hourly_monthly_subscriptions = 0, customer_subscriber_annual_subscriptions = 1, daily_business_usage_by_instance_type = 2, daily_business_fees = 3, daily_business_free_trial_conversions = 4, daily_business_new_instances = 5, daily_business_new_product_subscribers = 6, daily_business_canceled_product_subscribers = 7, monthly_revenue_billing_and_revenue_data = 8, monthly_revenue_annual_subscriptions = 9, monthly_revenue_field_demonstration_usage = 10, monthly_revenue_flexible_payment_schedule = 11, disbursed_amount_by_product = 12, disbursed_amount_by_product_with_uncollected_funds = 13, disbursed_amount_by_instance_hours = 14, disbursed_amount_by_customer_geo = 15, disbursed_amount_by_age_of_uncollected_funds = 16, disbursed_amount_by_age_of_disbursed_funds = 17, disbursed_amount_by_age_of_past_due_funds = 18, disbursed_amount_by_uncollected_funds_breakdown = 19, customer_profile_by_industry = 20, customer_profile_by_revenue = 21, customer_profile_by_geography = 22, sales_compensation_billed_revenue = 23, us_sales_and_use_tax_records = 24 }

	export interface CustomerDefinedValues {
	}
	export interface CustomerDefinedValuesFormProperties {
	}
	export function CreateCustomerDefinedValuesFormGroup() {
		return new FormGroup<CustomerDefinedValuesFormProperties>({
		});

	}

	export interface MarketplaceCommerceAnalyticsException {
	}
	export interface MarketplaceCommerceAnalyticsExceptionFormProperties {
	}
	export function CreateMarketplaceCommerceAnalyticsExceptionFormGroup() {
		return new FormGroup<MarketplaceCommerceAnalyticsExceptionFormProperties>({
		});

	}


	/** Container for the result of the StartSupportDataExport operation. */
	export interface StartSupportDataExportResult {
		dataSetRequestId?: string | null;
	}

	/** Container for the result of the StartSupportDataExport operation. */
	export interface StartSupportDataExportResultFormProperties {
		dataSetRequestId: FormControl<string | null | undefined>,
	}
	export function CreateStartSupportDataExportResultFormGroup() {
		return new FormGroup<StartSupportDataExportResultFormProperties>({
			dataSetRequestId: new FormControl<string | null | undefined>(undefined),
		});

	}


	/** Container for the parameters to the StartSupportDataExport operation. */
	export interface StartSupportDataExportRequest {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		dataSetType: StartSupportDataExportRequestDataSetType;

		/** Required */
		fromDate: Date;

		/**
		 * Required
		 * Min length: 1
		 */
		roleNameArn: string;

		/**
		 * Required
		 * Min length: 1
		 */
		destinationS3BucketName: string;
		destinationS3Prefix?: string | null;

		/**
		 * Required
		 * Min length: 1
		 */
		snsTopicArn: string;
		customerDefinedValues?: CustomerDefinedValues;
	}

	/** Container for the parameters to the StartSupportDataExport operation. */
	export interface StartSupportDataExportRequestFormProperties {

		/**
		 * Required
		 * Max length: 255
		 * Min length: 1
		 */
		dataSetType: FormControl<StartSupportDataExportRequestDataSetType | null | undefined>,

		/** Required */
		fromDate: FormControl<Date | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		roleNameArn: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		destinationS3BucketName: FormControl<string | null | undefined>,
		destinationS3Prefix: FormControl<string | null | undefined>,

		/**
		 * Required
		 * Min length: 1
		 */
		snsTopicArn: FormControl<string | null | undefined>,
	}
	export function CreateStartSupportDataExportRequestFormGroup() {
		return new FormGroup<StartSupportDataExportRequestFormProperties>({
			dataSetType: new FormControl<StartSupportDataExportRequestDataSetType | null | undefined>(undefined, [Validators.required, Validators.minLength(1), Validators.maxLength(255)]),
			fromDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			roleNameArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			destinationS3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
			destinationS3Prefix: new FormControl<string | null | undefined>(undefined),
			snsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required, Validators.minLength(1)]),
		});

	}

	export enum StartSupportDataExportRequestDataSetType { customer_support_contacts_data = 0, test_customer_support_contacts_data = 1 }

	export enum DataSetType { customer_subscriber_hourly_monthly_subscriptions = 0, customer_subscriber_annual_subscriptions = 1, daily_business_usage_by_instance_type = 2, daily_business_fees = 3, daily_business_free_trial_conversions = 4, daily_business_new_instances = 5, daily_business_new_product_subscribers = 6, daily_business_canceled_product_subscribers = 7, monthly_revenue_billing_and_revenue_data = 8, monthly_revenue_annual_subscriptions = 9, monthly_revenue_field_demonstration_usage = 10, monthly_revenue_flexible_payment_schedule = 11, disbursed_amount_by_product = 12, disbursed_amount_by_product_with_uncollected_funds = 13, disbursed_amount_by_instance_hours = 14, disbursed_amount_by_customer_geo = 15, disbursed_amount_by_age_of_uncollected_funds = 16, disbursed_amount_by_age_of_disbursed_funds = 17, disbursed_amount_by_age_of_past_due_funds = 18, disbursed_amount_by_uncollected_funds_breakdown = 19, customer_profile_by_industry = 20, customer_profile_by_revenue = 21, customer_profile_by_geography = 22, sales_compensation_billed_revenue = 23, us_sales_and_use_tax_records = 24 }

	export enum SupportDataSetType { customer_support_contacts_data = 0, test_customer_support_contacts_data = 1 }

	@Injectable()
	export class MyClient {
		constructor(@Inject('baseUri') private baseUri: string = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/', private http: HttpClient) {
		}

		/**
		 * Given a data set type and data set publication date, asynchronously publishes the requested data set to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
		 * Post #X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet
		 * @return {GenerateDataSetResult} Success
		 */
		GenerateDataSet(requestBody: GenerateDataSetRequest): Observable<GenerateDataSetResult> {
			return this.http.post<GenerateDataSetResult>(this.baseUri + '#X-Amz-Target=MarketplaceCommerceAnalytics20150701.GenerateDataSet', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}

		/**
		 * Given a data set type and a from date, asynchronously publishes the requested customer support data to the specified S3 bucket and notifies the specified SNS topic once the data is available. Returns a unique request identifier that can be used to correlate requests with notifications from the SNS topic. Data sets will be published in comma-separated values (CSV) format with the file name {data_set_type}_YYYY-MM-DD'T'HH-mm-ss'Z'.csv. If a file with the same name already exists (e.g. if the same data set is requested twice), the original file will be overwritten by the new file. Requires a Role with an attached permissions policy providing Allow permissions for the following actions: s3:PutObject, s3:GetBucketLocation, sns:GetTopicAttributes, sns:Publish, iam:GetRolePolicy.
		 * Post #X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport
		 * @return {StartSupportDataExportResult} Success
		 */
		StartSupportDataExport(requestBody: StartSupportDataExportRequest): Observable<StartSupportDataExportResult> {
			return this.http.post<StartSupportDataExportResult>(this.baseUri + '#X-Amz-Target=MarketplaceCommerceAnalytics20150701.StartSupportDataExport', JSON.stringify(requestBody), { headers: { 'Content-Type': 'application/json;charset=UTF-8' } });
		}
	}

	export enum GenerateDataSetX_Amz_Target { 'MarketplaceCommerceAnalytics20150701.GenerateDataSet' = 0 }

	export enum StartSupportDataExportX_Amz_Target { 'MarketplaceCommerceAnalytics20150701.StartSupportDataExport' = 0 }

}

