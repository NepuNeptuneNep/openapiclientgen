import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export namespace MyNS {

	/** Container for the result of the GenerateDataSet operation. */
	export interface GenerateDataSetResult {
		dataSetRequestId?: string;
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

		/** Required */
		dataSetType: DataSetType;

		/** Required */
		dataSetPublicationDate: Date;

		/** Required */
		roleNameArn: string;

		/** Required */
		destinationS3BucketName: string;
		destinationS3Prefix?: string;

		/** Required */
		snsTopicArn: string;
		customerDefinedValues?: CustomerDefinedValues;
	}

	/** Container for the parameters to the GenerateDataSet operation. */
	export interface GenerateDataSetRequestFormProperties {

		/** Required */
		dataSetType: FormControl<DataSetType | null | undefined>,

		/** Required */
		dataSetPublicationDate: FormControl<Date | null | undefined>,

		/** Required */
		roleNameArn: FormControl<string | null | undefined>,

		/** Required */
		destinationS3BucketName: FormControl<string | null | undefined>,
		destinationS3Prefix: FormControl<string | null | undefined>,

		/** Required */
		snsTopicArn: FormControl<string | null | undefined>,
	}
	export function CreateGenerateDataSetRequestFormGroup() {
		return new FormGroup<GenerateDataSetRequestFormProperties>({
			dataSetType: new FormControl<DataSetType | null | undefined>(undefined, [Validators.required]),
			dataSetPublicationDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			roleNameArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationS3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationS3Prefix: new FormControl<string | null | undefined>(undefined),
			snsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum DataSetType { customer_subscriber_hourly_monthly_subscriptions = 'customer_subscriber_hourly_monthly_subscriptions', customer_subscriber_annual_subscriptions = 'customer_subscriber_annual_subscriptions', daily_business_usage_by_instance_type = 'daily_business_usage_by_instance_type', daily_business_fees = 'daily_business_fees', daily_business_free_trial_conversions = 'daily_business_free_trial_conversions', daily_business_new_instances = 'daily_business_new_instances', daily_business_new_product_subscribers = 'daily_business_new_product_subscribers', daily_business_canceled_product_subscribers = 'daily_business_canceled_product_subscribers', monthly_revenue_billing_and_revenue_data = 'monthly_revenue_billing_and_revenue_data', monthly_revenue_annual_subscriptions = 'monthly_revenue_annual_subscriptions', monthly_revenue_field_demonstration_usage = 'monthly_revenue_field_demonstration_usage', monthly_revenue_flexible_payment_schedule = 'monthly_revenue_flexible_payment_schedule', disbursed_amount_by_product = 'disbursed_amount_by_product', disbursed_amount_by_product_with_uncollected_funds = 'disbursed_amount_by_product_with_uncollected_funds', disbursed_amount_by_instance_hours = 'disbursed_amount_by_instance_hours', disbursed_amount_by_customer_geo = 'disbursed_amount_by_customer_geo', disbursed_amount_by_age_of_uncollected_funds = 'disbursed_amount_by_age_of_uncollected_funds', disbursed_amount_by_age_of_disbursed_funds = 'disbursed_amount_by_age_of_disbursed_funds', disbursed_amount_by_age_of_past_due_funds = 'disbursed_amount_by_age_of_past_due_funds', disbursed_amount_by_uncollected_funds_breakdown = 'disbursed_amount_by_uncollected_funds_breakdown', customer_profile_by_industry = 'customer_profile_by_industry', customer_profile_by_revenue = 'customer_profile_by_revenue', customer_profile_by_geography = 'customer_profile_by_geography', sales_compensation_billed_revenue = 'sales_compensation_billed_revenue', us_sales_and_use_tax_records = 'us_sales_and_use_tax_records' }

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
		dataSetRequestId?: string;
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

		/** Required */
		dataSetType: SupportDataSetType;

		/** Required */
		fromDate: Date;

		/** Required */
		roleNameArn: string;

		/** Required */
		destinationS3BucketName: string;
		destinationS3Prefix?: string;

		/** Required */
		snsTopicArn: string;
		customerDefinedValues?: CustomerDefinedValues;
	}

	/** Container for the parameters to the StartSupportDataExport operation. */
	export interface StartSupportDataExportRequestFormProperties {

		/** Required */
		dataSetType: FormControl<SupportDataSetType | null | undefined>,

		/** Required */
		fromDate: FormControl<Date | null | undefined>,

		/** Required */
		roleNameArn: FormControl<string | null | undefined>,

		/** Required */
		destinationS3BucketName: FormControl<string | null | undefined>,
		destinationS3Prefix: FormControl<string | null | undefined>,

		/** Required */
		snsTopicArn: FormControl<string | null | undefined>,
	}
	export function CreateStartSupportDataExportRequestFormGroup() {
		return new FormGroup<StartSupportDataExportRequestFormProperties>({
			dataSetType: new FormControl<SupportDataSetType | null | undefined>(undefined, [Validators.required]),
			fromDate: new FormControl<Date | null | undefined>(undefined, [Validators.required]),
			roleNameArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationS3BucketName: new FormControl<string | null | undefined>(undefined, [Validators.required]),
			destinationS3Prefix: new FormControl<string | null | undefined>(undefined),
			snsTopicArn: new FormControl<string | null | undefined>(undefined, [Validators.required]),
		});

	}

	export enum SupportDataSetType { customer_support_contacts_data = 'customer_support_contacts_data', test_customer_support_contacts_data = 'test_customer_support_contacts_data' }

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

	export enum GenerateDataSetX_Amz_Target { 'MarketplaceCommerceAnalytics20150701.GenerateDataSet' = 'MarketplaceCommerceAnalytics20150701.GenerateDataSet' }

	export enum StartSupportDataExportX_Amz_Target { 'MarketplaceCommerceAnalytics20150701.StartSupportDataExport' = 'MarketplaceCommerceAnalytics20150701.StartSupportDataExport' }

}

